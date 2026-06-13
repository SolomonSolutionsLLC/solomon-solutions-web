# Stage 1 — Intake & Product Audit  (Claude)
**Prepared by:** AI CMO (Claude) · **Date:** 2026-06-13 · **For:** Joshua Kirk, Solomon Solutions LLC

> **Source discipline:** **[FACT]** = read directly off your live sites on 2026-06-13. **[ASSUMPTION]** = my inference. **[CONFIRM]** = needs your input. No product facts invented.
> **Note:** This is the Claude track. A parallel `docs/marketing/` set exists (Codex). Per your instruction, my files carry `claude` in the name for a later best-of merge.

---

## 0. The big picture (read first)

You don't have five unrelated products. You have **one faith-tech ecosystem** with a parent brand and a clear founder story — one audience, one voice, properties that feed each other.

**[FACT]** Solomon Solutions positions as *"Built by a pastor. Engineered for the church."* — founder **Joshua Kirk, pastor & engineer**. Brand triad **Wisdom · Strategy · Stewardship**, anchor verse James 1:5.

| Property | Domain | Role | Status (per sites) |
|---|---|---|---|
| **Solomon Solutions** | solomonsolutions.tech | Parent + consulting (the "house") | Live (single-page) |
| **Simply Pray** | simplypray.io | Prayer app (B2C + church plans) | **Pre-launch — see resolved conflict** |
| **HopeStack** | hopestack.tech | Counseling-center CRM (B2B) | Beta / waitlist |
| **Heartward(Chat)** | heartwardchat.com | AI theological Q&A | "In active development" |
| **The Wisdom Walk** | thewisdomwalk.com | Articles (discipleship/counseling/culture) | Active |

**Strategic core:** the parent brand + The Wisdom Walk are your organic-traffic/trust engine; the three products are what you monetize.

---

## 🚩 Conflicts

