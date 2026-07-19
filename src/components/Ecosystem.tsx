"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Reveal } from "@/components/Reveal";

interface TieupLogo {
  src: string;
  alt: string;
}

const TIEUP_LOGOS: TieupLogo[] = [
  { src: "/images/tieups/bsewhite.png", alt: "Tieup Logo" },
  { src: "/images/tieups/nsewhite.png", alt: "Tieup Logo" },
  { src: "/images/tieups/sebiwhite.png", alt: "Tieup Logo" },
  { src: "/images/tieups/accordwhite.png", alt: "Tieup Logo" },
];

function LogoRow({ direction = "left" }: { direction?: "left" | "right" }) {
  return (
    <Marquee speed={40} direction={direction} pauseOnHover gradient={false}>
      {TIEUP_LOGOS.map((logo, index) => (
        <div
          key={`${logo.src}-${index}`}
          className="flex h-20 min-w-64 items-center justify-center"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={320}
            height={64}
            className="mx-24 w-72 object-contain grayscale invert opacity-60 transition-opacity duration-300 hover:opacity-100"
          />
        </div>
      ))}
    </Marquee>
  );
}

export function Ecosystem() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <Reveal className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <span className="eyebrow text-[#a68c4a]">Our Ecosystem</span>
          <h2 className="mt-6 text-4xl font-medium tracking-tight text-black md:text-6xl">
            A Shared{" "}
            <span className="font-display-italic text-[#a68c4a]">
              Journey
            </span>
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-black/60 md:text-lg">
            From first-time investors to experienced wealth-builders, our
            users aren&apos;t just clients — they are collaborators in
            financial empowerment.
          </p>
        </Reveal>
        <LogoRow direction="left" />
      </div>
    </section>
  );
}
