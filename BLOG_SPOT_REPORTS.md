# Trust, But Re-Execute

# The Context

Spot is SeekOut's agentic AI recruiter. One of the things it does is write analytics reports: a hiring manager asks "how is the senior pipeline actually looking," a multi-turn agent probes forty-odd hiring tables, decides what story the data tells, and lays the answer out as an editorial brief — KPI strips, funnels, quote cards, prose that reads like an analyst wrote it.

The hard part isn't making a model write. Models love to write. The hard part is that an analytics report makes claims, and claims in a hiring report get acted on. Someone reads "39 candidates presented" and walks into a Monday meeting holding that number.

I'd spent weeks making these reports beautiful. Rebuilt the component library to one visual language. Made the charts stop lying — gauges that show the real value instead of capping it, ranked lists that keep their sort. Blind judges compared the rebuilt output head-to-head against the old build and preferred it 11 to 0. Presentation scores hit an all-time high.

The breaking point came when I ran fact verification against that golden battery for the first time. Sixteen defects a reader would act on and three invented figures, sitting under the best-looking reports we'd ever produced. The flagship example was a cover tile announcing a **26.7% candidate reply rate** that no query anywhere in the system produced. The model wanted a strong close for its recommendation section, so it manufactured one.

We had been optimizing how reports looked, with a scoreboard that could not see whether they were true.

---

# The Problem

Call it scoreboard blindness. Every evaluation we had — aesthetic judges, layout scores, edit-success rates — measured polish, and polish and truth turn out to be fully independent variables. Underneath the pretty pages, four failure modes were compounding:

- **Confident invention**: prose stating figures no query produced. The 26.7% tile is the poster child, but "24 of 36 candidates contacted" with zero backing SQL is the same disease in a quieter outfit.
- **Wrong-column funnels**: a pipeline funnel counting stages off `campaign_candidates.status` — a column the schema explicitly forbids for stage counting — producing "5 presented" directly beneath a cover tile saying 39 were presented. Both numbers rendered beautifully.
- **Cross-panel contradiction**: the same metric appearing in two panels with two different values, because each panel's query made its own choices and nothing ever compared them.
- **The eyeball ceiling**: a single report carries a dozen panels of SQL. Nobody reviews ninety panels of SQL by hand, and the one person who tries stops being able to see anything else.

None of this is a prompt problem you can nag your way out of. A prompt is a suggestion. The model had plenty of suggestions already.

---

# The Solution

The whole rebuild rests on one split: **taste lives in the prompts, the meaning of each column lives with the data, and correctness lives in code.** Column semantics — what `presented` actually counts, which tables may define a funnel stage — moved out of prose instructions and into `__dashboard_meta__` schema metadata, the single counting authority for author and judge alike. No sweeping data rules in the prompts. No aesthetic opinions in the lints.

### Explore-First Authoring: No Data Pack, No Excuses

The old pipeline handed the author a pre-built data pack and a ~7,000-token schema registry dumped into its prompt. It trusted the handoff, and the handoff was always slightly wrong. The rebuilt author gets nothing. It discovers the schema itself through three tools — `list_tables`, `preview_table`, `run_query` — writes every query it intends to show, and emits the whole report in one pass.

One detail here turned out to be load-bearing: the turn budget. The SDK default of 10 tool turns was silently killing 2 of 14 generations before they could finish exploring. The fix is a config field, not a heroic one:

```python
# common/config.py (trimmed)
views_max_turns: int = Field(default=25, ge=5, le=100)
# A turn ceiling is an infrastructure circuit breaker, not pacing.
# Size it for the biggest honest workload, then treat hitting it as a bug.
```

The observation that generalizes: agents don't fail loudly at their turn ceiling — they fail *politely*, emitting whatever half-finished thing they have. If you didn't size the budget deliberately, your ceiling is choosing your quality for you.

### Server Grounding: The Page Shows What the Database Returned

Every panel's SQL is re-executed server-side, read-only, through a static-analysis stack that parses each query once and walks the AST with rule objects: table allowlists, column existence, tenant scoping, double-count detection. The interesting rule is the one that killed the wrong-column funnels — it follows aliases, so renaming the forbidden column inside a CTE doesn't launder it:

```python
# domains/dashboards/sql_lint.py (trimmed)
class StatusFunnelRule(Rule):
    """Funnel stages may not be counted off campaign_candidates.status —
    the schema defines exclusive per-stage formulas. Alias-aware: a stage
    cohort built off a renamed CTE column is still caught."""
    def visit_column(self, node: exp.Column, ctx: LintContext) -> None:
        origin = ctx.resolve_origin(node)   # walks CTE aliases back to the base column
        if origin == ("campaign_candidates", "status") and ctx.in_stage_aggregation(node):
            ctx.violation(node, "funnel stage counted off forbidden column")
```

Taint-tracking through `WITH` clauses sounds exotic; with a real SQL parser it's an afternoon, and it converts a prompt guideline the model kept "creatively interpreting" into a wall it physically cannot pass. A failing panel gets one mechanical repair attempt from the machine-readable violation, then it's dropped.

### A Judge That Cannot Type

The last pass is an LLM judge with one constraint that does all the work: **it has no tool that accepts a number it typed itself.** Every value it can emit flows from a pure function reading freshly queried rows.

