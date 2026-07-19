import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const CHECKLIST_ITEMS = [
  "Wealth management goes beyond numbers to protecting and growing legacies",
  "Focused on fulfilling unique financial aspirations",
  "NUQI Prive is the dedicated asset management division",
  "Exclusively serves Ultra-High Net Worth Individuals (UHNI)",
  "Delivers bespoke services with excellence and discretion",
] as const;

export function PriveIntro() {
  return (
    <section id="nuqiprive" className="bg-panel section-y section-x">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-x-12">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl font-light leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl">
              Nuqi <span className="font-display-gold">Prive</span>
            </h2>
            <p className="mt-8 max-w-md text-xl font-light leading-relaxed text-gold/90 md:text-2xl">
              Tailored Solutions for Ultra-High Net Worth Individuals.
            </p>
            <div className="mt-10 h-px w-16 bg-[#e1c66a]/40" />
          </div>
        </Reveal>

        <RevealGroup className="lg:col-span-7">
          <div className="border-t border-line">
            {CHECKLIST_ITEMS.map((item, index) => (
              <RevealItem
                key={item}
                className="group flex items-stretch gap-6 border-b border-line py-6 md:py-7"
              >
                <span className="w-px shrink-0 bg-nuqi-gold/30 transition-colors duration-300 group-hover:bg-nuqi-gold" />
                <span className="eyebrow shrink-0 pt-0.5 text-nuqi-gold/70 transition-colors duration-300 group-hover:text-nuqi-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-light leading-relaxed text-fg-muted transition-colors duration-300 group-hover:text-white md:text-lg">
                  {item}
                </p>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
