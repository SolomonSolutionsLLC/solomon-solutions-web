# CoWork Prompt — Live Marketing Command Center
**Paste the block below into a CoWork session** (with the ClickUp connector enabled). It builds a live, interactive artifact that reads the Marketing list from ClickUp and renders a command center: this-week checklist, sprint board, per-product view, and the metrics scorecard. Re-running it (or clicking Refresh in the artifact) re-pulls the latest task state.

## Connection facts (so CoWork can find the data)
- **ClickUp workspace (team) ID:** `9017657657`
- **Space:** Dev Projects (`90173099272`)
- **List:** "Marketing — Solomon Solutions" · **list_id `901714509312`** · https://app.clickup.com/9017657657/v/l/li/901714509312
- **Tag scheme:** product tags (`simply-pray`, `consulting`, `hopestack`, `heartward`, `wisdom-walk`, `engine`) · sprint tags (`s1`–`s6`) · `this-week`
- **Sprint due dates:** S1 → 2026-06-27 · S2 → 2026-07-11 · S3 → 2026-07-25 · S4 → 2026-08-08 · S5 → 2026-08-22 · S6 → 2026-09-05
- **Plan source of truth:** `docs/marketing/09-execution-plan-claude/` in the Solomon Solutions Web repo (master plan + per-product + metrics-dashboard).

---

## THE PROMPT (copy everything below)

```
You are my marketing operations builder. Build me a LIVE, single-file interactive HTML
artifact — a "Marketing Command Center" — for my company Solomon Solutions, and keep it
in sync with my ClickUp.

DATA SOURCE (ClickUp connector):
- Workspace/team ID: 9017657657
- List: "Marketing — Solomon Solutions", list_id 901714509312
  (URL: https://app.clickup.com/9017657657/v/l/li/901714509312)
- Pull EVERY task in that list with: name, status, priority, due date, tags, and the
  markdown description. Tasks are tagged by product (simply-pray, consulting, hopestack,
  heartward, wisdom-walk, engine), by sprint (s1..s6), and some with "this-week".
- The full plan these tasks come from lives in the repo at
  docs/marketing/09-execution-plan-claude/ — read 00-master-plan.md and
  metrics-dashboard.md for context, sprint themes, and metric targets.

WHAT TO BUILD (one artifact, four views, tab-switchable):

1) THIS WEEK — a focused checklist of the tasks tagged "this-week" (Sprint 1, Week 1),
   each as a checkable row showing name, priority, est. time (parse from the description),
   the AI agent assigned, and a link to the ClickUp task. Big and front-and-center; this
   is the screen I look at Monday morning. Show "X of 7 done".

2) SPRINT BOARD — the six 2-week sprints (S1..S6) as columns or a vertical timeline, each
   labeled with its theme and due date and a progress bar (% complete by task status).
   Themes: S1 Stop the bleeding + build the engine · S2 Turn on warm revenue ·
   S3 Content flywheel · S4 HopeStack design partners · S5 Widen the library + Heartward ·
   S6 Validate + decide on paid. Each task card shows name, product (as a colored chip),
   priority, due date, and status; clicking opens the ClickUp task. Surface the ONE metric
   per sprint from 00-master-plan.md as the column's headline goal.

3) BY PRODUCT — a filterable view grouped by product chip (Simply Pray, Consulting,
   HopeStack, Heartward, Wisdom Walk, Engine). Let me click a product to see only its
   tasks across all sprints.

4) SCORECARD — the metrics dashboard from docs/.../metrics-dashboard.md as a clean table:
   metric, 30-day target, 90-day target, and an editable "current" cell I can type into
   (persist my entries in localStorage). Include: email subscribers (100/500), Simply Pray
   waitlist (100/400), strategy calls booked (2-3/8-10), church-plan conversations (5/15+),
   HopeStack pilot conversations (2/5-10), Heartward trial starts (first/compounding),
   Wisdom Walk articles live (4/12), email open rate (>40%/>45%), lead-magnet conversion
   (>20%/>25%). Color each "current" cell green/amber/red vs target. Add a small note:
   "ignore vanity metrics (followers, impressions, likes)."

LIVE BEHAVIOR:
- On load and on a visible "Refresh from ClickUp" button, re-query the ClickUp list via the
  connector and re-render. Show a "last synced" timestamp.
- Compute all progress bars and counts from live task statuses (treat ClickUp "complete"/
  "closed" statuses as done).
- Don't hardcode task data — read it from ClickUp so the artifact stays true as I check
  things off in ClickUp.

DESIGN (on-brand — Solomon Solutions family system):
- Fonts: DM Sans throughout. Type scale H1 44/700, H2 32/700, body 16/400.
- Palette: navy #16213e (primary/structure), gold #c9a84c (accent/CTAs), cream #faf7f0
  (background), charcoal #1a1a2e (ink). Product chips use each product's brand color:
  Simply Pray #2f5c51, HopeStack #0f1c33 w/ amber #eab44f, Heartward #2b2d6e,
  Consulting/Solomon navy #16213e + gold, Wisdom Walk ink+gold, Engine slate #3a3a4e.
- 8px spacing grid, radii 12/20/32, soft low-opacity shadows, 1120px max width. Calm,
  editorial, "built by a pastor, not a vendor" — sober and trustworthy, not startup-flashy.
- Mobile-first and responsive; this should look right on my phone.

CONSTRAINTS TO RESPECT IN ANY COPY YOU GENERATE IN THE UI:
- Organic-first; Simply Pray is a WAITLIST (pre-launch), never "download."
- HopeStack: only ever say "HIPAA-aligned, pursuing SOC 2" — never "certified/compliant."
- No manipulation, guilt, fake urgency, or fake social proof anywhere.

Deliver the finished artifact, confirm it pulled N tasks from ClickUp, and tell me which
sprint and product have the most open work right now.
```

---

## Tips
- If CoWork can't reach ClickUp, have it confirm the connector is authorized for workspace `9017657657`, then retry.
- To extend later: ask CoWork to add a **weekly operating-rhythm panel** (Mon/Tue/Wed/Thu/Fri from master plan §4) and a **paid-gate status panel** (master plan §6 — green/red per product).
- Keep ClickUp as the source of truth: check tasks off in ClickUp, hit Refresh in the artifact. Edit the *plan* in the repo (`docs/marketing/09-execution-plan-claude/`), then mirror changes into ClickUp.
