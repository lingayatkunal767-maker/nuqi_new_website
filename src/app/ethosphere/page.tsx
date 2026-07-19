"use client";

import { ChevronDown, Grid3x3, List } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { EthosphereMasonry } from "@/components/EthosphereMasonry";

interface Edition {
  image: string;
  edition: string;
  title: string;
  alt: string;
}

const editions: Edition[] = [
  { image: "/images/etho/92.png", edition: "92nd edition  July 13, 2026", title: "LET THEM EAT CAKE", alt: "NUQI 2025 Ethosphere : 92nd Edition" },
  { image: "/images/etho/91.png", edition: "91st edition  June 29, 2026", title: "NOTHING IS LOST: YELLOW GOLD AND BLACK GOLD ARE TRANSFORMING", alt: "NUQI 2025 Ethosphere : 91st Edition" },
  { image: "/images/etho/90.png", edition: "90th edition  June 22, 2026", title: "TOP 50 COMPANIES: NEW SUMMER, NEW HITS!", alt: "NUQI 2025 Ethosphere : 90th Edition" },
  { image: "/images/etho/89.png", edition: "89th edition  June 15, 2026", title: "WHO WILL BRING DOWN THE BANK OF JAPAN?", alt: "NUQI 2025 Ethosphere : 89th Edition" },
  { image: "/images/etho/88.png", edition: "88th edition  June 8, 2026", title: "SHOULD THE SUPERGIANTS BE FOLLOWED ALL THE WAY INTO SPACE?", alt: "NUQI 2025 Ethosphere : 88th Edition" },
  { image: "/images/etho/87.png", edition: "87th edition  June 1, 2026", title: "THE GREAT ANAESTHESIA OF VOLATILITY", alt: "NUQI 2025 Ethosphere : 87th Edition" },
  { image: "/images/etho/86.png", edition: "86th edition  May 25, 2026", title: "THE YIELD CURVE HAS NOT YET PASSED THE BATON", alt: "NUQI 2025 Ethosphere : 86th Edition" },
  { image: "/images/etho/85.png", edition: "85th edition  May 11, 2026", title: "CAN VALUATIONS RISE ANY FURTHER?", alt: "NUQI 2025 Ethosphere : 85th Edition" },
  { image: "/images/etho/84.png", edition: "84th edition  April 27, 2026", title: "HAVE LUXURY GOODS BEEN SHELVED?", alt: "NUQI 2025 Ethosphere : 84th Edition" },
  { image: "/images/etho/83.png", edition: "83rd edition  April 20, 2026", title: "THE ADVANTAGE GOES TO THOSE WITH A SLICK TONGUE", alt: "NUQI 2025 Ethosphere : 83rd Edition" },
  { image: "/images/etho/82.png", edition: "82nd edition  April 13, 2026", title: "HOW TO AVOID FALLING INTO THE DOLLAR'S BULL TRAP?", alt: "NUQI 2025 Ethosphere : 82nd Edition" },
  { image: "/images/etho/81.png", edition: "81st edition  March 30, 2026", title: "WHAT IF THE WAR LASTED A LONG TIME?", alt: "NUQI 2025 Ethosphere : 81st Edition" },
  { image: "/images/etho/80.png", edition: "80th edition  March 23, 2026", title: "BETWEEN CRISIS AND OPTIMISM, PORTFOLIOS SWING", alt: "NUQI 2025 Ethosphere : 80th Edition" },
  { image: "/images/etho/79.png", edition: "79th edition  March 16, 2026", title: "ARE YOU READY FOR THE FIREWORKS?", alt: "NUQI 2025 Ethosphere : 79th Edition" },
  { image: "/images/etho/78.png", edition: "78th edition  March 02, 2026", title: "WILL BANKS BE AFFECTED BY THE PRIVATE CREDIT CRISIS?", alt: "NUQI 2025 Ethosphere : 78th Edition" },
  { image: "/images/etho/77.png", edition: "77th edition  February 23, 2026", title: "NORWAY IS ON THE VERGE OF A BOREAL PERFORMANCE", alt: "NUQI 2025 Ethosphere : 77th Edition" },
  { image: "/images/etho/76.png", edition: "76th edition  February 16, 2026", title: "HOW MUCH WEIGHT SHOULD BE GIVEN TO EMERGING MARKETS?", alt: "NUQI 2025 Ethosphere : 76th Edition" },
  { image: "/images/etho/75.png", edition: "75th edition  February 9, 2026", title: "AT THE HEART OF PROGRESS LIES THE ATOM", alt: "NUQI 2025 Ethosphere : 75th Edition" },
  { image: "/images/etho/74.png", edition: "74th edition  February 02, 2026", title: "THE AWAKENING OF BARBAROSSA", alt: "NUQI 2025 Ethosphere : 74th Edition" },
  { image: "/images/etho/73.png", edition: "73rd edition  January 27, 2026", title: "VIETNAM, AN AMBITION BEYOND BORDERS", alt: "NUQI 2025 Ethosphere : 73rd Edition" },
  { image: "/images/etho/72.png", edition: "72nd edition  January 19, 2026", title: "THE CURRENCY WALTZ HAS NOT YET BEGUN", alt: "NUQI 2025 Ethosphere : 72nd Edition" },
  { image: "/images/etho/71.png", edition: "71st edition  January 12, 2026", title: "THE COPPER CRUNCH AND THE WALL OF MEMORY", alt: "NUQI 2025 Ethosphere : 71st Edition" },
  { image: "/images/etho/70.png", edition: "70th edition  January 05, 2026", title: "2026 OUTLOOK: THE WIND IS RISING, BUT THE CREW IS READY", alt: "NUQI 2025 Ethosphere : 70th Edition" },
];

