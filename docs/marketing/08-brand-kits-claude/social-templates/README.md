# Social templates (Claude track)
Editable post/story templates using **deployed** brand colors (see `../tokens.css`) + real logos.

| File | Brand | Size | CTA |
|---|---|---|---|
| `solomon-square.svg` | Solomon Solutions | 1080×1080 | Book a call |
| `hopestack-square.svg` | HopeStack | 1080×1080 | Get early access |
| `simply-pray-square.svg` | Simply Pray | 1080×1080 | Join the waitlist |
| `simply-pray-story.svg` | Simply Pray | 1080×1920 | Join the waitlist |

## How to use
- Slots are marked `{{ ... }}`. Replace the eyebrow, headline (keep it to ~3 lines), supporting line, and (if needed) CTA.
- Keep the logo, palette, type, and CTA position fixed — that consistency is the brand.
- Two ways to produce posts: (1) edit the SVG text directly and export PNG, or (2) rebuild the matching layout in Canva using `tokens.css` values + the logos in `../logos/`.
- Feed these to the `marketing-repurposer` + `marketing-copywriter` agents to fill, then `marketing-compliance-reviewer` before posting.
- Simply Pray stays **waitlist** (pre-launch). HopeStack: no PHI, "HIPAA-aligned, pursuing SOC 2" only.

## Still to add (on request)
Story sizes for Solomon + HopeStack; carousel cover; quote-card variant; Wisdom Walk + Heartward once their palettes are locked.
