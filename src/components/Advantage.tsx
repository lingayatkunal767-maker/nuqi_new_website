"use client";

import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  LineChart,
  Compass,
  Globe2,
  Cpu,
  Globe,
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { NewsletterForm } from "@/components/NewsletterForm";
import { RevealGroup, RevealItem } from "@/components/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

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
      className="w-full bg-void text-zinc-200 section-x section-y"
    >
      <div className="max-w-7xl mx-auto mb-16 md:mb-20 grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <p className="eyebrow text-nuqi-teal">THE ADVANTAGE</p>
          <h2 className="text-4xl md:text-5xl font-medium leading-[1.05] text-white">
            Why NUQI <br />
            <span className="font-display-italic text-4xl md:text-5xl">
              Digital Wealth
            </span>
            ?
          </h2>
        </div>
        <p className="text-lg text-fg-muted mt-8 leading-relaxed">
          We combine the intelligence of modern fintech with
          institution-grade safety, transparency and global accessibility —
          giving investors a platform that is secure, informed and aligned
          with long-term growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-line">
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {CARDS.map((card) => (
            <RevealItem key={card.number} className="h-full">
              <motion.div
                className="group relative h-full bg-void p-8 md:p-10 flex flex-col overflow-hidden"
                whileHover={{
                  y: -4,
                  boxShadow: "0 24px 48px -24px rgba(87,192,175,0.35)",
                }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                {/* faint mono index number */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-5 right-6 font-mono text-4xl md:text-5xl font-light tracking-tight text-white/[0.06] select-none"
                >
                  {card.number}
                </span>

                {/* accent ring that brightens on hover */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-nuqi-teal/0 transition-all duration-300 group-hover:ring-nuqi-teal/50" />

                {/* square icon tile */}
                <div className="relative mb-8">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-md flex items-center justify-center",
                      "border border-line bg-panel transition-all duration-300",
                      "group-hover:border-nuqi-teal/60 group-hover:shadow-[0_0_20px_rgba(87,192,175,0.25)]"
                    )}
                  >
                    <card.icon className="w-5 h-5 text-nuqi-teal transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="relative text-lg md:text-xl font-medium mb-3 text-white">
                  {card.title}
                </h3>
                <p className="relative text-sm md:text-base text-fg-muted leading-relaxed">
                  {card.description}
                </p>

                <a
                  href="#"
                  className="relative mt-8 inline-flex items-center gap-2 self-start font-mono text-xs uppercase tracking-[0.15em] text-nuqi-teal"
                >
                  Read More
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <div className="max-w-7xl mx-auto mt-6 rounded-2xl border border-line bg-panel p-10 md:p-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <h3 className="text-2xl md:text-3xl font-light text-white max-w-3xl leading-relaxed text-left">
            Simplifying ethical compliance so businesses can operate{" "}
            <span className="text-nuqi-teal font-normal">
              responsibly and confidently.
            </span>
          </h3>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
