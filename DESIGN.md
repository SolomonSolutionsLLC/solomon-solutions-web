# Design

## Theme

Chiaroscuro editorial: the page opens and closes in deep navy ink and passes
through brightening paper between. Scene: a pastor reading on a laptop in a
quiet office mid-afternoon; dark sections frame and focus, warm paper carries
the reading load, and gold marks action and conviction.

Section choreography (top to bottom):

1. Utility bar — navy-deep
2. Nav — cream, gold CTA, scroll-spy gold underline on the active section
3. Hero — navy drench (LoomScene canvas + masked gold grid + grain)
4. Why — warm-white (maximum tonal jump after the dark hero)
5. What We Do — cream, hairline top border
6. Products — parchment, per-product accent washes + 2px accent top rules
7. Ecosystem — navy plunge (orbit glowing on dark)
8. Consulting — charcoal chamber, 2px gold seam, gold drafting grid
9. About — warm-white carrying the solid-gold Scripture panel on a navy plinth
10. Contact — navy finale, cream form card floating
11. Footer — navy, merged with Contact via a cream/10 hairline

## Color

Strategy: Committed chiaroscuro. Navy carries ~45% of the scroll; gold is
action + conviction (all conversion CTAs are gold; the loudest color moment is
the James 1:5 panel); product accents color only their own products.

Tokens (globals.css):

- charcoal `#1a1a2e`, charcoal-light `#242440`
- navy `#16213e`, navy-light `#1a2744`, navy-deep `#111a30`
- gold `#c9a84c`, gold-light `#dfc06a`, gold-dark `#b08d3a` (ornament only)
- gold-text `#7a6128` — AA gold for small text on light paper (5.5:1 cream,
  4.6:1 parchment). Every light-ground gold kicker/label uses this.
- cream `#faf7f0`, cream-dark `#f0ebe0`, parchment `#ede3cc`
- warm-white `#fdfcfa`, warm-gray `#6b6b7b`, warm-gray-light `#7e7e92`,
  slate-text `#3a3a4e`

Product accents (used only with their product): Simply Pray `#2F5C51`,
HopeStack `#3B5998`, HeartwardChat `#2d5a2d`, The Wisdom Walk `#B8935A`.
On navy, use the pre-brightened `bright` values stored beside them.

Contrast rules: gold/gold-light text belongs on dark grounds; gold-text on
paper; never small gold `#c9a84c` on cream/parchment. All pairs verified AA.

## Typography

- Display: Playfair Display (`--font-display`); body: DM Sans (`--font-body`).
- The italic-gold headline span is the hero's signature and appears ONLY there.
- Eyebrow kickers: 12px uppercase, tracking 0.2em+; gold-text on paper,
  gold-light on dark. Deliberate brand system on every section.
- Section intros vary geometry: Why/Contact centered, What-We-Do left rail,
  Products split two-column, Ecosystem single-column left, Consulting left.

## Motion

Engine: `motion` (v12) via `src/lib/motion.ts` — one easing family
(EASE_OUT `cubic-bezier(0.16,1,0.3,1)`) + soft/snap springs. Rules: animate
transform/opacity/clip-path only; exits faster than entrances; everything has
a prefers-reduced-motion static path.

- LoomScene (hero): canvas of drifting gold threads + dust motes in a light
  shaft; pointer lean; pauses offscreen/hidden; static frame under
  reduced motion.
- KineticHeading: word-level mask-rise for h1/h2.
- AnimatedSection: in-view rise/fade (same API as the original).
- ClipReveal: gold Scripture panel wash-in. DrawRule: self-drawing rules.
- PhoneDemo / DashboardDemo: auto-cycling product demos (ACTS flow, care
  workspace), interval gated by in-view + reduced motion.
- btn-sheen: light sweep across gold CTAs on hover (CSS only).
- Nav: scroll-spy active underline, bar shrinks on scroll.
- MonogramCrest tilt/sheen and EcosystemOrbit drift are preserved as built.

## Components

- Section: py-24/32, max-w-7xl px-6.
- Primary CTA: bg-gold, charcoal text, square, tracked caps, btn-sheen,
  hover gold-light. One conversion grammar site-wide.
- Product row: accent-washed band with 2px accent top rule, accent icon chip,
  square accent feature markers, demo mockup on alternating side.
- Dark panel: bg-navy-light with gold border-y or gold/25 border.
- Scripture panel: solid gold, navy ink, oversized quote glyph bleeding the
  corner, navy plinth strip below.
- Grain: GrainOverlay on hero, products, consulting only.

## Assets

- `/logo-mark.png` SS monogram (nav, footer, orbit hub, hero crest on cream
  disc — never raw on navy, always seated on cream)
- `/logo-wordmark.png` horizontal wordmark
- `/solomon-logo.png` full stacked lockup (OG image)
