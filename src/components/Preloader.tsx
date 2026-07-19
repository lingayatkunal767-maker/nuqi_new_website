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

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("nuqi-preloader-seen");
    const delay = alreadySeen ? 0 : TOTAL_MS;
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("nuqi-preloader-seen", "1");
    }, delay);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[250] flex flex-col items-center justify-center bg-black"
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

          <div className="flex flex-wrap items-baseline justify-center">
            <Signature
              text="Nuqi"
              color="#e1c66a"
              fontSize={72}
              duration={0.7}
              stagger={0.12}
              delay={0.15}
            />
            <Signature
              text=" Wealth"
              color="#f5f2ea"
              fontSize={72}
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
