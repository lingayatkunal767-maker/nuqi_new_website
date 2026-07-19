# Nuqi Curated Equity Portfolios (CEP) Carousel Specification

## Overview
- **Target file:** `src/components/CepCarousel.tsx` (client component — carousel state)
- **Screenshot:** `docs/design-references/in.nuqiwealth.com/sec-cep.png`
- **Interaction model:** click-driven carousel (prev/next arrow buttons + dot pagination). The live DOM triplicates the 4 unique cards into 12 nodes purely as a naive infinite-scroll trick — DO NOT replicate that duplication. Implement a real carousel over the 4 unique items: clicking Next/dot-N slides to show that item (and ideally the next 2-3 as a peeking row, matching `width: 320px` cards with `gap: 24px` in a `flex` track that translates via `transform: translateX()`).

## Section wrapper markup
```html
<section id="advisory">
  <div id="explore-solution" class="scroll-mt-24">
    <h6 class="mb-5 text-center mt-20 font-poppins tracking-wide leading-9 text-3xl pb-1 sm:text-3xl font-medium lg:text-3xl">
      <span class="text-white text-3xl">Nuqi</span> <span class="text-[#57c0af] text-3xl">Curated Equity Portfolios (CEP)</span>
    </h6>
    <p class="max-w-3xl mx-auto text-center font-poppins tracking-wide leading-6 lg:text-lg text-[#b3b3b3] mb-6">Our Nuqi India Basket offers a variety of curated investment themes, each catering to specific risk appetite and investment goals.</p>
    <section class="py-12 relative overflow-hidden" style="background-image: url('/images/explore/services-default.png'); background-size: cover; background-position: center center;">
      <div class="absolute inset-0 bg-black/35 pointer-events-none"></div>
      <div class="relative z-10">
        <div class="mx-auto px-6 relative" style="max-width: 1104px;">
          <button aria-label="Previous slide" class="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-[#57c0af]/20 hover:bg-[#57c0af]/40 backdrop-blur-sm border border-[#57c0af]/40 p-3 rounded-full transition-all duration-300 hover:scale-110"><ChevronLeft class="text-[#57c0af]" /></button>
          <button aria-label="Next slide" class="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-[#57c0af]/20 hover:bg-[#57c0af]/40 backdrop-blur-sm border border-[#57c0af]/40 p-3 rounded-full transition-all duration-300 hover:scale-110"><ChevronRight class="text-[#57c0af]" /></button>
          <div class="overflow-visible px-6">
            <div class="relative overflow-hidden">
              <div class="flex transition-transform duration-500" style="gap: 24px; transform: translateX(calc(-1 * var(--offset)))">
                <!-- one CepCard per unique item, width 320px, min-height 450px -->
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center gap-2 mt-8">
          <!-- one dot per unique item; active: h-2 w-8 bg-[#57c0af]; inactive: h-2 w-2 bg-white/30 hover:bg-white/50; all rounded-full transition-all duration-300 -->
        </div>
      </div>
    </section>
  </div>
</section>
```
Note: `/images/explore/services-default.png` was not in the original asset list — if the download 404s, fall back to a plain `bg-black` on the inner `<section>` (it's a subtle background texture, not critical to fidelity).

## Card markup (per item)
```html
<div class="group flex flex-col justify-between bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-[1] cursor-pointer flex-shrink-0 transition-all duration-300"
     style="width: 320px; min-height: 450px;">
  <div class="relative z-10 flex flex-col justify-between h-full">
    <div>
      <div class="mb-6 transition-transform duration-500 group-hover:scale-110 origin-left">
        <img src="/images/cep/future-of-healthcare.png" alt="Future of Healthcare" class="w-10 h-10">
      </div>
      <h3 class="text-xl font-normal mb-6 leading-tight" style="color: {THEME_COLOR}">Future of Healthcare</h3>
      <p class="text-sm text-[#CCCCCC] font-light leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">Capitalize on India's healthcare sector, focusing on pharma, medical equipment, health tech, and wellness companies.</p>
    </div>
    <div class="inline-flex items-center text-sm font-bold tracking-wide mt-6 transition-all group/link cursor-pointer" style="color: {THEME_COLOR}">
      <span class="relative">Read more<span class="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full"></span></span>
      <ArrowRight size={14} class="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
    </div>
  </div>
</div>
```
Card hover glow: on hover, `border-color` and `box-shadow` should shift to the card's theme color (`0 10px 25px -12px {THEME_COLOR}`) — implement via inline CSS custom property `--card-theme` + a small `.card-hover-glow:hover { border-color: var(--card-theme); box-shadow: 0 10px 25px -12px var(--card-theme); }` utility in globals.css, matching the site's own approach.

## The 4 unique cards (exact content, in order)
| Theme color | Image | Title | Description |
|---|---|---|---|
| `orange` (#FFA500) | `/images/cep/future-of-healthcare.png` | Future of Healthcare | Capitalize on India's healthcare sector, focusing on pharma, medical equipment, health tech, and wellness companies. |
| `#45DFB1` | `/images/cep/sustainable-future-esg.png` | Sustainable Future ESG | Invest in companies committed to environmental responsibility, social impact, and good governance practices. |
| `violet` (#EE82EE) | `/images/cep/recession-proofers.png` | Recession Proofers | Ride out economic downturns with investments in essential sectors like healthcare, consumer staples, utilities, and education. |
| `#0dd3ff` | `/images/cep/inflation-beaters.png` | Inflation beaters | Protect your wealth against rising prices by investing in companies with strong pricing power and stable cash flows. |

## Assets / Icons
- `/images/cep/future-of-healthcare.png`, `/images/cep/sustainable-future-esg.png`, `/images/cep/recession-proofers.png`, `/images/cep/inflation-beaters.png`
- Icons: `ChevronLeft`, `ChevronRight`, `ArrowRight` from `lucide-react`

## Behavior implementation notes
- `useState` for `activeIndex` (0-3). Next/Prev buttons increment/decrement with wraparound (`(i + 1) % 4`, `(i - 1 + 4) % 4`). Dots jump directly to index.
- Slide by translating the flex track: show ~3 cards at a time on desktop (track width > container, `overflow-hidden` wrapper clips it), single card peek on mobile.
- Simpler acceptable alternative: horizontal `overflow-x-auto` snap-scroll track where Next/Prev call `scrollBy` — either approach is fine as long as clicking Next/Prev visibly advances and dots reflect the current position.

## Responsive behavior
- Desktop: 3 cards visible per view (320px cards, 24px gap, ~1104px container ≈ 3.2 cards).
- Mobile: reduce to 1 card peek per view, same card component, container `px-6`.
