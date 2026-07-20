"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

import { RevealGroup, RevealItem } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

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
  displayNumber: number;
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
  tinted: boolean;
}

function FaqAccordionItem({
  item,
  displayNumber,
  isOpen,
  onToggle,
  panelId,
  tinted,
}: FaqAccordionItemProps) {
  const paddedNumber = String(displayNumber).padStart(2, "0");

  return (
    <div
      className={cn(
        "group relative -mx-4 rounded-xl px-4 py-6 transition-colors duration-500 md:py-7",
        tinted && "bg-[#e1c66a]/[0.035]",
      )}
    >
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 text-left sm:gap-6"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span
          aria-hidden="true"
          className={cn(
            "mt-1 hidden flex-shrink-0 select-none font-mono text-xs tracking-[0.1em] transition-colors duration-300 sm:block",
            isOpen ? "text-gold" : "text-white/30",
          )}
        >
          {paddedNumber}
        </span>
        <h3
          className={cn(
            "flex-1 pr-2 text-lg font-medium leading-[1.15] tracking-[-0.01em] transition-colors duration-300 md:text-[22px]",
            isOpen ? "text-gold" : "text-white group-hover:text-gold",
          )}
        >
          {item.question}
        </h3>
        <span
          aria-hidden="true"
          className={cn(
            "mt-0.5 flex-shrink-0 font-mono text-2xl leading-none text-gold transition-transform duration-300 ease-out",
            isOpen ? "rotate-45" : "rotate-0",
          )}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.45, ease: EASE },
              opacity: { duration: isOpen ? 0.3 : 0.2, ease: EASE },
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -4, opacity: 0 }}
              transition={{ duration: 0.35, delay: 0.05, ease: EASE }}
              className="pt-4 pr-6 text-[15px] leading-7 text-zinc-400 sm:pl-[3.25rem] md:pr-10"
            >
              {item.answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [openLeft, setOpenLeft] = useState<number | null>(null);
  const [openRight, setOpenRight] = useState<number | null>(null);

  const toggleLeft = (index: number) => {
    setOpenLeft((prev) => (prev === index ? null : index));
  };

  const toggleRight = (index: number) => {
    setOpenRight((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-black text-white">
      <div className="section-x pt-16 pb-16 md:pt-20 md:pb-20 mx-auto w-full max-w-7xl">
        <div className="mb-12 md:mb-16">
          <p className="eyebrow text-gold">FAQs</p>
          <h2 className="mt-4 text-4xl font-medium leading-[1.05] text-white md:text-5xl lg:text-6xl">
            Frequently Asked{" "}
            <span className="font-display-gold">Questions</span>{" "}
            <span className="text-white/40">(FAQs)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2 md:gap-y-0">
          <RevealGroup className="divide-y divide-white/10 border-t border-white/10">
            {leftFaqItems.map((item, index) => (
              <RevealItem key={item.question}>
                <FaqAccordionItem
                  item={item}
                  displayNumber={index + 1}
                  isOpen={openLeft === index}
                  onToggle={() => toggleLeft(index)}
                  panelId={`faq-left-panel-${index}`}
                  tinted={(index + 1) % 4 === 0}
                />
              </RevealItem>
            ))}
          </RevealGroup>
          <RevealGroup className="divide-y divide-white/10 border-t border-white/10">
            {rightFaqItems.map((item, index) => (
              <RevealItem key={item.question}>
                <FaqAccordionItem
                  item={item}
                  displayNumber={leftFaqItems.length + index + 1}
                  isOpen={openRight === index}
                  onToggle={() => toggleRight(index)}
                  panelId={`faq-right-panel-${index}`}
                  tinted={(leftFaqItems.length + index + 1) % 4 === 0}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
