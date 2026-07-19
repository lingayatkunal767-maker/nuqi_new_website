"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIDE_IMAGES = [
  "/images/hero/mumbai-birds.jpg",
  "/images/hero/india.jpeg",
  "/images/hero/pen.png",
  "/images/hero/stone.png",
];

const SLIDE_INTERVAL_MS = 5000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, SLIDE_INTERVAL_MS);
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startInterval]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    startInterval();
  };

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {SLIDE_IMAGES.map((image, index) => (
          <div
            key={image}
            className={cn(
              "absolute inset-0 bg-cover bg-center bg-no-repeat grayscale transition-opacity duration-[2000ms] ease-in-out will-change-transform",
              index === activeIndex ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
            <span className="flex h-px w-12 bg-[#57c0af]" />
            <span className="text-[#57c0af] uppercase tracking-[0.3em] text-xs font-bold">
              The Gold Collar Life
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.95] tracking-tight">
            INDIA&apos;s First Ethical <br />
            <span className="italic font-normal text-[#57c0af]">
              Investment Advisory App
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12 max-w-xl border-l border-white/10 pl-8 backdrop-blur-sm">
            Nuqi delivers sustainable growth, prosperity, and financial
            security through innovative strategies and expert guidance,
            tailored specifically to your aspirations.
          </p>

          <div className="flex flex-wrap gap-6 my-6 items-center">
            <a
              href="#explore-solutions"
              className="group relative px-6 py-5 border border-black bg-[#57c0af] text-black overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_12px_rgba(13,211,255,0.5)] hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 w-full h-full bg-[#57c0af] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out" />
              <span className="relative z-10 font-bold tracking-widest text-xs uppercase flex items-center gap-2 group-hover:text-black transition-colors">
                Explore Solutions{" "}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-2 transition-transform duration-300"
                />
              </span>
            </a>
            <a
              href="/ContactsPage"
              className="group relative px-5 py-4 border border-[#57c0af] text-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-[0_0_12px_rgba(13,211,255,0.5)] hover:scale-105 active:scale-95 inline-block"
            >
              <div className="absolute inset-0 bg-[#57c0af]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 font-medium tracking-widest text-xs uppercase group-hover:text-[#57C0AF] transition-colors">
                Contact Our Team
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 z-20 flex gap-3">
        {SLIDE_IMAGES.map((image, index) => (
          <button
            key={image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
            className={cn(
              "rounded-full transition-all duration-500 hover:h-2",
              index === activeIndex
                ? "h-1 w-8 bg-[#57c0af] shadow-[0_0_10px_#0dd3ff]"
                : "h-1 w-2 bg-white/20 hover:bg-white/40"
            )}
          />
        ))}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30 animate-float cursor-pointer hover:text-[#57c0af] transition-colors group">
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-current to-transparent group-hover:via-[#57c0af] transition-colors" />
        <span className="text-[10px] uppercase tracking-[0.3em] group-hover:tracking-[0.5em] transition-all duration-500">
          Scroll
        </span>
      </div>
    </section>
  );
}
