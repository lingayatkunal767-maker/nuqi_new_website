"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/Reveal";

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
        <span className="eyebrow absolute right-4 top-4 z-10 text-nuqi-gold/25">
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
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = OFFERINGS.length;

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
    <section id="services" className="scroll-mt-24 bg-void">
      {/* Scoped to this heading wrapper (not the outer <section>) so the
          bottom padding doesn't stack after the pinned h-screen gallery below.
          Deliberately tighter than the shared .section-y scale — a full
          6-10rem gap here read as an oversized dead space before the gallery. */}
      <div className="pt-16 md:pt-20 pb-8 md:pb-10 section-x">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-4xl lg:text-5xl">
                <span className="text-white">Nuqi</span>{" "}
                <span className="font-display-gold">Prive</span>{" "}
                <span className="text-white">Offerings</span>
              </h2>
            </Reveal>
          </div>
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
                className="flex items-stretch will-change-transform"
                style={{ gap: `${CARD_GAP}px` }}
              >
                {OFFERINGS.map((offering, index) => (
                  <div
                    key={offering.title}
                    style={{ width: CARD_WIDTH }}
                    className="h-full shrink-0"
                  >
                    <OfferingCard offering={offering} index={index} />
                  </div>
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
