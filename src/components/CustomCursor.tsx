"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let x = 0;
    let y = 0;

    function onMove(e: MouseEvent) {
      x = e.clientX;
      y = e.clientY;
      if (dot) dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor-hover]");
      if (!dot) return;
      if (interactive) {
        dot.style.width = "44px";
        dot.style.height = "44px";
        dot.style.opacity = "0.6";
      } else {
        dot.style.width = "10px";
        dot.style.height = "10px";
        dot.style.opacity = "1";
      }
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden />;
}
