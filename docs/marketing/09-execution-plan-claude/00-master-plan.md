# Stage 9 — Master Execution Plan (Claude track)
**The single do-this-now plan.** For: Joshua Kirk, Solomon Solutions LLC · 2026-06-13
**Constraints (confirmed):** ~$1,000/mo · 2–5 hrs/week · organic-first (paid only after a message proves) · AI drafts, Joshua approves · **no email list, no social, no audience yet** · priority product = **Simply Pray (pre-launch waitlist, not download)**.

> This is the execution layer under the [unified plan](../06-unified-marketing-plan-claude.md). It turns the [audit](../01-intake-and-audit-claude.md), [research](../02-research-claude/00-research-index-claude.md), [video tutorials](../03-youtube-tutorials-claude/00-index-claude.md), [AI team](../04-ai-marketing-team-claude.md), [funnels](../05-funnels-claude/), and [confirmed decisions](../CONFIRMED-DECISIONS-claude.md) into a 90-day, sprint-by-sprint task list. Companion files: per-product plans ([simply-pray](simply-pray.md) · [solomon-consulting](solomon-consulting.md) · [hopestack](hopestack.md) · [heartward](heartward.md) · [wisdom-walk](wisdom-walk.md)), the [metrics dashboard](metrics-dashboard.md), and [this-week.md](this-week.md).

---

## 0. The one-paragraph strategy

Build **one capture-and-nurture engine** (The Wisdom Walk + a MailerLite list) once, feed it **one pillar article a week** that AI repurposes into everything else, and point it at **one priority product per sprint**. Run two things in parallel from day one: (a) the **slow compounding engine** (list + SEO/AI-search), and (b) **fast warm cash** — pastor-to-pastor selling of the Simply Pray **Church plan ($49/mo)** and **consulting** strategy calls, neither of which needs an audience, ad spend, or the app to be live. Prove every message organically before spending a dollar.

## 1. The sequencing logic (why this order)

1. **Capture before traffic.** With a 0/5 capture score ([audit §5](../01-intake-and-audit-claude.md)), every visitor is currently lost. Fix that first or all later work leaks.
2. **Warm/direct before paid.** Joshua is a pastor; his fastest revenue is *talking to other pastors* — "network-first acquisition" (from the [Feras consulting tutorial](../03-youtube-tutorials-claude/ultimate-guide-starting-consulting-business-2026.md)). No audience required.
3. **One engine feeds all five products.** The Wisdom Walk is the hub; each pillar routes to a product. This is the only shape that fits 2–5 hrs/week ([repurposing research](../02-research-claude/content-repurposing.md); [HubSpot Claude+Canva tutorial](../03-youtube-tutorials-claude/32-social-posts-10-min-claude-canva.md)).
4. **Lead with cash speed, build the asset underneath.** Simply Pray Church + consulting pay now; the list + SEO compound for the launch and for HopeStack/Heartward later.
5. **Paid is dormant until a message wins twice** — faith content gets throttled on Meta/Google ([research golden threads](../02-research-claude/00-research-index-claude.md)), so organic-first is also risk-first.

## 2. The 90-day arc at a glance

| Sprint | Weeks | Theme | Primary focus | The ONE metric |
|---|---|---|---|---|
| **S1** | 1–2 | Stop the bleeding + build the engine | Plumbing (all sites) + Simply Pray | **Email capture live + first 25 subscribers** |
| **S2** | 3–4 | Turn on warm revenue | Simply Pray Church plan + Consulting | **Warm outreaches sent (target 25)** |
| **S3** | 5–6 | The content flywheel | Wisdom Walk engine + Consulting calls | **Strategy calls booked (target 2–3)** |
| **S4** | 7–8 | B2B pipeline | HopeStack design partners | **Teardown/pilot conversations (target 2)** |
| **S5** | 9–10 | Widen the library | Wisdom Walk magnets + Heartward on | **Subscribers (target 250) + first Heartward trials** |
| **S6** | 11–12 | Validate + decide on paid | Proof engine + launch prep + paid go/no-go | **Committed Church accounts + a proven message** |

