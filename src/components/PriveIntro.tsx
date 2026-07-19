import { Check } from "lucide-react";

const CHECKLIST_ITEMS = [
  "Wealth management goes beyond numbers to protecting and growing legacies",
  "Focused on fulfilling unique financial aspirations",
  "NUQI Prive is the dedicated asset management division",
  "Exclusively serves Ultra-High Net Worth Individuals (UHNI)",
  "Delivers bespoke services with excellence and discretion",
] as const;

export function PriveIntro() {
  return (
    <section id="nuqiprive">
      <div className="flex gap-10 ml-5 max-md:mr-10 lg:ml-28 mt-32 items-center max-md:flex-col">
        <div className="flex flex-col w-[30%] ml-20 max-md:ml-0 max-md:w-full">
          <div className="self-stretch text-4xl md:text-6xl ml-5 mt-4 font-poppins tracking-normal leading-tight text-white max-md:mt-10 max-md:max-w-full max-md:text-3xl">
            <span className="text-white leading-tight">Nuqi </span>Prive
          </div>
          <div className="mt-6 text-3xl text-[#57c0af] font-poppins font-semibold ml-5">
            Tailored Solutions for Ultra-High Net Worth Individuals.
          </div>
        </div>
        <div className="order-2 md:order-1">
          <div className="space-y-4 w-full">
            {CHECKLIST_ITEMS.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-6 p-5 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#57c0af]/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#57c0af]/10 flex items-center justify-center text-[#57c0af] group-hover:bg-[#57c0af] group-hover:text-black transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(13,211,255,0.4)]">
                  <Check size={14} strokeWidth={3} />
                </div>
                <span className="text-gray-300 font-light text-lg group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
