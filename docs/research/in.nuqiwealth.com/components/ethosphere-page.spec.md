# Ethosphere Page Specification

## Overview
- **Target file:** `src/app/ethosphere/page.tsx` (route: `/ethosphere`)
- **Reuse:** Import the existing `Header` and `Footer` components — do not rebuild them.
- **Interaction model:** click-driven horizontal carousel (prev/next arrow buttons, mirrors the `overflow-x-scroll` pattern) + decorative year/month filter dropdowns and a grid/list view toggle. The filters and view toggle are NOT wired to real filtering logic on the live site's visible behavior (only one edition list was observed regardless of dropdown state) — implement them as visual-only controls (dropdowns showing "2026" / "All Month", toggle buttons for grid vs list icon) that don't need to actually filter data. Do not build a fake filtering backend for this — out of scope per project defaults (mock data for demo, no real backend logic beyond what's visibly needed).

## Page markup
```html
<div class="max-w-screen">
  <div class="h-[10rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
    <h2 class="text-5xl md:text-7xl pb-5 mt-30 font-poppins font-medium leading-tight tracking-wide text-[#57c0af]">Ethosphere</h2>
    <p class="max-w-full mx-4 sm:mx-8 lg:mx-auto px-4 sm:px-8 lg:px-12 font-poppins text-center leading-relaxed text-white text-sm sm:text-base lg:text-lg">The hub for NUQI's pioneering research and insights</p>
  </div>
  <div class="flex flex-col justify-center items-center mt-20 mx-4">
    <div class="w-full flex flex-row justify-center items-center gap-1 sm:gap-5 container mb-4">
      <!-- Year dropdown (decorative, shows "2026") -->
      <button class="flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm w-fit h-8">
        <div class="flex flex-row rounded-2xl items-center hover:bg-[#57c0af]">2026 <ChevronDown class="w-5 h-5" /></div>
      </button>
      <!-- Month dropdown (decorative, shows "All Month") -->
      <button class="flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm w-fit h-8 mr-2">
        <div class="flex flex-row rounded-2xl items-center hover:bg-[#57c0af] text-nowrap">All Month <ChevronDown class="w-5 h-5" /></div>
      </button>
      <!-- grid/list view toggle, right-aligned -->
      <div class="flex items-center justify-center space-x-4 ml-auto">
        <button class="p-2 text-black bg-white rounded-md"><Grid3x3 class="w-6 h-4 lg:h-6" /></button>
        <button class="p-2 text-black bg-white rounded-md"><div class="text-white text-xs font-medium bg-black p-1 rounded-lg"><ListIcon class="w-6 h-4 lg:h-6" /></div></button>
      </div>
    </div>
    <div class="relative w-full">
      <div class="flex w-full overflow-x-scroll overscroll-x-auto py-3 pb-10 scroll-smooth [scrollbar-width:none]">
        <div class="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
          <!-- one EditionCard per item, see below -->
        </div>
      </div>
      <div class="flex justify-center gap-5">
        <button class="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"><ArrowLeft class="h-6 w-6 text-gray-500" /></button>
        <button class="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"><ArrowRight class="h-6 w-6 text-gray-500" /></button>
      </div>
    </div>
  </div>
</div>
```

## Edition card markup (per item)
```html
<button class="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-96 w-60 md:h-[28rem] md:w-[18rem] overflow-hidden flex flex-col items-start justify-start relative z-10 hover:shadow-[inset_0_0_20px_#0dd3ff] transition-all duration-300 ease-in-out">
  <div class="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none"></div>
  <div class="relative z-40 p-4">
    <p class="text-white text-xs font-medium bg-black p-1 rounded-lg inline-block">92nd edition  July 13, 2026</p>
    <p class="text-white text-xs md:text-sm font-normal text-left mt-2 uppercase">LET THEM EAT CAKE</p>
    <p class="text-[#57c0af] text-xs font-extralight mt-2">Read More</p>
  </div>
  <img class="object-cover h-full absolute z-10 inset-0 transition-opacity duration-400 hover:opacity-100 hover:blur-sm" src="/images/etho/92.png" alt="NUQI 2025 Ethosphere : 92nd Edition">
</button>
```
Cards scroll horizontally (`overflow-x-scroll`); the Prev/Next arrow buttons should scroll the container (e.g. `scrollBy({ left: -300, behavior: 'smooth' })`) rather than paginate discrete slides — this matches the live site's native-scroll-with-buttons pattern (no dot indicators, no fixed "pages"). Prev button shows `disabled` styling at scroll position 0 — you can approximate this by tracking scroll position via a scroll listener, or simply leave both buttons always-enabled if that's simpler (minor fidelity gap, acceptable).

## All 23 editions (exact content, in DESCENDING order as shown — newest first)
| Image | Edition label | Title |
|---|---|---|
| `/images/etho/92.png` | 92nd edition July 13, 2026 | LET THEM EAT CAKE |
| `/images/etho/91.png` | 91st edition June 29, 2026 | NOTHING IS LOST: YELLOW GOLD AND BLACK GOLD ARE TRANSFORMING |
| `/images/etho/90.png` | 90th edition June 22, 2026 | TOP 50 COMPANIES: NEW SUMMER, NEW HITS! |
| `/images/etho/89.png` | 89th edition June 15, 2026 | WHO WILL BRING DOWN THE BANK OF JAPAN? |
| `/images/etho/88.png` | 88th edition June 8, 2026 | SHOULD THE SUPERGIANTS BE FOLLOWED ALL THE WAY INTO SPACE? |
| `/images/etho/87.png` | 87th edition June 1, 2026 | THE GREAT ANAESTHESIA OF VOLATILITY |
| `/images/etho/86.png` | 86th edition May 25, 2026 | THE YIELD CURVE HAS NOT YET PASSED THE BATON |
| `/images/etho/85.png` | 85th edition May 11, 2026 | CAN VALUATIONS RISE ANY FURTHER? |
| `/images/etho/84.png` | 84th edition April 27, 2026 | HAVE LUXURY GOODS BEEN SHELVED? |
| `/images/etho/83.png` | 83rd edition April 20, 2026 | THE ADVANTAGE GOES TO THOSE WITH A SLICK TONGUE |
| `/images/etho/82.png` | 82nd edition April 13, 2026 | HOW TO AVOID FALLING INTO THE DOLLAR'S BULL TRAP? |
| `/images/etho/81.png` | 81st edition March 30, 2026 | WHAT IF THE WAR LASTED A LONG TIME? |
| `/images/etho/80.png` | 80th edition March 23, 2026 | BETWEEN CRISIS AND OPTIMISM, PORTFOLIOS SWING |
| `/images/etho/79.png` | 79th edition March 16, 2026 | ARE YOU READY FOR THE FIREWORKS? |
| `/images/etho/78.png` | 78th edition March 02, 2026 | WILL BANKS BE AFFECTED BY THE PRIVATE CREDIT CRISIS? |
| `/images/etho/77.png` | 77th edition February 23, 2026 | NORWAY IS ON THE VERGE OF A BOREAL PERFORMANCE |
| `/images/etho/76.png` | 76th edition February 16, 2026 | HOW MUCH WEIGHT SHOULD BE GIVEN TO EMERGING MARKETS? |
| `/images/etho/75.png` | 75th edition February 9, 2026 | AT THE HEART OF PROGRESS LIES THE ATOM |
| `/images/etho/74.png` | 74th edition February 02, 2026 | THE AWAKENING OF BARBAROSSA |
| `/images/etho/73.png` | 73rd edition January 27, 2026 | VIETNAM, AN AMBITION BEYOND BORDERS |
| `/images/etho/72.png` | 72nd edition January 19, 2026 | THE CURRENCY WALTZ HAS NOT YET BEGUN |
| `/images/etho/71.png` | 71st edition January 12, 2026 | THE COPPER CRUNCH AND THE WALL OF MEMORY |
| `/images/etho/70.png` | 70th edition January 05, 2026 | 2026 OUTLOOK: THE WIND IS RISING, BUT THE CREW IS READY |

`alt` text pattern: `NUQI 2025 Ethosphere : {Nth} Edition` (note: live site literally says "2025" in the alt text despite 2026 dates — preserve this as-is, it's the live site's own inconsistency, not something to "fix").

"Read More" links have no real destination (each is a `<p>`, not an `<a>`, on the live site) — render as plain text, not a link.

## Assets / Icons
- 23 images already downloaded to `public/images/etho/70.png` through `92.png`
- Icons: `ChevronDown`, `Grid3x3`, `List` (aliased if needed to avoid name clash), `ArrowLeft` (or `ArrowNarrowLeft`-style — lucide's `ArrowLeft` is the closest equivalent), `ArrowRight` from `lucide-react`

## Responsive behavior
- Heading: `text-5xl md:text-7xl`.
- Cards: `h-96 w-60` on mobile, `md:h-[28rem] md:w-[18rem]` on desktop — horizontal scroll works at any width via native `overflow-x-scroll`.