**Always-on under every sprint:** 1 pillar article/week → repurpose → compliance-gate → publish → 1 newsletter → 5–10 warm outreach messages. That weekly loop *is* the business; the sprint themes just change where the pillar points and which magnet/landing gets built.

## 3. The AI agents that do the work

Run the **weekly core loop**, not all 12 ([AI team §"what to actually run"](../04-ai-marketing-team-claude.md)). Four of the twelve already exist as real Claude Code subagents — use those by name; the rest are copy-paste prompts from [file 04](../04-ai-marketing-team-claude.md).

| # | Agent | Real subagent? | When it runs |
|---|---|---|---|
| 9 | Content Repurposing | **`marketing-repurposer`** | Weekly — turns the pillar into a week of pieces (highest leverage) |
| 6 | Copywriter | **`marketing-copywriter`** | Weekly — polishes in Joshua's voice |
| 7 | Social Strategist | **`marketing-social-strategist`** | Weekly — builds the calendar |
| 11 | Brand/Compliance ⛔ GATE | **`marketing-compliance-reviewer`** | **Every asset, last, before publish** |
| 1 | Strategist | prompt | Monthly — sets next sprint's focus |
| 4 | SEO/AEO/GEO | prompt | Monthly — next article briefs + FAQ schema |
| 10 | Analytics | prompt | Monthly — reads the numbers |
| 12 | Marketing Ops | prompt | Weekly 5-min — keeps the calendar honest |
| 2,3,5 | Research / Positioning / Funnel | prompt | On-demand, per product as it comes up |
| 8 | Paid Ads | prompt | **Dormant** until a message proves (S6 at earliest) |

> **The non-negotiable rule:** every output is a *draft for Joshua's approval*, and `marketing-compliance-reviewer` (Agent 11) gates everything for voice, theology, honesty, and HIPAA/SOC 2 language before it ships. In a faith/counseling niche the human-pastor approval step is the brand's quality guarantee ([wisdom-walk funnel, guardrails](../05-funnels-claude/wisdom-walk-funnel.md)).

## 4. The weekly operating rhythm (~4 hrs, scales 2→5)

From [unified plan §8](../06-unified-marketing-plan-claude.md), made concrete:

| Day | Time | Do | Agent |
|---|---|---|---|
| Mon | 20 min | Pick the week's pillar topic + 1 outreach goal | 1, 12 |
| Tue | 2 hr | AI drafts pillar + repurpose batch; Joshua edits voice/theology; design in Canva | 9, 6 |
| Wed | 30 min | Compliance-gate every piece + schedule the week's posts | 11, 7 |
| Thu | 1 hr | Send 5–10 warm outreach messages (Church plan / consulting / HopeStack pilots) | 6 |
| Fri | 20 min | Read the numbers; note what's working | 10 |

Scale down to ~2 hrs by skipping Tuesday's volume (article every 2 weeks instead). Scale up to 5 by adding a second channel.

---

## 5. The sprints in detail

Each task lists **[Agent]**, **(time)**, and where it comes from. Time budgets assume AI drafts and Joshua approves.

### Sprint 1 (Weeks 1–2) — Stop the bleeding + build the engine
**Why now:** capture is the 0/5 bottleneck; nothing else works until the leak is fixed ([audit §5–6](../01-intake-and-audit-claude.md)). This is "Campaign 1: Fix the leak" from [unified plan §10](../06-unified-marketing-plan-claude.md).

| # | Task | Agent | Time |
|---|---|---|---|
| 1.1 | **Fix the Simply Pray dead CTA** — replace the broken "Download free"/"Live on the App Store" link (404 → `id6772402646`) with a **waitlist email form** ("Be first to pray with Simply Pray"). The single highest-value task in the plan. | Joshua (dev) + 6 | 60 min |
| 1.2 | Create a free **MailerLite** account; verify a sending domain on thewisdomwalk.com | Joshua | 45 min |
| 1.3 | Add an email opt-in form to **all 5 sites** (Wisdom Walk + each product) | Joshua (dev) | 60 min |
| 1.4 | Install **GA4 + Google Search Console** on all sites | Joshua | 45 min |
| 1.5 | Approve the **7-Day ACTS Prayer Guide** lead magnet (draft exists at [07-campaign-assets/simply-pray-acts-prayer-guide.md](../07-campaign-assets-claude/simply-pray-acts-prayer-guide.md)); design in Canva | 6 → 11 | 60 min |
| 1.6 | Load the **Simply Pray 5-email welcome sequence** (draft at [07-campaign-assets/simply-pray-welcome-sequence.md](../07-campaign-assets-claude/simply-pray-welcome-sequence.md)) into MailerLite; test on yourself | 6 → 11 | 45 min |
| 1.7 | List **20–30 pastors** Joshua can warmly reach for the Church plan | 12 | 20 min |

