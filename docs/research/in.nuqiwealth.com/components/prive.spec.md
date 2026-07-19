# Nuqi Prive (Intro + Offerings Carousel) Specification

This covers two adjacent sections. Build as two components: `PriveIntro.tsx` (static) and `PriveOfferings.tsx` (client, carousel) — both simple enough to fit one builder task.

## PriveIntro
- **Target file:** `src/components/PriveIntro.tsx`
- **Screenshot:** `docs/design-references/in.nuqiwealth.com/sec-prive-intro.png`
- **Interaction model:** static two-column layout with hover-only micro-interactions on the checklist rows.

```html
<section id="nuqiprive">
  <div class="flex gap-10 ml-5 max-md:mr-10 lg:ml-28 mt-32 items-center max-md:flex-col">
    <div class="flex flex-col w-[30%] ml-20 max-md:ml-0 max-md:w-full">
      <div class="self-stretch text-4xl md:text-6xl ml-5 mt-4 font-poppins tracking-normal leading-tight text-white max-md:mt-10 max-md:max-w-full max-md:text-3xl">
        <span class="text-white leading-tight">Nuqi </span>Prive
      </div>
      <div class="mt-6 text-3xl text-[#57c0af] font-poppins font-semibold ml-5">Tailored Solutions for Ultra-High Net Worth Individuals.</div>
    </div>
    <div class="order-2 md:order-1">
      <div class="space-y-4 w-full">
        <!-- repeat this row for each checklist item below -->
        <div class="group flex items-center gap-6 p-5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#57c0af]/30 transition-all duration-300">
          <div class="flex-shrink-0 w-6 h-6 rounded-full bg-[#57c0af]/10 flex items-center justify-center text-[#57c0af] group-hover:bg-[#57c0af] group-hover:text-black transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(13,211,255,0.4)]">
            <Check size={14} strokeWidth={3} />
          </div>
          <span class="text-gray-300 font-light text-lg group-hover:text-white transition-colors">Wealth management goes beyond numbers to protecting and growing legacies</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

Checklist items (exact text, in order):
1. Wealth management goes beyond numbers to protecting and growing legacies
2. Focused on fulfilling unique financial aspirations
3. NUQI Prive is the dedicated asset management division
4. Exclusively serves Ultra-High Net Worth Individuals (UHNI)
5. Delivers bespoke services with excellence and discretion

Icon: `Check` from `lucide-react`.

## PriveOfferings
- **Target file:** `src/components/PriveOfferings.tsx` (client component)
- **Screenshot:** `docs/design-references/in.nuqiwealth.com/sec-prive-offerings.png`
- **Interaction model:** click-driven carousel — IDENTICAL mechanism to the CEP carousel (`docs/research/in.nuqiwealth.com/components/cep-carousel.spec.md` — reuse the same carousel pattern/logic, prev/next buttons + dots). The live DOM triplicates 6 unique cards into 18 nodes for the same naive-loop reason — build a real carousel over the 6 unique items instead.

```html
<div id="services" class="scroll-mt-24">
  <h2 class="text-3xl text-center font-semibold font-poppins text-[#57c0af] ml-3 mt-32 mb-9 text-left">
    <span class="text-white text-3xl font-medium">Nuqi</span> <span class="text-[#57c0af] text-3xl font-medium">Prive Offerings</span>
  </h2>
  <section class="py-12 relative overflow-hidden mt-18" style="background-image: url('/images/explore/services-default.png'); background-size: cover; background-position: center center;">
    <div class="absolute inset-0 bg-black/35 pointer-events-none"></div>
    <div class="relative z-10">
      <div class="mx-auto px-6 relative" style="max-width: 1119px;">
        <button aria-label="Previous slide" class="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-[#57c0af]/20 hover:bg-[#57c0af]/40 backdrop-blur-sm border border-[#57c0af]/40 p-3 rounded-full transition-all duration-300 hover:scale-110"><ChevronLeft class="text-[#57c0af]" /></button>
        <button aria-label="Next slide" class="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-[#57c0af]/20 hover:bg-[#57c0af]/40 backdrop-blur-sm border border-[#57c0af]/40 p-3 rounded-full transition-all duration-300 hover:scale-110"><ChevronRight class="text-[#57c0af]" /></button>
        <div class="overflow-visible px-6"><div class="relative overflow-hidden">
          <div class="flex transition-transform duration-500" style="gap: 24px;"> <!-- track, translateX per activeIndex --> </div>
        </div></div>
      </div>
      <div class="flex justify-center gap-2 mt-8"> <!-- 6 dots, same style as CEP --> </div>
    </div>
  </section>
