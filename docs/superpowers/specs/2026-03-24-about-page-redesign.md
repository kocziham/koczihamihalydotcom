# About Page Redesign — Design Spec

**Date:** 2026-03-24
**Status:** Approved by user

## Problem

The current About page has two issues:
1. **Generic/templated layout** — Hero strip + two-column bio + vertical timeline reads like every other personal site.
2. **No visual hierarchy** — Photo, bio, expertise tags, timeline, and CTA all compete for attention with equal weight.

## Goals

- Build credibility: "I want to work with this person"
- Clear mental model: "I understand who this person is"
- Natural path to engagement (CV download, blog)

## Design: "The Asymmetric Split"

### Page Header (replaces hero strip)

- Remove hero section entirely: no background glow, no GeometricAccent, no GlowOrb
- Top padding: `calc(56px + 3rem)` (navbar clearance + breathing room, tighter than current 5rem)
- Small uppercase "About" label in accent color
- `h1` "Mihaly Kocziha" at `clamp(1.75rem, 4vw, 2.5rem)` — clearly a page title but not hero-scale
- One-liner in muted text: "Head of Consulting — Data, AI and Banking Solutions at SMP Solutions"
- Location (Budapest, Hungary) inline, small
- No download button in header (lives in sidebar)
- No decorative SVG elements
- Bottom padding: `2rem` — flows directly into main content

### Main Content: Two-Column Asymmetric Split

Grid: `grid-template-columns: 2fr 1fr` on `lg` breakpoint (~66% / 33%). Single column on mobile.

#### Left Column — Narrative Bio

No section labels ("Background", "Core expertise"). Story flows with bold lead-in phrases: each paragraph opens with a `<strong>` element in `var(--foreground)` color (stands out against the `var(--muted-foreground)` body text). These are short phrases like "From credit risk to cloud architecture" — not headings, just emphatic openers.

**Paragraph 1 — Origin and philosophy.**
Citibank start — credit risk analysis, reporting automation, Senior BI Developer in information security. Principle: data work that matters solves business problems first.

**Paragraph 2 — The Euronet years.**
Finance systems developer -> data engineering team lead -> engineering manager. Built team of 25+ from scratch. Automated payments system (30% fewer manual errors, 15% faster payment cycles). PowerBI rollout. Pioneered Azure cloud adoption (10% operational cost reduction).

**Paragraph 3 — Founding the SMP data practice.**
Established Data Management Division from zero. Cloud migrations for banks, enterprise data warehouses, CRM implementations. 35% faster delivery, 25% infrastructure cost reduction, 30% boost in data-driven decision-making. Established AI engineering team.

**Paragraph 4 — The scope today.**
Head of Consulting across data, AI, and banking solutions. Multiple specialist teams: data strategy consultants, banking core system migration, unified front-end solutions, AI applications. Industries: banking, healthcare, retail, sports, agriculture, manufacturing. Liaison between technical teams and C-level stakeholders. Business development and thought leadership.

**Paragraph 5 — Technical foundation and the blog.**
Azure ecosystem — Databricks, Data Factory, Synapse, Fabric. Certifications: Azure Data Engineer, Power BI Data Analyst, Databricks Lakehouse Fundamentals. What the blog covers: field perspectives on data strategy, AI implementation, enterprise consulting realities.

No expertise tags section — skills demonstrated through narrative.

#### Right Column — Sticky Sidebar

CSS `position: sticky; top: calc(56px + 2rem); align-self: start` (clearing navbar + padding). The sticky element is the sidebar's inner wrapper. The sidebar column itself participates in the grid normally — the sticky behavior is bounded by the grid row, so it naturally stops when the narrative content ends (preventing footer overlap).

Three stacked elements:
1. **Photo** — rounded square (`border-radius: var(--radius-xl)`), ~180px wide, `object-cover object-top`. Much smaller than current 3:4 card.
2. **"At a glance" card** — updated data:
   - Current role: Head of Consulting, SMP Solutions
   - Scope: Data, AI & Banking Solutions
   - Industry: Multi-sector consulting
   - Experience: 17+ years
   - Location: Budapest, Hungary
   - Stack: Azure, Databricks, Fabric, AI/ML
3. **CV download button** — `btn-primary`, full-width within sidebar.

#### Mobile Collapse (below `lg` breakpoint)

On mobile, the grid becomes single-column. DOM order places the sidebar content first (photo + card), then the narrative. The CV download button is rendered twice: once inside the sidebar (visible on desktop via `hidden lg:block`), once after the narrative (visible on mobile via `lg:hidden`). This avoids CSS order hacks and keeps the DOM straightforward.

- Photo + "At a glance" card at top
- Narrative bio follows
- CV download button after bio

### Metadata

Update the `metadata` export description to match the new page content:
```
"Head of Consulting at SMP Solutions — 17+ years in data platforms, AI strategy, and enterprise consulting across banking, healthcare, and manufacturing."
```

Remove unused imports: `GeometricAccent`, `GlowOrb`, `Calendar`. Keep: `Image`, `Link`, `Download`, `MapPin`.

### Removed Elements

- Hero strip (GlowOrb, GeometricAccent, hero title/tagline)
- "17 years of turning data into decisions" tagline
- Expertise tags section
- Career timeline section entirely
- Bottom CTA strip ("Want the full picture?")
- All `animate-fade-up` entrance animations on this page

### Kept Elements

- Profile photo (smaller)
- "At a glance" card (updated content)
- CV download button (moved to sidebar)
- MapPin location indicator

### Dependencies

- No new components needed
- GeometricAccent and GlowOrb imports removed from this page (components remain for use elsewhere)
- No new npm packages
- Uses existing design tokens, button styles, and CSS variables

### Files Changed

- `src/app/(site)/about/page.tsx` — full rewrite of the page component