**Dependency order:** 1.1 → 1.2 → 1.3/1.4 (parallel) → 1.5 → 1.6. 1.7 anytime.
**ONE metric:** email capture live on all sites + **first 25 subscribers** (mostly from the warm list + Joshua's own circle).
**Sources:** [Simply Pray funnel, Week 1](../05-funnels-claude/simply-pray-funnel.md); [research first-actions](../02-research-claude/00-research-index-claude.md); [email-capture-nurture.md](../02-research-claude/email-capture-nurture.md).

### Sprint 2 (Weeks 3–4) — Turn on warm revenue
**Why now:** the engine exists; now point it at the fastest cash while the list is still small. "Pick the funnel before the channel" ([SaaS Academy bowtie tutorial](../03-youtube-tutorials-claude/ultimate-guide-demand-generation-for-saas.md)); "network-first acquisition" ([Feras tutorial](../03-youtube-tutorials-claude/ultimate-guide-starting-consulting-business-2026.md)).

| # | Task | Agent | Time |
|---|---|---|---|
| 2.1 | Build the **consulting landing page** (hero: "Built by a pastor, not a vendor"; single CTA: book the free 30-min strategy call → Calendly); connect Calendly | 5 → 6 → 11 | 90 min |
| 2.2 | Approve **"The Pastor's Guide to AI: 7 Honest Questions"** lead magnet (consulting); wire to its 5-email sequence | 6 → 11 | 90 min |
| 2.3 | **Pastor-to-pastor outreach #1:** send 5–10 personal (non-pitch) notes to the Church-plan list — "I built a thing to help my people pray, want a look?" | 6 | 60 min |
| 2.4 | Publish **Wisdom Walk pillar article #1:** "What is the ACTS Method of Prayer?" (SEO cornerstone, answer-first, FAQ schema) | 4 → 6 → 11 | 2 hr |
| 2.5 | Build the **list of 15–25 pastors** in Joshua's network for *consulting* (distinct from the Church-plan list) | 12 | 20 min |

**Dependency order:** 2.1 → 2.2 (consulting funnel) runs alongside 2.3 (Simply Pray cash). 2.4 needs S1 plumbing. 2.5 anytime.
**ONE metric:** **25 warm outreach messages sent** (Church plan + consulting combined) — activity is the controllable input; calls come next sprint.
**Sources:** [consulting funnel, Weeks 1–2](../05-funnels-claude/solomon-consulting-funnel.md); [Simply Pray funnel, Week 3](../05-funnels-claude/simply-pray-funnel.md).

### Sprint 3 (Weeks 5–6) — The content flywheel + close the first calls
**Why now:** the message is being tested in conversations; now make the weekly pillar→repurpose loop a permanent habit so SEO/AI-search start compounding. "One channel, master it" ([Wendt](../03-youtube-tutorials-claude/how-i-market-my-digital-products-free-course.md)); "repurposing engine" ([HubSpot Claude+Canva](../03-youtube-tutorials-claude/32-social-posts-10-min-claude-canva.md)).

| # | Task | Agent | Time |
|---|---|---|---|
| 3.1 | **Lock the weekly loop:** pillar → `marketing-repurposer` → `marketing-copywriter` → `marketing-social-strategist` → `marketing-compliance-reviewer` → publish | 9→6→7→11 | 2–3 hr/wk |
| 3.2 | **Consulting outreach #2 + follow-ups;** book and run **strategy calls**; walk in with the 3 tiered packages (Clarity Audit / Systems Build / Private AI) | 6 + Joshua | 60 min/wk |
| 3.3 | Joshua starts **1 LinkedIn founder post/week** (repurposed from the pillar) — pastor + engineer voice | 9 → 6 | 30 min/wk |
| 3.4 | Publish **pillar #2** (a Pastor-Paul / Church-plan topic, e.g. "How to lead a 21-day church prayer challenge") | 4→6→11 | 2 hr |
| 3.5 | Run a **21-day prayer challenge** to the Simply Pray list (engagement + shareability) | 7 → 11 | 45 min setup |

**ONE metric:** **2–3 strategy calls booked** (consulting pipeline becomes real).
**Sources:** [consulting funnel, Weeks 3–4 + Month 1](../05-funnels-claude/solomon-consulting-funnel.md); [Simply Pray funnel, Month 2](../05-funnels-claude/simply-pray-funnel.md).

### Sprint 4 (Weeks 7–8) — HopeStack design partners
**Why now:** highest lifetime value but slowest, most trust-heavy cycle — start it early so pilots can mature by month 3+. "Validate with real partners" ([Dan Martell SaaS tutorial](../03-youtube-tutorials-claude/how-to-start-a-saas-business-from-scratch.md)).

| # | Task | Agent | Time |
|---|---|---|---|
| 4.1 | Build the **HopeStack waitlist landing page** on hopestack.tech (hero "Care software built by a pastor, not a vendor"; CTA "Join the founding-partner waitlist"); precise **"HIPAA-aligned, pursuing SOC 2"** language only | 5→6→11 | 90 min |
| 4.2 | Approve **"The Counseling Center Data-Protection Checklist: 12 questions"** magnet; wire its 5-email sequence | 6→11 | 90 min |
| 4.3 | Build a **list of 20 counseling centers / church care ministries** in Joshua's + Pastor Paul's networks | 12 | 30 min |
| 4.4 | Send **10 personal notes** inviting the checklist + a free "workflow teardown" call | 6 | 60 min |
| 4.5 | Publish **pillar #3** (care/counseling, e.g. "What HIPAA actually requires of a small counseling center") on Wisdom Walk + cross-link from hopestack.tech | 4→6→11 | 2 hr |

**ONE metric:** **2 teardown / design-partner conversations** booked.
**Sources:** [HopeStack funnel, Weeks 1–4](../05-funnels-claude/hopestack-funnel.md); [confirmed decisions #2 (HIPAA/SOC 2)](../CONFIRMED-DECISIONS-claude.md).

### Sprint 5 (Weeks 9–10) — Widen the library + Heartward on
**Why now:** the list and SEO footprint can now carry the low-ARPU consumer plays. Heartward identity is **confirmed (both consumer app + B2B library/CMS, conservative-evangelical)** — lead with the consumer app's SEO/AI-search moat ([confirmed decisions #1](../CONFIRMED-DECISIONS-claude.md)).

| # | Task | Agent | Time |
|---|---|---|---|
| 5.1 | Approve Wisdom Walk flagship magnet **"The Pastor's Discipleship Pathway"** (one-page framework) | 6→11 | 90 min |
| 5.2 | Approve Heartward magnet **"10 Hard Questions About the Faith — Answered from Scripture and the Puritans"**; wire its 5-email sequence | 6→11 | 90 min |
| 5.3 | Publish **Heartward answer-article #1** (high-intent Dana topic, e.g. "What did the Puritans believe about assurance?") with FAQ schema + trial CTA; confirm robots.txt allows GPTBot/Google-Extended/PerplexityBot | 4→6→11 + Joshua (dev) | 2 hr |
| 5.4 | **Proof engine:** systematize collecting testimonials/quotes from every early user, pastor, and design partner (with consent; never from counseling clients) | 12→11 | 45 min setup |
| 5.5 | Continue weekly loop; **pillar #4** (faith + tech: "How should Christians think about AI") | 9→6→7→11 | 2–3 hr |

**ONE metric:** **250 total subscribers** + **first Heartward trial starts** from organic.
**Sources:** [wisdom-walk funnel](../05-funnels-claude/wisdom-walk-funnel.md); [heartward funnel](../05-funnels-claude/heartward-funnel.md); [proof gap = audit risk R4](../01-intake-and-audit-claude.md).

### Sprint 6 (Weeks 11–12) — Validate, prep launch, decide on paid
**Why now:** by now one or two messages have a track record. Lock the winners, stage Simply Pray's launch, and *only then* consider the first tiny paid test.

| # | Task | Agent | Time |
|---|---|---|---|
| 6.1 | **Identify the winning message** (best-converting headline + magnet across products) from the dashboard | 10→1 | 45 min |
| 6.2 | Stage **all Simply Pray App Store assets** (screenshots, description, ACTS story) so launch day is one switch | 6→11 | 2 hr |
| 6.3 | Turn closed clients / design partners into **case studies** (consent-gated) | 6→11 | 60 min |
| 6.4 | **Paid go/no-go:** only if a product's triggers are met (see §6), plan a single ~$150–$250 test promoting a *proven article/magnet* (not a product); set kill/scale thresholds | 8→11 | 60 min |
| 6.5 | Quarterly reset: run Agent 1 to set the **next 90-day focus** | 1 | 45 min |

**ONE metric:** **1–3 committed Church accounts** (or first consulting client closed) **+ a documented, proven message.**
**Sources:** [Simply Pray funnel, Month 3](../05-funnels-claude/simply-pray-funnel.md); [paid-ads-basics.md](../02-research-claude/paid-ads-basics.md).

---

## 6. Paid-ad trigger gates (per product — do not spend until met)

Paid stays off until **all** of a product's conditions are true ([each funnel's paid section](../05-funnels-claude/)):

