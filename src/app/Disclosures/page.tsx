"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

type TabKey = "compliance" | "ai" | "payment";

const TABS: { key: TabKey; label: string }[] = [
  { key: "compliance", label: "Compliance Disclosure" },
  { key: "ai", label: "AI Disclosure" },
  { key: "payment", label: "Payment UPI" },
];

const COMPLIANCE_ROWS = [
  { sr: 1, year: "FY 2020-21", report: "Conducted", remarks: "nil" },
  { sr: 2, year: "FY 2021-22", report: "Conducted", remarks: "nil" },
  { sr: 3, year: "FY 2022-23", report: "Conducted", remarks: "nil" },
  { sr: 4, year: "FY 2023-24", report: "Conducted", remarks: "nil" },
];

const AI_DISCLOSURE_ITEMS = [
  "To gather data, information, and updates from different sources to conduct research across various asset classes and categories.",
  "To manage and organize data efficiently for improved research output.",
  "To enhance the quality, grammar, and readability of content.",
  "To quickly access summarized general data that may aid in better financial planning.",
];

function ComplianceDisclosure() {
  return (
    <div>
      <p className="mb-8 max-w-3xl text-sm sm:text-base leading-relaxed text-zinc-400">
        Disclosure with respect to compliance with Annual Compliance Audit
        requirement under Regulation 19(3) of the Securities and Exchange
        Board of India (Investment Advisers) Regulations, 2013, for last and
        current financial years are as under:
      </p>
      <div className="w-full overflow-x-auto rounded-2xl border border-white/10">
        <table className="min-w-full text-sm sm:text-base">
          <thead>
            <tr className="border-b-2 border-[#57c0af]">
              <th className="p-4 text-left font-medium text-zinc-400 eyebrow">
                Sr. No
              </th>
              <th className="p-4 text-left font-medium text-zinc-400 eyebrow">
                Financial Year
              </th>
              <th className="p-4 text-left font-medium text-zinc-400 eyebrow">
                Compliance Audit Report
              </th>
              <th className="p-4 text-left font-medium text-zinc-400 eyebrow">
                Remarks, if any
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPLIANCE_ROWS.map((row, index) => (
              <tr
                key={row.sr}
                className={cn(
                  "transition-colors hover:bg-white/[0.03]",
                  index !== COMPLIANCE_ROWS.length - 1 &&
                    "border-b border-white/10"
                )}
              >
                <td className="p-4 text-white/90">{row.sr}</td>
                <td className="p-4 text-white/90">{row.year}</td>
                <td className="p-4 text-white/90">{row.report}</td>
                <td className="p-4 text-white/90">{row.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AiDisclosure() {
  return (
    <div className="max-w-3xl space-y-6 text-sm sm:text-base leading-relaxed text-zinc-300">
      <div className="space-y-2">
        <p className="eyebrow text-[#57c0af]">Disclaimer</p>
        <h3 className="text-lg sm:text-xl font-medium text-white">
          Use of Artificial Intelligence (&apos;AI&apos;) Tools in IA Services
        </h3>
      </div>
      <p>
        The Investment Adviser (IA) uses various Artificial Intelligence (AI)
        tools in providing investment advice to its clients as under:
      </p>
      <ul className="space-y-3">
        {AI_DISCLOSURE_ITEMS.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#57c0af]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PaymentUpi() {
  return (
    <div className="space-y-10">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5">
        <p className="eyebrow text-[#57c0af]">Payment Via UPI</p>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
        <div className="flex-1 space-y-5 text-sm sm:text-base leading-relaxed text-zinc-300">
          <p>We now have a validated UPI ID for all investor payments:</p>
          <p className="text-[#57c0af] font-semibold text-base sm:text-lg tracking-wide">
            nuqiwealthindia.ia@validhdfc
          </p>
          <p>
            You can also make payments by scanning our official QR code,
            which includes a white thumbs-up icon inside a green triangle — a
            mark of authenticity.
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-white/10 p-6 md:w-auto">
          <Image
            src="/images/QR.png"
            alt="NUQI Wealth India UPI QR Code"
            width={288}
            height={288}
            className="h-48 w-48 object-contain sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72"
          />
          <p className="text-[#57c0af] text-sm font-medium tracking-wide">
            nuqiwealthindia.ia@validhdfc
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DisclosuresPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("compliance");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-void pt-24 text-white">
        <div className="section-x mx-auto max-w-5xl py-16 md:py-24">
          <Reveal>
            <p className="eyebrow mb-4 text-[#57c0af]">Legal &amp; Compliance</p>
            <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl">
              Disclosures
            </h1>
            <p className="mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
              Everything we&apos;re required to tell you — and everything we{" "}
              <span className="font-display-italic text-lg text-[#57c0af] sm:text-xl">
                want
              </span>{" "}
              to.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 md:mt-16">
            <div
              role="tablist"
              className="relative flex gap-8 border-b border-white/10 sm:gap-10"
            >
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  data-state={activeTab === tab.key ? "active" : "inactive"}
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    "relative pb-4 font-mono text-xs uppercase tracking-[0.15em] transition-colors sm:text-sm",
                    activeTab === tab.key
                      ? "text-white"
                      : "text-zinc-500 hover:text-zinc-300"
                  )}
                >
                  {tab.label}
                  {activeTab === tab.key && (
                    <motion.span
                      layoutId="disclosures-tab-underline"
                      className="absolute inset-x-0 -bottom-px h-[2px] bg-[#57c0af]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-10 md:mt-12">
              {activeTab === "compliance" && <ComplianceDisclosure />}
              {activeTab === "ai" && <AiDisclosure />}
              {activeTab === "payment" && <PaymentUpi />}
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
