"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";

export interface MasonryEdition {
  image: string;
  edition: string;
  title: string;
  alt: string;
  href: string;
}

interface GridItem extends MasonryEdition {
  index: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

const BREAKPOINTS = ["(min-width:1500px)", "(min-width:1100px)", "(min-width:768px)", "(min-width:480px)"];
const COLUMN_COUNTS = [4, 3, 2, 2];

function useResponsiveColumns() {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const queries = BREAKPOINTS.map((q) => window.matchMedia(q));

    function update() {
      const index = queries.findIndex((q) => q.matches);
      setColumns(index === -1 ? 1 : COLUMN_COUNTS[index]);
    }

    update();
    queries.forEach((q) => q.addEventListener("change", update));
    return () => queries.forEach((q) => q.removeEventListener("change", update));
  }, []);

  return columns;
}

function useMeasureWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return [ref, width] as const;
}

/** Card height scales with how much cover text an edition carries, so the grid
 * reads as a genuine masonry rather than a uniform table dressed up as one. */
function heightFor(title: string) {
  if (title.length <= 25) return 300;
  if (title.length <= 45) return 340;
  if (title.length <= 65) return 380;
  return 420;
}

export function EthosphereMasonry({ items }: { items: MasonryEdition[] }) {
  const columns = useResponsiveColumns();
  const [containerRef, width] = useMeasureWidth();
  const gap = 20;

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const columnWidth = (width - gap * (columns - 1)) / columns;

    return items.map((item, index) => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col + gap * col;
      const h = heightFor(item.title);
      const y = colHeights[col];

      colHeights[col] += h + gap;

      return { ...item, index, x, y, w: columnWidth, h };
    });
  }, [columns, items, width]);

  const containerHeight = grid.length
    ? Math.max(...grid.map((item) => item.y + item.h))
    : 0;

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!grid.length) return;

    grid.forEach((item, i) => {
      const selector = `[data-masonry-key="${item.index}"]`;
      const target = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        gsap.fromTo(
          selector,
          { opacity: 0, y: item.y + 60, filter: "blur(10px)" },
          {
            opacity: 1,
            ...target,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            delay: i * 0.04,
          }
        );
      } else {
        gsap.to(selector, { ...target, duration: 0.5, ease: "power3.out", overwrite: "auto" });
      }
    });

    hasMounted.current = true;
  }, [grid]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: containerHeight || undefined }}
    >
      {grid.map((item) => (
        <a
          key={item.index}
          data-masonry-key={item.index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group absolute left-0 top-0 flex flex-col items-start justify-start overflow-hidden rounded-2xl border border-line bg-panel transition-colors duration-500 hover:border-gold/50 hover:shadow-[0_0_35px_rgba(225,198,106,0.2)]"
        >
          <Image
            className="absolute inset-0 z-0 h-full w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [filter:grayscale(1)_brightness(0.32)_contrast(1.05)] group-hover:scale-105 group-hover:[filter:grayscale(1)_brightness(0.42)_contrast(1.05)]"
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/50 to-black/30 pointer-events-none" />

          <span className="eyebrow absolute right-5 top-5 z-20 text-gold/25">
            {String(item.index + 1).padStart(2, "0")}
          </span>

          <div className="relative z-20 flex h-full w-full flex-col justify-end p-5">
            <p className="eyebrow text-gold/80">{item.edition}</p>
            <p className="mt-3 text-base md:text-lg font-medium leading-snug text-white">
              {item.title}
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 eyebrow text-gold transition-transform duration-300 group-hover:translate-x-1">
              Read More <ArrowRight size={12} aria-hidden />
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
