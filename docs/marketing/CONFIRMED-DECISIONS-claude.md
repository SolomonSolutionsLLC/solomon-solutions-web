# Confirmed Decisions — supersedes the "open decisions" in earlier files
**Answered by Joshua Kirk, 2026-06-13.** Apply these everywhere; they override the [ASSUMPTION]/[DECISION NEEDED] notes in the audit, funnels, and unified plan.

1. **Heartward = BOTH.** It is *both* a consumer theological-Q&A app (heartwardchat.com, $5/$12/$25 mo) **and** the underlying library / content-management platform with semantic search. **Audience lean: conservative evangelical** (Reformed-friendly). → Market the consumer app to individuals (Devout Dana / Seeker Sam) AND the library/CMS platform to churches, seminaries, and publishers. Positioning, copy, and the funnel should serve both, with the consumer app as the visible front and the platform as the B2B layer. The conservative-evangelical lean is a feature: it's the trust moat (cited, sourced, doctrinally careful answers).

2. **HopeStack compliance target = HIPAA-aligned + SOC 2.** Marketing may say **"HIPAA-aligned, pursuing SOC 2"** (or "SOC 2 in progress" if accurate). Do **not** claim "HIPAA-compliant," "HIPAA-certified," or "SOC 2 certified" until verified. This is a legal line. SOC 2 readiness is a strong B2B trust signal for Care Director Carol — feature it honestly once it's underway.

3. **Competitors: none identified by Joshua.** Stage 2 / the Market Research agent should still surface indirect competitors (other prayer apps, ChurchTech CRMs, Christian AI tools) for positioning, but treat "no known direct competitor" as the working assumption.

4. **Brand kits: needed for all properties.** Joshua wants brand kits for Solomon Solutions, Simply Pray, HopeStack, Heartward, and The Wisdom Walk. Some assets exist already (`Simply-Pray/brand-assets/`, an Inkscape logo guide; logo files in the Solomon Solutions repo `public/`). **Next step:** produce a brand kit per property (logo system, color tokens, type scale, usage rules, social templates) — can be generated with the `brandkit` skill. Not yet started.

## Where this changes existing files
- `05-funnels-claude/heartward-funnel.md` → treat the "B2B library/CMS" alternate scenario as CONFIRMED (both tracks live); audience = conservative evangelical.
- `05-funnels-claude/hopestack-funnel.md` → add SOC 2 ("pursuing SOC 2") alongside HIPAA-aligned in trust messaging.
- `01-intake-and-audit-claude.md` → CONFIRM #2 resolved (Heartward = both).
- `06-unified-marketing-plan-claude.md` → open decisions 1–4 now answered; brand kits added as a workstream.
