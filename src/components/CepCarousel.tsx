"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/Reveal";

interface CepItem {
  themeColor: string;
  image: string;
  title: string;
  description: string;
}

const CEP_ITEMS: CepItem[] = [
  {
    themeColor: "#FFA500",
    image: "/images/cep/future-of-healthcare.png",
    title: "Future of Healthcare",
    description:
      "Capitalize on India's healthcare sector, focusing on pharma, medical equipment, health tech, and wellness companies.",
  },
  {
    themeColor: "#45DFB1",
    image: "/images/cep/sustainable-future-esg.png",
    title: "Sustainable Future ESG",
    description:
      "Invest in companies committed to environmental responsibility, social impact, and good governance practices.",
  },
  {
    themeColor: "#EE82EE",
    image: "/images/cep/recession-proofers.png",
    title: "Recession Proofers",
    description:
      "Ride out economic downturns with investments in essential sectors like healthcare, consumer staples, utilities, and education.",
  },
  {
    themeColor: "#0dd3ff",
    image: "/images/cep/inflation-beaters.png",
    title: "Inflation beaters",
    description:
      "Protect your wealth against rising prices by investing in companies with strong pricing power and stable cash flows.",
  },
];

const CARD_WIDTH = 320;
const CARD_GAP = 24;

function CepCard({ item, index }: { item: CepItem; index: number }) {
  return (
    <div
      className="group relative flex flex-shrink-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 cursor-pointer transition-colors duration-500 hover:border-white/20"
      style={{
        width: `${CARD_WIDTH}px`,
        minHeight: "450px",
      }}
    >
      {/* Origin-style gradient-blob glow, tucked behind the card content */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-25 blur-[70px] transition-opacity duration-500 ease-out group-hover:opacity-45"
        style={{ background: item.themeColor }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 ease-out group-hover:opacity-20"
        style={{ background: item.themeColor }}
      />

      <span className="eyebrow absolute right-6 top-6 z-10 text-nuqi-gold/25">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-6 inline-flex h-14 w-14 origin-left items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-transform duration-500 group-hover:scale-110">
            <Image
              src={item.image}
              alt={item.title}
              width={28}
              height={28}
              className="h-7 w-7"
            />
          </div>
          <h3
            className="mb-4 text-xl font-medium leading-tight"
            style={{ color: item.themeColor }}
          >
            {item.title}
          </h3>
          <p className="mb-6 text-sm font-light leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/80">
            {item.description}
          </p>
        </div>
        <div
          className="eyebrow mt-6 inline-flex items-center transition-all"
          style={{ color: item.themeColor }}
        >
          <span className="relative">
            Read more
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
          </span>
          <ArrowRight
            size={14}
            className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2"
          />
        </div>
      </div>
    </div>
  );
}

export function CepCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = CEP_ITEMS.length;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const progressBar = progressRef.current;
    if (!container || !viewport || !track) return;

    const getMaxTranslate = () =>
      Math.max(track.scrollWidth - viewport.clientWidth, 0);

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () =>
        `+=${Math.max(
          window.innerHeight * 0.6 * (count - 1),
          getMaxTranslate()
        )}`,
      pin: true,
      scrub: 0.6,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const maxTranslate = getMaxTranslate();
        gsap.to(track, {
          x: -maxTranslate * self.progress,
          duration: 0.2,
          overwrite: true,
          ease: "none",
        });
        if (progressBar) {
          gsap.to(progressBar, {
            width: `${self.progress * 100}%`,
            duration: 0.2,
            overwrite: true,
            ease: "none",
          });
        }
        const index = Math.min(
          count - 1,
          Math.round(self.progress * (count - 1))
        );
        setActiveIndex((prev) => (prev === index ? prev : index));
      },
    });

    return () => {
      st.kill();
    };
  }, [count]);

  return (
    <section id="advisory" className="bg-panel">
      <div id="explore-solution" className="section-y section-x scroll-mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="eyebrow mb-5 text-nuqi-gold">Investment Themes</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05] text-white">
              Nuqi Curated Equity{" "}
              <span className="font-display-italic italic">Portfolios</span>{" "}
              <span className="text-white/40">(CEP)</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              Our Nuqi India Basket offers a variety of curated investment
              themes, each catering to specific risk appetite and investment
              goals.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Pinned GSAP horizontal-scroll gallery: pins for extra scroll distance while
          the card track translates sideways, scrubbed 1:1 with scroll position. */}
      <div ref={containerRef} className="group/gallery relative">
        <div className="h-screen w-full flex flex-col justify-center overflow-hidden section-x border-y border-white/5 transition-colors duration-700 group-hover/gallery:border-nuqi-gold/25">
          <div className="mx-auto w-full max-w-7xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="eyebrow text-white/30">Scroll to explore</span>
              <span className="font-mono text-xs tracking-wider text-nuqi-gold">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(count).padStart(2, "0")}
              </span>
            </div>

            <div ref={viewportRef} className="overflow-hidden">
              <div
                ref={trackRef}
                className="flex will-change-transform"
                style={{ gap: `${CARD_GAP}px` }}
              >
                {CEP_ITEMS.map((item, i) => (
                  <CepCard key={item.title} item={item} index={i} />
                ))}
                {/* trailing spacer: gives the last card breathing room and extends travel */}
                <div aria-hidden className="w-[20vw] shrink-0" />
              </div>
            </div>

            <div className="mt-10 h-px w-full bg-white/10">
              <div
                ref={progressRef}
                className="h-px w-0 bg-nuqi-gold"
                style={{ boxShadow: "0 0 8px rgba(225,198,106,0.6)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
