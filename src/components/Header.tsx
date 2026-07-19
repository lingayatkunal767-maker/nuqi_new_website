"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, type Variants } from "motion/react"
import { ArrowUpRight, Menu, X } from "lucide-react"

const EASE = [0.16, 1, 0.3, 1] as const

interface NavLink {
  label: string
  href: string
  gradient: string
}

const NAV_LINKS: NavLink[] = [
  { label: "Advisory", href: "/", gradient: "radial-gradient(circle, rgba(225,198,106,0.22) 0%, rgba(225,198,106,0.08) 50%, transparent 100%)" },
  { label: "Prive", href: "/digitalwealth", gradient: "radial-gradient(circle, rgba(87,192,175,0.22) 0%, rgba(87,192,175,0.08) 50%, transparent 100%)" },
  { label: "IRIS", href: "/iris", gradient: "radial-gradient(circle, rgba(225,198,106,0.22) 0%, rgba(225,198,106,0.08) 50%, transparent 100%)" },
  { label: "Ethosphere", href: "/ethosphere", gradient: "radial-gradient(circle, rgba(87,192,175,0.22) 0%, rgba(87,192,175,0.08) 50%, transparent 100%)" },
  { label: "Disclosures", href: "/Disclosures", gradient: "radial-gradient(circle, rgba(225,198,106,0.22) 0%, rgba(225,198,106,0.08) 50%, transparent 100%)" },
]

const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}
const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}
const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 1.8,
    transition: { duration: 0.5, ease: EASE },
  },
}
const flipTransition = { type: "spring" as const, stiffness: 240, damping: 22 }

function FlipNavItem({
  label,
  onClick,
  href,
  gradient,
}: {
  label: string
  onClick?: () => void
  href?: string
  gradient: string
}) {
  const renderFace = (className: string) =>
    href ? (
      <Link href={href} className={className}>
        {label}
      </Link>
    ) : (
      <button type="button" onClick={onClick} className={className}>
        {label}
      </button>
    )

  return (
    <motion.div
      className="relative"
      style={{ perspective: "600px" }}
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none rounded-full"
        variants={glowVariants}
        style={{ background: gradient }}
      />
      <motion.div
        variants={itemVariants}
        transition={flipTransition}
        style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
        className="relative z-10"
      >
        {renderFace("block px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-white/70")}
      </motion.div>
      <motion.div
        variants={backVariants}
        transition={flipTransition}
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center top",
          transform: "rotateX(90deg)",
        }}
        className="absolute inset-0 z-10"
      >
        {renderFace("block px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-gold")}
      </motion.div>
    </motion.div>
  )
}

interface UniverseLink {
  href: string
  image: string
  logo: string
  title: string
  description: string
}

const UNIVERSE_LINKS: UniverseLink[] = [
  {
    href: "https://nuqigold.com/",
    image: "/images/universe-gold.png",
    logo: "/images/NuqiGold-logo.png",
    title: "Nuqi Gold",
    description:
      "Invest in gold the smart way — Nuqi Gold offers a seamless platform for fractional gold ownership backed by real assets.",
  },
  {
    href: "https://nuqisukuk.com/",
    image: "/images/sukuk.png",
    logo: "/images/sukuk-logo.png",
    title: "Nuqi Sukuk",
    description:
      "Nuqi Sukuk is a fractional and ethical sukuk marketplace built to democratize access to the global Islamic fixed-income market.",
  },
]

