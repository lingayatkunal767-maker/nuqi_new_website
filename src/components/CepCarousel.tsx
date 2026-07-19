"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealGroup, RevealItem } from "@/components/Reveal";

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

      <span className="eyebrow absolute right-6 top-6 z-10 text-white/25">
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
  const [activeIndex, setActiveIndex] = useState(0);
  const count = CEP_ITEMS.length;

  const goNext = () => setActiveIndex((i) => (i + 1) % count);
  const goPrev = () => setActiveIndex((i) => (i - 1 + count) % count);
  const goTo = (i: number) => setActiveIndex(i);

  const offset = activeIndex * (CARD_WIDTH + CARD_GAP);

  return (
    <section id="advisory" className="bg-panel">
      <div id="explore-solution" className="section-y section-x scroll-mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-5 text-[#57c0af]">Investment Themes</p>
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
        </div>

        <div className="relative mt-16 md:mt-20">
          <div className="relative mx-auto px-6" style={{ maxWidth: "1104px" }}>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={goPrev}
              className="absolute -left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#57c0af]/50 hover:text-[#57c0af] hover:scale-105 sm:-left-5"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={goNext}
              className="absolute -right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#57c0af]/50 hover:text-[#57c0af] hover:scale-105 sm:-right-5"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>

            <div className="overflow-visible px-6">
              <div className="relative overflow-hidden">
                <div
                  className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ transform: `translateX(-${offset}px)` }}
                >
                  <RevealGroup className="flex gap-6" stagger={0.08}>
                    {CEP_ITEMS.map((item, i) => (
                      <RevealItem key={item.title} className="flex-shrink-0">
                        <CepCard item={item} index={i} />
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {CEP_ITEMS.map((item, i) => (
              <button
                key={item.title}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === activeIndex
                    ? "w-6 bg-[#57c0af]"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
