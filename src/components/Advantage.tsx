import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  LineChart,
  Compass,
  Globe2,
  Cpu,
  Globe,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NewsletterForm } from "@/components/NewsletterForm";

interface AdvantageCard {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const CARDS: AdvantageCard[] = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Secure and Regulated",
    description:
      "NUQI Digital Wealth operates under the robust oversight of SEBI regulations, ensuring smooth and compliant product offerings tailored to your requirements. With retail endorsement, NUQI lowers entry barriers, making quality investment opportunities more accessible.",
  },
  {
    number: "02",
    icon: LineChart,
    title: "Tailored Equity Solutions",
    description:
      "Gain access to 1,500+ carefully selected stocks, screened through a robust exclusion list of industries and financial ratios to ensure quality and alignment. Additionally, explore 18+ expertly curated equity portfolios tailored to meet diverse financial goals and strategies.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Portfolio Rebalancing",
    description:
      "NUQI's expert team of advisors, alongside a supervisory panel, ensures portfolios are rebalanced every six months to maintain alignment with your investment goals and market conditions.",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Asset Diversification",
    description:
      "Equity, ETFs, and Mutual Funds help spread your exposure across various asset classes, enhancing portfolio stability and potential returns.",
  },
  {
    number: "05",
    icon: Cpu,
    title: "Robo Advisory",
    description:
      "Utilize NUQI's AI-powered Robo Advisory to analyze industry trends and tailor recommendations to your unique risk profile and investment goals, enabling smarter, data-driven decisions.",
  },
  {
    number: "06",
    icon: Globe,
    title: "Global Market Access (Tentative)",
    description:
      "Gain access to 9+ global markets, supported by in-depth fundamental data, empowering informed investment decisions across international opportunities.",
  },
];

export function Advantage() {
  return (
    <section
      id="advisory"
      className="w-full bg-black text-zinc-200 px-6 md:px-20 py-32 font-poppins"
    >
      <div className="max-w-7xl mx-auto mb-20 grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="text-sm tracking-[0.2em] text-[#57c0af]">
            THE ADVANTAGE
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Why NUQI <br /> Digital Wealth?
          </h2>
        </div>
        <p className="text-lg text-zinc-400 mt-8 leading-relaxed">
          We combine the intelligence of modern fintech with
          institution-grade safety, transparency and global accessibility —
          giving investors a platform that is secure, informed and aligned
          with long-term growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto border border-white/10 rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {CARDS.map((card) => (
            <div
              key={card.number}
              className={cn(
                "p-10 relative group transition-all duration-300",
                "hover:bg-white/[0.02] hover:-translate-y-[2px]"
              )}
            >
              <span className="absolute top-6 right-10 text-4xl font-bold text-white/5">
                {card.number}
              </span>
              <div className="mb-6">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    "border border-[#57c0af]/40 transition-all duration-300",
                    "group-hover:border-[#57c0af]/80 group-hover:shadow-[0_0_15px_rgba(13,211,255,0.25)]",
                    "group-hover:scale-[1.07]"
                  )}
                >
                  <card.icon
                    className="w-6 h-6 text-[#57c0af] transition-all duration-300 group-hover:text-[#57c0af]/90"
                  />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-white">
                {card.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed transition-colors duration-300 group-hover:text-zinc-300">
                {card.description}
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#57c0af]/60 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        <div className="p-10 md:p-16 flex flex-col items-start justify-center border-t border-white/10 space-y-8">
          <h3 className="text-2xl md:text-3xl font-light text-white max-w-3xl leading-relaxed text-left">
            Simplifying ethical compliance so businesses can operate{" "}
            <span className="text-[#57c0af] font-normal">
              responsibly and confidently.
            </span>
          </h3>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