export function Header() {
  const [isUniverseOpen, setIsUniverseOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeUniverse = () => setIsUniverseOpen(false)
  const closeMobileNav = () => setIsMobileNavOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 flex justify-center transition-[padding] duration-500 ${
          isScrolled ? "pt-3" : "pt-0"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div
          className={`mx-auto flex w-full items-center justify-between font-sans transition-all duration-500 ${
            isScrolled
              ? "h-14 max-w-[1200px] rounded-full border border-white/10 bg-black/70 px-4 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-6"
              : "h-20 max-w-none rounded-none border-b border-white/0 bg-gradient-to-b from-black/70 via-black/30 to-transparent px-4 sm:px-6 lg:px-10"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        >
          <div className="flex-shrink-0">
            <Link className="block" href="/">
              <motion.div
                whileHover={{ scale: 1.04, opacity: 0.9 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <Image
                  src="/images/white-in-logo-cropped.png"
                  alt="Nuqi Logo"
                  width={160}
                  height={40}
                  className="h-7 sm:h-9 w-auto object-contain"
                />
              </motion.div>
            </Link>
          </div>

          <nav className="hidden lg:flex flex-grow items-center justify-center gap-1">
            {NAV_LINKS.map((link) => (
              <FlipNavItem key={link.label} label={link.label} href={link.href} gradient={link.gradient} />
            ))}
            <FlipNavItem
              label="Nuqi Universe"
              onClick={() => setIsUniverseOpen(true)}
              gradient="radial-gradient(circle, rgba(225,198,106,0.22) 0%, rgba(225,198,106,0.08) 50%, transparent 100%)"
            />
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              type="button"
              className="lg:hidden"
              onClick={() => setIsMobileNavOpen((prev) => !prev)}
              aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
            >
              {isMobileNavOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>

            <div className="lg:hidden">
              <button className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-transparent transition-colors duration-300 hover:border-gold">
                <Image
                  src="/images/india.jpg"
                  alt="India"
                  width={20}
                  height={20}
                  className="h-full w-full object-cover"
                />
              </button>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <a href="http://portal.nuqiwealth.in/" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="rounded-full border border-[#e1c66a]/60 bg-transparent px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-[#e1c66a] hover:bg-[#e1c66a] hover:text-black"
                >
                  Log In/Sign Up
                </motion.button>
              </a>
              <button className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-transparent transition-colors duration-300 hover:border-gold">
                <Image
                  src="/images/india.jpg"
                  alt="India"
                  width={20}
                  height={20}
                  className="h-full w-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile nav drawer */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
            isMobileNavOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  className="block px-2 py-3 font-mono text-xs uppercase tracking-[0.15em] text-white/80 transition-colors duration-300 hover:text-gold"
                  href={link.href}
                  onClick={closeMobileNav}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => {
                  setIsUniverseOpen(true)
                  closeMobileNav()
                }}
                className="block w-full text-left px-2 py-3 font-mono text-xs uppercase tracking-[0.15em] text-white/80 transition-colors duration-300 hover:text-gold"
              >
                Nuqi Universe
              </button>
            </li>
            <li className="py-2">
              <a href="http://portal.nuqiwealth.in/" target="_blank" rel="noopener noreferrer">
                <button className="w-full rounded-full border border-[#e1c66a]/60 bg-transparent px-4 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:border-[#e1c66a] hover:bg-[#e1c66a] hover:text-black">
                  Log In/Sign Up
                </button>
              </a>
            </li>
          </ul>
        </div>
      </header>

      {/* Nuqi Universe backdrop */}
      <div
        onClick={closeUniverse}
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isUniverseOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Nuqi Universe panel */}
      <div
        className={`fixed top-0 right-0 h-full z-[60] flex flex-col border-l border-white/10 shadow-2xl transition-transform duration-500 ${
          isUniverseOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          width: "min(360px, 100vw)",
          background: "linear-gradient(160deg, rgb(20,17,5) 0%, rgb(5,5,5) 40%)",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="flex-shrink-0 relative overflow-hidden bg-black">
          <Image
            src="/images/wealth.png"
            alt=""
            aria-hidden
            fill
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
          <div className="relative flex items-center justify-end px-5" style={{ height: "56px" }}>
            <button
              type="button"
              onClick={closeUniverse}
              aria-label="Close"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 hover:bg-white/15 hover:border-[#e1c66a]/60 text-white transition-all duration-300"
            >
              <X size={15} />
            </button>
          </div>
          <div className="relative px-5 pb-5">
            <p className="eyebrow text-gold mb-1.5">Explore</p>
            <h2 className="text-white font-sans font-semibold text-xl leading-tight drop-shadow-md">
              Nuqi <span className="font-display-gold">Universe</span>
            </h2>
            <p className="text-white/60 text-xs mt-1 font-sans">
              Discover the full Nuqi ecosystem
            </p>
            <div className="mt-4 h-px w-10 bg-[#e1c66a]" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {UNIVERSE_LINKS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden border border-white/10 hover:border-[#e1c66a]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="relative px-5 py-10 overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  aria-hidden
                  fill
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                <div className="relative flex items-center justify-between">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={130}
                    height={28}
                    className="h-7 w-auto max-w-[130px] object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                  <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 group-hover:bg-white/15 group-hover:border-[#e1c66a]/60 flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight size={14} className="text-white/70 group-hover:text-gold transition-colors duration-300" />
                  </div>
                </div>
              </div>
              <div className="bg-black/40 border-t border-white/10 px-5 py-4">
                <p className="font-semibold text-white font-sans text-sm mb-1">{item.title}</p>
                <p className="text-white/50 text-xs leading-relaxed">{item.description}</p>
                <div className="mt-3 flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.1em] text-gold group-hover:gap-2 transition-all duration-300">
                  Visit site <ArrowUpRight size={11} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex-shrink-0 px-5 py-3.5 border-t border-white/10 bg-black/40 flex items-center justify-between">
          <Image
            src="/images/white-in-logo-cropped.png"
            alt="Nuqi"
            width={60}
            height={16}
            className="h-4 object-contain opacity-25"
          />
          <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase">
            More coming soon
          </span>
        </div>
      </div>
    </>
  )
}
