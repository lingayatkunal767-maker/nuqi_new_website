# Nuqi Wealth — Premium Redesign System

Blend of [naka.com](https://naka.com) (technical precision, monospace labels, alternating black/white rhythm, single neon accent, isometric illustration, bordered icon-card grids) and [useorigin.com](https://useorigin.com) (cinematic photography, editorial italic-serif emphasis typography, glass nav, gradient-blob cards, generous scroll-driven whitespace). Applied to Nuqi Wealth's real content — homepage + Disclosures/IRIS/Ethosphere/Prive subpages. No template-slop: no default shadcn card shadows, no generic Tailwind gradient blobs-as-decoration without purpose, no stock-icon-in-circle repeated ad nauseam without variation.

## Typography

Three-family system, mirroring both references' actual pairings:

| Role | Font | Usage |
|---|---|---|
| Display / editorial emphasis | **Instrument Serif**, italic | Emphasis words inside headlines (e.g. "*Ethical* wealth, engineered.") — never whole headlines, always a single word/phrase for contrast, exactly like Origin's "*Own* your wealth." |
| Body / UI / headlines | **Inter** | All headline base text, body copy, buttons, nav — replaces Poppins. Cleaner, less "AI template" than Poppins, matches both references' grotesk sans. |
| Labels / eyebrows / mono accents | **JetBrains Mono** (or IBM Plex Mono) | Uppercase, tracked-out eyebrow labels ("THE ADVANTAGE", "WHY NUQI"), button micro-copy, nav items, stat figures, form placeholders — matches NAKA's monospace nav/buttons and Origin's monospace badges. |

Type scale (desktop, fluid via `clamp()`):
- Hero H1: `clamp(2.75rem, 6vw, 6.5rem)`, Inter, weight 300–400, line-height 0.95, tracking -0.02em
- Section H2: `clamp(2rem, 4vw, 3.5rem)`, Inter, weight 500
- Eyebrow: `0.75rem`, JetBrains Mono, uppercase, tracking `0.2em`, weight 500
- Body: `1rem–1.125rem`, Inter, weight 400, line-height 1.6

## Color

Keep Nuqi's real brand identity — do not replace teal with NAKA's neon green. Teal (`#57c0af`) plays the exact role NAKA's neon-green plays: the ONE signature accent color against black/white, used sparingly and decisively (CTAs, eyebrow text, active states, underline accents, glow effects).

| Token | Value | Role |
|---|---|---|
| `--bg-void` | `#000000` | Darkest section band (alternates with near-black) |
| `--bg-panel` | `#0a0a0a` / `#0d0d0d` | Secondary dark band, card surfaces |
| `--bg-paper` | `#fafaf7` | Rare light band for contrast-punctuation sections (used sparingly, NAKA-style — e.g. one light section breaking up an otherwise dark page) |
| `--fg` | `#ffffff` | Primary text on dark |
| `--fg-muted` | `#a1a1a1` (zinc-400) | Secondary text on dark |
| `--accent` | `#57c0af` | Signature accent — teal |
| `--accent-glow` | `rgba(87,192,175,0.35)` | Glow/shadow color for accent elements |
| `--line` | `rgba(255,255,255,0.08)` | Hairline borders on dark surfaces |
| Gradient-blob palette | teal → cyan (`#0dd3ff`) → violet (`#ee82ee`) → orange (`#ffa500`) | Origin-style soft blurred gradient cards — reuses the existing per-card accent palette from CEP/Prive cards, now used more expressively as full-bleed blob backgrounds behind testimonial/stat cards |

## Layout rhythm

NAKA's signature: sections alternate `bg-void` (pure black) → `bg-panel` (near-black, subtly lighter) → occasionally `bg-paper` (light, used once or twice max per page for punctuation, e.g. a "trusted by" logo bar or a stat block). Every section transition should feel deliberate, not uniform-gray-on-gray.

- Max content width: `1280px` (`max-w-7xl`), generous `px-6 md:px-12 lg:px-20`
- Vertical section padding: `py-24 md:py-32 lg:py-40` — more generous than the original clone (was `py-32` flat; now scales up on larger screens for the "premium breathing room" feel)
- Card grids: bordered (`border border-white/10`), rounded (`rounded-2xl`), NOT drop-shadow-heavy — borders + subtle glow-on-hover instead of `shadow-lg`

## Motion system

Using `motion` (Framer Motion) for React-driven animation + `lenis` for smooth scroll (both references use inertial smooth scroll).

- **Page-level:** Lenis smooth scroll wrapper in `layout.tsx` (client component), `duration: 1.2`, `easing` custom cubic.
- **Scroll-reveal:** every section's content fades up + slight blur-in on scroll into view (`opacity 0→1`, `y: 24→0`, `filter: blur(4px)→blur(0)`, `duration 0.8s`, `ease: [0.16, 1, 0.3, 1]` — the "expo-out" premium easing both references use). Implemented via a shared `<Reveal>` wrapper component using `motion.div` + `whileInView`.
- **Stagger:** card grids stagger children by `0.08s` on reveal.
- **Hover:** cards lift (`y: -4px`) + border brightens to accent + subtle glow shadow, `duration 0.3s`.
- **Buttons:** existing fill-sweep / translate-arrow patterns from the original clone are KEPT (they already match this premium language) — just retuned to the new easing curve.
- **Nav:** glass/blur pill nav (Origin-style) that condenses (shrinks height, gains background blur + border) after ~50px scroll, using a scroll-position hook.
- **Hero:** parallax on background layers (subtle `y` translate tied to scroll progress, `useScroll` + `useTransform`), plus the existing crossfade timer kept.

## Component patterns (replacing generic-template defaults)

- **Icon cards** (Advantage, CEP, Prive offerings): NAKA-style — square icon tile (not circle), border, number/index in mono font top-right, title, description, "READ MORE →" in mono uppercase small caps with arrow that slides on hover. NOT a generic shadcn `Card` with default shadow.
- **Testimonial/stat cards** (new — News section reimagined): Origin-style soft gradient-blob backgrounds (blurred radial gradients in teal/cyan/violet/orange) behind glass cards.
- **Trust bar** (Ecosystem section): NAKA-style grayscale logo marquee on a `bg-paper` light band (one of the rare light sections) — the one deliberate light/dark inversion moment on the page, echoing NAKA's own trust-bar treatment.
- **FAQ**: keep accordion mechanism, restyle rows as borderless with mono "+"/"×" and hairline dividers instead of individual bordered card-per-row (cleaner, more editorial, less "boxes everywhere").
- **Nav labels & buttons**: uppercase mono, tracked-out, matching both references' nav typography exactly.

## Responsive rules

- Breakpoints: Tailwind defaults (`sm`, `md`, `lg`, `xl`) — same as before.
- Every section must be verified at 1440 (desktop), 768 (tablet), 390 (mobile) — pixel spacing scales via the fluid type/spacing rules above, not fixed breakpĺoint overrides only.
- Mobile: single column always, section padding drops to `py-16`, hero heading drops to the low end of its `clamp()`.
- No horizontal scroll/overflow at any breakpoint — verify with QA pass at the end.
