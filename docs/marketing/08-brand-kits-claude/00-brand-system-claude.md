# Solomon Solutions — Brand Family System
Board: [solomon-family-brand-board.svg](solomon-family-brand-board.svg) · Real logos: [logos/](logos/) · Status: v1 (Claude track)

> **Grounded in real sources, not guesses:** the existing *Solomon Solutions Brand Family Branding Kit* PDF (2026-03-25), the exact color tokens in each codebase, and the actual logo files. Where the PDF's proposal and the live code disagree, **the codebase wins** (per Joshua: "the codebases have the chosen colors").

## Family standards (apply to every brand)
- **Typography:** **DM Sans** for UI/body/headings across the whole family (already used by Solomon + Simply Pray → least migration). Hierarchy by weight/size, not by switching fonts. *Exception:* logo wordmarks may keep their existing serif treatment (Solomon's wordmark is a classic serif; Simply Pray uses Cormorant Garamond display accents). Use 400 + 500; 700 only for big headings.
- **Type scale:** H1 44/700 · H2 32/700 · H3 24/600 · body 16/400 (1.6) · small 14/400.
- **Icons:** Lucide (consistent stroke).
- **Spacing grid:** 8px → 0,4,8,12,16,24,32,48,64. **Radii:** 12 / 20 / 32. **Container:** 1120px max; section padding 96 / 64 / 48 (desktop/tablet/mobile).
- **Shadows:** xs/sm/md/lg, low-opacity, tuned per brand's dark color.
- **Anchor logic:** Solomon = navy + gold. Each product keeps its own primary but borrows the **gold accent + warm neutrals** so the family reads as one.

## Logos (real files, in `logos/`)
| Brand | Mark | File(s) |
|---|---|---|
| Solomon Solutions | Navy+gold interlocking double-**S** pillar monogram + serif wordmark | `logos/solomon-solutions-logo.png`, `-mark.png`, `-wordmark.png` |
| Simply Pray | Green line "house of prayer" (three figures under a roof) | `logos/simply-pray-mark.png` (+ vectors in `Simply-Pray/brand-assets/svg/`) |
| HopeStack | Navy H/S stacked monogram; sky-blue light app-icon variant | `logos/hopestack-logos.png` |
| Heartward | "Heartward" header lockup (heart + book / cited chat bubble direction) | `logos/heartward-logos.png` |
| The Wisdom Walk | Wisdom Walk logo | `logos/wisdom-walk-logo.png`, `wisdom-walk-color.png` |

---

## tokens.css (drop into each repo; one source of truth)
```css
/* ---- Family shared ---- */
:root{
  --ss-gold:#c9a84c; --ss-gold-dark:#b08d3a;
  --ss-cream:#faf7f0; --ss-cream-dark:#f0ebe0; --ss-warm-white:#fdfcfa;
  --ss-charcoal:#1a1a2e; --ss-slate:#3a3a4e; --ss-warm-gray:#6b6b7b;
  --radius-sm:12px; --radius-md:20px; --radius-lg:32px;
  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-6:24px; --space-8:32px; --space-12:48px; --space-16:64px;
}
/* ---- Solomon Solutions (anchor) ---- */
:root{ --solomon-primary:#16213e; --solomon-accent:#c9a84c; --solomon-bg:#faf7f0; --solomon-ink:#1a1a2e; --solomon-slate:#3a3a4e; }
/* ---- Simply Pray ---- */
:root{ --sp-primary:#2f5c51; --sp-accent:#b8935a; --sp-bg:#f8f4ef; --sp-ink:#1d2b27; --sp-ink-mid:#4a5c57; --sp-gold-light:#f2e8d6; }
/* ---- HopeStack (DEPLOYED: HopeStack-WebPortal/app/globals.css) ---- */
:root{ --hs-primary:#1e407c; --hs-deep:#02204a; --hs-gold:#eab44f; --hs-sage:#8fb5a0; --hs-mist:#dce6f2; --hs-text:#0f1c33; }
/* Full deployed token set lives in tokens.css (this folder). */
/* ---- Heartward (PDF proposal — no live tokens yet) ---- */
:root{ --hw-primary:#2b2d6e; --hw-accent:#c9a84c; --hw-bg:#fdfcfa; }
```

---

## Per-brand kits

### Solomon Solutions — the anchor
- **Colors:** Navy `#16213e` (primary) · Gold `#c9a84c` (accent) · Cream `#faf7f0` · Charcoal `#1a1a2e` · Slate `#3a3a4e`.
- **Logo:** double-S pillar monogram (`logos/solomon-solutions-logo.png`); serif wordmark "SOLOMON / SOLUTIONS". Mark-only = `solomon-solutions-mark.png`.
- **Tone:** confident, sober, built for church leaders. Navy + gold = trust + gravitas, not startup hype.
- **Taglines (PDF):** "Tools and strategy for kingdom impact." · "Wisdom-driven tools for church leaders." · "Equip the church. Strengthen the work."

### Simply Pray
- **Colors:** Green Deep `#2f5c51` (primary) · Gold `#b8935a` (accent) · bg `#f8f4ef` · Ink `#1d2b27` (+ supporting greens `#cfe7dd`/`#ebf5f1`, gold-light `#f2e8d6`). Brand-logo green ≈ `#3e8b7c`.
- **Logo:** green "house of prayer" figures mark (`logos/simply-pray-mark.png`); vectors in `Simply-Pray/brand-assets/svg/`.
- **Tone:** minimal, reverent, "prayer that goes deeper" — depth, devotion, Scripture-rooted, distraction-free. No streak-guilt. **Pre-launch → waitlist CTAs.**
- **CTAs:** "Join the waitlist" / "Get early access" (app not live yet).

### HopeStack — *uses codebase colors (chosen), not the PDF's teal proposal*
- **Colors (deployed, from globals.css):** Brand blue `#1e407c` (primary-600) · Deep `#02204a` (primary-900, dark surfaces / logo bg) · Gold `#eab44f` (warm accent) · Sage `#8fb5a0` · Mist `#dce6f2` · Text `#0f1c33` / `#44516a`. The earlier PDF proposed teal/sky — the **live site uses this blue scale**; `tokens.css` is authoritative.
- **Logo:** navy H/S stacked monogram; light app icon in sky blue (`logos/hopestack-logos.png`). Tagline "Manage better. Counsel more."
- **Tone:** competent, calm, trustworthy. Vocabulary: secure, audit, role-aware, intake, scheduling, notes. Avoid playful startup language.
- **Compliance:** say **"HIPAA-aligned, pursuing SOC 2"** — never "certified." No PHI, no client stories without consent.

### Heartward (HeartwardChat) — *no live tokens; PDF proposal*
- **Colors:** Deep Indigo `#2b2d6e` (primary) · Soft Gold `#c9a84c` (accent, ties to Solomon) · Warm White `#fdfcfa` · shared family neutrals.
- **Logo:** `logos/heartward-logos.png`. Direction: heart + open-book line, or chat bubble with a small superscript "1" citation marker (signals sourced answers).
- **Tone:** compassionate guide + academically responsible. **Conservative-evangelical / Reformed** lean. Scripture-backed, faith-first, privacy, theological rigor. Serves **both** the consumer app and the B2B library/CMS.
- **CTAs:** "Start free trial" / "See it in action."

### The Wisdom Walk — content hub
- **Colors:** family-editorial — Ink `#1a1a2e` + Gold `#c9a84c` + Cream `#faf7f0` (refine against `logos/wisdom-walk-color.png`).
- **Logo:** `logos/wisdom-walk-logo.png`.
- **Tone:** editorial, wise, pastoral. The SEO/AI-search/email engine that feeds every product.

---

## Next
- Per-brand detailed boards (logo construction, UI mockup, social templates) on request.
- Wisdom Walk palette: confirm exact hex from its logo file before locking.
- Reconcile Solomon's wordmark font (serif logo vs DM Sans UI) — keep serif for the logo lockup only.
