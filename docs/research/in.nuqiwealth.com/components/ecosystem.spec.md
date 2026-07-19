# Our Ecosystem ("A Shared Journey") Section Specification

## Overview
- **Target file:** `src/components/Ecosystem.tsx`
- **Screenshot:** `docs/design-references/in.nuqiwealth.com/sec-ecosystem.png`
- **Interaction model:** time-driven infinite marquee (auto-scrolling logo strip), pause-on-hover. The live site uses the `react-fast-marquee` npm package. **Install it:** add `react-fast-marquee` to `package.json` dependencies and use its `<Marquee>` component rather than hand-rolling the animation — this exactly matches the site's implementation.

## Section markup
```html
<div class="flex flex-col gap-8 px-14 mt-10 py-12 items-center justify-center antialiased container">
  <div class="flex flex-col bg-[#0d0d0d] rounded-3xl justify-between items-center">
    <div class="flex flex-col justify-between items-center w-full">
      <div class="flex flex-col gap-4 mb-16">
        <div class="text-center max-w-4xl mx-auto mb-24 animate-fade-in-up">
          <span class="text-[#57c0af] text-xl font-bold tracking-[0.2em] uppercase mt-10 block">Our Ecosystem</span>
          <h2 class="text-5xl md:text-7xl font-light text-white mt-10 tracking-tight">A Shared Journey</h2>
          <p class="md:text-xl text-sm text-gray-400 font-light leading-relaxed mt-10">From first-time investors to experienced wealth-builders, our users aren't just clients — they are collaborators in financial empowerment.</p>
        </div>
      </div>
      <!-- Two stacked Marquee rows, both scrolling the same direction ("normal"), ~33s duration, pauseOnHover -->
      <Marquee speed={40} pauseOnHover gradient={false}>
        <div class="flex mb-16 min-w-52 justify-center h-[3.5rem]"><img src="/images/tieups/bsewhite.png" class="mx-16 object-cover w-70" alt="Tieup Logo"></div>
        <div class="flex mb-16 min-w-52 justify-center h-[3.5rem]"><img src="/images/tieups/nsewhite.png" class="mx-16 object-cover w-70" alt="Tieup Logo"></div>
        <div class="flex mb-16 min-w-52 justify-center h-[3.5rem]"><img src="/images/tieups/sebiwhite.png" class="mx-16 object-cover w-70" alt="Tieup Logo"></div>
        <div class="flex mb-16 min-w-52 justify-center h-[3.5rem]"><img src="/images/tieups/accordwhite.png" class="mx-16 object-cover w-70" alt="Tieup Logo"></div>
      </Marquee>
      <Marquee speed={40} pauseOnHover gradient={false}>
        <!-- identical 4 logos, second row -->
      </Marquee>
    </div>
  </div>
</div>
```

## Logos (exact, in order, both rows identical)
1. `/images/tieups/bsewhite.png` — BSE (Bombay Stock Exchange)
2. `/images/tieups/nsewhite.png` — NSE (National Stock Exchange)
3. `/images/tieups/sebiwhite.png` — SEBI
4. `/images/tieups/accordwhite.png` — Accord

## Implementation notes
- `react-fast-marquee`'s `<Marquee>` component handles the infinite-loop duplication internally — just pass the 4 logo `<img>`s as children, no need to manually duplicate them.
- `speed={40}` is an approximation to match the observed `~33s` full-loop duration at typical container width; adjust visually against the reference screenshot if it looks off.
- `pauseOnHover` prop matches the site's pause-on-hover CSS var behavior.
- Container: dark rounded card `bg-[#0d0d0d] rounded-3xl` wrapping the heading + both marquee rows.

## Responsive behavior
- Heading scales `text-5xl` → `md:text-7xl`; paragraph `text-sm` → `md:text-xl`.
- Marquee itself is inherently responsive (scrolls full container width at any viewport size) — no special mobile handling needed beyond container padding (`px-14`, reduce on mobile if it feels cramped).
