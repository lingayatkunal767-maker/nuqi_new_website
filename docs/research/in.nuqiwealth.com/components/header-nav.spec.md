# Header / Nav + Nuqi Universe Panel Specification

## Overview
- **Target file:** `src/components/Header.tsx` (client component — has interactive state)
- **Screenshot:** `docs/design-references/in.nuqiwealth.com/sec-hero.png` (header visible at top)
- **Interaction model:** click-driven (Nuqi Universe slide-in panel, mobile hamburger drawer). Header itself is `position: fixed` and visually CONSTANT (no scroll-triggered style change).

## Source of truth
The live site is a Tailwind + Vite React app and ships raw Tailwind classes in its DOM. Reproduce the following markup as literally as possible, converting to JSX/TSX, swapping `<img src="/x.png">` to `next/image` or `<img>` with `/images/x.png` local paths, and wiring up the interactive state described below. Use `lucide-react` icons (already installed) for `Menu`, `X`, `ArrowUpRight`.

```html
<header class="fixed top-0 w-full h-[56px] z-50 bg-black backdrop-blur-xl bg-opacity-50 border-opacity-50 border-b-[1px] border-[#4d4d4d] shadow-lg">
  <div class="container mx-auto px-4 h-full flex items-center justify-between font-poppins">
    <div class="flex-shrink-0">
      <a class="block" href="/"><img src="/images/white-in-logo-cropped.png" alt="Nuqi Logo" class="h-8 sm:h-10 md:h-8 w-auto lg:ml-20 object-contain"></a>
    </div>
    <div class="hidden lg:flex flex-grow justify-center">
      <nav class="hidden md:flex tracking-wider font-poppins z-50">
        <ul class="flex items-center -space-x-4 tracking-wider text-white text-[26px]">
          <li class="px-4 relative"><a class="flex items-center gap-1 px-2 py-2 text-base text-xs transition text-white hover:text-[#57c0af] focus:outline-none" href="/">Advisory</a></li>
          <li class="px-4 relative"><a class="flex items-center gap-1 px-2 py-2 text-base text-xs transition text-white hover:text-[#57c0af] focus:outline-none" href="/digitalwealth">Prive</a></li>
          <li class="px-4"><a href="/iris" class="flex items-center gap-1 px-2 py-2 text-base text-xs text-white hover:text-[#57c0af]">IRIS</a></li>
          <li class="px-4"><a href="/ethosphere" class="flex items-center gap-1 px-2 py-2 text-base text-xs text-white hover:text-[#57c0af]">Ethosphere</a></li>
          <li class="px-4"><a href="/Disclosures" class="flex items-center gap-1 px-2 py-2 text-base text-xs text-white hover:text-[#57c0af]">Disclosures</a></li>
          <li class="px-4"><button type="button" class="flex items-center gap-1 px-2 py-2 text-xs text-white hover:text-[#57c0af] transition">Nuqi Universe</button></li>
        </ul>
      </nav>
    </div>
    <div class="flex items-center space-x-3 lg:space-x-4 lg:mr-5">
      <!-- mobile hamburger (lucide Menu icon, toggles lucide X when drawer open) -->
      <div class="lg:hidden order-3">
        <button type="button"><Menu class="h-6 w-6 text-white" /></button>
      </div>
      <!-- language/region selector: static flag button (India), no dropdown needed -->
      <div class="lg:hidden"><button class="flex h-10 items-center justify-between px-3 py-2 text-sm w-full bg-black text-white border border-[#57c0af] rounded-xl hover:bg-[#57c0af] hover:text-black transition-all duration-200"><img class="w-6 h-6 object-contain" src="/images/india.jpg" alt="India"></button></div>
      <div class="hidden lg:flex space-x-4 order-2">
        <a href="http://portal.nuqiwealth.in/" target="_blank" rel="noopener noreferrer"><button class="px-3 py-2 text-sm font-semibold text-white bg-transparent border border-[#57c0af] rounded-xl hover:bg-[#57c0af] hover:text-black">Log In/Sign Up</button></a>
        <div class="flex lg:ml-4"><button class="flex h-10 items-center justify-between px-3 py-2 text-sm w-full bg-black text-white border border-[#57c0af] rounded-xl hover:bg-[#57c0af] hover:text-black transition-all duration-200"><img class="w-6 h-6 object-contain" src="/images/india.jpg" alt="India"></button></div>
      </div>
    </div>
  </div>
</header>
```

## Nav links (exact, in order)
| Label | href |
|---|---|
| Advisory | `/` |
| Prive | `/digitalwealth` |
| IRIS | `/iris` |
| Ethosphere | `/ethosphere` |
| Disclosures | `/Disclosures` |
| Nuqi Universe (button, opens panel) | — |

Right side: "Log In/Sign Up" button → `http://portal.nuqiwealth.in/` (new tab), India flag selector (static, no dropdown functionality needed — decorative).

