# /digitalwealth (Prive) Page Specification

## Overview
- **Target file:** `src/app/digitalwealth/page.tsx` (route: `/digitalwealth` — this is what the header's "Prive" nav link points to)
- **Important context:** This route is BROKEN on the live site itself — navigating to `https://in.nuqiwealth.com/digitalwealth` renders a blank black page (confirmed via direct navigation and via clicking the "Prive" nav link, which doesn't even change the URL). There is no real unique content to extract for this page. Rather than replicate the live bug (a dead link), build a functional page using content we already have from the homepage's Nuqi Prive section, since "Prive" clearly refers to the same product line documented in `PriveIntro.tsx` / `PriveOfferings.tsx`.

## Implementation
Reuse the existing components directly — do not rebuild them:
```tsx
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PriveIntro } from "@/components/PriveIntro";
import { PriveOfferings } from "@/components/PriveOfferings";

export default function DigitalWealthPage() {
  return (
    <>
      <Header />
      <div className="overflow-x-hidden font-poppins pt-24">
        <PriveIntro />
        <PriveOfferings />
      </div>
      <Footer />
    </>
  );
}
```
No new component work needed — this is purely a routing/assembly task. Verify `PriveIntro` and `PriveOfferings` render correctly standalone (they already do on the homepage, but confirm no `id="nuqiprive"` / anchor collisions cause issues when both this page and the homepage exist simultaneously — duplicate `id`s across different pages are fine since they're never rendered together).

## Responsive behavior
Inherited from `PriveIntro`/`PriveOfferings` — already responsive, no additional work required.
