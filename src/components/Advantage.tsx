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
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

function Line({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE, delay }}
        className={className ? `block ${className}` : "block"}
      >
        {children}
      </motion.span>
    </span>
  );
}

interface AdvantageCard {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  image: string;
}

const CARDS: AdvantageCard[] = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Secure and Regulated",
    description:
      "NUQI Digital Wealth operates under the robust oversight of SEBI regulations, ensuring smooth and compliant product offerings tailored to your requirements. With retail endorsement, NUQI lowers entry barriers, making quality investment opportunities more accessible.",
    stat: "SEBI",
    statLabel: "Regulated advisor",
    image: "/images/hero/stone.png",
  },
  {
    number: "02",
    icon: LineChart,
    title: "Tailored Equity Solutions",
    description:
      "Gain access to 1,500+ carefully selected stocks, screened through a robust exclusion list of industries and financial ratios to ensure quality and alignment. Additionally, explore 18+ expertly curated equity portfolios tailored to meet diverse financial goals and strategies.",
    stat: "1,500+",
    statLabel: "Curated stocks",
    image: "/images/hero/pen.png",
  },
  {
    number: "03",
    icon: Compass,
    title: "Portfolio Rebalancing",
    description:
      "NUQI's expert team of advisors, alongside a supervisory panel, ensures portfolios are rebalanced every six months to maintain alignment with your investment goals and market conditions.",
    stat: "6 MO",
    statLabel: "Rebalancing cycle",
    image: "/images/hero/mumbai-birds.jpg",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Asset Diversification",
    description:
      "Equity, ETFs, and Mutual Funds help spread your exposure across various asset classes, enhancing portfolio stability and potential returns.",
    stat: "3",
    statLabel: "Asset classes",
    image: "/images/hero/india.jpeg",
  },
  {
    number: "05",
    icon: Cpu,
    title: "Robo Advisory",
    description:
      "Utilize NUQI's AI-powered Robo Advisory to analyze industry trends and tailor recommendations to your unique risk profile and investment goals, enabling smarter, data-driven decisions.",
    stat: "AI",
    statLabel: "Powered advisory",
    image: "/images/hero/pen.png",
  },
  {
    number: "06",
    icon: Globe,
    title: "Global Market Access (Tentative)",
    description:
      "Gain access to 9+ global markets, supported by in-depth fundamental data, empowering informed investment decisions across international opportunities.",
    stat: "9+",
    statLabel: "Global markets",
    image: "/images/hero/india.jpeg",
  },
];

