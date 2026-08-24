# Trust, But Re-Execute

# The Context

Spot is SeekOut's agentic AI recruiter. One of the things it does is write analytics reports: a hiring manager asks "how is the senior pipeline actually looking," a multi-turn agent probes forty-odd hiring tables, decides what story the data tells, and lays the answer out as an editorial brief — KPI strips, funnels, quote cards, prose that reads like an analyst wrote it.

The hard part isn't making a model write. Models love to write. The hard part is that an analytics report makes claims, and claims in a hiring report get acted on. Someone reads "39 candidates presented" and walks into a Monday meeting holding that number.

I'd spent weeks making these reports beautiful. Rebuilt the component library to one visual language. Made the charts stop lying — gauges that show the real value instead of capping it, ranked lists that keep their sort. Blind judges compared the rebuilt output head-to-head against the old build and preferred it 11 to 0. Presentation scores hit an all-time high.

The breaking point came when I ran fact verification against that golden battery for the first time. The truth score came back 3.14 out of 5: sixteen defects a reader would act on and three invented figures, sitting under the best-looking reports we'd ever produced. The flagship example was a cover tile announcing a **26.7% candidate reply rate** that no query anywhere in the system produced. The model wanted a strong close for its recommendation section, so it manufactured one.

We had been optimizing how reports looked, with a scoreboard that could not see whether they were true.

---

# The Problem

Call it scoreboard blindness. Every evaluation we had — aesthetic judges, layout scores, edit-success rates — measured polish, and polish and truth turn out to be fully independent variables. Underneath the pretty pages, four distinct failure modes were compounding:

- **Confident invention**: prose stating figures no query produced. The 26.7% tile is the poster child, but "24 of 36 candidates contacted" with zero backing SQL is the same disease in a quieter outfit.
- **Wrong-column funnels**: a pipeline funnel computed off a status column the schema explicitly forbids for stage counting — producing "5 presented" directly beneath a cover tile saying 39 were presented. Both numbers rendered beautifully.
- **Cross-panel contradiction**: the same metric appearing in two panels with two different values, because each panel's query made its own choices and nothing ever compared them.
- **The eyeball ceiling**: a single report can carry a dozen panels of SQL. Nobody reviews ninety panels of SQL by hand, and the one person who tries stops being able to see anything else.

None of this is a prompt problem you can nag your way out of. A prompt is a suggestion. The model had plenty of suggestions already.

---

# The Solution

The whole rebuild rests on one split: **taste lives in the prompts, the meaning of each column lives with the data, and correctness lives in code.** No sweeping data rules in the prompts. No aesthetic opinions in the lints. One authoring model, followed by checking stages that try to break what it wrote — using code, not taste.

### Explore-First Authoring: No Data Pack, No Excuses

The old pipeline handed the author a pre-built data pack and a ~7,000-token schema registry dumped into its prompt. It trusted the handoff, and the handoff was always slightly wrong. The rebuilt author gets nothing. It discovers the schema itself through three tools — list the tables, preview one, run a query — writes every query it intends to show, and emits the whole report in one pass. The meaning of each column (what it counts, what it must never be used to count) moved out of the prompt and into schema metadata the tools serve, which is the single counting authority for author and judge alike.

### Server Grounding: The Page Shows What the Database Returned

Every panel's SQL is re-executed server-side, read-only, through a static-analysis stack that walks the query's AST: table allowlists, column existence, tenant scoping, double-count detection. A panel that fails gets one mechanical repair attempt, then it's dropped. The numbers on the page are, structurally, the numbers the database returned — not the numbers the model remembers seeing.

### A Judge That Cannot Type

The last pass is an LLM judge with one load-bearing constraint: it cannot write a number or a sentence of its own. Every value it touches comes from a pure function reading real queried rows. It sweeps every prose figure against the actual result sets — unit-aware, so a fabricated "26.7%" can no longer confirm itself against some unrelated count — re-lints every panel, and hunts cross-panel contradictions. When it finds a bad figure, its tools rebind the figure to the intended cell or delete the sentence cleanly. The judge decides *where* the problem is. The database decides *what's true*.

### Fail Closed: Silence Is Failure

If the judge pass doesn't complete, the report doesn't ship. If more than a third of a report's panels get dropped, no artifact is produced at all — a report that's mostly holes is not a report. This rule earned its keep in the worst way: an early version of the fact-checker was dying silently on large reports and passing them unjudged, and the scores moved in a direction that made no sense until we found the swallowed exception. Now silence counts as failure. An empty answer beats a confident wrong one.

### What I considered and rejected

- **Better prompts.** About 250 lines of hardcoded data doctrine — canonical funnel definitions, per-rate SQL formulas — already lived in the prompts, and the model was penalized for obeying them. All of it came out. Prompts keep the taste; walls keep the rules.
- **Keeping the pre-generation data pack.** No. An author handed a digest trusts the digest. Making it look at the real tables is slower and correct, in that order.
- **Letting the judge free-write corrections.** No. A judge that can type a number is just a second author with better branding.
- **Wholesale regeneration on every edit.** No. When we studied 139 isolated edits, the rebuild-everything path caused 7 of the 8 damaging incidents in the corpus. Edits became narrow typed operations — rename runs no queries, a filter change re-runs one panel — and the regression rate fell to 1 in 45.

---

# The Impact

Measured by a fixed 15-prompt battery, blind judges pinned across runs, and deterministic SQL re-execution of every panel — the same scoreboard that caught the problem, so the deltas mean something. One rule with teeth: a single wrong number a reader would act on caps that report at 1 out of 5, no matter how good everything else is.

- **Invented figures: 3 per audit run → 0.** The final battery checked 56 panels and found zero wrong.
- **Reader-impacting defects down 94%** — 18 → 1 — across five audit runs in roughly thirty hours.
- **Two funnel report types went from 1/5 to a perfect 5/5** once column meaning moved out of prompts and into schema metadata. Same model, same asks; the only thing that changed was where the truth lived.
- **Perceived latency down 62%**: generation streams its outline mid-loop, so the first visible structure lands at ~47 seconds instead of ~125. The rigor underneath is unchanged; the spinner just stopped hogging the stage.
- What I'm especially proud of is the ratchet: every real defect the battery finds becomes a permanent regression test. The scoreboard only gets meaner.

---

# What It Cost

The honest column. A full generation now runs about 220 seconds — schema exploration, server grounding, and a three-sweep judge pass all cost real time, and no amount of streaming makes that free. A fail-closed pipeline sometimes ships nothing: an ungroundable ask produces no report, which is the correct behavior and still a conversation you have to have with users. And the first re-architecture attempt scored *worse* than the baseline it replaced — the judge was failing open and nobody knew — which was a humbling week, and also exactly the kind of failure the measurement loop exists to catch.

---

# Closing

The rule is simple and load-bearing: **no model is ever the source of truth — every number a report shows is one the database returned.** The model's job is the story. The database's job is the numbers.

Somewhere in the audit archive there's still that handsome July report with its invented 26.7%. I keep it around. It's the best argument the pipeline ever made for itself.
