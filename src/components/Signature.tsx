"use client";

import { useEffect, useId, useState } from "react";
import { motion } from "motion/react";
import { parse as parseFont } from "opentype.js";
import { cn } from "@/lib/utils";

interface SignatureProps {
  text?: string;
  color?: string;
  fontSize?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  className?: string;
  inView?: boolean;
  once?: boolean;
  fontUrl?: string;
  onComplete?: () => void;
}

function sanitizePathData(d: string): string {
  let last = "0";
  return d.replace(/-?\d+\.?\d*|NaN/g, (token) => {
    if (token === "NaN") return last;
    last = token;
    return token;
  });
}

export function Signature({
  text = "Signature",
  color = "currentColor",
  fontSize = 32,
  duration = 1.5,
  delay = 0,
  stagger = 0.2,
  className,
  inView = false,
  once = true,
  fontUrl = "/fonts/MrsSaintDelafield-Regular.ttf",
  onComplete,
}: SignatureProps) {
  const [paths, setPaths] = useState<string[]>([]);
  const [width, setWidth] = useState<number>(300);
  const height = fontSize * 1.6;
  const horizontalPadding = fontSize * 0.1;
  const baseline = fontSize * 1.1;
  const maskId = `signature-reveal-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const buffer = await fetch(fontUrl).then((res) => res.arrayBuffer());
        const font = parseFont(buffer);
        if (cancelled) return;

        let x = horizontalPadding;
        const newPaths: string[] = [];

        for (const char of text) {
          const glyph = font.charToGlyph(char);
          const advanceWidth = glyph.advanceWidth ?? font.unitsPerEm;

          if (char.trim() !== "") {
            const path = glyph.getPath(x, baseline, fontSize);
            const d = path.toPathData(3);
            // Some glyphs in this font ship a malformed control point that
            // serializes to a literal "NaN" token (e.g. capital N). Holding
            // the last valid coordinate keeps the glyph's other curves intact
            // instead of dropping the whole letter or kinking toward origin.
            if (d) {
              newPaths.push(d.includes("NaN") ? sanitizePathData(d) : d);
            }
          }

          x += advanceWidth * (fontSize / font.unitsPerEm);
        }

        setPaths(newPaths);
        setWidth(x + horizontalPadding);
      } catch (error) {
        console.error("Signature component font load error:", error);
        setPaths([]);
        setWidth(text.length * fontSize * 0.6);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [text, fontSize, baseline, horizontalPadding, fontUrl]);

  const variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1 },
  };

  const totalDuration = delay + paths.length * stagger + duration;

  return (
    <motion.svg
      key={paths.length}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={cn("overflow-visible", className)}
      initial="hidden"
      whileInView={inView ? "visible" : undefined}
      animate={inView ? undefined : "visible"}
      viewport={{ once }}
      onAnimationComplete={() => {
        if (onComplete) setTimeout(onComplete, totalDuration * 1000);
      }}
    >
      <defs>
        <mask id={maskId} maskUnits="userSpaceOnUse">
          {paths.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              stroke="white"
              strokeWidth={fontSize * 0.22}
              fill="none"
              variants={variants}
              transition={{
                pathLength: { delay: delay + i * stagger, duration, ease: "easeInOut" },
                opacity: { delay: delay + i * stagger + 0.01, duration: 0.01 },
              }}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </mask>
      </defs>

      {paths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke={color}
          strokeWidth={2}
          fill="none"
          variants={variants}
          transition={{
            pathLength: { delay: delay + i * stagger, duration, ease: "easeInOut" },
            opacity: { delay: delay + i * stagger + 0.01, duration: 0.01 },
          }}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="butt"
          strokeLinejoin="round"
        />
      ))}

      <g mask={`url(#${maskId})`}>
        {paths.map((d, i) => (
          <path key={i} d={d} fill={color} />
        ))}
      </g>
    </motion.svg>
  );
}
