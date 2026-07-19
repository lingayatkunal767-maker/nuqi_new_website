"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

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

function LogoRow() {
  return (
    <Marquee speed={40} pauseOnHover gradient={false}>
      {TIEUP_LOGOS.map((logo, index) => (
        <div
          key={`${logo.src}-${index}`}
          className="flex mb-16 min-w-52 justify-center h-[3.5rem]"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={280}
            height={56}
            className="mx-16 object-cover w-70"
          />
        </div>
      ))}
    </Marquee>
  );
}

export function Ecosystem() {
  return (
    <div className="flex flex-col gap-8 px-14 max-md:px-4 mt-10 py-12 items-center justify-center antialiased container">
      <div className="flex flex-col bg-[#0d0d0d] rounded-3xl justify-between items-center">
        <div className="flex flex-col justify-between items-center w-full">
          <div className="flex flex-col gap-4 mb-16">
            <div className="text-center max-w-4xl mx-auto mb-24 animate-fade-in-up">
              <span className="text-[#57c0af] text-xl font-bold tracking-[0.2em] uppercase mt-10 block">
                Our Ecosystem
              </span>
              <h2 className="text-5xl md:text-7xl font-light text-white mt-10 tracking-tight">
                A Shared Journey
              </h2>
              <p className="md:text-xl text-sm text-gray-400 font-light leading-relaxed mt-10">
                From first-time investors to experienced wealth-builders, our
                users aren&apos;t just clients — they are collaborators in
                financial empowerment.
              </p>
            </div>
          </div>
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </div>
  );
}