export function Advantage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chapterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const railFillRef = useRef<HTMLDivElement>(null);
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

        if (railFillRef.current) {
          gsap.set(railFillRef.current, { height: `${self.progress * 100}%` });
        }

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
      <div className="relative section-x pt-24 md:pt-32 max-w-7xl mx-auto overflow-hidden">
        {/* Decorative pillar-count watermark — echoes the six chapters below */}
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 -right-6 select-none font-mono text-[16rem] leading-none text-white/[0.025] tracking-tighter md:-right-10 md:text-[22rem]"
        >
          06
        </span>

        <div className="relative grid md:grid-cols-2 gap-10 mb-12 md:mb-14">
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex items-center gap-4"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
                className="flex h-px w-12 bg-[#e1c66a] origin-left"
              />
              <p className="eyebrow text-gold">THE ADVANTAGE</p>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.05] text-white">
              <Line delay={0.15}>Why NUQI</Line>
              <Line delay={0.28} className="font-display-italic">
                Digital Wealth?
              </Line>
            </h2>
          </div>
          <Reveal delay={0.35}>
            <p className="text-lg text-fg-muted mt-8 max-w-xl border-l border-white/10 pl-8 leading-relaxed">
              We combine the intelligence of modern fintech with
              institution-grade safety, transparency and global accessibility
              — giving investors a platform that is secure, informed and
              aligned with long-term growth.
            </p>
          </Reveal>
        </div>

        {/* Preview strip — one chip per pillar, teasing the pinned scroll-story below */}
        <RevealGroup className="relative flex flex-wrap gap-3 mb-16 md:mb-20" stagger={0.06}>
          {CARDS.map((card) => (
            <RevealItem key={card.number}>
              <div className="flex items-center gap-2.5 rounded-full border border-line bg-panel px-4 py-2 transition-colors duration-300 hover:border-gold/40">
                <card.icon className="h-3.5 w-3.5 text-gold" />
                <span className="eyebrow text-white/50">{card.title}</span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* Pinned scroll-story: one chapter per advantage, scrubbed by scroll position */}
      <div ref={containerRef} className="relative">
        <div className="h-screen w-full flex items-center overflow-hidden section-x">
          <div className="max-w-7xl mx-auto w-full">
            <div className="relative overflow-hidden rounded-3xl border border-line">
              {/* Photographic backdrop, one real image per chapter, crossfading
                  as the story progresses — ties this section back into the
                  same treated photography used in Hero/ScrollChoreography
                  instead of sitting as a flat, text-only panel. */}
              <div aria-hidden className="absolute inset-0 z-0 bg-void">
                {CARDS.map((card, i) => (
                  <div
                    key={card.number}
                    className={cn(
                      "absolute inset-0 bg-cover bg-center transition-opacity duration-[1400ms] ease-in-out",
                      "[filter:grayscale(1)_contrast(1.1)_brightness(0.4)]",
                      i === activeIndex ? "opacity-100" : "opacity-0"
                    )}
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/55" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
              </div>

              {/* ambient gold glow tied to the active chapter */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-1/2 right-0 z-[1] h-[140%] w-1/2 rounded-full bg-[#e1c66a]/[0.1] blur-[120px]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-14 -right-4 z-[1] select-none font-mono text-[12rem] md:text-[18rem] font-light leading-none text-white/[0.06] tracking-tighter"
              >
                {active.number}
              </span>

              <div className="relative z-10 grid md:grid-cols-[auto_1fr_auto] gap-8 md:gap-16 items-center p-6 sm:p-10 md:p-16 min-h-[520px] sm:min-h-[440px] md:min-h-[420px]">
                {/* Chapter index rail (desktop only — mobile gets a compact
                    counter + stat strip instead, see below) */}
                <div className="relative hidden md:flex flex-col gap-5 py-1">
                  <div className="absolute left-2 top-1 bottom-1 w-px bg-white/10" />
                  <div
                    ref={railFillRef}
                    className="absolute left-2 top-1 w-px bg-[#e1c66a] shadow-[0_0_8px_rgba(225,198,106,0.7)]"
                    style={{ height: "0%" }}
                  />
                  {CARDS.map((card, i) => (
                    <div key={card.number} className="relative flex items-center gap-3">
                      <span className="flex h-4 w-4 items-center justify-center">
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full transition-all duration-500",
                            i === activeIndex
                              ? "scale-125 bg-[#e1c66a] shadow-[0_0_10px_rgba(225,198,106,0.8)]"
                              : "bg-white/20"
                          )}
                        />
                      </span>
                      <span
                        className={cn(
                          "font-mono text-xs transition-colors duration-500",
                          i === activeIndex ? "text-gold" : "text-white/25"
                        )}
                      >
                        {card.number}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  {/* Mobile-only: compact chapter counter + stat, standing in
                      for the desktop rail and stat panel (both hidden here) */}
                  <div className="mb-6 flex items-center justify-between md:hidden">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-6 bg-[#e1c66a]" />
                      <span className="font-mono text-xs text-gold">
                        {active.number} / {String(CARDS.length).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="huge-stat text-2xl font-light text-gold">
                        {active.stat}
                      </span>
                      <span className="eyebrow text-[10px] text-white/35">
                        {active.statLabel}
                      </span>
                    </div>
                  </div>

                  {/* Stacked chapter panels — height scales down at each
                      breakpoint as the rail/stat columns free up width and
                      descriptions wrap to fewer lines */}
                  <div className="relative h-[400px] sm:h-[340px] md:h-[300px]">
                    {CARDS.map((card, i) => (
                      <div
                        key={card.number}
                        ref={(el) => {
                          chapterRefs.current[i] = el;
                        }}
                        className="absolute inset-0 flex flex-col justify-center"
                        style={{ pointerEvents: i === activeIndex ? "auto" : "none" }}
                      >
                        <div className="mb-6 md:mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-[#e1c66a]/20 to-transparent shadow-[0_0_40px_rgba(225,198,106,0.2)] backdrop-blur-sm md:h-16 md:w-16">
                          <card.icon className="h-6 w-6 text-gold md:h-7 md:w-7" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-medium text-white mb-4 md:mb-6 max-w-xl leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-fg-muted leading-relaxed max-w-xl">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Big stat, one per chapter — fills the frame with real content, not decoration */}
                <div className="relative hidden md:block h-[300px] w-56">
                  {CARDS.map((card, i) => (
                    <div
                      key={card.number}
                      className="absolute inset-0 flex flex-col items-end justify-center text-right"
                      style={{
                        opacity: i === activeIndex ? 1 : 0,
                        transition: "opacity 0.5s ease",
                        pointerEvents: "none",
                      }}
                    >
                      <span className="huge-stat text-6xl lg:text-7xl font-light text-gold">
                        {card.stat}
                      </span>
                      <span className="eyebrow mt-3 text-white/35">
                        {card.statLabel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
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
