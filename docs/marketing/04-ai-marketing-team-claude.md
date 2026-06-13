# Stage 4 — Your AI Marketing Team  (Claude)
**For:** Joshua Kirk / Solomon Solutions · You are the CMO; these agents are your staff.

> **Core idea:** Each "agent" is a reusable **prompt + job description** you give to Claude. Paste the prompt, give inputs, get output, you approve. That's how a solo founder on 2–5 hrs/week runs a full marketing department.

## How to use (easiest first)
1. **Copy-paste prompts** — paste a template below into Claude, fill `[brackets]`, send. Zero setup.
2. **Saved Claude Projects** — one Project per agent with its template as instructions + your brand kit + this folder as knowledge.
3. **Claude Code subagents** — turn each into a real `.claude/agents/*.md` subagent. Videos #12 (Nicky Saunders) and #13 (Duncan Rogoff) you sent are the blueprint — see the Stage 3 tutorials.

**Golden rule:** every output is a **draft for your approval**. You are the Brand/Compliance gate (Agent 11) on everything in a faith/counseling niche.

## Org chart
```
            YOU = CMO (final approval)
   STRATEGY        CREATION            OPERATIONS
   1 Strategist    6 Copywriter        10 Analytics
   2 Research      7 Social            11 Brand/Compliance (GATE)
   3 Positioning   8 Paid Ads          12 Marketing Ops
   4 SEO/AEO/GEO   9 Repurposing
   5 Funnel Architect
```

## ⚡ What to actually run on 2–5 hrs/week (don't run all 12)
| Cadence | Agents | Time |
|---|---|---|
| **Weekly** | 9 Repurposing → 6 Copywriter → 7 Social → 11 Compliance | ~2–3 hrs |
| **Monthly** | 10 Analytics, 12 Ops, 4 SEO/AEO | ~1 hr |
| **On-demand/quarterly** | 1, 2, 3, 5, 8 (8 only after organic proves a message) | varies |

---

# The 12 Agents
Each: **Responsibilities · Inputs · Outputs · Tools · Prompt Template · Review Checklist · Frequency · Products.**

## 1. Chief Marketing Strategist
- **Responsibilities:** Sets quarterly priority, picks product/channel focus, kills low-ROI work.
- **Inputs:** this folder, traction numbers, time budget, last Analytics report. **Outputs:** 1-page quarterly priority + ranked campaign list (impact/effort). **Tools:** Claude.
- **Prompt:** *"You are my Chief Marketing Strategist for Solomon Solutions (faith-tech ecosystem; see audit). Constraints: ~$1k/mo, 2–5 hrs/wk, organic-first, priority = Simply Pray. Traction: [numbers]. Last results: [paste]. Give (1) the single most important 30-day focus + why, (2) ≤5 campaigns ranked by impact-vs-effort, (3) what to STOP. Tie each to a product. Flag assumptions."*
- **Checklist:** One focus (not five)? Product-tied? Respects time/budget? Names a stop? **Frequency:** monthly/quarterly. **Products:** all.

## 2. Market Research Agent
- **Responsibilities:** competitors, audience language, trends, pricing, where buyers gather — cited.
- **Inputs:** product/persona + question. **Outputs:** cited brief (competitor table, pain phrases, gaps). **Tools:** Claude + web search; the `deep-research` skill.
- **Prompt:** *"Research [product]. Find (1) 5–8 competitors with positioning + pricing, (2) exact words [persona] uses for their problem — real quotes from forums/Reddit/reviews, (3) 3 underserved gaps, (4) where these buyers gather. Current sources (2025–26), cite every claim with URL + date. Separate facts from inference."*
- **Checklist:** Real citations + dates? Real quotes? Actionable gaps? **Frequency:** quarterly + pre-campaign. **Products:** all.

## 3. Product Positioning Agent
- **Responsibilities:** sharpen "why us, why now, for whom"; positioning, value props, one-liner.
- **Inputs:** audit, research, differentiators. **Outputs:** positioning statement, 3 headlines, value-prop bullets, "we are/are not" table. **Tools:** Claude.
- **Prompt:** *"Write positioning for [product]: (1) one-sentence statement (For [persona] who [need], [product] is the [category] that [benefit], unlike [alternative]); (2) 3 hero headlines; (3) 5 value-prop bullets in buyer language; (4) we-are/we-are-NOT table. Lean into 'built by a pastor, not a vendor.' No claims the product can't back."*
- **Checklist:** True? Differentiated? Buyer's words? Theologically sound? **Frequency:** per product. **Products:** all (Heartward after identity confirmed).

