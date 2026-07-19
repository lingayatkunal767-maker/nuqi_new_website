"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  LineChart,
  Compass,
  Globe2,
  Cpu,
  Globe,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Reveal } from "@/components/Reveal";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    if (!container) return;

    const chapters = chapterRefs.current.filter(Boolean) as HTMLDivElement[];
    gsap.set(chapters, { opacity: 0, y: 40 });
    gsap.set(chapters[0], { opacity: 1, y: 0 });

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${window.innerHeight * (CARDS.length - 1)}`,
      pin: true,
      scrub: 0.6,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const raw = self.progress * (CARDS.length - 1);
        const index = Math.min(CARDS.length - 1, Math.round(raw));
        setActiveIndex((prev) => (prev === index ? prev : index));

        chapters.forEach((el, i) => {
          const dist = Math.abs(raw - i);
          const opacity = Math.max(0, 1 - dist * 1.4);
          gsap.to(el, {
            opacity,
            y: (i - raw) * 24,
            duration: 0.2,
            overwrite: true,
          });
        });
      },
    });

    return () => {
      st.kill();
    };
  }, []);

  const active = CARDS[activeIndex];

  return (
    <section id="advisory" className="w-full bg-void text-zinc-200">
      <div className="section-x pt-24 md:pt-32 max-w-7xl mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 mb-16 md:mb-20">
            <div className="space-y-5">
              <p className="eyebrow text-gold">THE ADVANTAGE</p>
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
              institution-grade safety, transparency and global accessibility
              — giving investors a platform that is secure, informed and
              aligned with long-term growth.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Pinned scroll-story: one chapter per advantage, scrubbed by scroll position */}
      <div ref={containerRef} className="relative">
        <div className="h-screen w-full flex items-center overflow-hidden section-x">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[auto_1fr] gap-12 md:gap-20 items-center">
            {/* Chapter index rail */}
            <div className="hidden md:flex flex-col gap-4">
              {CARDS.map((card, i) => (
                <div key={card.number} className="flex items-center gap-3">
                  <span
                    className={`h-px transition-all duration-500 ${
                      i === activeIndex ? "w-8 bg-[#e1c66a]" : "w-4 bg-white/15"
                    }`}
                  />
                  <span
                    className={`font-mono text-xs transition-colors duration-500 ${
                      i === activeIndex ? "text-gold" : "text-white/25"
                    }`}
                  >
                    {card.number}
                  </span>
                </div>
              ))}
            </div>

            {/* Stacked chapter panels */}
            <div className="relative h-[420px] md:h-[380px]">
              <span
                aria-hidden
                className="absolute -top-16 -left-4 md:-left-8 font-mono text-[10rem] md:text-[16rem] leading-none text-white/[0.04] select-none pointer-events-none"
              >
                {active.number}
              </span>
              {CARDS.map((card, i) => (
                <div
                  key={card.number}
                  ref={(el) => {
                    chapterRefs.current[i] = el;
                  }}
                  className="absolute inset-0 flex flex-col justify-center"
                  style={{ pointerEvents: i === activeIndex ? "auto" : "none" }}
                >
                  <div className="mb-8 w-14 h-14 rounded-md flex items-center justify-center border border-[#e1c66a]/40 bg-panel shadow-[0_0_30px_rgba(225,198,106,0.15)]">
                    <card.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-medium text-white mb-6 max-w-xl leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-base md:text-lg text-fg-muted leading-relaxed max-w-xl">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section-x pb-24 md:pb-32 max-w-7xl mx-auto">
        <Reveal>
          <div className="rounded-2xl border border-line bg-panel p-10 md:p-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <h3 className="text-2xl md:text-3xl font-light text-white max-w-3xl leading-relaxed text-left">
                Simplifying ethical compliance so businesses can operate{" "}
                <span className="text-gold font-normal">
                  responsibly and confidently.
                </span>
              </h3>
              <NewsletterForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