```python
# the judge's entire action space (trimmed)
JUDGE_TOOLS = [
    check_all_numbers,         # every prose figure vs fresh rows — unit-aware
    lint_all_sql,              # every panel back through the full lint set
    cross_panel_conflicts,     # same-label metrics that disagree across panels
    run_query,
    repair_sql,                # repaired SQL is re-executed and re-linted
    fix_or_drop_prose_number,  # rebind a figure to its cell, or delete the sentence cleanly
    drop_panel,
]
```

This is capability design instead of instruction design. You can tell a model "never invent figures" and it will agree enthusiastically while doing it anyway; remove the affordance and the failure mode stops existing. The bulk sweeps matter too — `check_all_numbers` is unit-aware, so a fabricated "26.7%" can no longer confirm itself against some unrelated bare count that happens to contain a 26.

### Fail Closed: Silence Is Failure

This rule was paid for, not designed. An early version of the fact-checker was hitting `MaxTurnsExceeded` on large reports, the exception was swallowed, and the log sanitizer stripped `exc_info` — so 6 of 14 reports were shipping unjudged while the dashboard said everything was fine:

```python
# before: a dead judge was indistinguishable from a passing one
except MaxTurnsExceeded:
    logger.warning("judge did not finish")   # exc_info stripped upstream
    verdict = None                           # fail open — report ships unjudged

# after: silence is failure
if verdict is None or not verdict.completed:
    raise GenerationFailed("unjudged reports do not ship")
```

We found it because a score moved the wrong way after a fix — the measurement loop caught its own instrument failing, which is the only reason to trust the loop at all. Fail-open evaluation is worse than no evaluation: it produces confidence instead of information. The companion rule is the drop floor — if more than a third of a report's panels are dropped, no artifact ships. A report that's mostly holes is not a report.

### Streaming the Skeleton: Perceived Latency Is the Latency

Correct and slow is still a bad product. A grounded, judged generation runs about 220 seconds end to end, and no amount of optimism makes a hiring manager enjoy a 3-minute spinner. So the pipeline streams: a mid-loop checkpoint emits the plan the moment the author commits to one, then panels land as they ground.

```ts
// the stream reducer (trimmed) — SSE events over the chat channel
case "report_plan":   draft.outline = event.plan; break;             // first paint
case "report_panel":  draft.panels[event.key] = event.panel; break;  // last-wins by key
case "report_final":  return event.report;                           // grounded + judged
// idle heartbeats re-emit the freshest phase every 15s,
// and replayed events flow through this same reducer — resume === live
```

Two decisions earn their keep here. Last-wins keyed events mean a reconnecting client can replay the persisted event log through the exact reducer the live stream uses — reload-resume isn't a second code path, it's the same one. And streaming the *outline* first cut time-to-first-view from ~125 seconds to ~47 without changing what ships: the rigor is unchanged, the spinner just stopped hogging the stage.

### What I considered and rejected

- **Better prompts.** About 250 lines of hardcoded data doctrine — canonical funnel definitions, per-rate SQL formulas — already lived in the prompts, and the model was penalized for obeying them. All of it came out. Prompts keep the taste; walls keep the rules.
- **Keeping the pre-generation data pack.** No. An author handed a digest trusts the digest. Making it look at the real tables is slower and correct, in that order.
- **Letting the judge free-write corrections.** No. A judge that can type a number is just a second author with better branding.
- **Wholesale regeneration on every edit.** No. In a study of 139 isolated edits, the rebuild-everything path caused 7 of the 8 damaging incidents in the corpus. Edits became narrow typed operations — a rename runs no queries, a filter change re-runs one panel, table shaping goes through deterministic `sqlglot` mutations like `set_order_by` — and the regression rate fell to 1 in 45.

---

# The Impact

The scoreboard behind these numbers: a fixed 15-prompt battery on seeded data, judges pinned and blind (they never see what changed, so a score delta is a code delta), every panel's SQL re-executed rather than eyeballed, and one strict rule — a single wrong number a reader would act on caps that report at 1 out of 5. It's a bench, not a benchmark; the honest claim is direction and consistency, not decimals.

- **Invented figures went from 3 per audit run to 0.** The unit-aware sweep is why: a fabricated percentage no longer has anything it can accidentally match.
- **Reader-impacting defects dropped 94%** — 18 to 1 — across five audit runs in about thirty hours. The last run checked 56 panels and found none wrong.
- **The wrong-column funnels went from a fact score of 1 to a clean 5** on both report types that had them, once column meaning moved out of prompts and into schema metadata. Same model, same asks; the only thing that changed is where the truth lives.
- **Time-to-first-view fell ~62%** (about 125s to 47s) from streaming the outline — a perceived-latency win that cost nothing in rigor.
- What I'm especially proud of is the ratchet: every real defect the battery finds becomes a permanent regression test. The scoreboard only gets meaner, and it has already caught one of its own judges dying.

---

# What It Cost

The honest column. Full generation still runs about 220 seconds — exploration, grounding, and a three-sweep judge pass all cost real time, and streaming changes how the wait feels, not how long the work takes. A fail-closed pipeline sometimes ships nothing: an ungroundable ask produces no report, which is correct and still a conversation you have to have with users. And the first re-architecture attempt scored *worse* than the baseline it replaced — that was the silent judge death, and it was a humbling week. The measurement loop exists precisely for the weeks like that one.

---

# Closing

The rule is simple and load-bearing: **no model is ever the source of truth — every number a report shows is one the database returned.** The model's job is the story. The database's job is the numbers.

Somewhere in the audit archive there's still that handsome July report with its invented 26.7%. I keep it around. It's the best argument the pipeline ever made for itself.
