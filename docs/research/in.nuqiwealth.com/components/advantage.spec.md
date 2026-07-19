# Advantage ("Why NUQI Digital Wealth?") Section Specification

## Overview
- **Target file:** `src/components/Advantage.tsx`
- **Screenshot:** `docs/design-references/in.nuqiwealth.com/sec-advantage.png`
- **Interaction model:** static grid layout, hover-only micro-interactions on cards, buttons, and the newsletter CTA.

## Source markup (Tailwind, reproduce literally as JSX)
```html
<section id="advisory" class="w-full bg-black text-zinc-200 px-6 md:px-20 py-32 font-poppins">
  <div class="max-w-7xl mx-auto mb-20 grid md:grid-cols-2 gap-10">
    <div class="space-y-4">
      <p class="text-sm tracking-[0.2em] text-[#57c0af]">THE ADVANTAGE</p>
      <h2 class="text-4xl md:text-5xl font-semibold leading-tight">Why NUQI <br> Digital Wealth?</h2>
    </div>
    <p class="text-lg text-zinc-400 mt-8 leading-relaxed">We combine the intelligence of modern fintech with institution-grade safety, transparency and global accessibility — giving investors a platform that is secure, informed and aligned with long-term growth.</p>
  </div>
  <div class="max-w-7xl mx-auto border border-white/10 rounded-2xl overflow-hidden">
    <div class="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
      <!-- repeat this card block for each of the 6 cards below, changing number/icon/title/description -->
      <div class="p-10 relative group transition-all duration-300 hover:bg-white/[0.02] hover:-translate-y-[2px]">
        <span class="absolute top-6 right-10 text-4xl font-bold text-white/5">01</span>
        <div class="mb-6">
          <div class="w-12 h-12 rounded-full flex items-center justify-center border border-[#57c0af]/40 transition-all duration-300 group-hover:border-[#57c0af]/80 group-hover:shadow-[0_0_15px_rgba(13,211,255,0.25)] group-hover:scale-[1.07]">
            <ShieldCheck class="w-6 h-6 text-[#57c0af] transition-all duration-300 group-hover:text-[#57c0af]/90" />
          </div>
        </div>
        <h3 class="text-lg md:text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">Secure and Regulated</h3>
        <p class="text-zinc-400 leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">NUQI Digital Wealth operates under the robust oversight of SEBI regulations, ensuring smooth and compliant product offerings tailored to your requirements. With retail endorsement, NUQI lowers entry barriers, making quality investment opportunities more accessible.</p>
        <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#57c0af]/60 transition-all duration-500 group-hover:w-full"></div>
      </div>
      <!-- ... 5 more, see table below ... -->
    </div>
    <div class="p-10 md:p-16 flex flex-col items-start justify-center border-t border-white/10 space-y-8">
      <h3 class="text-2xl md:text-3xl font-light text-white max-w-3xl leading-relaxed text-left">Simplifying ethical compliance so businesses can operate <span class="text-[#57c0af] font-normal">responsibly and confidently.</span></h3>
      <form class="flex flex-col gap-4 w-full max-w-2xl">
        <div class="flex flex-col md:flex-row gap-4">
          <input type="email" placeholder="Enter your email address" class="flex-1 px-6 py-4 bg-transparent border border-white/20 rounded-full text-white placeholder:text-gray-500 focus:outline-none focus:border-[#57c0af] transition-colors">
          <button type="submit" class="px-8 py-4 bg-[#57c0af] hover:bg-[#48a894] text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(87,192,175,0.5)] flex items-center justify-center gap-2 whitespace-nowrap">Contact Us <span>→</span></button>
        </div>
      </form>
    </div>
  </div>
</section>
```

## All 6 cards (exact number, lucide icon, title, description)
| # | Icon (`lucide-react`) | Title | Description |
|---|---|---|---|
| 01 | `ShieldCheck` | Secure and Regulated | NUQI Digital Wealth operates under the robust oversight of SEBI regulations, ensuring smooth and compliant product offerings tailored to your requirements. With retail endorsement, NUQI lowers entry barriers, making quality investment opportunities more accessible. |
| 02 | `LineChart` | Tailored Equity Solutions | Gain access to 1,500+ carefully selected stocks, screened through a robust exclusion list of industries and financial ratios to ensure quality and alignment. Additionally, explore 18+ expertly curated equity portfolios tailored to meet diverse financial goals and strategies. |
| 03 | `Compass` | Portfolio Rebalancing | NUQI's expert team of advisors, alongside a supervisory panel, ensures portfolios are rebalanced every six months to maintain alignment with your investment goals and market conditions. |
| 04 | `Globe2` | Asset Diversification | Equity, ETFs, and Mutual Funds help spread your exposure across various asset classes, enhancing portfolio stability and potential returns. |
| 05 | `Cpu` | Robo Advisory | Utilize NUQI's AI-powered Robo Advisory to analyze industry trends and tailor recommendations to your unique risk profile and investment goals, enabling smarter, data-driven decisions. |
| 06 | `Globe` | Global Market Access (Tentative) | Gain access to 9+ global markets, supported by in-depth fundamental data, empowering informed investment decisions across international opportunities. |

Note: card 04's title says "Asset Diversification" but its description text is about "Equity, ETFs, and Mutual Funds..." (matches table above — this is correct per live site, not a typo to fix).

## Assets / Icons
- Lucide icons: `ShieldCheck`, `LineChart`, `Compass`, `Globe2`, `Cpu`, `Globe` — all `w-6 h-6 text-[#57c0af]`.
- Newsletter form has no real backend — implement `onSubmit` as a no-op `preventDefault` (mock/demo only, per scope defaults).

## Responsive behavior
- Grid: `grid md:grid-cols-2` for the 6 cards (2 columns from `md:` up, single column stacked below).
- Newsletter form: `flex-col md:flex-row` (stacked on mobile, inline on desktop).
- Top intro: `grid md:grid-cols-2` (heading left, paragraph right on desktop; stacked on mobile).
