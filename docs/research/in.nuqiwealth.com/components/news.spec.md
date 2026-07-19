# Nuqi in the News Carousel Specification

## Overview
- **Target file:** `src/components/News.tsx` (client component — carousel state)
- **Screenshot:** `docs/design-references/in.nuqiwealth.com/sec-news.png`
- **Interaction model:** click-driven carousel, NOT looping (the live site's Prev button is `disabled` at the first slide — replicate this: disable Prev when at index 0, disable/hide Next when at the last possible position).

The live site uses Swiper.js; you do NOT need the Swiper library — a simple `useState` index + CSS transform/scroll is sufficient and matches the visual result (3 cards visible, ~373px each, 24px gap).

## Section markup
```html
<div class="w-full max-w-[1200px] mx-auto relative">
  <h2 class="text-3xl text-[#57c0af] font-poppins leading-6 tracking-wide mb-10 text-center lg:text-3xl">
    <span class="text-white">Nuqi</span> in the News
  </h2>
  <div class="relative mx-4">
    <div class="overflow-hidden">
      <div class="flex transition-transform duration-500" style="gap: 24px;">
        <!-- one NewsCard per item, width ~373px, flex-shrink-0 -->
      </div>
    </div>
    <div class="absolute left-0 right-0 lg:right-36 lg:left-36 bottom-[-80px] flex justify-center items-center gap-5">
      <button aria-label="Previous Slide" disabled class="h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-400 cursor-not-allowed"><span class="text-black text-3xl font-bold">←</span></button>
      <button aria-label="Next Slide" class="h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 bg-[#57c0af] hover:bg-cyan-300"><span class="text-black text-3xl font-bold">→</span></button>
    </div>
  </div>
</div>
```
Prev button style toggles between disabled (`bg-gray-400 cursor-not-allowed`, `disabled` attr) at index 0, and active (`bg-[#57c0af] hover:bg-cyan-300`) otherwise. Same logic mirrored for Next at the last index.

## Card markup (per item)
```html
<div class="flex flex-col bg-gradient-to-b from-[#1d1d1f] to-[#0d0d0d] border border-[#44464a] rounded-[10px] hover:!bg-black hover:shadow-[inset_0_0_5px_#069494] transition-all duration-300 ease-in-out" style="width: 373px;">
  <div class="flex flex-col items-center grow px-12 pt-11 pb-10 font-poppins leading-tight max-md:px-5 max-md:mt-10">
    <img src="/images/news/dfsa-license-1.jpg" alt="Nuqi Digital Wealth DFSA license announcement" class="object-contain self-stretch w-full aspect-[3.28]">
    <div class="mt-3 text-center text-white" style="min-height: 4rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">Nuqi Digital Wealth attains DFSA license</div>
    <div class="-mt-5 underline"><a href="https://gulfnews.com/business/corporate-news/nuqi-digital-wealth-attains-dfsa-license-1.1705932392422" target="_blank" rel="noopener noreferrer" class="text-[#57c0af]">Learn more</a></div>
  </div>
</div>
```

## All 4 news items, in order
| Image | Headline | Link |
|---|---|---|
| `/images/news/dfsa-license-1.jpg` | Nuqi Digital Wealth attains DFSA license | https://gulfnews.com/business/corporate-news/nuqi-digital-wealth-attains-dfsa-license-1.1705932392422 |
| `/images/news/discover-nuqi.jpg` | Discover NUQI WEALTH | https://www.linkedin.com/posts/difc_nuqiwealth-wechosedifc-activity-7160164331937017857-U_1H/?utm_source=share&utm_medium=member_desktop |
| `/images/news/dfsa-license-2.jpg` | Nuqi Digital Wealth secures DFSA license | https://www.zawya.com/en/business/fintech/nuqi-digital-wealth-secures-dfsa-licence-spinmed8 |
| `/images/news/khaleeji.png` | Nuqi Digital wealth granted DFSA license | https://www.khaleejtimes.com/kt-network/nuqi-digital-wealth-granted-dfsa-licence |

Note: 3 of 4 images were originally served from `cdn.builder.io` and have been mirrored locally to `/images/news/*.jpg`; the 4th (`khaleeji.png`) was already same-origin.

## Behavior implementation notes
- `useState` for `activeIndex` (0 to `items.length - visibleCount`). With 4 items and ~3 visible on desktop, max index is 1 (two positions: showing items 1-3, or 2-4).
- On mobile (1 card visible), max index is 3.
- Links open in new tab (`target="_blank" rel="noopener noreferrer"`).

## Responsive behavior
- Desktop: 3 cards visible (`max-md:px-5` suggests padding tightens on mobile). Reduce to 1 card visible on mobile with the same card component, adjusting `visibleCount` and disabled-state math accordingly.
