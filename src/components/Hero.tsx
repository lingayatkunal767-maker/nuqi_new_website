"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/MagneticButton";

const SLIDE_IMAGES = [
  "/images/hero/mumbai-birds.jpg",
  "/images/hero/india.jpeg",
  "/images/hero/pen.png",
  "/images/hero/stone.png",
];

const SLIDE_INTERVAL_MS = 5000;

const EASE = [0.16, 1, 0.3, 1] as const;

function Line({
  children,
  delay,
  className,
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: EASE, delay }}
        className={cn("block", className)}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, SLIDE_INTERVAL_MS);
  }, []);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    startInterval();
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] w-full flex items-end overflow-hidden bg-black"
    >
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        {SLIDE_IMAGES.map((image, index) => (
          <div
            key={image}
            className={cn(
              "absolute -inset-y-20 inset-x-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2200ms] ease-in-out will-change-transform",
              "[filter:grayscale(0.4)_contrast(1.15)_brightness(0.75)_saturate(0.85)]",
              index === activeIndex ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/60 to-black/40 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/20 to-black/50 pointer-events-none" />

      {/* Oversized watermark numeral — pure decorative scale statement */}
      <div
        aria-hidden
        className="absolute -top-8 right-0 z-0 select-none pointer-events-none font-mono text-[28vw] leading-none text-white/[0.03] tracking-tighter"
      >
        01
      </div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pb-20 md:pb-24"
      >
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="flex items-center gap-4 mb-10"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
              className="flex h-px w-12 bg-[#e1c66a] origin-left"
            />
            <span className="eyebrow text-gold">The Gold Collar Life</span>
          </motion.div>

          <h1 className="text-[clamp(3.25rem,9vw,9.5rem)] font-light text-white mb-10 leading-[0.9] tracking-[-0.03em]">
            <Line delay={0.35}>
              INDIA&apos;s First{" "}
              <span className="font-display-italic">Ethical</span>
            </Line>
            <Line delay={0.48} className="text-[#57c0af]">
              Investment Advisory App
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
            className="text-lg md:text-xl text-white/50 leading-relaxed mb-12 max-w-xl border-l border-white/10 pl-8"
          >
            Nuqi delivers sustainable growth, prosperity, and financial
            security through innovative strategies and expert guidance,
            tailored specifically to your aspirations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
            className="flex flex-wrap gap-6 my-6 items-center"
          >
            <MagneticButton
              as="a"
              href="#explore-solutions"
              className="group relative inline-block px-8 py-5 border border-[#57c0af] bg-[#57c0af] text-black overflow-hidden rounded-xl transition-[box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_0_28px_rgba(87,192,175,0.5)]"
            >
              <span className="absolute inset-0 w-full h-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="eyebrow relative z-10 flex items-center gap-3 text-black group-hover:text-[#57c0af] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                Explore Solutions
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </span>
            </MagneticButton>
            <MagneticButton
              as="a"
              href="/ContactsPage"
              className="group relative inline-block px-7 py-4 border border-white/20 text-white overflow-hidden rounded-xl transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#57c0af]/60"
            >
              <span className="absolute inset-0 bg-[#57c0af]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="eyebrow relative z-10 group-hover:text-[#57c0af] transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                Contact Our Team
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 1 }}
        className="absolute bottom-12 right-6 md:right-12 z-20 flex items-center gap-5"
      >
        <span className="eyebrow text-white/35 tabular-nums">
          {String(activeIndex + 1).padStart(2, "0")} / {String(SLIDE_IMAGES.length).padStart(2, "0")}
        </span>
        <div className="flex gap-2.5">
          {SLIDE_IMAGES.map((image, index) => (
            <button
              key={image}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => handleDotClick(index)}
              className={cn(
                "h-[3px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                index === activeIndex
                  ? "w-10 bg-[#57c0af] shadow-[0_0_10px_rgba(87,192,175,0.6)]"
                  : "w-4 bg-white/20 hover:bg-white/40"
              )}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
        className="absolute bottom-10 md:bottom-12 left-6 md:left-12 flex flex-col items-center gap-3 text-white/35 cursor-pointer group"
      >
        <span className="eyebrow text-[10px] group-hover:text-[#57c0af] transition-colors duration-500">
          Scroll
        </span>
        <div className="relative h-10 w-px bg-white/10 overflow-hidden">
          <motion.span
            className="absolute left-0 top-0 h-3 w-px bg-[#57c0af]"
            animate={{ y: [-12, 40] }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
