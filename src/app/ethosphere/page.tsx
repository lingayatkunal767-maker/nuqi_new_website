"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Grid3x3,
  List,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

function EditionCard({ item }: { item: Edition }) {
  return (
    <a
      href={pdfUrlFor(item.edition)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 rounded-3xl bg-gray-100 dark:bg-neutral-900 h-96 w-60 md:h-[28rem] md:w-[18rem] overflow-hidden flex flex-col items-start justify-start relative z-10 hover:shadow-[inset_0_0_20px_#0dd3ff] transition-all duration-300 ease-in-out">
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-4">
        <p className="text-white text-xs font-medium bg-black p-1 rounded-lg inline-block">
          {item.edition}
        </p>
        <p className="text-white text-xs md:text-sm font-normal text-left mt-2 uppercase">
          {item.title}
        </p>
        <p className="text-[#57c0af] text-xs font-extralight mt-2">Read More</p>
      </div>
      <Image
        className="object-cover h-full absolute z-10 inset-0 transition-opacity duration-400 hover:opacity-100 hover:blur-sm"
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 768px) 15rem, 18rem"
      />
    </a>
  );
}

export default function EthospherePage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <div className="overflow-x-hidden font-poppins pt-24 max-w-screen">
        <div className="h-[10rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <h2 className="text-5xl md:text-7xl pb-5 mt-30 font-poppins font-medium leading-tight tracking-wide text-[#57c0af]">
            Ethosphere
          </h2>
          <p className="max-w-full mx-4 sm:mx-8 lg:mx-auto px-4 sm:px-8 lg:px-12 font-poppins text-center leading-relaxed text-white text-sm sm:text-base lg:text-lg">
            The hub for NUQI&apos;s pioneering research and insights
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-20 mx-4">
          <div className="w-full flex flex-row justify-center items-center gap-1 sm:gap-5 container mb-4">
            <button
              type="button"
              className="flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm w-fit h-8"
            >
              <div className="flex flex-row rounded-2xl items-center hover:bg-[#57c0af]">
                2026 <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            <button
              type="button"
              className="flex items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm w-fit h-8 mr-2"
            >
              <div className="flex flex-row rounded-2xl items-center hover:bg-[#57c0af] text-nowrap">
                All Month <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            <div className="flex items-center justify-center space-x-4 ml-auto">
              <button type="button" className="p-2 text-black bg-white rounded-md">
                <Grid3x3 className="w-6 h-4 lg:h-6" />
              </button>
              <button type="button" className="p-2 text-black bg-white rounded-md">
                <div className="text-white text-xs font-medium bg-black p-1 rounded-lg">
                  <List className="w-6 h-4 lg:h-6" />
                </div>
              </button>
            </div>
          </div>
          <div className="relative w-full">
            <div
              ref={scrollRef}
              className="flex w-full overflow-x-scroll overscroll-x-auto py-3 pb-10 scroll-smooth [scrollbar-width:none]"
            >
              <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
                {editions.map((item) => (
                  <EditionCard key={item.image} item={item} />
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-5">
              <button
                type="button"
                onClick={() => scrollByAmount(-300)}
                className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
              >
                <ArrowLeft className="h-6 w-6 text-gray-500" />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount(300)}
                className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
              >
                <ArrowRight className="h-6 w-6 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