</div>
```

Card markup (per item), note `p-1` outer padding and inner `p-6` — slightly different from CEP cards (image is a GIF thumbnail, not an icon):
```html
<div class="group flex flex-col justify-between bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-1 hover:w-full cursor-pointer flex-shrink-0 transition-all duration-300" style="width: 325px; min-height: 200px;">
  <div class="relative z-10 flex flex-col justify-between">
    <div class="mr-3 items-center m-3 p-6 text-white">
      <div class="flex justify-center"><img src="/images/prive/arranging-custody.gif" alt="Arranging Custody" class="h-32 object-contain rounded-md"></div>
      <h3 class="text-xl font-normal mb-6 mt-4 leading-tight" style="color: {THEME_COLOR}">Arranging Custody</h3>
      <p class="text-sm text-[#CCCCCC] font-light leading-relaxed group-hover:text-white transition-colors duration-300">Ensure the secure and efficient custody of your assets through trusted custodial arrangements and state-of-the-art reporting, giving you peace of mind.</p>
    </div>
  </div>
</div>
```
Same `card-hover-glow` border/shadow hover treatment as CEP cards (reuse the utility class).

## The 6 unique cards (exact content, in order)
| Theme color | GIF | Title | Description |
|---|---|---|---|
| `orange` | `/images/prive/arranging-custody.gif` | Arranging Custody | Ensure the secure and efficient custody of your assets through trusted custodial arrangements and state-of-the-art reporting, giving you peace of mind. |
| `#45DFB1` | `/images/prive/arranging-deals.gif` | Arranging Deals in Investments | Explore exclusive opportunities with expertly arranged investment deals, spanning private equity, structured products, and global market access. |
| `violet` | `/images/prive/managing-assets.gif` | Managing Assets | Entrust your portfolio to our seasoned team, who implement a disciplined approach to asset allocation, balancing growth potential with prudent risk management. |
| `#0dd3ff` | `/images/prive/arranging-credit.gif` | Arranging Credit & Advising on Credit | Access personalized credit solutions and professional advice for structuring loans and credit facilities, ensuring liquidity while safeguarding your long-term goals. |
| `#e6b3d2` | `/images/prive/legacy-planning.gif` | Legacy Planning & Family Office Management | Comprehensive solutions to manage your legacy and family office requirements, ensuring that your wealth continues to serve future generations seamlessly. |
| `#57c0af` | `/images/prive/advising-financial-products.gif` | Advising on Financial Products | Receive expert guidance on a wide range of financial products, carefully tailored to align with your investment objectives, risk tolerance, and legacy planning requirements. |

## Assets / Icons
- `/images/prive/arranging-custody.gif`, `arranging-deals.gif`, `managing-assets.gif`, `arranging-credit.gif`, `legacy-planning.gif`, `advising-financial-products.gif`
- Icons: `Check`, `ChevronLeft`, `ChevronRight` from `lucide-react`

## Responsive behavior
- PriveIntro: `flex max-md:flex-col` — text column and checklist stack vertically on mobile, side-by-side on desktop.
- PriveOfferings carousel: same responsive approach as CEP (3-ish cards desktop, 1 peek mobile).
