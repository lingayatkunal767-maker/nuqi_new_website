"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

const CARD_WIDTH = 373;
const GAP = 24;
const VISIBLE_DESKTOP = 3;
const VISIBLE_MOBILE = 1;

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div className="flex flex-col w-[373px] bg-gradient-to-b from-[#1d1d1f] to-[#0d0d0d] border border-[#44464a] rounded-[10px] hover:!bg-black hover:shadow-[inset_0_0_5px_#069494] transition-all duration-300 ease-in-out shrink-0">
      <div className="flex flex-col items-center grow px-12 pt-11 pb-10 font-poppins leading-tight max-md:px-5 max-md:mt-10">
        <Image
          src={item.image}
          alt={item.alt}
          width={373}
          height={114}
          className="object-contain self-stretch w-full aspect-[3.28] h-auto"
        />
        <div className="mt-3 mb-6 flex min-h-16 items-center justify-center text-center text-white">
          {item.headline}
        </div>
        <div className="-mt-5 underline">
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#57c0af]"
          >
            Learn more
          </a>
        </div>
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
    <div className="w-full max-w-[1200px] mx-auto relative">
      <h2 className="text-3xl text-[#57c0af] font-poppins leading-6 tracking-wide mb-10 text-center lg:text-3xl">
        <span className="text-white">Nuqi</span> in the News
      </h2>
      <div className="relative mx-4">
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {NEWS_ITEMS.map((item) => (
              <NewsCard key={item.href} item={item} />
            ))}
          </div>
        </div>
        <div className="absolute left-0 right-0 lg:right-36 lg:left-36 bottom-[-80px] flex justify-center items-center gap-5">
          <button
            type="button"
            aria-label="Previous Slide"
            className={cn(
              "h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300",
              isPrevDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#57c0af] hover:bg-cyan-300"
            )}
            disabled={isPrevDisabled}
            onClick={handlePrev}
          >
            <span className="text-black text-3xl font-bold">←</span>
          </button>
          <button
            type="button"
            aria-label="Next Slide"
            className={cn(
              "h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300",
              isNextDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#57c0af] hover:bg-cyan-300"
            )}
            disabled={isNextDisabled}
            onClick={handleNext}
          >
            <span className="text-black text-3xl font-bold">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
