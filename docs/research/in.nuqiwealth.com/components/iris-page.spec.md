# IRIS Page Specification

## Overview
- **Target file:** `src/app/iris/page.tsx` (route: `/iris`)
- **Reuse:** Import the existing `Header` and `Footer` components — do not rebuild them.
- **Interaction model:** static page. The stock table is intentionally blurred with a "Subscribe to Access" paywall overlay on the LIVE site itself (this is not a bug to fix — replicate it exactly, including the blur). No real backend/live stock data — use the exact mock values below (already what the live site displays, presumably placeholder/demo data).

## Page markup
```html
<section class="py-5 sm:py-16 lg:py-1">
  <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div class="max-w-3xl mx-auto text-center">
      <h2 class="text-2xl -mt-1 font-poppins pb-5 font-medium leading-tight tracking-wide text-[#57c0af] sm:text-3xl lg:text-2xl">IRIS</h2>
      <p class="max-w-full font-poppins text-5xl leading-relaxed text-white">Invest ethically with IRIS</p>
    </div>
  </div>
  <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div class="max-w-3xl mx-auto text-center lg:text-left">
      <h2 class="text-xl font-poppins sm:text-4xl lg:text-3xl font-medium leading-tight text-[#57c0af] sm:text-center mt-10">
        <span class="text-white">Trending</span> Ethical Stocks
      </h2>
    </div>
  </div>
  <div class="flex md:container py-10 w-full">
    <div class="w-full md:px-8 px-3">
      <div class="rounded-2xl -mt-20 flex flex-col border shadow-md text-white relative">
        <div class="relative w-full overflow-auto">
          <table class="w-full caption-bottom text-sm">
            <thead class="[&_tr]:border-b font-poppins">
              <tr class="border-b">
                <th class="px-4 py-2 text-left align-middle font-medium">
                  <div class="flex items-center my-3"><p class="text-center text-lg text-[#57c0af]">Name</p><ArrowDownUp class="h-4 w-4 ml-1" /></div>
                </th>
                <th class="px-4 py-2 text-left align-middle font-medium">
                  <div class="flex items-center"><p class="text-center text-lg text-[#57c0af]">Price</p><ArrowDownUp class="h-4 w-4 ml-1" /></div>
                </th>
                <th class="px-4 py-2 align-middle font-medium text-center underline text-lg text-[#57c0af] pr-10 whitespace-nowrap">1D Change</th>
                <th class="px-4 py-2 align-middle font-medium text-center underline text-lg text-[#57c0af] pr-16 whitespace-nowrap">1W Change</th>
                <th class="px-4 py-2 align-middle font-medium text-center underline text-lg text-[#57c0af] pr-16 whitespace-nowrap">1M Change</th>
              </tr>
            </thead>
            <tbody class="[&_tr:last-child]:border-0 w-full">
              <!-- one row per stock, class="border-b blur-sm select-none pointer-events-none" on every row -->
            </tbody>
          </table>
        </div>
        <!-- paywall overlay -->
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-black/60 rounded-2xl">
          <Lock class="h-10 w-10 text-[#57c0af] mb-3" />
          <p class="text-white font-bold text-xl mb-4">Subscribe to Access</p>
          <button class="inline-flex h-12 px-6 items-center justify-center rounded-md border border-[#57c0af] bg-[#57c0af] text-black font-semibold text-sm md:text-base">
            <Lock class="mr-2 h-5 w-5" />Sign-Up for free and unlock
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
```
Icons: `ArrowDownUp`, `Lock` from `lucide-react` (the live site's lock icon is a custom inline SVG — `Lock` from lucide-react is visually equivalent, use it).

## Table rows (exact mock data, in order)
| Name | Price | 1D Change | 1W Change | 1M Change | Change color |
|---|---|---|---|---|---|
| Reliance Industries Ltd | $ 2,845.6 | $ 3,024.5 | $ 2,756.8 | 1.24 % | green (`text-green-500`) |
| Tata Consultancy Services | $ 3,621.3 | $ 3,780 | $ 3,520 | -0.87 % | red (`text-red-500`) |
| HDFC Bank Limited | $ 1,724.85 | $ 1,798.5 | $ 1,680 | 0.56 % | green |
| Infosys Limited | $ 1,456.75 | $ 1,512.3 | $ 1,398.5 | 2.31 % | green |

Each row: `<td>` for Name (font-medium), Price (font-semibold, whitespace-nowrap), 1D/1W Change (text-center, whitespace-nowrap — these two columns show dollar figures, NOT percentages, matching the live site exactly even though headers say "Change"), 1M Change (`text-lg font-bold whitespace-nowrap` + green/red color, this one IS a percentage). Every `<tr>` has `blur-sm select-none pointer-events-none` classes — the blur is permanent/always-on (not hover-triggered), matching the paywall.

## Assets / Icons
- Icons: `ArrowDownUp`, `Lock` from `lucide-react`

## Responsive behavior
- Heading: `text-2xl sm:text-3xl lg:text-2xl` for "IRIS" eyebrow; `text-5xl` for main heading (no responsive scaling observed on the tagline itself).
- Table wrapper: `overflow-auto` for horizontal scroll on narrow viewports.
- "Trending Ethical Stocks" heading: centered on mobile/tablet (`sm:text-center`), left-aligned intent at `lg:` per the `lg:text-left` on its container (in practice it renders centered at all captured widths — replicate the classes as-is).
