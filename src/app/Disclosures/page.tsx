"use client";

import { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
    <>
      <p className="mb-6 text-sm sm:text-base leading-relaxed">
        Disclosure with respect to compliance with Annual Compliance Audit
        requirement under Regulation 19(3) of the Securities and Exchange
        Board of India (Investment Advisers) Regulations, 2013, for last and
        current financial years are as under:
      </p>
      <div className="mt-4 w-full overflow-x-auto">
        <div className="border border-[#57c0af] rounded-lg">
          <table className="min-w-full text-white">
            <thead className="border-b border-[#57c0af] bg-black">
              <tr>
                <th className="p-3 text-center border-r border-[#57c0af]">
                  Sr. No
                </th>
                <th className="p-3 text-center border-r border-[#57c0af]">
                  Financial Year
                </th>
                <th className="p-3 text-center border-r border-[#57c0af]">
                  Compliance Audit Report
                </th>
                <th className="p-3 text-center">Remarks, if any</th>
              </tr>
            </thead>
            <tbody>
              {COMPLIANCE_ROWS.map((row, index) => (
                <tr
                  key={row.sr}
                  className={cn(
                    index !== COMPLIANCE_ROWS.length - 1 &&
                      "border-b border-[#57c0af]"
                  )}
                >
                  <td className="p-3 text-center border-r border-[#57c0af]">
                    {row.sr}
                  </td>
                  <td className="p-3 text-center border-r border-[#57c0af]">
                    {row.year}
                  </td>
                  <td className="p-3 text-center border-r border-[#57c0af]">
                    {row.report}
                  </td>
                  <td className="p-3 text-center">{row.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

function AiDisclosure() {
  return (
    <div className="space-y-6 text-sm sm:text-base leading-relaxed">
      <h3 className="text-lg font-semibold text-[#57c0af]">
        Disclaimer - Use of Artificial Intelligence (&apos;AI&apos;) Tools in
        IA Services
      </h3>
      <p>
        The Investment Adviser (IA) uses various Artificial Intelligence (AI)
        tools in providing investment advice to its clients as under:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        {AI_DISCLOSURE_ITEMS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function PaymentUpi() {
  return (
    <div className="space-y-8">
      <div className="w-full bg-[#57c0af] rounded-2xl py-5 px-6 text-center">
        <p className="text-black font-bold text-xl sm:text-2xl tracking-wide">
          Payment Via UPI
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-16">
        <div className="flex-1 space-y-5 text-sm sm:text-base leading-relaxed">
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
        <div className="flex flex-col items-center gap-3 w-full md:w-auto">
          <Image
            src="/images/QR.png"
            alt="NUQI Wealth India UPI QR Code"
            width={288}
            height={288}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
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
      <div className="pt-24">
        <div className="p-6 sm:p-8 bg-black text-white mb-14 min-h-screen">
          <h2 className="text-xl sm:text-5xl font-bold mb-6">Disclosures</h2>
          <div className="w-full">
            <div
              role="tablist"
              className="h-10 items-center justify-center text-muted-foreground grid w-full md:w-[50%] lg:w-[35%] grid-cols-3 mb-8 bg-gray-900 p-1 rounded-xl"
            >
              {TABS.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.key}
                  data-state={activeTab === tab.key ? "active" : "inactive"}
                  onClick={() => setActiveTab(tab.key)}
                  className="inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 font-medium rounded-lg transition-all text-xs sm:text-sm data-[state=active]:bg-[#57c0af] data-[state=active]:text-black text-gray-400"
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="mt-2">
              {activeTab === "compliance" && <ComplianceDisclosure />}
              {activeTab === "ai" && <AiDisclosure />}
              {activeTab === "payment" && <PaymentUpi />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
