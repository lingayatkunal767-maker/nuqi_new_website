# Disclosures Page Specification

## Overview
- **Target file:** `src/app/Disclosures/page.tsx` (route: `/Disclosures`, matching the live site's exact casing since the header nav links to `/Disclosures`)
- **Reuse:** Import the existing `Header` and `Footer` components (`@/components/Header`, `@/components/Footer`) — do not rebuild them. Wrap content in the same `pt-24` spacing pattern the homepage uses so it sits below the fixed header.
- **Interaction model:** click-driven tabs (Radix-style: only one tab's content visible at a time, tab list is a segmented control).

## Page markup
```html
<div class="p-6 sm:p-8 bg-black text-white mb-14 min-h-screen">
  <h2 class="text-xl sm:text-5xl font-bold mb-6">Disclosures</h2>
  <div class="w-full">
    <div role="tablist" class="h-10 items-center justify-center text-muted-foreground grid w-full md:w-[50%] lg:w-[35%] grid-cols-3 mb-8 bg-gray-900 p-1 rounded-xl">
      <button class="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 font-medium rounded-lg transition-all text-xs sm:text-sm data-[state=active]:bg-[#57c0af] data-[state=active]:text-black text-gray-400">Compliance Disclosure</button>
      <button class="... (same classes) ...">AI Disclosure</button>
      <button class="... (same classes) ...">Payment UPI</button>
    </div>
    <div class="mt-2"> <!-- active tab panel renders here --> </div>
  </div>
</div>
```
Active tab gets `bg-[#57c0af] text-black`; inactive tabs are `text-gray-400`. Use `useState<'compliance' | 'ai' | 'payment'>('compliance')` — no animation library needed, plain conditional render is fine (the live site uses a near-instant `animation-duration: 0s`).

## Tab 1: "Compliance Disclosure" (default/active)
```html
<p class="mb-6 text-sm sm:text-base leading-relaxed">Disclosure with respect to compliance with Annual Compliance Audit requirement under Regulation 19(3) of the Securities and Exchange Board of India (Investment Advisers) Regulations, 2013, for last and current financial years are as under:</p>
<div class="mt-4 w-full overflow-x-auto">
  <div class="border border-[#57c0af] rounded-lg">
    <table class="min-w-full text-white">
      <thead class="border-b border-[#57c0af] bg-black">
        <tr>
          <th class="p-3 text-center border-r border-[#57c0af]">Sr. No</th>
          <th class="p-3 text-center border-r border-[#57c0af]">Financial Year</th>
          <th class="p-3 text-center border-r border-[#57c0af]">Compliance Audit Report</th>
          <th class="p-3 text-center">Remarks, if any</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-[#57c0af]"><td class="p-3 text-center border-r border-[#57c0af]">1</td><td class="p-3 text-center border-r border-[#57c0af]">FY 2020-21</td><td class="p-3 text-center border-r border-[#57c0af]">Conducted</td><td class="p-3 text-center">nil</td></tr>
        <tr class="border-b border-[#57c0af]"><td class="p-3 text-center border-r border-[#57c0af]">2</td><td class="p-3 text-center border-r border-[#57c0af]">FY 2021-22</td><td class="p-3 text-center border-r border-[#57c0af]">Conducted</td><td class="p-3 text-center">nil</td></tr>
        <tr class="border-b border-[#57c0af]"><td class="p-3 text-center border-r border-[#57c0af]">3</td><td class="p-3 text-center border-r border-[#57c0af]">FY 2022-23</td><td class="p-3 text-center border-r border-[#57c0af]">Conducted</td><td class="p-3 text-center">nil</td></tr>
        <tr><td class="p-3 text-center border-r border-[#57c0af]">4</td><td class="p-3 text-center border-r border-[#57c0af]">FY 2023-24</td><td class="p-3 text-center border-r border-[#57c0af]">Conducted</td><td class="p-3 text-center">nil</td></tr>
      </tbody>
    </table>
  </div>
</div>
```

## Tab 2: "AI Disclosure"
```html
<div class="space-y-6 text-sm sm:text-base leading-relaxed">
  <h3 class="text-lg font-semibold text-[#57c0af]">Disclaimer - Use of Artificial Intelligence ('AI') Tools in IA Services</h3>
  <p>The Investment Adviser (IA) uses various Artificial Intelligence (AI) tools in providing investment advice to its clients as under:</p>
  <ul class="list-disc pl-5 space-y-2">
    <li>To gather data, information, and updates from different sources to conduct research across various asset classes and categories.</li>
    <li>To manage and organize data efficiently for improved research output.</li>
    <li>To enhance the quality, grammar, and readability of content.</li>
    <li>To quickly access summarized general data that may aid in better financial planning.</li>
  </ul>
</div>
```

## Tab 3: "Payment UPI"
```html
<div class="space-y-8">
  <div class="w-full bg-[#57c0af] rounded-2xl py-5 px-6 text-center">
    <p class="text-black font-bold text-xl sm:text-2xl tracking-wide">Payment Via UPI</p>
  </div>
  <div class="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
    <div class="flex-1 space-y-5 text-sm sm:text-base leading-relaxed">
      <p>We now have a validated UPI ID for all investor payments:</p>
      <p class="text-[#57c0af] font-semibold text-base sm:text-lg tracking-wide">nuqiwealthindia.ia@validhdfc</p>
      <p>You can also make payments by scanning our official QR code, which includes a white thumbs-up icon inside a green triangle — a mark of authenticity.</p>
    </div>
    <div class="flex flex-col items-center gap-3 w-full md:w-auto">
      <img src="/images/QR.png" alt="NUQI Wealth India UPI QR Code" class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain">
      <p class="text-[#57c0af] text-sm font-medium tracking-wide">nuqiwealthindia.ia@validhdfc</p>
    </div>
  </div>
</div>
```

## Assets
- `/images/QR.png` (already downloaded)

## Responsive behavior
- Tab list: `grid-cols-3` always 3 equal columns, but container width shrinks from full-width on mobile to `md:w-[50%] lg:w-[35%]` on desktop.
- Payment UPI tab: `flex-col md:flex-row` — QR code stacks below text on mobile, side-by-side on desktop.
- Heading: `text-xl sm:text-5xl`.