- **Simply Pray:** (a) a magnet+headline converts cold→email steadily (same message wins twice), (b) 100+ engaged subscribers, (c) **app is live**. First test: boost a high-performing *article* (not the app) or a Pinterest printable test, ~$150–$250.
- **Consulting:** (a) 3–5 calls booked from organic, (b) magnet opt-in >20%, (c) 1 closed client. First test: LinkedIn/Google Search on high-intent terms ("private AI for churches"), ≤$300/mo.
- **HopeStack:** (a) landing converts ≥3–5% organic over a few hundred visitors, (b) 1 signed design partner, (c) a one-sentence proven message. First test: retargeting only + narrow LinkedIn to care directors; keep faith creative off Meta.
- **Heartward:** (a) magnet+headline convert organically, (b) welcome sequence reliably makes trials→paid, (c) known LTV > expected CAC. First test: Google Search on non-restricted intent terms; promote the *magnet*, not the trial.
- **Wisdom Walk:** (a) a magnet converts ≥30–40% organically, (b) ~300–500 subscribers, (c) a tested email→product path that earns. First test: ~$100/mo boosting the single best LinkedIn post, or retargeting.

## 7. What to avoid (the traps)

- Spreading across 5 products at once — **one priority per sprint**, one engine.
- Running ads before a message is proven (and faith content gets throttled on Meta/Google/TikTok).
- Any **PHI, client stories, health-outcome claims, or loose HIPAA promises** for HopeStack. Say "HIPAA-aligned, pursuing SOC 2," never more.
- **Manipulative spiritual urgency, guilt, streak-shaming, fake scarcity, or fake social proof.** Honest benefit language only — it's the brand and the line that protects trust.
- Re-introducing any **dead/"download now" Simply Pray link** — keep it future-tense ("reserve your spot") until the app is actually live.
- Mixing Heartward's **donation tiers** into the product pricing decision (guilt-leverage risk).
- Chasing vanity metrics (followers, impressions, likes). Track the [dashboard](metrics-dashboard.md) instead.

## 8. Definition of done at day 90

A working capture-and-nurture engine; ~250–500 subscribers; 6+ Wisdom Walk articles live and indexed; the weekly repurposing loop running on 2–5 hrs; **5+ Church-plan conversations (1–3 committed), 2–3 consulting calls (first client plausible), 2–5 HopeStack design-partner conversations, first Heartward trials**; Simply Pray launch assets staged; one proven message; and a data-backed go/no-go on the first paid test. That is "launch to a warm crowd, not an empty room."
