"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Signature } from "@/components/Signature";

const EASE = [0.16, 1, 0.3, 1] as const;

// Timed to the signature strokes below: "Nuqi" finishes ~1.0s in,
// "Wealth" starts right after and finishes ~2.3s in.
const NUQI_DONE_MS = 1000;
const TAGLINE_DELAY_MS = 2300;
const HOLD_MS = 900;
const TOTAL_MS = TAGLINE_DELAY_MS + HOLD_MS;

function useSignatureFontSize() {
  const [fontSize, setFontSize] = useState(72);

  useEffect(() => {
    function updateSize() {
      const w = window.innerWidth;
      setFontSize(w < 420 ? 30 : w < 640 ? 40 : w < 1024 ? 56 : 72);
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return fontSize;
}

export function Preloader() {
  const [show, setShow] = useState(true);
  const fontSize = useSignatureFontSize();

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(false);
    }, TOTAL_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[250] flex flex-col items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: EASE } }}
        >
          <motion.span
            className="eyebrow mb-8 text-gold"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            The Gold Collar Life
          </motion.span>

          <div className="flex w-full max-w-full flex-wrap items-baseline justify-center px-6">
            <Signature
              text="Nuqi"
              color="#e1c66a"
              fontSize={fontSize}
              duration={0.7}
              stagger={0.12}
              delay={0.15}
            />
            <Signature
              text=" Wealth"
              color="#f5f2ea"
              fontSize={fontSize}
              duration={0.7}
              stagger={0.1}
              delay={NUQI_DONE_MS / 1000}
            />
          </div>

          <motion.p
            className="mt-8 max-w-xs text-center text-sm font-light text-white/40"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: TAGLINE_DELAY_MS / 1000 }}
          >
            Ethical wealth, engineered — not compromised.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