## 4. SEO / AEO / GEO Agent
- **Responsibilities:** get found in Google + AI answers; keywords, briefs, on-page, schema.
- **Inputs:** topic/keyword, page, competitors. **Outputs:** keyword list w/ intent, content brief, on-page checklist, FAQ schema. **Tools:** Claude + web search; free: Search Console, Keyword Planner.
- **Prompt:** *"SEO/AEO/GEO for topic [x]. (1) 10 keyword/question targets a [persona] searches, with intent. (2) Wisdom Walk article brief: title, H2/H3 outline, exact questions to answer, products to link. (3) on-page must-dos. (4) FAQ schema Q&As so AI search quotes us. Optimize to be the cited answer."*
- **Checklist:** Real intent? Answers directly? Natural link? Not stuffed? **Frequency:** monthly briefs, quarterly audit. **Products:** all — anchored on The Wisdom Walk.

## 5. Funnel Architect
- **Responsibilities:** stranger → email → customer per product; lead magnets, pages, sequences.
- **Inputs:** product, persona, offer. **Outputs:** funnel map, lead-magnet concept, landing wireframe (copy blocks), email sequence. **Tools:** Claude; pages via your Next.js sites.
- **Prompt:** *"Design a funnel for [product] targeting [persona], organic-first, $1k. (1) funnel map; (2) one lead-magnet idea + why; (3) landing wireframe with actual copy blocks (hero/proof/offer/CTA); (4) 5-email welcome outline; (5) 2 metrics. Reuse brand voice."*
- **Checklist:** Single CTA? Magnet valuable? Trust before sell? Measurable? **Frequency:** once/product then refine. **Products:** all.

## 6. Copywriter
- **Responsibilities:** the actual words — posts, emails, landing, ads, app-store — in your voice.
- **Inputs:** positioning, asset type, CTA, voice guide. **Outputs:** ready-to-edit copy, 2–3 variants. **Tools:** Claude + `stop-slop`/`writing-humanizer` skills.
- **Prompt:** *"Write [asset] for [product], audience [persona], goal [CTA]. Voice: pastoral, Scripture-rooted, warm, confident, anti-corporate — a fellow pastor, not a vendor. 2–3 variants. No clichés/hype/fake urgency. True claims."*
- **Checklist:** Sounds like you? True? Clear CTA? Faith-appropriate? **Frequency:** weekly. **Products:** all.

## 7. Social Media Strategist
- **Responsibilities:** what to post where/when; themes/hooks; weekly plan.
- **Inputs:** platform(s) (Stage 2 platform-fit), product focus, pillar content. **Outputs:** weekly calendar (hook+format+CTA), platform tweaks. **Tools:** Claude; Buffer/Metricool free, Canva scheduler.
- **Prompt:** *"Social Strategist. Platform(s): [from platform-fit]. Focus: Simply Pray. 1-week plan: per post give hook (first line), format (reel/carousel/text), content, CTA. ~80/20 value/promo. Faith-appropriate, no guilt/manipulation. Doable in 2–5 hrs/wk."*
- **Checklist:** Right platform? Value-first? Strong hooks? Doable? **Frequency:** weekly. **Products:** all (Simply Pray lead).

## 8. Paid Ads Specialist (dormant until organic proves a message)
- **Responsibilities:** plan/write/read paid campaigns.
- **Inputs:** proven message/offer, budget, target, platform. **Outputs:** campaign structure, targeting, 3 ad variants + creative brief, budget split, kill/scale thresholds. **Tools:** Claude; Meta/Google Ads.
- **Prompt:** *"Plan a [$X]/mo test on [platform] for [product], promoting [proven offer] to [persona]. (1) objective+structure; (2) targeting; (3) 3 ad variants + creative brief; (4) budget/day + duration; (5) kill/scale thresholds. Flag faith ad-policy risks."*
- **Checklist:** Tied to a PROVEN message? Kill/scale rules? Budget-safe? Policy-compliant? **Frequency:** on-demand after validation. **Products:** Simply Pray first.

