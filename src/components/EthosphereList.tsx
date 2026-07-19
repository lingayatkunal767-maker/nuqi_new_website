"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/Reveal";

interface ListEdition {
  image: string;
  edition: string;
  title: string;
  alt: string;
  href: string;
}

export function EthosphereList({ items }: { items: ListEdition[] }) {
  return (
    <RevealGroup className="divide-y divide-white/10 border-t border-white/10">
      {items.map((item, index) => (
        <RevealItem key={item.href}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 py-5 sm:gap-8 sm:py-6"
          >
            <span className="hidden font-mono text-xs tracking-[0.1em] text-white/30 sm:block">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="relative h-20 w-14 flex-shrink-0 overflow-hidden rounded-lg border border-line sm:h-24 sm:w-16">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="6rem"
                className="object-cover object-top [filter:grayscale(1)_brightness(0.4)_contrast(1.05)]"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="eyebrow text-gold/70">{item.edition}</p>
              <p className="mt-1.5 text-base font-medium leading-snug text-white transition-colors duration-300 group-hover:text-gold sm:text-lg">
                {item.title}
              </p>
            </div>
            <ArrowRight
              size={16}
              className="flex-shrink-0 text-gold/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold"
            />
          </a>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
