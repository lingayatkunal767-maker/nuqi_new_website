"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Grid3x3, List } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { EthosphereMasonry } from "@/components/EthosphereMasonry";
import { EthosphereList } from "@/components/EthosphereList";
import { cn } from "@/lib/utils";

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

function parseEditionDate(edition: string) {
  const match = edition.match(/([A-Za-z]+)\s+\d{1,2},\s*(\d{4})/);
  return { month: match?.[1] ?? "", year: match?.[2] ?? "" };
}

const masonryItems = editions.map((item) => ({
  ...item,
  href: pdfUrlFor(item.edition),
}));

const YEARS = Array.from(new Set(editions.map((item) => parseEditionDate(item.edition).year)));
const MONTHS = Array.from(new Set(editions.map((item) => parseEditionDate(item.edition).month)));

function FilterDropdown({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="eyebrow flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/15 bg-transparent px-4 py-2 text-white/60 transition-colors duration-300 hover:border-gold/50 hover:text-gold"
      >
        {value}
        <ChevronDown
          className={cn("w-3.5 h-3.5 transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-[calc(100%+0.5rem)] z-30 min-w-full overflow-hidden rounded-xl border border-white/10 bg-panel py-1.5 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={cn(
                  "eyebrow block w-full whitespace-nowrap px-4 py-2.5 text-left transition-colors duration-200",
                  option === value ? "text-gold" : "text-white/60 hover:text-white"
                )}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EthospherePage() {
  const [selectedYear, setSelectedYear] = useState(YEARS[0] ?? "");
  const [selectedMonth, setSelectedMonth] = useState("All Month");
  const [view, setView] = useState<"grid" | "list">("grid");

  const filteredItems = masonryItems.filter((item) => {
    const { month, year } = parseEditionDate(item.edition);
    if (selectedYear && year !== selectedYear) return false;
    if (selectedMonth !== "All Month" && month !== selectedMonth) return false;
    return true;
  });

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
          <Reveal delay={0.1} className="relative z-20 w-full max-w-7xl mx-auto px-4">
            <div className="w-full flex flex-row justify-center items-center gap-2 sm:gap-4 mb-8">
              <FilterDropdown options={YEARS} value={selectedYear} onChange={setSelectedYear} />
              <FilterDropdown
                options={["All Month", ...MONTHS]}
                value={selectedMonth}
                onChange={setSelectedMonth}
              />
              <div className="flex items-center justify-center gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => setView("grid")}
                  aria-pressed={view === "grid"}
                  className={cn(
                    "rounded-lg border p-2 transition-colors duration-300",
                    view === "grid"
                      ? "border-gold/50 text-gold"
                      : "border-white/15 text-white/60 hover:border-gold/50 hover:text-gold"
                  )}
                >
                  <Grid3x3 className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setView("list")}
                  aria-pressed={view === "list"}
                  className={cn(
                    "rounded-lg border p-2 transition-colors duration-300",
                    view === "list"
                      ? "border-gold/50 text-gold"
                      : "border-white/15 text-white/60 hover:border-gold/50 hover:text-gold"
                  )}
                >
                  <List className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
              </div>
            </div>
          </Reveal>

          <div className="w-full max-w-7xl px-4 pb-24">
            <AnimatePresence mode="wait">
              {filteredItems.length === 0 ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="py-16 text-center text-white/40"
                >
                  No editions found for the selected filters.
                </motion.p>
              ) : (
                <motion.div
                  key={view}
                  initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  {view === "grid" ? (
                    <EthosphereMasonry items={filteredItems} />
                  ) : (
                    <EthosphereList items={filteredItems} />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
