# Page Topology — in.nuqiwealth.com

## Stack notes
Target is a Vite + React + Tailwind CSS SPA (raw Tailwind utility classes are present verbatim in the live DOM — see `raw-*.html` dumps in this folder). Icons: Lucide React. Font: Google Fonts Poppins. No CMS/GraphQL detected (fully static marketing content). No smooth-scroll library.

## DOM layering (root → leaf)
```
<header>                          fixed, top-0, z-50, h-56px — ALWAYS visible, overlays everything below
<div>                             fixed inset-0 bg-black/60 z-40 — Nuqi Universe modal backdrop (click-driven, hidden by default)
<div>                             fixed top-0 right-0 h-full z-[60] — Nuqi Universe slide-in panel (click-driven, hidden by default)
<div class="pt-24">
  <div class="overflow-x-hidden font-poppins -mt-24">
    <div/>                       spacer
    <section id="hero">          1. Hero
    <section id="advisory">      2. Why NUQI Digital Wealth (Advantage cards + newsletter)
    <section id="advisory">      3. Nuqi Curated Equity Portfolios (CEP) carousel
    <section id="nuqiprive">      4. Nuqi Prive intro (2-col)
    <div id="services">          5. Nuqi Prive Offerings carousel
    <div>                        6. FAQ accordion (2-col)
    <div>                        7. Our Ecosystem / "A Shared Journey" (logo rows)
    <div>                        8. Nuqi in the News carousel
    <div>                        9. Now Available On (app badges)
<footer>                          10. Footer
```
Note: sections 2 and 3 share the `id="advisory"` — not unique per React anchor-link convention on this site; harmless duplicate id, don't worry about replicating the duplication, just anchor both to `#advisory`/`#advisory` region for nav parity if needed.

## Visual order & approx. desktop Y-offsets (1440px viewport)
| # | Section | Y offset (px) | Fixed/sticky? |
|---|---------|---------------|----------------|
| — | Header | 0 (fixed overlay) | Fixed always |
| 1 | Hero | 0 | flow, h-screen |
| 2 | Why NUQI (Advantage) | 900 | flow |
| 3 | CEP carousel | 2644 | flow |
| 4 | Nuqi Prive intro | 3498 | flow |
| 5 | Prive Offerings carousel | 4040 | flow |
| 6 | FAQ | 4694 | flow |
| 7 | Our Ecosystem | 5749 | flow |
| 8 | Nuqi in the News | 6401 | flow |
| 9 | Now Available On | 6795 | flow |
| 10 | Footer | ~7100+ | flow, `-mt-20` pulls it up slightly under section 9 |

## Z-index layers
- `z-50` header (always on top)
- `z-[60]` Nuqi Universe panel (above header when open)
- `z-40` Nuqi Universe backdrop
- `z-10` hero content over background layers (`z-0`)
- Carousel cards/sections: no special z-index, normal flow stacking

## Dependencies between sections
- Header's "Nuqi Universe" button controls the fixed overlay+panel that visually sits above all page content — must be implemented once, globally (in layout or a top-level client component), not per-section.
- Footer nav anchors (`/#advisory`, `/#nuqiprive`) link to sections 2/3 and 4 — ensure those `id`s exist on the rebuilt sections.

## Assets summary (see full inventory extracted via evaluate)
- Hero background images (4): 1 Unsplash stock photo (external URL, keep as remote or download) + `/explore/india.jpeg`, `/explore/Pen.png`, `/explore/stone.png`
- CEP carousel images (4 unique): Future of Healthcare, Sustainable Future ESG, Recession Proofers, Inflation beaters — all `.png`
- Prive Offerings (6 unique): all `.gif` animated thumbnails
- Ecosystem/tieup logos (4 unique, white variants): bse, nse, sebi, accord — `/tieups/*.png`
- News images (3): served from `cdn.builder.io` (external) — mirror or reference directly
- App store badges (2): Play Store / App Store PNGs
- Logo: `white-in-logo-cropped.png` (used in header, universe panel, footer)
- Modal images: `NuqiGold-logo.png`, `sukuk-logo.png`, `wealth.png`, `universe-gold.png`, `sukuk.png`
- Flag icon: `india.jpg` (language/region selector)
- Khaleeji Times logo: `khaleeji.png` (news card, local not CDN)

## Interaction model summary (see BEHAVIORS.md for full detail)
| Section | Model |
|---|---|
| Header/Nav | click (mega menu, mobile drawer) |
| Hero | time (auto crossfade) + click (dot override) |
| Why NUQI | static + hover |
| CEP carousel | click (prev/next + dots) |
| Prive intro | static |
| Prive Offerings carousel | click (prev/next + dots) |
| FAQ | click (accordion) |
| Our Ecosystem | static |
| News carousel | click (prev/next, non-looping) |
| Now Available On | static |
| Footer | static + hover |
