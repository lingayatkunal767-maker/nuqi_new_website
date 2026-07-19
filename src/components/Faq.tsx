"use client";

import { useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

const upiConsiderationsAnswer: ReactNode = (
  <>
    <p>Investors need to keep following things into consideration:</p>
    <ol className="list-decimal pl-5 mt-2 space-y-2">
      <li>
        The UPI ID should properly show the name of the intermediary, followed
        by the short abbreviation of their category for example &quot;brk&quot;
        for Brokers, &quot;mf&quot; for Mutual Funds, to the left of the
        &quot;@&quot; character.
      </li>
      <li>
        On the right side of the &quot;@&quot;, the new and exclusive handle{" "}
        <strong className="font-semibold text-white">&quot;@valid&quot;</strong>{" "}
        should be present, followed by the bank name.
      </li>
      <li>
        On the confirmation screen, the app should show a white thumbs-up icon
        inside a green triangle.
      </li>
      <li>
        The QR code generated using the utility will have a white thumbs-up
        icon inside a green triangle. it will also display the UPI ID just
        below the QR code.
      </li>
    </ol>
  </>
);

const leftFaqItems: FaqItem[] = [
  {
    question: "What is Nuqi?",
    answer:
      "NUQI is an independent advisory platform, licensed by SEBI in India aimed at both first-time investors starting their investment journey and seasoned investors looking to diversify their portfolio. NUQI deploys its in-house expertise to create portfolios tailored for specific investor profiles and investment themes. The platform uses multiple criteria to make a selection of Stocks, ETFs, Mutual funds, etc., with Social Equity, Ethical operations, Good Governance, and Environmental protection as core investment themes aimed towards Sustainable Growth.",
  },
  {
    question: "Why Invest through Nuqi?",
    answer:
      "Access diverse portfolios featuring 1,500+ Indian stocks, along with ETFs and Mutual Funds. Access Ethical Mutual Funds for systematic investment planning and lump sum. Pre-designed portfolios by qualified investment advisors for long-term investing.",
  },
  {
    question: "Are there any hidden charges or commissions?",
    answer:
      "No, there are no hidden charges, fees, or commissions. We prioritize transparency, and all costs are clearly communicated upfront. If you have any questions, our team is here to help. Your trust matters to us!",
  },
  {
    question:
      "Does Nuqi perform RISK profiling to understand your investment goals?",
    answer: "YES, NUQI performs RISK profiling for all clients.",
  },
  {
    question: "Where can I invest?",
    answer:
      "With NUQI, now you have the option to invest in select financial products in International markets. NUQI takes a cautious approach and presently will only recommend investment instruments that have been pre-screened and carry returns as per your risk profile.",
  },
  {
    question:
      "Can you set up a Regular Investment Plan through the Nuqi app?",
    answer: "Yes.",
  },
  {
    question:
      "Does Nuqi offer investment options that consider social responsibility?",
    answer:
      "YES, our Curated Equity Portfolios (CEP) are based on Ethical / Social & Sustainable ESS Principles.",
  },
  {
    question: "How Does it Work?",
    answer:
      "NUQI mobile app is soon available for Android and iOS devices and is free to download. Once you have filled out the personal assessment questionnaire, the NUQI platform will assign an investor profile to you based on your risk appetite and recommend investment instruments accordingly. You can always change your risk profile by re-taking the questionnaire and NUQI will once again offer you a list of new recommendations suited to you.",
  },
  {
    question:
      "Are there live events to learn more about Nuqi's investment strategies?",
    answer:
      "YES, live online sessions and Global Event Participations are on the cards.",
  },
];

const rightFaqItems: FaqItem[] = [
  {
    question:
      "Does Nuqi have resources to learn about investing for beginners?",
    answer:
      "YES, NUQI Ethosphere is our research library for enthusiastic learners.",
  },
  {
    question:
      "Can you adjust your investment plan based on changing risk tolerance?",
    answer:
      "YES, you have the flexibility to change your RISK profile based on any material change in your circumstances.",
  },
  {
    question:
      "Does Nuqi collaborate with international brokers to offer a wider range of investment options?",
    answer:
      "YES, collaborations are one of the pillars for NUQI Wealth to provide broader investment options.",
  },
  {
    question:
      "Does Nuqi leverage its associations to provide access to in-depth research reports?",
    answer:
      "Yes, IRIS & Ethosphere keep a watch on market trends and investment insights.",
  },
  {
    question: "Can you track your investment's performance live on the Nuqi app?",
    answer:
      "YES, our exhaustive portfolio view will give you a 360-degree view of your investments.",
  },
  {
    question: "Is it compulsory for the investors to use the new handle only?",
    answer:
      "The investors can choose their preferred mode of payment, such as UPI, IMPS, NEFT, RTGS, or Cheques. If an investor opts to use UPI for the payment to registered intermediaries, then they have to do so only using the new UPI ID handle allotted to registered intermediaries.",
  },
  {
    question:
      "What should I check while making payment using the new UPI IDs/ QR Codes?",
    answer: upiConsiderationsAnswer,
  },
  {
    question:
      "Do investors also need to obtain new UPI handles to transact in the securities market?",
    answer:
      "No, the new UPI IDs are only for the intermediaries to obtain and investor can continue to use their existing UPI IDs.",
  },
  {
    question:
      "Whom to approach if my transaction/ payment fails with the new UPI ID?",
    answer:
      "The secure validated UPI ID of intermediaries will use the same banking channel as the earlier generic UPI handles. In case of any technical difficulty, investors are requested to approach their respective bank.",
  },
];

interface FaqAccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqAccordionItem({ item, isOpen, onToggle }: FaqAccordionItemProps) {
  return (
    <div className="p-2 md:p-4 bg-gradient-to-b from-zinc-900 to-black border border-zinc-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:border-[#57c0af] hover:shadow-[#57c0af]/20">
      <button
        type="button"
        className="w-full flex justify-between items-center text-left"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <h2 className="text-sm font-normal text-white pr-4">
          {item.question}
        </h2>
        <span
          className={cn(
            "text-[#57c0af] text-2xl font-light transition-transform duration-300 flex-shrink-0",
            isOpen ? "rotate-45" : "rotate-0",
          )}
        >
          +
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="text-[14px] leading-6 text-gray-300">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  const [openLeft, setOpenLeft] = useState<Set<number>>(new Set());
  const [openRight, setOpenRight] = useState<Set<number>>(new Set());

  const toggleLeft = (index: number) => {
    setOpenLeft((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const toggleRight = (index: number) => {
    setOpenRight((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="text-white mt-4 px-5 w-full">
      <h1 className="text-center pt-32 text-3xl text-[#57c0af] mb-7">
        <span className="text-white text-3xl md:text-4xl font-semibold font-poppins">
          Frequently Asked Questions{" "}
        </span>
        (FAQs)
      </h1>
      <div className="w-full min-h-full mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="space-y-2">
          {leftFaqItems.map((item, index) => (
            <FaqAccordionItem
              key={item.question}
              item={item}
              isOpen={openLeft.has(index)}
              onToggle={() => toggleLeft(index)}
            />
          ))}
        </div>
        <div className="space-y-2 mt-0 p-0 gap-0">
          {rightFaqItems.map((item, index) => (
            <FaqAccordionItem
              key={item.question}
              item={item}
              isOpen={openRight.has(index)}
              onToggle={() => toggleRight(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
