# Hero Section Specification

## Overview
- **Target file:** `src/components/Hero.tsx` (client component — auto-crossfade timer + dot state)
- **Screenshot:** `docs/design-references/in.nuqiwealth.com/sec-hero.png`
- **Interaction model:** time-driven (auto background crossfade every ~5s) + click-driven (dot override jumps to a slide and resets the timer)

## Source markup (Tailwind, reproduce literally as JSX)
```html
<section class="relative h-screen w-full flex items-center overflow-hidden bg-black">
  <div class="absolute inset-0 z-0">
    <!-- 4 layers, absolutely stacked, only one has opacity-100 (activeIndex), rest opacity-0 -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale transition-opacity duration-[2000ms] ease-in-out will-change-transform"
         style="background-image: url('/images/hero/mumbai-birds.jpg')"></div>
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale transition-opacity duration-[2000ms] ease-in-out will-change-transform"
         style="background-image: url('/images/hero/india.jpeg')"></div>
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale transition-opacity duration-[2000ms] ease-in-out will-change-transform"
         style="background-image: url('/images/hero/pen.png')"></div>
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale transition-opacity duration-[2000ms] ease-in-out will-change-transform"
         style="background-image: url('/images/hero/stone.png')"></div>
  </div>
  <div class="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
    <div class="max-w-4xl animate-fade-in-up">
      <div class="flex items-center gap-4 mb-8 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
        <span class="flex h-px w-12 bg-[#57c0af]"></span>
        <span class="text-[#57c0af] uppercase tracking-[0.3em] text-xs font-bold">The Gold Collar Life</span>
      </div>
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.95] tracking-tight">
        INDIA's First Ethical <br>
        <span class="italic font-normal text-[#57c0af]">Investment Advisory App</span>
      </h1>
      <p class="text-lg md:text-xl text-gray-400 leading-relaxed mb-12 max-w-xl border-l border-white/10 pl-8 backdrop-blur-sm">
        Nuqi delivers sustainable growth, prosperity, and financial security through innovative strategies and expert guidance, tailored specifically to your aspirations.
      </p>
      <div class="flex flex-wrap gap-6 my-6 items-center">
        <a href="#explore-solutions" class="group relative px-6 py-5 border border-black bg-[#57c0af] text-black overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_12px_rgba(13,211,255,0.5)] hover:scale-105 active:scale-95">
          <div class="absolute inset-0 w-full h-full bg-[#57c0af] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out"></div>
          <span class="relative z-10 font-bold tracking-widest text-xs uppercase flex items-center gap-2 group-hover:text-black transition-colors">
            Explore Solutions <ArrowRight size={14} class="group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </a>
        <a href="/ContactsPage" class="group relative px-5 py-4 border border-[#57c0af] text-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_12px_rgba(13,211,255,0.5)] hover:scale-105 active:scale-95 inline-block">
          <div class="absolute inset-0 bg-[#57c0af]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span class="relative z-10 font-medium tracking-widest text-xs uppercase group-hover:text-[#57C0AF] transition-colors">Contact Our Team</span>
        </a>
      </div>
    </div>
  </div>
  <!-- dot nav, bottom-right -->
  <div class="absolute bottom-12 right-12 z-20 flex gap-3">
    <!-- active dot: h-1 w-8 bg-[#57c0af] shadow-[0_0_10px_#0dd3ff]; inactive: h-1 w-2 bg-white/20 hover:bg-white/40; all: rounded-full transition-all duration-500 hover:h-2 -->
    <button aria-label="Go to slide 1" />
    <button aria-label="Go to slide 2" />
    <button aria-label="Go to slide 3" />
    <button aria-label="Go to slide 4" />
  </div>
  <!-- scroll indicator, bottom-center, decorative only -->
  <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30 animate-float cursor-pointer hover:text-[#57c0af] transition-colors group">
    <div class="h-12 w-px bg-gradient-to-b from-transparent via-current to-transparent group-hover:via-[#57c0af] transition-colors"></div>
    <span class="text-[10px] uppercase tracking-[0.3em] group-hover:tracking-[0.5em] transition-all duration-500">Scroll</span>
  </div>
</section>
```

## Behavior implementation notes
- Use `useState` for `activeIndex` (0-3) and `useEffect` with `setInterval` (~5000ms) to auto-advance `(i + 1) % 4`. Clear interval on unmount.
- Clicking a dot sets `activeIndex` directly (ideally also resets/restarts the interval timer so it doesn't immediately jump again).
- Each background layer's `opacity` class is `opacity-100` when `index === activeIndex`, else `opacity-0`. Keep the `transition-opacity duration-[2000ms] ease-in-out` on all layers for the crossfade.
- `animate-float` — a simple custom keyframe utility (gentle up/down bob), add to `globals.css` if not present: `@keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } } .animate-float { animation: float 3s ease-in-out infinite; }`.
- The `animate-[fadeIn_1s_ease-out_0.5s_forwards]` inline arbitrary animation uses the already-defined `fadeIn` keyframe in globals.css.

## Assets (already downloaded)
- `/images/hero/mumbai-birds.jpg` (Unsplash birds-over-Mumbai skyline stock photo)
- `/images/hero/india.jpeg`
- `/images/hero/pen.png`
- `/images/hero/stone.png`
- Icons: `ArrowRight` from `lucide-react`

## Responsive behavior
- `text-5xl` on mobile scaling up to `md:text-7xl` and `lg:text-8xl` — heading scales down gracefully at small widths, no layout restructuring needed (single column always).
- Buttons wrap (`flex-wrap`) on narrow viewports.
