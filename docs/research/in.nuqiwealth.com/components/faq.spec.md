# FAQ (Frequently Asked Questions) Section Specification

## Overview
- **Target file:** `src/components/Faq.tsx` (client component — accordion state)
- **Screenshot:** `docs/design-references/in.nuqiwealth.com/sec-faq.png`
- **Interaction model:** click-driven accordion. Each FAQ item toggles independently (verified via live DOM manipulation — no evidence of single-open-at-a-time behavior; treat every item as an independent boolean toggle).

## Section wrapper
```html
<div class="text-white mt-4 px-5 w-full">
  <h1 class="text-center pt-32 text-3xl text-[#57c0af] mb-7">
    <span class="text-white text-3xl md:text-4xl font-semibold font-poppins">Frequently Asked Questions </span> (FAQs)
  </h1>
  <div class="w-full min-h-full mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
    <div class="space-y-2"> <!-- left column: first 9 items --> </div>
    <div class="space-y-2 mt-0 p-0 gap-0"> <!-- right column: remaining 9 items --> </div>
  </div>
</div>
```

## Per-item markup
```html
<div class="p-2 md:p-4 bg-gradient-to-b from-zinc-900 to-black border border-zinc-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:border-[#57c0af] hover:shadow-[#57c0af]/20">
  <button class="w-full flex justify-between items-center text-left" aria-expanded="{open}">
    <h2 class="text-sm font-normal text-white pr-4">{question}</h2>
    <span class="text-[#57c0af] text-2xl font-light transition-transform duration-300 flex-shrink-0 {open ? 'rotate-45' : 'rotate-0'}">+</span>
  </button>
  <div class="overflow-hidden transition-all duration-300 ease-in-out {open ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}">
    <div class="text-[14px] leading-6 text-gray-300">{answer}</div>
  </div>
</div>
```
Transition easing: `cubic-bezier(0.4, 0, 0.2, 1)` (Tailwind's default `ease-in-out`). Icon rotates 45° (turns "+" into "×" visually) when expanded.

## All 18 FAQ items, in order (left column = items 1-9, right column = items 10-18)

**Left column:**
1. **What is Nuqi?** — NUQI is an independent advisory platform, licensed by SEBI in India aimed at both first-time investors starting their investment journey and seasoned investors looking to diversify their portfolio. NUQI deploys its in-house expertise to create portfolios tailored for specific investor profiles and investment themes. The platform uses multiple criteria to make a selection of Stocks, ETFs, Mutual funds, etc., with Social Equity, Ethical operations, Good Governance, and Environmental protection as core investment themes aimed towards Sustainable Growth.
2. **Why Invest through Nuqi?** — Access diverse portfolios featuring 1,500+ Indian stocks, along with ETFs and Mutual Funds. Access Ethical Mutual Funds for systematic investment planning and lump sum. Pre-designed portfolios by qualified investment advisors for long-term investing.
3. **Are there any hidden charges or commissions?** — No, there are no hidden charges, fees, or commissions. We prioritize transparency, and all costs are clearly communicated upfront. If you have any questions, our team is here to help. Your trust matters to us!
4. **Does Nuqi perform RISK profiling to understand your investment goals?** — YES, NUQI performs RISK profiling for all clients.
5. **Where can I invest?** — With NUQI, now you have the option to invest in select financial products in International markets. NUQI takes a cautious approach and presently will only recommend investment instruments that have been pre-screened and carry returns as per your risk profile.
6. **Can you set up a Regular Investment Plan through the Nuqi app?** — Yes.
7. **Does Nuqi offer investment options that consider social responsibility?** — YES, our Curated Equity Portfolios (CEP) are based on Ethical / Social & Sustainable ESS Principles.
8. **How Does it Work?** — NUQI mobile app is soon available for Android and iOS devices and is free to download. Once you have filled out the personal assessment questionnaire, the NUQI platform will assign an investor profile to you based on your risk appetite and recommend investment instruments accordingly. You can always change your risk profile by re-taking the questionnaire and NUQI will once again offer you a list of new recommendations suited to you.
9. **Are there live events to learn more about Nuqi's investment strategies?** — YES, live online sessions and Global Event Participations are on the cards.

**Right column:**
10. **Does Nuqi have resources to learn about investing for beginners?** — YES, NUQI Ethosphere is our research library for enthusiastic learners.
11. **Can you adjust your investment plan based on changing risk tolerance?** — YES, you have the flexibility to change your RISK profile based on any material change in your circumstances.
12. **Does Nuqi collaborate with international brokers to offer a wider range of investment options?** — YES, collaborations are one of the pillars for NUQI Wealth to provide broader investment options.
13. **Does Nuqi leverage its associations to provide access to in-depth research reports?** — Yes, IRIS & Ethosphere keep a watch on market trends and investment insights.
14. **Can you track your investment's performance live on the Nuqi app?** — YES, our exhaustive portfolio view will give you a 360-degree view of your investments.
15. **Is it compulsory for the investors to use the new handle only?** — The investors can choose their preferred mode of payment, such as UPI, IMPS, NEFT, RTGS, or Cheques. If an investor opts to use UPI for the payment to registered intermediaries, then they have to do so only using the new UPI ID handle allotted to registered intermediaries.
16. **What should I check while making payment using the new UPI IDs/ QR Codes?** — (this answer is a rich list, not plain text — render as):
    > Investors need to keep following things into consideration:
    > 1. The UPI ID should properly show the name of the intermediary, followed by the short abbreviation of their category for example "brk" for Brokers, "mf" for Mutual Funds, to the left of the "@" character.
    > 2. On the right side of the "@", the new and exclusive handle **"@valid"** should be present, followed by the bank name.
    > 3. On the confirmation screen, the app should show a white thumbs-up icon inside a green triangle.
    > 4. The QR code generated using the utility will have a white thumbs-up icon inside a green triangle. it will also display the UPI ID just below the QR code.
17. **Do investors also need to obtain new UPI handles to transact in the securities market?** — No, the new UPI IDs are only for the intermediaries to obtain and investor can continue to use their existing UPI IDs.
18. **Whom to approach if my transaction/ payment fails with the new UPI ID?** — The secure validated UPI ID of intermediaries will use the same banking channel as the earlier generic UPI handles. In case of any technical difficulty, investors are requested to approach their respective bank.

## Data structure
Define a `FaqItem[]` array (question + answer as string, except item 16 whose answer needs `React.ReactNode`/JSX for the ordered list with a bolded `"@valid"` span) and `.map()` over it with independent `useState<boolean[]>` (or a `Set<number>` of open indices) for expand/collapse — split into two static halves (first 9 / last 9) for the two-column layout, matching the live site's fixed split rather than a CSS column-count (so item order reads correctly).

## Responsive behavior
- `grid-cols-1 md:grid-cols-2` — single column stacked on mobile, two columns from `md:` up.
