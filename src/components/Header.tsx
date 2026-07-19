"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Menu, X } from "lucide-react"

interface NavLink {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: "Advisory", href: "/" },
  { label: "Prive", href: "/digitalwealth" },
  { label: "IRIS", href: "/iris" },
  { label: "Ethosphere", href: "/ethosphere" },
  { label: "Disclosures", href: "/Disclosures" },
]

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

  const closeUniverse = () => setIsUniverseOpen(false)
  const closeMobileNav = () => setIsMobileNavOpen(false)

  return (
    <>
      <header className="fixed top-0 w-full h-[56px] z-50 bg-black backdrop-blur-xl bg-opacity-50 border-opacity-50 border-b-[1px] border-[#4d4d4d] shadow-lg">
        <div className="container mx-auto px-4 h-full flex items-center justify-between font-poppins">
          <div className="flex-shrink-0">
            <Link className="block" href="/">
              <Image
                src="/images/white-in-logo-cropped.png"
                alt="Nuqi Logo"
                width={160}
                height={40}
                className="h-8 sm:h-10 md:h-8 w-auto lg:ml-20 object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:flex flex-grow justify-center">
            <nav className="hidden md:flex tracking-wider font-poppins z-50">
              <ul className="flex items-center -space-x-4 tracking-wider text-white text-[26px]">
                {NAV_LINKS.map((link) => (
                  <li className="px-4" key={link.label}>
                    <Link
                      className="flex items-center gap-1 px-2 py-2 text-base text-xs transition text-white hover:text-[#57c0af] focus:outline-none"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="px-4">
                  <button
                    type="button"
                    onClick={() => setIsUniverseOpen(true)}
                    className="flex items-center gap-1 px-2 py-2 text-xs text-white hover:text-[#57c0af] transition"
                  >
                    Nuqi Universe
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-3 lg:space-x-4 lg:mr-5">
            <div className="lg:hidden order-3">
              <button
                type="button"
                onClick={() => setIsMobileNavOpen((prev) => !prev)}
                aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
              >
                {isMobileNavOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
            <div className="lg:hidden">
              <button className="flex h-10 items-center justify-between px-3 py-2 text-sm w-full bg-black text-white border border-[#57c0af] rounded-xl hover:bg-[#57c0af] hover:text-black transition-all duration-200">
                <Image
                  src="/images/india.jpg"
                  alt="India"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain"
                />
              </button>
            </div>
            <div className="hidden lg:flex space-x-4 order-2">
              <a href="http://portal.nuqiwealth.in/" target="_blank" rel="noopener noreferrer">
                <button className="px-3 py-2 text-sm font-semibold text-white bg-transparent border border-[#57c0af] rounded-xl hover:bg-[#57c0af] hover:text-black">
                  Log In/Sign Up
                </button>
              </a>
              <div className="flex lg:ml-4">
                <button className="flex h-10 items-center justify-between px-3 py-2 text-sm w-full bg-black text-white border border-[#57c0af] rounded-xl hover:bg-[#57c0af] hover:text-black transition-all duration-200">
                  <Image
                    src="/images/india.jpg"
                    alt="India"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile nav drawer */}
        <div
          className={`lg:hidden absolute top-[56px] left-0 w-full bg-black border-b border-white/10 font-poppins transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileNavOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  className="block px-2 py-3 text-sm text-white hover:text-[#57c0af] transition"
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
                className="block w-full text-left px-2 py-3 text-sm text-white hover:text-[#57c0af] transition"
              >
                Nuqi Universe
              </button>
            </li>
            <li className="py-2">
              <a href="http://portal.nuqiwealth.in/" target="_blank" rel="noopener noreferrer">
                <button className="w-full px-3 py-2 text-sm font-semibold text-white bg-transparent border border-[#57c0af] rounded-xl hover:bg-[#57c0af] hover:text-black transition">
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
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isUniverseOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Nuqi Universe panel */}
      <div
        className={`fixed top-0 right-0 h-full z-[60] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out ${
          isUniverseOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          width: "min(360px, 100vw)",
          background: "linear-gradient(rgb(10,26,20) 0%, rgb(5,5,5) 30%)",
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
              className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all"
            >
              <X size={15} />
            </button>
          </div>
          <div className="relative px-5 pb-5">
            <p className="text-[#57c0af] text-[10px] font-poppins uppercase tracking-[0.2em] mb-1.5">
              Explore
            </p>
            <h2 className="text-white font-poppins font-bold text-xl leading-tight drop-shadow-md">
              Nuqi Universe
            </h2>
            <p className="text-white/70 text-xs mt-1 font-poppins">
              Discover the full Nuqi ecosystem
            </p>
            <div className="mt-4 h-[2px] w-10 bg-gradient-to-r from-[#57c0af] to-[#45a898] rounded-full" />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {UNIVERSE_LINKS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="relative px-5 py-10 overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  aria-hidden
                  fill
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-black/35 pointer-events-none" />
                <div className="relative flex items-center justify-between">
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={130}
                    height={28}
                    className="h-7 w-auto max-w-[130px] object-contain"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-200">
                    <ArrowUpRight size={14} className="text-white/70 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
              <div className="bg-[#0f1f18] border border-white/5 px-5 py-4">
                <p className="font-bold text-white font-poppins text-sm mb-1">{item.title}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#57c0af] font-poppins group-hover:gap-2 transition-all duration-150">
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
          <span className="text-[10px] text-gray-600 font-poppins tracking-widest uppercase">
            More coming soon
          </span>
        </div>
      </div>
    </>
  )
}
