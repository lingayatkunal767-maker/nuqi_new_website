import Image from "next/image";
import { Mail } from "lucide-react";
import type { SVGProps } from "react";

// lucide-react 1.x removed brand/logo icons (Facebook, Instagram, LinkedIn) due to
// trademark policy — replicated here as inline SVGs matching lucide's stroke style.
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x={2} y={9} width={4} height={12} />
      <circle cx={4} cy={4} r={2} />
    </svg>
  );
}

interface FooterLink {
  href: string;
  label: string;
  isHome?: boolean;
}

const FOOTER_LINKS: FooterLink[] = [
  { href: "/", label: "Home", isHome: true },
  { href: "/#advisory", label: "Advisory" },
  { href: "/#nuqiprive", label: "Prive" },
  { href: "/ethosphere", label: "Ethosphere" },
  { href: "/Privacy", label: "Legal" },
  { href: "/About", label: "About" },
  { href: "/partnership", label: "Partnership" },
  { href: "/press", label: "News" },
  { href: "/ContactsPage", label: "Contact Us" },
  { href: "/InvestorCharter", label: "Investor Charter" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black font-sans text-white">
      <div className="container mx-auto px-4 py-20 md:py-24">
        <div className="flex flex-col items-center gap-10 text-center text-white">
          <div>
            <Image
              alt="Nuqi Logo"
              src="/images/white-in-logo-cropped.png"
              width={160}
              height={56}
              className="h-14 w-auto"
            />
          </div>
          <div className="flex gap-8">
            <a
              aria-label="Contact by Mail"
              className="text-[#57c0af] hover:text-white transition"
              href="mailto:support@nuqiwealth.in"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              aria-label="Follow on Instagram"
              className="text-[#57c0af] hover:text-white transition"
              href="https://www.instagram.com/nuqiwealth_india/"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a
              aria-label="Follow on Facebook"
              className="text-[#57c0af] hover:text-white transition"
              href="https://www.facebook.com/NuqiWealthIndia/"
            >
              <FacebookIcon className="w-6 h-6" />
            </a>
            <a
              aria-label="Follow on Linkedin"
              className="text-[#57c0af] hover:text-white transition"
              href="https://www.linkedin.com/company/nuqi-wealth"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-6 text-center md:grid-cols-3 lg:grid-cols-6 xl:flex xl:justify-center xl:gap-10">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.isHome
                  ? "eyebrow text-[#57c0af]"
                  : "eyebrow text-white/60 transition hover:text-[#57c0af]"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-16 text-center text-xs leading-relaxed text-white/40">
          <p>
            ©2025 Nuqi Wealth India Pvt Ltd - Investment Advisory Unit (Separately Identifiable Unit) <br />
            SEBI RIA Registration No: INA000016612. CIN: U65990MH2020FTC351885. Validity of registration- 30th Jan 2022 - Perpetual <br />
            Registered &amp; Corporate Address: Office Nos 206, Parinee I, Veera Desai Road, Andheri West, Mumbai - 400053
            <br />
            Disclaimer 1: Past performance is not a guarantee of future results. <br />
            The historical returns, expected returns, and probability projections provided on this website or App are for informational and illustrative purposes only.
            <br />
            They are not an indication of future performance. All investing involves risk, including the possible loss of all the money you invest. The past performance of any trading system does not guarantee future performance. Nuqi Wealth assumes no responsibility for liability for your trading and investment results. Registration granted by SEBI is no way guarantee performance of the intermediary or provide any assurance of returns to investors.
            <br />
            Disclaimer 2: Registration granted by SEBI, membership of BASL and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors. <br />
            Advisory Services on Nuqiwealth.com is provided by Nuqi Wealth India Private Limited, a SEBI registered Investment Adviser having registration no. INA 000016612 (Valid from 31st Jan 2022 - Perpetual). BASL membership no 1750.
            <br />
            <br />
            <span>
              Please visit our{" "}
              <a
                href="/disclaimer"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-white"
              >
                Disclaimer Notice page
              </a>{" "}
              for further information.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
