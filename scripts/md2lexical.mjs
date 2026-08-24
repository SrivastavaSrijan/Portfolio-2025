#!/usr/bin/env node
// md2lexical.mjs — convert a constrained markdown blog into a Payload CMS (Lexical) SQL INSERT.
// Supports: # h1, ## h2, ### h3, - bullets, 1. numbered, --- hr, **bold**, *italic*, `code`, paragraphs.
// Usage: node md2lexical.mjs <post.md> <out.sql> --title "..." --slug "..." --summary "..." --meta-title "..." --meta-desc "..."

import { readFileSync, writeFileSync } from 'node:fs';

const args = process.argv.slice(2);
const [mdPath, outPath] = args;
const opt = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : '';
};

const text = (t, format = 0) => ({ mode: 'normal', text: t, type: 'text', style: '', detail: 0, format, version: 1 });

// inline parser: **bold**(1), *italic*(2), `code`(16)
function inline(s) {
  const nodes = [];
  const re = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(`([^`]+)`)/g;
  let last = 0, m;
  while ((m = re.exec(s))) {
    if (m.index > last) nodes.push(text(s.slice(last, m.index)));
    if (m[2] !== undefined) nodes.push(text(m[2], 1));
    else if (m[4] !== undefined) nodes.push(text(m[4], 2));
    else if (m[6] !== undefined) nodes.push(text(m[6], 16));
    last = re.lastIndex;
  }
  if (last < s.length) nodes.push(text(s.slice(last)));
  return nodes.length ? nodes : [text('')];
}

const para = (children) => ({ type: 'paragraph', format: '', indent: 0, version: 1, children, direction: 'ltr', textStyle: '', textFormat: 0 });
const heading = (tag, s) => ({ tag, type: 'heading', format: '', indent: 0, version: 1, children: inline(s), direction: 'ltr' });
const hr = () => ({ type: 'horizontalrule', version: 1 });
const listitem = (s, value) => ({ type: 'listitem', value, format: '', indent: 0, version: 1, children: inline(s), direction: 'ltr' });
// ``` fenced code renders as a quote node holding one text child with \n newlines —
// the shape used by the published posts (verified against case_studies id 21).
const codequote = (lines) => ({ type: 'quote', format: '', indent: 0, version: 1, children: [text(lines.join('\n'))], direction: 'ltr' });
const list = (tag, items) => ({ tag, type: 'list', start: 1, format: '', indent: 0, version: 1, children: items.map((s, i) => listitem(s, i + 1)), direction: 'ltr', listType: tag === 'ol' ? 'number' : 'bullet' });

function parse(md) {
  const lines = md.split('\n');
  const children = [];
  let buf = [], listBuf = null, codeBuf = null; // codeBuf: array of raw lines inside a fence
  const flushPara = () => { if (buf.length) { children.push(para(inline(buf.join(' ')))); buf = []; } };
  const flushList = () => { if (listBuf) { children.push(list(listBuf.tag, listBuf.items)); listBuf = null; } };
  for (const raw of lines) {
    const line = raw.trimEnd();
    const t = line.trim();
    if (codeBuf !== null) {
      if (t.startsWith('```')) { children.push(codequote(codeBuf)); codeBuf = null; }
      else codeBuf.push(line);
      continue;
    }
    if (t.startsWith('```')) { flushPara(); flushList(); codeBuf = []; continue; }
    if (!t) { flushPara(); flushList(); continue; }
    let m;
    if ((m = t.match(/^(#{1,3})\s+(.*)/))) { flushPara(); flushList(); children.push(heading(`h${m[1].length}`, m[2])); }
    else if (t === '---') { flushPara(); flushList(); children.push(hr()); }
    else if ((m = t.match(/^[-*]\s+(.*)/))) { flushPara(); if (!listBuf || listBuf.tag !== 'ul') { flushList(); listBuf = { tag: 'ul', items: [] }; } listBuf.items.push(m[1]); }
    else if ((m = t.match(/^\d+\.\s+(.*)/))) { flushPara(); if (!listBuf || listBuf.tag !== 'ol') { flushList(); listBuf = { tag: 'ol', items: [] }; } listBuf.items.push(m[1]); }
    else { flushList(); buf.push(t); }
  }
  flushPara(); flushList();
  return { root: { type: 'root', format: '', indent: 0, version: 1, children, direction: 'ltr' } };
}

const sq = (s) => s.replace(/'/g, "''");
const md = readFileSync(mdPath, 'utf8');
// strip leading H1 (title lives in its own column)
const body = md.replace(/^#\s+.*\n/, '');
const contentJson = JSON.stringify(parse(body));
const summaryJson = JSON.stringify({ root: { type: 'root', format: '', indent: 0, version: 1, children: [para(inline(opt('summary')))], direction: 'ltr' } });
const now = new Date().toISOString();

const sql = `-- SQL INSERT for case_studies: ${opt('title')}
-- Generated from ${mdPath.split('/').pop()} by md2lexical.mjs
-- NOTE: id omitted (sequence assigns); experience resolved by subquery; verify tag names exist in prod.

INSERT INTO "case_studies" (
    "title",
    "experience_id",
    "summary",
    "content",
    "slug",
    "published_at",
    "featured",
    "updated_at",
    "created_at",
    "meta_title",
    "meta_description"
) VALUES (
    '${sq(opt('title'))}',
    (SELECT id FROM "experiences" WHERE "title" ILIKE '%seekout%' LIMIT 1),
    '${sq(summaryJson)}',
    '${sq(contentJson)}',
    '${sq(opt('slug'))}',
    '${now}',
    false,
    '${now}',
    '${now}',
    '${sq(opt('meta-title'))}',
    '${sq(opt('meta-desc'))}'
);

-- Tags (required relationship). Verify rels table/column names against prod schema before running.
-- INSERT INTO "case_studies_rels" ("order", "parent_id", "path", "tags_id")
-- SELECT 1, cs.id, 'tags', t.id FROM "case_studies" cs, "tags" t
--  WHERE cs.slug = '${sq(opt('slug'))}' AND t.name IN ('AI', 'LLM', 'React');
`;
writeFileSync(outPath, sql);
console.log(`wrote ${outPath} (${sql.length} bytes, ${contentJson.length} content chars)`);