**[CONFIRM #1 — Simply Pray launch status → RESOLVED: NOT live yet.**
- You said: *"App is not listed on app store yet."*
- simplypray.io claims *"Live on the App Store"* → link `https://apps.apple.com/app/id6772402646`.
- I checked that App Store ID directly: **404 Not Found**; targeted search finds no public SimplyPray listing (only other prayer apps). **The app is NOT live; the site claim is premature.**
- 🚩 **URGENT WEBSITE BUG:** the "Download free" / "Live on the App Store" CTA on simplypray.io points to a **dead 404** App Store link. Every visitor who clicks hits a broken page — destroys trust at the worst moment. **Fix: swap that CTA for a waitlist/email capture ("Get notified at launch") until the listing is live.** Bonus: it builds the email list you don't have.
- Strategy: Simply Pray funnel = **pre-launch waitlist primary**, download-ready copy staged for launch day.

**[CONFIRM #2 — What Heartward actually is.**
- You described it as a *library/CMS with semantic search + chatbot*.
- heartwardchat.com markets a **consumer** product: *"Biblical Answers, Instantly,"* theological Q&A over 200+ Reformed/Puritan works, **$5/$12/$25 per month**, 7-day free trial.
- Those are different products (infra platform vs. consumer subscription). **Which is the go-to-market: the consumer chat app, the underlying library/CMS, or both?**

---

## 1. Intake checklist — have vs. missing

| Input | Status | Notes |
|---|---|---|
| Product websites | ✅ | All 5 reviewed live |
| Landing pages | ⚠️ | One page each; no campaign/lead-magnet pages |
| Existing copy | ✅ | Strong, consistent voice already written |
| Logos/brand assets | ⚠️ | `logo-mark.png`, `solomon-logo.png` in `public/`. Colors/fonts inferred (see §8). Need official kit |
| Target customers | ✅ | Churches, pastors, ministry leaders, counselors, individual believers |
| Pricing/offers | ✅ mostly | Simply Pray + Heartward priced; HopeStack & consulting unpriced |
| Email lists | ❌ none | Confirmed clean slate — **job #1** |
| Social accounts | ❌ none found | No social links on any site |
| Competitors | ⚠️ | Researched in Stage 2; your known list still wanted |
| Budget | ✅ ~$1,000/mo | Organic-first |
| Time | ✅ 2–5 hrs/wk | Drives "AI drafts, you approve" model |
| Paid ads | ✅ yes, later | Prove message organically first |
| Geography | ⚠️ assumed US/English | **[CONFIRM]** denomination/network focus? |
| Compliance | ⚠️ | HopeStack **HIPAA-aligned** [FACT]; need your hard red lines |

---

## 2. Business model summary (per property)

**Solomon Solutions (parent + consulting) — the house.** [FACT] Consulting for churches/leaders: church systems, leadership structure, tech integration, **private AI/LLM deployment on a VPS**. Offer: **free 30-min strategy call** (Calendly `grace-chapel/strategy-session`). No prices listed. High-ticket, low-volume; also the credibility hub for the products.

**Simply Pray — B2C app + church B2B2C.** [FACT] Free / Personal $2.99mo ($21.24/yr) / Community $6.99mo ($46.74/yr) / **Church $49/mo** (branded page, admin dashboard, member mgmt). Two engines: volume of individuals at low ARPU, and **Church plans = the real money** (a pastor selling to pastors), which also seed free congregational users. **Best lever: sell the Church plan.**

**HopeStack — B2B SaaS.** [FACT] Counseling CRM: intake, scheduling, AI session notes, supervision, role dashboards. HIPAA-aligned, encrypted, row-level security, audit trail. Beta + waitlist, no pricing. Fewer customers, higher ACV, sticky. Likely **highest revenue-per-customer**. Best lever: waitlist → design-partner pilots.

**Heartward(Chat) — B2C subscription (per site).** [FACT] $5/$12/$25 mo, 7-day trial. Low-ARPU → needs volume → most expensive to grow. **[CONFIRM #2]** may reframe.

**The Wisdom Walk — content/top-of-funnel.** [FACT] Articles for pastors/leaders. Not direct revenue: **SEO + trust + email capture** feeding every product. Underused; should become the content hub.

---

## 3. Positioning diagnosis

**Strong (keep):** distinctive, consistent pastoral voice; *"built by a pastor, not a vendor"* wedge (*"Most ministry software is built by vendors who have never counseled a grieving member"*); founder story (pastor + engineer); pricing mostly decided.

**Weak (caps growth):**
1. **No audience capture** — no email signup on most sites, no social, no list. Every visitor lost. #1 fixable problem.
2. **No social proof anywhere** — zero testimonials/case studies/logos. Fatal in a trust-driven niche.
3. **No lead magnets / mid-funnel** — visitors get buy/book only, nothing in between.
4. **Conflicting launch signals** (Simply Pray, Heartward).
5. **Wisdom Walk disconnected** from the funnel.
6. **Single-page hash-anchor sites** → thin SEO surface, hard to be found.

---

## 4. Personas
- **P1 "Pastor Paul"** — lead pastor, 100–800-person church, every-hat, budget-limited, vendor-allergic. Buys consulting + Simply Pray Church plan + champions HopeStack. **Highest leverage: one relationship, three revenue paths.** Found via pastor FB groups, YouTube, denominational networks, referrals.
- **P2 "Care Director Carol"** — counseling/church-care lead, drowning in paperwork, HIPAA-careful. HopeStack buyer. Needs demo + security answers. Via counseling associations, LinkedIn, referrals.
- **P3 "Devout Dana"** — individual believer, wants deeper, less-distracted prayer. Simply Pray/Heartward. Via app store, Instagram/TikTok faith content, church rec, Pinterest.
- **P4 "Seeker Sam"** — questioning faith, googles/asks AI. Heartward. Via search + AI search, Reddit, YouTube.

---

## 5. Funnel maturity score (0–5)
| Stage | Score | Why |
|---|---|---|
| Awareness | 1/5 | No social, thin SEO, Wisdom Walk unused |
| Capture | 0/5 | No list; only HopeStack waitlist |
| Nurture | 0/5 | No email system |
| Conversion | 3/5 | Good copy/pricing/checkout; no social proof |
| Retention/Referral | 1/5 | Some stickiness; no review/referral engine |

**Overall ≈ 1.0/5 — "Good stores, no foot traffic, no follow-up."** Cheapest, fastest part to fix — fits $1k / 2–5 hrs / organic-first.

---

## 6. Fastest path to traction
1. **Capture on every site** (email signup + one lead magnet). *(Wk 1)*
2. **One email tool + welcome sequence.** *(Wk 1–2)*
3. **One organic channel + one Simply Pray lead magnet**, 30-day run. *(Wk 1–4)*
4. **Sell Simply Pray Church plan founder-to-founder** — direct outreach to 20–30 reachable pastors ($49/mo each, zero ad spend). *(Wk 2–4)*
5. **Make The Wisdom Walk the SEO/AI-search hub** that captures + routes. *(Wk 3–8)*

Order logic: capture before traffic; warm/direct before paid; lean on existing assets (Wisdom Walk, your network) first; paid only after organic proves the message.

---

## 7. Risks & unknowns
| # | Risk | Action |
|---|---|---|
| R1 | Simply Pray status | RESOLVED (not live) + fix broken CTA |
| R2 | Heartward identity | **[CONFIRM #2]** |
| R3 | 2–5 hrs/wk for 5 properties | Focus Simply Pray first; AI agents draft |
| R4 | No social proof | Make testimonial collection a Wk-1 system |
| R5 | Compliance (prayer/counseling/church) | Need red lines; HopeStack HIPAA claims airtight before promoting |
| R6 | Solo founder SPOF | AI team + systems (Stage 4) |
| R7 | Low-ARPU products need volume | Lead with Church plan + consulting |
| R8 | App Store has 0 reviews | Review-generation built into Simply Pray plan |

---

## 8. Brand snapshot (for all assets)
- **[FACT]** Fonts: **Playfair Display** (headlines) + **DM Sans** (body).
- **[FACT]** Colors: forest green `#2F5C51`, gold/brass `#c9a84c`/`#b08d3a`, cream `#fdfcfa`/`#faf7f0`, ink navy `#1a1a2e`, slate blue `#3B5998`.
- **[FACT]** Voice: pastoral, Scripture-rooted, confident, anti-"vendor"; triads + contrast aphorisms.
- **[FACT]** Contact: `hello@solomonsolutions.tech`; Calendly `grace-chapel/strategy-session`.
- **Gaps:** confirm official kit; claim social handles.

---

## Next
- You: answer **[CONFIRM #2]**, geography/denomination, compliance red lines, competitors, brand-kit location.
- Me: Stage 2 research (done), Stage 3 real video tutorials (running), Stage 5 funnels, Stage 6 unified plan.
