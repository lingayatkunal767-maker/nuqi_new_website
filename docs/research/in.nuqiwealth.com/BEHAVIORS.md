# Behaviors — in.nuqiwealth.com

Source note: the live site itself ships raw Tailwind utility classes in the DOM (built with Vite + Tailwind + Lucide icons). Raw section HTML with exact classes has been dumped to `docs/research/in.nuqiwealth.com/raw-*.html` — builders should use those classes directly rather than re-deriving them from computed styles.

## Global

- **Fonts:** Google Fonts `Poppins` (weights 100–900, italic+normal), loaded via `<link>` in `<head>`. Body font-family reported as `sf-pro-display` fallback but all headings/content use Poppins explicitly (`font-poppins` utility class appears throughout).
- **Base colors:**
  - Near-black background: `rgb(0,0,0)` / `#000`, and dark navy text-on-light `rgb(40,46,58)`
  - White: `rgb(255,255,255)`
  - Primary teal/mint accent: `rgb(87,192,175)` (`#57c0af`) — links, active states, CTA highlights
  - Secondary mint: `rgb(69,223,177)` (`#45dfb1`)
  - Card accent palette (used per numbered "why nuqi" card, cycling): orange `#FFA500`, mint `#45dfb1`, violet `#EE82EE`, cyan `#0DD3FF`
  - Zinc dark surfaces: `zinc-900` → `black` gradients for cards (`bg-gradient-to-b from-zinc-900 to-black`)
  - Borders: `zinc-700`, hover border becomes `#57c0af`
- **No smooth-scroll library** (no `.lenis`/Locomotive detected). `scroll-behavior: auto`. Native browser scroll.
- **Header:** `position: fixed`, `top-0`, `h-[56px]`, `z-50`, `bg-black` at `bg-opacity-50` with `backdrop-blur-xl` (`backdrop-filter: blur(24px)`), bottom border `border-[#4d4d4d]` at 50% opacity, `shadow-lg`. This styling is CONSTANT — it does not change on scroll (no scroll-triggered class swap observed).
- **Icons:** Lucide React icons used directly (`lucide-menu`, `lucide-x`, `lucide-arrow-up-right`, `lucide-arrow-right`, plus custom check/shield/circle icons for the Advantage cards).

## Section-by-section interaction models

### Header / Nav — static, with click-driven mega-menu
- "Nuqi Universe" button (click-driven) opens a right-side sliding panel (`fixed top-0 right-0 h-full z-[60]`) over a `fixed inset-0 bg-black/60 z-40` overlay (click-to-close backdrop).
- Panel background: `linear-gradient(rgb(10,26,20) 0%, rgb(5,5,5) 30%)`.
- Panel content: 2 link cards (Nuqi Gold, Nuqi Sukuk) + "More coming soon" tile.
- Mobile: hamburger menu (`lucide-menu` → `lucide-x` on open) toggles a mobile nav drawer.
- INTERACTION MODEL: click-driven (buttons/backdrop), not scroll or hover driven.

### Hero — time-driven auto-crossfade background + click dot nav
- 4 stacked absolutely-positioned background layers inside `section#hero` (`h-screen`), each `absolute inset-0 bg-cover bg-center bg-no-repeat grayscale`, with `transition-opacity duration-2000 ease-in-out will-change-transform`.
- Only one layer has `opacity-100` at a time; others `opacity-0`. This auto-cycles on a timer (verified: `stone.png` was active layer at load-inspection time, meaning it had already advanced past the first slide — confirms auto-advance, not just initial state).
- Layer order/images: (1) Unsplash photo `photo-1507679799987-c73779587ccf` (birds over Mumbai skyline), (2) `/explore/india.jpeg`, (3) `/explore/Pen.png`, (4) `/explore/stone.png`.
- 4 dot buttons ("Go to slide 1-4") at bottom allow manual jump — click-driven override of the same crossfade mechanism.
- Overlay gradient on top of images: `bg-gradient-to-r from-black via-black/80 to-transparent` (darkens left side for text legibility).
- Text content (`div.animate-fade-in-up`) fades/slides up on load — CSS `@keyframes fadeIn` / `animate-fade-in-up` utility, staggered with inline `opacity-0 animate-[fadeIn_1s_ease-out...]`.
- "Scroll" indicator at bottom — decorative, likely just a label + line, no functional scroll-trigger found.
- INTERACTION MODEL: time-driven (auto crossfade) + click-driven (dot override).

### Why NUQI Digital Wealth (Advantage) — static grid, hover-only
- 6 numbered cards (01–06) in a grid, each with icon + heading + paragraph. Large faint background number (`text-4xl font-bold text-white/5`) positioned `absolute top-6 right-10`.
- Card hover: border color transitions to `#57c0af`, shadow gains `shadow-[#57c0af]/20`, `transition-all duration-300 ease-in-out` (same hover pattern reused across FAQ, Prive offering cards — this is a shared card style).
- Newsletter/contact strip below cards: email input + "Contact Us →" button; arrow icon `group-hover:translate-x-2 transition-transform duration-300` (arrow slides right on button hover).
- INTERACTION MODEL: static layout, hover-only micro-interactions.

