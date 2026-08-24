# Publishing a case study — seed guide

The end-to-end path from a markdown draft to a live post on srijansrivastava.com/journal. Written 2026-08-24 after seeding "Trust, But Re-Execute" (case_studies id 24); every pitfall below was hit for real.

## 0. Write the post

- Match the voice: see `career-ops/writing-samples/blog-voice.md` (ghostwriter profile built from all 14 published posts). Skeleton: The Context (end on "the breaking point") → The Problem (bolded comic-labeled bullets) → The Solution (named-pattern h3s, "What I considered and rejected" with flat No verdicts) → The Impact (bold-metric bullets, inline before/afters) → What It Cost → Closing (bolded rule or callback).
- Markdown subset the converter understands: `#`/`##`/`###`, `-` bullets, `1.` numbered, `---` hr, `**bold**`, `*italic*`, `` `code` ``. No code fences yet (add a codeblock node to the converter first if the post needs them).
- The leading `# Title` line is stripped — the title lives in its own column.

## 1. Convert markdown → SQL

```bash
node scripts/md2lexical.mjs BLOG_<NAME>.md BLOG_<NAME>_SQL.sql \
  --title "..." --slug "..." \
  --summary "2-3 sentence logline (renders as the card teaser)" \
  --meta-title "..." --meta-desc "..."
```

Validate both Lexical blobs parse before touching the DB:

```bash
node -e "
const s=require('fs').readFileSync('BLOG_<NAME>_SQL.sql','utf8');
[...s.matchAll(/'(\{\"root\".*?\}\})'/gs)].forEach((m,i)=>{JSON.parse(m[1].replace(/''/g,\"'\"));console.log('blob',i,'ok')});"
```

## 2. Seed (transactional — this order matters)

Connection string is `POSTGRES_URL` / `DATABASE_URI` in `.env`. No psql on this machine; use `node_modules/pg`.

Inside one `BEGIN ... COMMIT`:

1. **Resync the id sequences first.** Old manual inserts used hardcoded ids, so the serial sequences lag `MAX(id)` and you get duplicate-key errors without this:
   ```sql
   SELECT setval(pg_get_serial_sequence('case_studies','id'), GREATEST((SELECT COALESCE(MAX(id),1) FROM case_studies),1));
   SELECT setval(pg_get_serial_sequence('case_studies_rels','id'), GREATEST((SELECT COALESCE(MAX(id),1) FROM case_studies_rels),1));
   ```
2. Run the generated INSERT with `RETURNING id` (omit the id column — let the sequence assign).
3. **Tags are a required relationship** — the post 404s ungracefully in queries expecting them. Insert into `case_studies_rels ("order", parent_id, path, tags_id)` with `path='tags'`, one row per tag, order 1..n. Look up ids from `tags` first; reuse existing tags (81 exist) before inventing new ones.
4. Verify with a SELECT + a rels join before COMMIT.

Known schema facts (checked 2026-08-24): `experiences` ids — 1 SeekOut, 2 Proactive For Her, 3 Wipro (Veritas), 4 Portfolio Projects. `experiences` has `title`/`role`/`slug`, **no `company` column**. Rels table is `case_studies_rels(id, "order", parent_id, path, tags_id)`.

## 3. Cover art (illustration + meta image)

House style — mid-century surrealism (Magritte school; Dalí/de Chirico allowed), one literal metaphor for the post's thesis, staged with pre-digital objects. Rules:

- **One metaphor.** If the image needs two ideas, the thesis isn't distilled yet.
- **Analog objects only**: brass, wood, wax, paper, linen, mannequins. Never circuits, screens, code, robots, neon.
- **Palette**: muted dusty blues, ochres, sepia, soft even daylight — must sit calmly behind the site's cream title card.
- **Composition**: centered subject, key content in the upper two-thirds — the white card overlays the bottom third.
- **Text only when diegetic** (a calligraphed card, a ledger line), never labels or titles.
- Don't re-quote Magritte's greatest hits (the apple and the bowler man are spent); use the grammar, not the paintings.

### Prompt template

> A surrealist oil painting in the style of mid-century Belgian surrealism, flat matte brushwork, soft even daylight, muted palette of dusty blue, ochre and sepia. [ONE SCENE: the post's thesis staged literally with pre-digital objects — describe the single central object/action and its one quiet impossibility]. Centered composition with generous negative space, subject in the upper two thirds, plain painterly sky or interior wall behind. No text, no modern technology, no logos. Square format.

### Ready prompt — "Trust, But Re-Execute" (id 24)

> A surrealist oil painting in the style of mid-century Belgian surrealism, flat matte brushwork, soft even daylight, muted palette of dusty blue, ochre and sepia. In a quiet archive room lined with wooden card-catalog drawers, a canvas on an easel proudly displays a large painted statistic, while a white-gloved archivist's hand holds open the one small drawer that should contain its source — the drawer is empty. Centered composition with generous negative space, subject in the upper two thirds. No text except an indistinct painted figure on the canvas, no modern technology, no logos. Square format.

Upload via Payload admin → Media, then set both `illustration` and `meta.image` on the post.

## 4. Revalidate — the step raw SQL always skips

Payload's `afterChange` hook (`revalidateAll`, Next `revalidateTag`) only fires on saves through the admin UI. A SQL-seeded post is invisible on the live site until either:

- open the post in Payload admin and hit **Save** once (also the moment to attach the cover art), or
- redeploy on Vercel.

## 5. Commit

Commit the `BLOG_<NAME>.md` and `BLOG_<NAME>_SQL.sql` artifacts to this repo. The SQL is the record of what prod received.

## Pitfalls index (all hit on 2026-08-24)

- `experiences.company` doesn't exist → subquery on `title` only.
- Serial sequences desynced by old hardcoded-id inserts → setval before insert.
- Tags are required but invisible in the old sample SQL → forget them and queries filtering by tag drop the post.
- Revalidation hook bypassed by raw SQL → post seeded but site stale.
- Payload richtext is Lexical JSON with exact node shapes → never hand-write it; use the converter and parse-validate.