function pdfUrlFor(edition: string) {
  const ordinal = edition.trim().split(/\s+/)[0];
  return `https://nuqiwealth.com/pdf/NUQI-2025-Ethosphere-${ordinal}-Edition.pdf`;
}

const masonryItems = editions.map((item) => ({
  ...item,
  href: pdfUrlFor(item.edition),
}));

export default function EthospherePage() {
  return (
    <>
      <Header />
      <div className="overflow-x-hidden bg-void pt-24 max-w-screen">
        <section className="section-x pt-16 md:pt-20">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="eyebrow text-gold mb-5">Research &amp; Insights</p>
              <h1 className="font-display-italic text-5xl md:text-7xl leading-tight text-white">
                Ethosphere
              </h1>
              <p className="mt-6 text-white/60 text-sm sm:text-base lg:text-lg leading-relaxed">
                The hub for NUQI&apos;s pioneering research and insights
              </p>
            </div>
          </Reveal>
        </section>

        <div className="flex flex-col justify-center items-center mt-16 md:mt-20 mx-4">
          <Reveal delay={0.1} className="w-full">
            <div className="w-full flex flex-row justify-center items-center gap-2 sm:gap-4 container mb-8">
              <button
                type="button"
                className="eyebrow flex items-center gap-1.5 rounded-full border border-white/15 bg-transparent px-4 py-2 text-white/60 transition-colors duration-300 hover:border-gold/50 hover:text-gold"
              >
                2026 <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                className="eyebrow flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-transparent px-4 py-2 text-white/60 transition-colors duration-300 hover:border-gold/50 hover:text-gold"
              >
                All Month <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center justify-center gap-2 ml-auto">
                <button
                  type="button"
                  className="rounded-lg border border-white/15 p-2 text-white/60 transition-colors duration-300 hover:border-gold/50 hover:text-gold"
                >
                  <Grid3x3 className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-white/15 p-2 text-white/60 transition-colors duration-300 hover:border-gold/50 hover:text-gold"
                >
                  <List className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
              </div>
            </div>
          </Reveal>

          <div className="w-full max-w-7xl px-4 pb-24">
            <EthosphereMasonry items={masonryItems} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
