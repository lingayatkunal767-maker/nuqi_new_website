"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface Quadrant {
  src: string;
  alt: string;
  caption: string;
}

interface ScrollChoreographyProps {
  className?: string;
  topLeft: Quadrant;
  bottomLeft: Quadrant;
  bottomRight: Quadrant;
  /** The image that expands to fill the screen at the end of the sequence. */
  reveal: Quadrant;
  eyebrow: string;
  headline: string;
  subline: string;
}

export function ScrollChoreography({
  className,
  topLeft,
  bottomLeft,
  bottomRight,
  reveal,
  eyebrow,
  headline,
  subline,
}: ScrollChoreographyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 50,
    mass: 1.2,
    restDelta: 0.001,
  });

  const xLeft = "-20vw";
  const xRight = "20vw";
  const yTop = "-14vh";
  const yBottom = "14vh";

  const tlX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xLeft, xLeft, xLeft, "0vw", "0vw"]);
  const tlY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yTop, yBottom, yBottom, "0vh", "0vh"]);

  const brX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xRight, xRight, xRight, "0vw", "0vw"]);
  const brY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yBottom, yTop, yTop, "0vh", "0vh"]);

  const blX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xLeft, xLeft, xLeft, "0vw", "0vw"]);
  const blY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yBottom, yBottom, yBottom, "0vh", "0vh"]);

  const trX = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [xRight, xRight, xRight, "0vw", "0vw"]);
  const trY = useTransform(smoothProgress, [0, 0.3, 0.35, 0.65, 1], [yTop, yTop, yTop, "0vh", "0vh"]);

  const heroWidth = useTransform(smoothProgress, [0.65, 0.7, 0.9, 1], ["36vw", "36vw", "100vw", "100vw"]);
  const heroHeight = useTransform(smoothProgress, [0.65, 0.7, 0.9, 1], ["24vh", "24vh", "100vh", "100vh"]);
  const heroRadius = useTransform(smoothProgress, [0.65, 0.7, 0.9, 1], ["1.5rem", "1.5rem", "0rem", "0rem"]);

  const underImagesOpacity = useTransform(smoothProgress, [0.6, 0.68], [1, 0]);
  const captionOpacity = useTransform(smoothProgress, [0.08, 0.2, 0.55, 0.65], [0, 1, 1, 0]);

  const eyebrowOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);
  const revealTextOpacity = useTransform(smoothProgress, [0.82, 0.92], [0, 1]);
  const revealTextY = useTransform(smoothProgress, [0.82, 0.92], [24, 0]);

  const baseImageClasses =
    "absolute left-1/2 top-1/2 w-[36vw] h-[24vh] overflow-hidden rounded-2xl -translate-x-1/2 -translate-y-1/2 bg-panel shadow-2xl will-change-transform border border-line";

  return (
    <section
      ref={containerRef}
      className={cn("relative h-[300vh] w-full bg-void", className)}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.p
          style={{ opacity: eyebrowOpacity }}
          className="eyebrow absolute top-16 left-1/2 -translate-x-1/2 z-50 text-gold text-center"
        >
          {eyebrow}
        </motion.p>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div style={{ x: tlX, y: tlY, opacity: underImagesOpacity }} className={cn(baseImageClasses, "z-10")}>
            <Image src={topLeft.src} alt={topLeft.alt} fill sizes="36vw" className="object-cover" />
            <motion.span
              style={{ opacity: captionOpacity }}
              className="eyebrow absolute bottom-4 left-4 text-white"
            >
              {topLeft.caption}
            </motion.span>
          </motion.div>

          <motion.div style={{ x: brX, y: brY, opacity: underImagesOpacity }} className={cn(baseImageClasses, "z-20")}>
            <Image src={bottomRight.src} alt={bottomRight.alt} fill sizes="36vw" className="object-cover" />
            <motion.span
              style={{ opacity: captionOpacity }}
              className="eyebrow absolute bottom-4 left-4 text-white"
            >
              {bottomRight.caption}
            </motion.span>
          </motion.div>

          <motion.div style={{ x: blX, y: blY, opacity: underImagesOpacity }} className={cn(baseImageClasses, "z-30")}>
            <Image src={bottomLeft.src} alt={bottomLeft.alt} fill sizes="36vw" className="object-cover" />
            <motion.span
              style={{ opacity: captionOpacity }}
              className="eyebrow absolute bottom-4 left-4 text-white"
            >
              {bottomLeft.caption}
            </motion.span>
          </motion.div>

          <motion.div
            style={{ x: trX, y: trY, width: heroWidth, height: heroHeight, borderRadius: heroRadius }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 origin-center overflow-hidden shadow-2xl will-change-transform"
          >
            <Image src={reveal.src} alt={reveal.alt} fill sizes="100vw" className="object-cover" priority={false} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <motion.div
              style={{ opacity: revealTextOpacity, y: revealTextY }}
              className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-16 md:pb-24 text-center px-6"
            >
              <h2 className="font-display-gold text-4xl md:text-6xl lg:text-7xl">
                {headline}
              </h2>
              <p className="mt-4 max-w-md text-sm md:text-base text-white/60 font-light">
                {subline}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
