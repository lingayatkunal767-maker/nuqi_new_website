"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const tlRef = useRef<HTMLDivElement>(null);
  const blRef = useRef<HTMLDivElement>(null);
  const brRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroOverlayRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = containerRef.current;
    const tl = tlRef.current;
    const bl = blRef.current;
    const br = brRef.current;
    const hero = heroRef.current;
    const heroOverlay = heroOverlayRef.current;
    const heroText = heroTextRef.current;
    const eyebrowEl = eyebrowRef.current;
    if (!container || !tl || !bl || !br || !hero || !heroOverlay || !heroText || !eyebrowEl) return;

    // GSAP owns 100% of the transform on these elements (no Tailwind translate
    // classes on the animated node itself — mixing the two fights over the
    // same `transform` property and silently drops one of them). The -50
    // baseline in every value below is the element's own self-centering;
    // the extra offset on top of that is the diamond-spread displacement.
    gsap.set(tl, { xPercent: -170, yPercent: -120, opacity: 1 });
    gsap.set(bl, { xPercent: -170, yPercent: 20, opacity: 1 });
    gsap.set(br, { xPercent: 70, yPercent: 20, opacity: 1 });
    gsap.set(hero, {
      xPercent: 70,
      yPercent: -120,
      width: "36vw",
      height: "24vh",
      borderRadius: "1.5rem",
    });
    gsap.set(heroOverlay, { opacity: 0 });
    gsap.set(heroText, { opacity: 0, y: 24 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${window.innerHeight * 2.2}`,
        pin: true,
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
    });

    timeline
      .to(eyebrowEl, { opacity: 0, duration: 0.1 }, 0)
      // Phase 1 (0 -> 0.5): the three satellite cards converge to center
      // (xPercent/yPercent -50 = perfectly centered on the anchor point).
      .to([tl, bl, br], { xPercent: -50, yPercent: -50, duration: 0.5 }, 0)
      .to(hero, { xPercent: -50, yPercent: -50, duration: 0.5 }, 0)
      // Phase 2 (0.5 -> 0.7): satellites fade out as the hero takes over.
      .to([tl, bl, br], { opacity: 0, duration: 0.2 }, 0.5)
      // Phase 3 (0.55 -> 0.85): hero expands to fill the screen.
      .to(
        hero,
        { width: "100vw", height: "100vh", borderRadius: "0rem", duration: 0.3 },
        0.55
      )
      .to(heroOverlay, { opacity: 1, duration: 0.2 }, 0.6)
      // Phase 4 (0.85 -> 1): headline reveals over the fullscreen image.
      .to(heroText, { opacity: 1, y: 0, duration: 0.15 }, 0.85);

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, []);

  const cardClasses =
    "absolute left-1/2 top-1/2 w-[36vw] h-[24vh] overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl will-change-transform";

  return (
    <div ref={containerRef} className={cn("relative bg-void", className)}>
      <div className="h-screen w-full overflow-hidden">
        <p
          ref={eyebrowRef}
          className="eyebrow absolute top-16 left-1/2 -translate-x-1/2 z-50 text-gold text-center"
        >
          {eyebrow}
        </p>

        <div className="absolute inset-0">
          <div ref={tlRef} className={cn(cardClasses, "z-10")}>
            <Image src={topLeft.src} alt={topLeft.alt} fill sizes="36vw" className="object-cover" />
            <span className="eyebrow absolute bottom-4 left-4 text-white">{topLeft.caption}</span>
          </div>

          <div ref={brRef} className={cn(cardClasses, "z-20")}>
            <Image src={bottomRight.src} alt={bottomRight.alt} fill sizes="36vw" className="object-cover" />
            <span className="eyebrow absolute bottom-4 left-4 text-white">{bottomRight.caption}</span>
          </div>

          <div ref={blRef} className={cn(cardClasses, "z-30")}>
            <Image src={bottomLeft.src} alt={bottomLeft.alt} fill sizes="36vw" className="object-cover" />
            <span className="eyebrow absolute bottom-4 left-4 text-white">{bottomLeft.caption}</span>
          </div>

          <div
            ref={heroRef}
            className="absolute left-1/2 top-1/2 z-40 origin-center overflow-hidden shadow-2xl will-change-transform"
          >
            <Image src={reveal.src} alt={reveal.alt} fill sizes="100vw" className="object-cover" />
            <div
              ref={heroOverlayRef}
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
            />
            <div
              ref={heroTextRef}
              className="absolute inset-x-0 bottom-0 flex flex-col items-center pb-16 md:pb-24 text-center px-6"
            >
              <h2 className="font-display-gold text-4xl md:text-6xl lg:text-7xl">{headline}</h2>
              <p className="mt-4 max-w-md text-sm md:text-base text-white/60 font-light">{subline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
