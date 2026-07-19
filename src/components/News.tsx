"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

interface NewsItem {
  image: string;
  alt: string;
  headline: string;
  href: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    image: "/images/news/dfsa-license-1.jpg",
    alt: "Nuqi Digital Wealth DFSA license announcement",
    headline: "Nuqi Digital Wealth attains DFSA license",
    href: "https://gulfnews.com/business/corporate-news/nuqi-digital-wealth-attains-dfsa-license-1.1705932392422",
  },
  {
    image: "/images/news/discover-nuqi.jpg",
    alt: "Discover NUQI WEALTH",
    headline: "Discover NUQI WEALTH",
    href: "https://www.linkedin.com/posts/difc_nuqiwealth-wechosedifc-activity-7160164331937017857-U_1H/?utm_source=share&utm_medium=member_desktop",
  },
  {
    image: "/images/news/dfsa-license-2.jpg",
    alt: "Nuqi Digital Wealth secures DFSA license",
    headline: "Nuqi Digital Wealth secures DFSA license",
    href: "https://www.zawya.com/en/business/fintech/nuqi-digital-wealth-secures-dfsa-licence-spinmed8",
  },
  {
    image: "/images/news/khaleeji.png",
    alt: "Nuqi Digital wealth granted DFSA license",
    headline: "Nuqi Digital wealth granted DFSA license",
    href: "https://www.khaleejtimes.com/kt-network/nuqi-digital-wealth-granted-dfsa-licence",
  },
];

// Cycles through the site's signature accent palette — one blob color per
// card — echoing useorigin.com's soft gradient-blob testimonial cards.
const BLOB_COLORS = ["#57c0af", "#0dd3ff", "#ee82ee", "#ffa500"] as const;

const CARD_WIDTH = 373;
const GAP = 24;
const VISIBLE_DESKTOP = 3;
const VISIBLE_MOBILE = 1;

function NewsCard({ item, index }: { item: NewsItem; index: number }) {
  const themeColor = BLOB_COLORS[index % BLOB_COLORS.length];

  return (
    <div
      className="card-hover-glow group relative flex w-[373px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300"
      style={{ "--card-theme": themeColor } as CSSProperties}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-25 blur-[90px] transition-opacity duration-500 group-hover:opacity-40"
        style={{ backgroundColor: themeColor }}
      />
      <div className="relative z-10 flex grow flex-col items-center px-10 pt-12 pb-10 leading-tight max-md:px-6 max-md:pt-9">
        <Image
          src={item.image}
          alt={item.alt}
          width={373}
          height={114}
          className="aspect-[3.28] h-auto w-full self-stretch object-contain"
        />
        <div className="mt-6 mb-8 flex min-h-16 items-center justify-center text-center text-white">
          {item.headline}
        </div>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto text-sm font-medium tracking-wide text-[#57c0af] underline underline-offset-4 transition-colors hover:text-white"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export function News() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(VISIBLE_DESKTOP);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 1024 ? VISIBLE_MOBILE : VISIBLE_DESKTOP);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(NEWS_ITEMS.length - visibleCount, 0);
  // Clamp at render time (rather than syncing via a setState-in-effect) in case
  // the viewport shrinks visibleCount after activeIndex was already advanced.
  const clampedIndex = Math.min(activeIndex, maxIndex);

  const isPrevDisabled = clampedIndex <= 0;
  const isNextDisabled = clampedIndex >= maxIndex;

  const handlePrev = () => {
    if (!isPrevDisabled) setActiveIndex(Math.max(clampedIndex - 1, 0));
  };

  const handleNext = () => {
    if (!isNextDisabled) setActiveIndex(Math.min(clampedIndex + 1, maxIndex));
  };

  const translateX = clampedIndex * (CARD_WIDTH + GAP);

  return (
    <section className="bg-black px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal className="mb-14 text-center">
          <span className="eyebrow text-[#57c0af]">Latest News</span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-white md:text-4xl">
            Nuqi in the{" "}
            <span className="font-display-italic text-[#57c0af]">News</span>
          </h2>
        </Reveal>
        <div className="relative mx-4">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(-${translateX}px)` }}
            >
              {NEWS_ITEMS.map((item, index) => (
                <NewsCard key={item.href} item={item} index={index} />
              ))}
            </div>
          </div>
          <div className="absolute right-0 bottom-[-80px] left-0 flex items-center justify-center gap-5 lg:right-36 lg:left-36">
            <button
              type="button"
              aria-label="Previous Slide"
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300",
                isPrevDisabled
                  ? "cursor-not-allowed border-white/10 bg-white/5 text-white/25"
                  : "border-[#57c0af]/40 bg-[#57c0af]/10 text-[#57c0af] hover:border-[#57c0af] hover:bg-[#57c0af] hover:text-black"
              )}
              disabled={isPrevDisabled}
              onClick={handlePrev}
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              aria-label="Next Slide"
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-full border transition-all duration-300",
                isNextDisabled
                  ? "cursor-not-allowed border-white/10 bg-white/5 text-white/25"
                  : "border-[#57c0af]/40 bg-[#57c0af]/10 text-[#57c0af] hover:border-[#57c0af] hover:bg-[#57c0af] hover:text-black"
              )}
              disabled={isNextDisabled}
              onClick={handleNext}
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
