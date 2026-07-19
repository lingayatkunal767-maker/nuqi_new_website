"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

function CepCard({ item }: { item: CepItem }) {
  return (
    <div
      className="group flex flex-col justify-between bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-pointer flex-shrink-0 transition-all duration-300 card-hover-glow"
      style={
        {
          width: `${CARD_WIDTH}px`,
          minHeight: "450px",
          "--card-theme": item.themeColor,
        } as React.CSSProperties
      }
    >
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="mb-6 transition-transform duration-500 group-hover:scale-110 origin-left">
            <Image
              src={item.image}
              alt={item.title}
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <h3
            className="text-xl font-normal mb-6 leading-tight"
            style={{ color: item.themeColor }}
          >
            {item.title}
          </h3>
          <p className="text-sm text-[#CCCCCC] font-light leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
            {item.description}
          </p>
        </div>
        <div
          className="inline-flex items-center text-sm font-bold tracking-wide mt-6 transition-all group/link cursor-pointer"
          style={{ color: item.themeColor }}
        >
          <span className="relative">
            Read more
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
          </span>
          <ArrowRight
            size={14}
            className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
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
    <section id="advisory">
      <div id="explore-solution" className="scroll-mt-24">
        <h6 className="mb-5 text-center mt-20 font-poppins tracking-wide leading-9 text-3xl pb-1 sm:text-3xl font-medium lg:text-3xl">
          <span className="text-white text-3xl">Nuqi</span>{" "}
          <span className="text-[#57c0af] text-3xl">
            Curated Equity Portfolios (CEP)
          </span>
        </h6>
        <p className="max-w-3xl mx-auto text-center font-poppins tracking-wide leading-6 lg:text-lg text-[#b3b3b3] mb-6">
          Our Nuqi India Basket offers a variety of curated investment
          themes, each catering to specific risk appetite and investment
          goals.
        </p>
        <section className="py-12 relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-black/35 pointer-events-none" />
          <div className="relative z-10">
            <div
              className="mx-auto px-6 relative"
              style={{ maxWidth: "1104px" }}
            >
              <button
                type="button"
                aria-label="Previous slide"
                onClick={goPrev}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-[#57c0af]/20 hover:bg-[#57c0af]/40 backdrop-blur-sm border border-[#57c0af]/40 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="text-[#57c0af]" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={goNext}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-[#57c0af]/20 hover:bg-[#57c0af]/40 backdrop-blur-sm border border-[#57c0af]/40 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="text-[#57c0af]" />
              </button>
              <div className="overflow-visible px-6">
                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-500"
                    style={{
                      gap: `${CARD_GAP}px`,
                      transform: `translateX(-${offset}px)`,
                    }}
                  >
                    {CEP_ITEMS.map((item) => (
                      <CepCard key={item.title} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {CEP_ITEMS.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    i === activeIndex
                      ? "h-2 w-8 bg-[#57c0af]"
                      : "h-2 w-2 bg-white/30 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