### Nuqi Curated Equity Portfolios (CEP) — click-driven carousel
- Prev/Next arrow buttons + numbered dot pagination ("Go to slide 1-4"). Cards scroll horizontally in groups.
- Each card: full-bleed grayscale background image, dark gradient overlay (`bg-gradient-to-b from-black/60 via-black/30 to-black/70`), title + description + "Read more" link.
- Card set repeats 3x in the DOM (12 card nodes for 4 unique themes) — this is the carousel's clone-loop pattern for infinite-scroll appearance, not 12 distinct items. Only 4 unique themes: Future of Healthcare, Sustainable Future ESG, Recession Proofers, Inflation beaters.
- INTERACTION MODEL: click-driven (prev/next + dots). Confirmed NOT scroll-driven — no IntersectionObserver-style auto-swap detected; dots are plain buttons.

### Nuqi Prive (intro) — static two-column
- Left: "Nuqi Prive" wordmark + tagline. Right: dark card listing 5 checklist bullet points (check-icon + text), each fading in (`animate-fade-in-up`-style stagger likely).
- INTERACTION MODEL: static, no special behavior beyond entrance animation.

### Nuqi Prive Offerings — click-driven carousel (identical mechanism to CEP)
- Same prev/next + dot pattern (6 unique cards: Arranging Custody, Arranging Deals in Investments, Managing Assets, Arranging Credit & Advising on Credit, Legacy Planning & Family Office Management, Advising on Financial Products), each repeated 3x in DOM for the loop illusion.
- Cards use animated `.gif` thumbnails (not static images) — e.g. `Arranging Custody.gif`, `Managing assets1.gif`. These are real animated GIF assets, not video/lottie.
- INTERACTION MODEL: click-driven carousel, identical to CEP.

### FAQ (Frequently Asked Questions) — click-driven accordion
- Two-column list of FAQ items, each row = button (question + rotating "+" icon) → content panel.
- Verified via direct DOM manipulation: clicking toggles `aria-expanded` on the button and swaps panel classes. Icon (`span.text-[#57c0af] text-2xl font-light`) rotates via `transition-transform duration-300` to `rotate-45` (turns "+" into "×") when open.
- Panel: `overflow-hidden transition-all duration-300 ease-in-out`, collapsed = `max-h-0 opacity-0` (inferred), expanded = `max-h-96 mt-4 opacity-100`. Easing: `cubic-bezier(0.4, 0, 0.2, 1)`.
- Card wrapper shares the same hover style as Advantage cards (`hover:border-[#57c0af] hover:shadow-[#57c0af]/20`).
- Multiple FAQ items can likely be open simultaneously (not verified as single-open-accordion — treat as independent toggles unless spec review shows otherwise).
- INTERACTION MODEL: click-driven accordion, CSS max-height transition (not JS height measurement).

### Our Ecosystem / "A Shared Journey" — time-driven infinite marquee (CORRECTED from initial static assumption — verified via raw DOM which shows `react-fast-marquee` classes)
- Uses `react-fast-marquee` library (`rfm-marquee-container`, `rfm-marquee`, `rfm-child` classes present verbatim in DOM).
- 2 stacked marquee rows, each auto-scrolling horizontally, continuous infinite loop, `--duration: 33.28s`, `--direction: normal`, `--play: running`, pauses on hover (`--pause-on-hover: running` var toggle) and on click.
- Each row cycles the same 4 logos (BSE, NSE, SEBI, Accord white variants) duplicated back-to-back for seamless looping.
- INTERACTION MODEL: time-driven (continuous auto-scroll marquee), pause-on-hover.

### Nuqi in the News — click-driven carousel
- 3-up card row + Prev/Next arrow buttons (Prev disabled at first slide — confirms this is a paginated carousel with an actual disabled state at the start, not a loop).
- Cards: image + headline + external "Learn more" link (opens original press articles on Gulf News, LinkedIn, Zawya, Khaleej Times).
- INTERACTION MODEL: click-driven carousel, NOT looping (Prev button disables at start).

### Now Available On — static
- Heading + two app store badge images (Play Store / App Store), likely non-functional placeholder links pending launch.
- INTERACTION MODEL: static.

### Footer — static with hover links
- Logo, contact/social icon row (mail, Instagram, Facebook, LinkedIn), nav link list, legal disclaimer paragraph, disclaimer-page link.
- Standard link hover (color/underline) expected — no unique behavior found beyond that.
- INTERACTION MODEL: static, hover-only on links.

## Responsive sweep

- **Desktop (1440px):** full grid layouts as described above; nav shows full horizontal link list.
- **Mobile (390px):** hamburger menu replaces horizontal nav (`lucide-menu`/`lucide-x` toggle); confirmed via header raw HTML classes (`hidden lg:flex` on the desktop nav). Section grids collapse to single/stacked columns (Tailwind responsive prefixes visible directly in raw HTML — e.g. `md:`, `lg:` breakpoints throughout). Exact breakpoint: Tailwind defaults (`md` = 768px, `lg` = 1024px) since classes use standard Tailwind prefixes, not custom breakpoints.
- Full mobile screenshot saved at `docs/design-references/in.nuqiwealth.com/mobile-full.png` for pixel reference.