## 9. Content Repurposing Agent (highest-leverage)
- **Responsibilities:** one piece → many. One Wisdom Walk article → posts/clips/email/thread.
- **Inputs:** one pillar asset. **Outputs:** 5–15 derivatives per platform. **Tools:** Claude + **Canva** (connected); video #11 (HubSpot Claude+Canva) is the playbook.
- **Prompt:** *"Here is one pillar piece: [paste]. Repurpose into (1) 5 IG captions, (2) 1 carousel outline (slide-by-slide), (3) 3 short-form scripts (15–30s), (4) 1 email, (5) 3 X/Threads posts. Keep pastoral voice, each with hook + CTA. Tie to [product] naturally."*
- **Checklist:** Each stands alone? Voice consistent? Not repetitive? CTA present? **Frequency:** weekly. **Products:** all — fed by Wisdom Walk.

## 10. Analytics Agent
- **Responsibilities:** read the numbers, explain plainly, recommend.
- **Inputs:** raw stats (site, email, social, installs, signups). **Outputs:** 1-page plain-English report + 3 actions. **Tools:** Claude; GA4/Search Console (free), email tool, App Store Connect.
- **Prompt:** *"Last month's data: [paste]. Explain plainly (I'm a beginner): (1) what improved/declined + likely cause; (2) which channel pulls its weight; (3) top 3 actions next month. No vanity metrics — focus on signups, trials, installs, church-plan inquiries. Note missing data I should track."*
- **Checklist:** Plain-English? Real metrics? Actionable? Honest on gaps? **Frequency:** monthly. **Products:** all.

## 11. Brand / Compliance Reviewer ⛔ THE GATE
- **Responsibilities:** review every outbound asset for voice, theology, compliance (HIPAA, honest claims, no manipulation). Nothing publishes without passing.
- **Inputs:** drafted asset + product + compliance context. **Outputs:** PASS / fix-list. **Tools:** Claude; your compliance instincts for HopeStack.
- **Prompt:** *"Review before publish: [paste]. Product: [x]. Check (1) brand voice (pastoral, true, non-hype); (2) theological soundness; (3) honesty — no unbackable claim; (4) compliance — HopeStack: flag any implied PHI/health claim or HIPAA over-promise; prayer/counseling: no clinical claims; no manipulative urgency/guilt; (5) tone for a hurting audience. Output PASS or numbered fix-list. Be strict."*
- **Checklist:** You still personally eyeball faith claims. **Frequency:** EVERY asset. **Products:** all (strictest on HopeStack).

## 12. Marketing Operations Manager
- **Responsibilities:** keep the machine running — calendar, checklists, this folder, cadence, status.
- **Inputs:** this folder, calendar, campaign list. **Outputs:** updated calendar, weekly due/done/stuck status, SOPs. **Tools:** Claude; your **ClickUp + Google Calendar + scheduled-tasks** (connected).
- **Prompt:** *"Marketing Ops Manager. Calendar + campaigns: [paste]. This week: (1) due; (2) done; (3) stuck + unblock; (4) which agents to run given 2–5 hrs. Keep this folder + calendar as source of truth. Propose a time-saving SOP."*
- **Checklist:** Reflects reality? Respects time? Surfaces blockers? Tidy? **Frequency:** weekly 5-min. **Products:** all.

---

## CMO recommendations
- **Sequence hard:** run **9 → 6 → 7 → 11** weekly; let the rest sleep until needed.
- **Add later:** a "Partnerships/Outreach" agent for pastor-to-pastor selling (Simply Pray Church plan, HopeStack pilots) — your fastest revenue.
- **Your edge:** as an engineer, turn the top 4 into real Claude Code subagents (see Stage 3 videos #12/#13).

## First 3 actions
1. This week: run Agent 9 on ONE piece → 6 → 7 → 11 = a week of social in one sitting.
2. Save Agents 6, 7, 9, 11 as Claude Projects (or have me build them as subagents).
3. After funnels land, run Agent 1 to lock your 30-day focus.
