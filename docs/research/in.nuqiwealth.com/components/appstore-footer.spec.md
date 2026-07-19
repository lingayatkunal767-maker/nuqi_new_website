# "Now Available On" + Footer Specification

Two static sections, small enough for one builder task.

## Now Available On
- **Target file:** `src/components/AppStoreBanner.tsx`
- **Screenshot:** `docs/design-references/in.nuqiwealth.com/sec-footer.png` (top portion, above footer)
- **Interaction model:** static. Badges are decorative/non-functional placeholders (app not yet launched) — no `<a>` wrapper needed, just images.

```html
<div class="flex flex-col items-center justify-center pt-12 mt-12">
  <div class="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] px-8 gap-8">
    <div class="flex flex-col gap-6 items-center justify-center p-12 relative rounded-[20px]" style="width: 500px; height: 300px;">
      <h2 class="text-3xl lg:text-4xl font-poppins text-[#57c0af] mb-6">Now Available On</h2>
      <div class="flex gap-16">
        <div class="flex items-center justify-center"><img src="/images/play-store.png" alt="Play Store" class="object-contain w-[100px] h-[100px]"></div>
        <div class="flex items-center justify-center"><img src="/images/app-store.png" alt="App Store" class="object-contain w-[100px] h-[100px]"></div>
      </div>
    </div>
  </div>
</div>
```
Note: the live site sets a `background-image: url("Rectangle 152.png")` on the card container (a subtle decorative background — this specific asset wasn't captured; acceptable to render the card on a plain `bg-[#0d0d0d]` or subtle gradient instead, it's a minor background texture behind the badges, not critical to fidelity).

## Footer
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/in.nuqiwealth.com/sec-footer.png`
- **Interaction model:** static, hover-only on links (color transitions to `#57c0af`).

```html
<footer class="bg-[#000] text-white -mt-20 font-poppins">
  <div class="container mx-auto px-4 py-10">
    <div class="flex flex-col items-center mt-20 text-center text-white gap-10">
      <div><img alt="Nuqi Logo" src="/images/white-in-logo-cropped.png" class="h-14 w-auto"></div>
      <div class="flex gap-8">
        <a aria-label="Contact by Mail" class="text-[#57c0af] hover:text-white transition" href="mailto:support@nuqiwealth.in"><Mail class="w-6 h-6" /></a>
        <a aria-label="Follow on Instagram" class="text-[#57c0af] hover:text-white transition" href="https://www.instagram.com/nuqiwealth_india/"><Instagram class="w-6 h-6" /></a>
        <a aria-label="Follow on Facebook" class="text-[#57c0af] hover:text-white transition" href="https://www.facebook.com/NuqiWealthIndia/"><Facebook class="w-6 h-6" /></a>
        <a aria-label="Follow on Linkedin" class="text-[#57c0af] hover:text-white transition" href="https://www.linkedin.com/company/nuqi-wealth"><Linkedin class="w-6 h-6" /></a>
      </div>
    </div>
    <div class="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:flex xl:justify-center gap-10 text-base font-poppins text-center">
      <a href="/" class="text-[#57c0af] font-bold">Home</a>
      <a href="/#advisory" class="text-white hover:text-[#57c0af]">Advisory</a>
      <a href="/#nuqiprive" class="text-white hover:text-[#57c0af]">Prive</a>
      <a href="/ethosphere" class="text-white hover:text-[#57c0af]">Ethosphere</a>
      <a href="/Privacy" class="text-white hover:text-[#57c0af]">Legal</a>
      <a href="/About" class="text-white hover:text-[#57c0af]">About</a>
      <a href="/partnership" class="text-white hover:text-[#57c0af]">Partnership</a>
      <a href="/press" class="text-white hover:text-[#57c0af]">News</a>
      <a href="/ContactsPage" class="text-white hover:text-[#57c0af]">Contact Us</a>
      <a href="/InvestorCharter" class="text-white hover:text-[#57c0af]">Investor Charter</a>
    </div>
    <div class="mt-10 text-center text-xs text-gray-400 leading-relaxed">
      <p>
        ©2025 Nuqi Wealth India Pvt Ltd - Investment Advisory Unit (Separately Identifiable Unit) <br>
        SEBI RIA Registration No: INA000016612. CIN: U65990MH2020FTC351885. Validity of registration- 30th Jan 2022 - Perpetual <br>
        Registered &amp; Corporate Address: Office Nos 206, Parinee I, Veera Desai Road, Andheri West, Mumbai - 400053<br>
        Disclaimer 1: Past performance is not a guarantee of future results. <br>
        The historical returns, expected returns, and probability projections provided on this website or App are for informational and illustrative purposes only.<br>
        They are not an indication of future performance. All investing involves risk, including the possible loss of all the money you invest. The past performance of any trading system does not guarantee future performance. Nuqi Wealth assumes no responsibility for liability for your trading and investment results. Registration granted by SEBI is no way guarantee performance of the intermediary or provide any assurance of returns to investors.<br>
        Disclaimer 2: Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. <br>
        Advisory Services on Nuqiwealth.com is provided by Nuqi Wealth India Private Limited, a SEBI registered Investment Adviser having registration no. INA 000016612 (Valid from 31st Jan 2022 - Perpetual). BASL membership no 1750.
        <br><br>
        <span>Please visit our <a href="/disclaimer" target="_blank" class="underline underline-offset-2">Disclaimer Notice page</a> for further information.</span>
      </p>
    </div>
  </div>
</footer>
```
Note: `-mt-20` on the footer intentionally overlaps slightly with the section above it (matches live site).

## Assets / Icons
- `/images/white-in-logo-cropped.png`
- `/images/play-store.png`, `/images/app-store.png`
- Icons: `Mail`, `Instagram`, `Facebook`, `Linkedin` from `lucide-react`

## Responsive behavior
- App store banner: `flex-col lg:flex-row` (already single item, mostly for potential future multi-column).
- Footer nav links: `grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:flex` — wraps into a grid on small/medium screens, single flex row on `xl:` and up.
