"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Offering {
  themeColor: string;
  gif: string;
  title: string;
  description: string;
}

const OFFERINGS: Offering[] = [
  {
    themeColor: "orange",
    gif: "/images/prive/arranging-custody.gif",
    title: "Arranging Custody",
    description:
      "Ensure the secure and efficient custody of your assets through trusted custodial arrangements and state-of-the-art reporting, giving you peace of mind.",
  },
  {
    themeColor: "#45DFB1",
    gif: "/images/prive/arranging-deals.gif",
    title: "Arranging Deals in Investments",
    description:
      "Explore exclusive opportunities with expertly arranged investment deals, spanning private equity, structured products, and global market access.",
  },
  {
    themeColor: "violet",
    gif: "/images/prive/managing-assets.gif",
    title: "Managing Assets",
    description:
      "Entrust your portfolio to our seasoned team, who implement a disciplined approach to asset allocation, balancing growth potential with prudent risk management.",
  },
  {
    themeColor: "#0dd3ff",
    gif: "/images/prive/arranging-credit.gif",
    title: "Arranging Credit & Advising on Credit",
    description:
      "Access personalized credit solutions and professional advice for structuring loans and credit facilities, ensuring liquidity while safeguarding your long-term goals.",
  },
  {
    themeColor: "#e6b3d2",
    gif: "/images/prive/legacy-planning.gif",
    title: "Legacy Planning & Family Office Management",
    description:
      "Comprehensive solutions to manage your legacy and family office requirements, ensuring that your wealth continues to serve future generations seamlessly.",
  },
  {
    themeColor: "#57c0af",
    gif: "/images/prive/advising-financial-products.gif",
    title: "Advising on Financial Products",
    description:
      "Receive expert guidance on a wide range of financial products, carefully tailored to align with your investment objectives, risk tolerance, and legacy planning requirements.",
  },
];

const CARD_WIDTH = 325;
const CARD_GAP = 24;

export function PriveOfferings() {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = OFFERINGS.length - 1;

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? lastIndex : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === lastIndex ? 0 : current + 1));
  };

  const translateX = activeIndex * (CARD_WIDTH + CARD_GAP);

  return (
    <div id="services" className="scroll-mt-24">
      <h2 className="text-3xl text-center font-semibold font-poppins text-[#57c0af] ml-3 mt-32 mb-9 text-left">
        <span className="text-white text-3xl font-medium">Nuqi</span>{" "}
        <span className="text-[#57c0af] text-3xl font-medium">Prive Offerings</span>
      </h2>
      <section className="py-12 relative overflow-hidden mt-18 bg-black">
        <div className="relative z-10">
          <div className="mx-auto px-6 relative" style={{ maxWidth: 1119 }}>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={goToPrevious}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-[#57c0af]/20 hover:bg-[#57c0af]/40 backdrop-blur-sm border border-[#57c0af]/40 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="text-[#57c0af]" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={goToNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-[#57c0af]/20 hover:bg-[#57c0af]/40 backdrop-blur-sm border border-[#57c0af]/40 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="text-[#57c0af]" />
            </button>
            <div className="overflow-visible px-6">
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500"
                  style={{ gap: CARD_GAP, transform: `translateX(-${translateX}px)` }}
                >
                  {OFFERINGS.map((offering) => (
                    <div
                      key={offering.title}
                      className="group flex flex-col justify-between bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-1 cursor-pointer flex-shrink-0 transition-all duration-300 card-hover-glow"
                      style={
                        {
                          width: CARD_WIDTH,
                          minHeight: 200,
                          "--card-theme": offering.themeColor,
                        } as React.CSSProperties
                      }
                    >
                      <div className="relative z-10 flex flex-col justify-between">
                        <div className="mr-3 items-center m-3 p-6 text-white">
                          <div className="flex justify-center">
                            <Image
                              src={offering.gif}
                              alt={offering.title}
                              width={128}
                              height={128}
                              unoptimized
                              className="h-32 w-auto object-contain rounded-md"
                            />
                          </div>
                          <h3
                            className="text-xl font-normal mb-6 mt-4 leading-tight"
                            style={{ color: offering.themeColor }}
                          >
                            {offering.title}
                          </h3>
                          <p className="text-sm text-[#CCCCCC] font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                            {offering.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {OFFERINGS.map((offering, index) => (
              <button
                key={offering.title}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "h-2 w-8 bg-[#57c0af]"
                    : "h-2 w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