## Nuqi Universe overlay + panel (click-driven, state: `isUniverseOpen`)

Backdrop (click to close):
```html
<div class="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300" />  <!-- opacity-0 pointer-events-none when closed, opacity-100 when open -->
```

Panel (slides in from right, click X or backdrop to close):
```html
<div class="fixed top-0 right-0 h-full z-[60] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out"
     style="width: min(360px, 100vw); background: linear-gradient(rgb(10,26,20) 0%, rgb(5,5,5) 30%);">
     <!-- translate-x-full when closed, translate-x-0 when open -->
  <div class="flex-shrink-0 relative overflow-hidden bg-black">
    <img src="/images/wealth.png" aria-hidden class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none">
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 pointer-events-none"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"></div>
    <div class="relative flex items-center justify-end px-5" style="height: 56px;">
      <button class="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all" aria-label="Close"><X size={15} /></button>
    </div>
    <div class="relative px-5 pb-5">
      <p class="text-[#57c0af] text-[10px] font-poppins uppercase tracking-[0.2em] mb-1.5">Explore</p>
      <h2 class="text-white font-poppins font-bold text-xl leading-tight drop-shadow-md">Nuqi Universe</h2>
      <p class="text-white/70 text-xs mt-1 font-poppins">Discover the full Nuqi ecosystem</p>
      <div class="mt-4 h-[2px] w-10 bg-gradient-to-r from-[#57c0af] to-[#45a898] rounded-full"></div>
    </div>
  </div>
  <div class="flex-1 overflow-y-auto px-4 py-4 space-y-4">
    <!-- 2 link cards, identical structure, repeat for each: -->
    <a href="https://nuqigold.com/" class="group block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <div class="relative px-5 py-10 overflow-hidden">
        <img src="/images/universe-gold.png" aria-hidden class="absolute inset-0 w-full h-full object-cover pointer-events-none select-none">
        <div class="absolute inset-0 bg-black/35 pointer-events-none"></div>
        <div class="relative flex items-center justify-between">
          <img src="/images/NuqiGold-logo.png" alt="Nuqi Gold" class="h-7 w-auto max-w-[130px] object-contain" style="filter: brightness(0) invert(1);">
          <div class="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-200"><ArrowUpRight size={14} class="text-white/70 group-hover:text-white transition-colors" /></div>
        </div>
      </div>
      <div class="bg-[#0f1f18] border border-white/5 px-5 py-4">
        <p class="font-bold text-white font-poppins text-sm mb-1">Nuqi Gold</p>
        <p class="text-gray-400 text-xs leading-relaxed">Invest in gold the smart way — Nuqi Gold offers a seamless platform for fractional gold ownership backed by real assets.</p>
        <div class="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#57c0af] font-poppins group-hover:gap-2 transition-all duration-150">Visit site <ArrowUpRight size={11} /></div>
      </div>
    </a>
    <!-- second card: Nuqi Sukuk, href="https://nuqisukuk.com/", image /images/sukuk.png, logo /images/sukuk-logo.png, title "Nuqi Sukuk", desc "Nuqi Sukuk is a fractional and ethical sukuk marketplace built to democratize access to the global Islamic fixed-income market." -->
  </div>
  <div class="flex-shrink-0 px-5 py-3.5 border-t border-white/10 bg-black/40 flex items-center justify-between">
    <img src="/images/white-in-logo-cropped.png" alt="Nuqi" class="h-4 object-contain opacity-25">
    <span class="text-[10px] text-gray-600 font-poppins tracking-widest uppercase">More coming soon</span>
  </div>
</div>
```

## Mobile drawer (< lg breakpoint)
- Hamburger button (`Menu` icon) toggles a mobile nav — implement as a simple slide-down or off-canvas panel containing the same 5 nav links + "Nuqi Universe" trigger + "Log In/Sign Up" button. Icon swaps to `X` when open. Exact mobile drawer visual design wasn't captured beyond the toggle icon — use a clean dark dropdown panel consistent with the site's dark/teal palette (bg-black, border border-white/10, text-white, hover:text-[#57c0af]).

## Assets
- `/images/white-in-logo-cropped.png` (logo, used in header + universe panel footer)
- `/images/india.jpg` (flag icon)
- `/images/wealth.png`, `/images/universe-gold.png`, `/images/NuqiGold-logo.png`, `/images/sukuk.png`, `/images/sukuk-logo.png` (universe panel)
- Icons: `Menu`, `X`, `ArrowUpRight` from `lucide-react`

## Responsive behavior
- **Desktop (≥1024px, `lg:`):** full horizontal nav + Log In/Sign Up button + language selector visible (`hidden lg:flex`).
- **Mobile (<1024px):** nav hidden, hamburger + flag selector shown (`lg:hidden`).
- Universe panel is `width: min(360px, 100vw)` — full width on very small screens.
