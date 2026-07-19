"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/Reveal";

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

const CARD_WIDTH = 340;
const CARD_GAP = 24;

function OfferingCard({
  offering,
  index,
}: {
  offering: Offering;
  index: number;
}) {
  return (
    <div
      className="card-hover-glow group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel/60 backdrop-blur-sm transition-all duration-300"
      style={{ "--card-theme": offering.themeColor } as React.CSSProperties}
    >
      <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-line bg-black/50">
        <div
          aria-hidden
          className="absolute inset-0 opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-45"
          style={{
            background: `radial-gradient(circle at 50% 45%, ${offering.themeColor}, transparent 70%)`,
          }}
        />
        <span className="eyebrow absolute right-4 top-4 z-10 text-white/25">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Image
          src={offering.gif}
          alt={offering.title}
          width={176}
          height={176}
          unoptimized
          className="relative z-10 h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3
          className="mb-3 font-mono text-xs font-medium uppercase leading-snug tracking-wider"
          style={{ color: offering.themeColor }}
        >
          {offering.title}
        </h3>
        <p className="text-sm font-light leading-relaxed text-fg-muted transition-colors duration-300 group-hover:text-white">
          {offering.description}
        </p>
      </div>
    </div>
  );
}

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
    <section id="services" className="scroll-mt-24 bg-void section-y section-x">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
            <span className="text-white">Nuqi</span>{" "}
            <span className="text-nuqi-teal">
              <span className="font-display-italic">Prive</span> Offerings
            </span>
          </h2>
        </div>

        <div className="relative">
          <div className="relative mx-auto" style={{ maxWidth: 1140 }}>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={goToPrevious}
              className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-line bg-panel/80 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-nuqi-teal/60 hover:bg-panel"
            >
              <ChevronLeft className="text-nuqi-teal" size={18} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={goToNext}
              className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-line bg-panel/80 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-nuqi-teal/60 hover:bg-panel"
            >
              <ChevronRight className="text-nuqi-teal" size={18} />
            </button>

            <div className="overflow-hidden px-6">
              <RevealGroup>
                <div
                  className="flex transition-transform duration-500"
                  style={{
                    gap: CARD_GAP,
                    transform: `translateX(-${translateX}px)`,
                  }}
                >
                  {OFFERINGS.map((offering, index) => (
                    <RevealItem key={offering.title} className="shrink-0">
                      <div style={{ width: CARD_WIDTH }} className="h-full">
                        <OfferingCard offering={offering} index={index} />
                      </div>
                    </RevealItem>
                  ))}
                </div>
              </RevealGroup>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {OFFERINGS.map((offering, index) => (
              <button
                key={offering.title}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "h-2 w-8 bg-nuqi-teal"
                    : "h-2 w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
