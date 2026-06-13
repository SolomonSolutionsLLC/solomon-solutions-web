# Simply Pray — Brand Kit
Board: [simply-pray-brand-board.svg](simply-pray-brand-board.svg) · Status: draft v1 (Claude track)

> The practical spec behind the board. Pair with the existing assets in `Simply-Pray/brand-assets/`. Confirm against the live site (`simplypray.io`) before treating as final.

## Brand idea
A quiet, reverent place to pray with depth and remember every prayer. Calm, Scripture-rooted, anti-noise. Personality: **devout, gentle, unhurried, trustworthy.** Avoid: hype, gamification, streak-guilt, clutter.

## Logo
- **Mark:** forest rounded-app-tile with four ascending dots (the four ACTS movements rising in prayer) crowned by a small gold arc + dot. Reads as prayer lifting upward.
- **Wordmark:** "Simply Pray" in Cormorant Garamond (600).
- **Lockups:** horizontal (mark + wordmark), stacked, mark-only (app icon), wordmark-only.
- **Clear space:** ≥ the mark's corner-radius on all sides. **Min size:** mark 24px; wordmark legible ≥ 90px wide.
- **Don't:** recolor the mark outside the palette, add shadows/gradients, stretch, rotate, or place on busy photos.

## Color tokens
| Token | Hex | Use |
|---|---|---|
| Forest | `#2F5C51` | primary — logo, headers, CTAs |
| Gold | `#C9A84C` | accent only (the rising point, small highlights) — never large fills |
| Cream | `#FAF6EC` | background / surface |
| Ink | `#1A1A2E` | body text |
| Sage (tint) | `#EAF1EE` | quiet chips/cards |
Contrast: forest on cream and cream on forest both pass AA for text.

## Typography
- **Display / Scripture:** Cormorant Garamond (500–600), generous size, tight tracking.
- **Body / UI:** DM Sans (300–500).
- **Scale:** H1 clamp(36–54px) · H2 28px · body 16/1.7 · caption 13px. Sentence case. No ALL CAPS except tiny tracked eyebrows.

## Voice
Pastoral, plain, warm. Short sentences. Scripture quoted accurately and in context. Honest pre-launch CTAs (waitlist, not "download" until live). No manipulation or guilt.

## Applications
- App icon: forest tile + mark. Social avatar: same.
- Social templates (Canva): 1080×1080 + 1080×1920 — cream bg, forest headline (Cormorant), gold rule, one verse or one line, small wordmark bottom-left.
- Email header: cream, centered wordmark, thin gold rule.

## First actions
1. Confirm/extract exact logo files from `Simply-Pray/brand-assets/` and reconcile the mark with this direction.
2. Build the 2 Canva social templates from these tokens.
3. Apply tokens as CSS variables on `simplypray.io` for consistency.
