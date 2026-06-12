# Design

## Theme

Light editorial body with dark navy bookends (hero, consulting, footer). Scene: a pastor reading on a laptop in a quiet office mid-afternoon; warm paper-like light surfaces carry the reading load, dark sections frame and focus.

## Color

Strategy: Committed. Navy + charcoal carry the dark sections; gold is the single accent that signals action and brand; cream/warm-white paper tones carry content sections.

Tokens (globals.css):

- charcoal `#1a1a2e`, charcoal-light `#242440`
- navy `#16213e`, navy-light `#1a2744`
- gold `#c9a84c`, gold-light `#dfc06a`, gold-dark `#b08d3a`
- cream `#faf7f0`, cream-dark `#f0ebe0`
- warm-white `#fdfcfa`, section-alt `#f5f2eb`
- warm-gray `#6b6b7b`, warm-gray-light `#9b9bab`, slate-text `#3a3a4e`

Logo brand colors (assets): navy `#1B2A4A`, gold `#B8923F`, cream `#F5EFE1`.

## Typography

- Display: Playfair Display (`--font-display`) for headings, logo text, product names. Committed brand identity choice; matches the serif logo lockup.
- Body: DM Sans (`--font-body`).
- Headings scale: text-3xl → text-7xl with md/lg steps; weight bold; tight leading.
- Eyebrow kickers: 12px uppercase, tracking 0.2em, gold. Deliberate brand system used consistently on every section.

## Components

- Section: py-24/32, max-w-7xl px-6, centered intro block (eyebrow + h2 + lede ≤ max-w-2xl).
- Card: rounded-2xl, white bg, border-cream-dark/50, hover gold border + lift.
- Dark card: bg-white/[0.03], border-white/[0.06], hover gold.
- Primary button: gold bg, charcoal text, rounded-lg, semibold, gold shadow.
- Secondary button: 1px cream/15 border, cream/70 text, hover gold.
- Logo chip: cream rounded-lg square with SS monogram (`/logo-mark.png`).

## Motion

- AnimatedSection: IntersectionObserver fade-up reveal, staggered delays.
- Hero: load-in staggered fade/translate, 1000ms, delay steps 200ms.
- Hover: 300-500ms transitions, translate-y lifts.
- Must respect prefers-reduced-motion.

## Assets

- `/logo-mark.png` SS monogram (nav, footer, favicon)
- `/logo-wordmark.png` horizontal wordmark
- `/solomon-logo.png` full stacked lockup (OG image)
