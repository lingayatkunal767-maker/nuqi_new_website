"use client";

import { ArrowDownUp, Lock } from "lucide-react";
import { motion } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

interface StockRow {
  name: string;
  price: string;
  dayChange: string;
  weekChange: string;
  monthChange: string;
  monthChangeColor: "green" | "red";
}

const stocks: StockRow[] = [
  {
    name: "Reliance Industries Ltd",
    price: "$ 2,845.6",
    dayChange: "$ 3,024.5",
    weekChange: "$ 2,756.8",
    monthChange: "1.24 %",
    monthChangeColor: "green",
  },
  {
    name: "Tata Consultancy Services",
    price: "$ 3,621.3",
    dayChange: "$ 3,780",
    weekChange: "$ 3,520",
    monthChange: "-0.87 %",
    monthChangeColor: "red",
  },
  {
    name: "HDFC Bank Limited",
    price: "$ 1,724.85",
    dayChange: "$ 1,798.5",
    weekChange: "$ 1,680",
    monthChange: "0.56 %",
    monthChangeColor: "green",
  },
  {
    name: "Infosys Limited",
    price: "$ 1,456.75",
    dayChange: "$ 1,512.3",
    weekChange: "$ 1,398.5",
    monthChange: "2.31 %",
    monthChangeColor: "green",
  },
];

const columnHeaders = [
  { label: "Name", align: "text-left" },
  { label: "Price", align: "text-left" },
  { label: "1D Change", align: "text-center" },
  { label: "1W Change", align: "text-center" },
  { label: "1M Change", align: "text-center" },
] as const;

export default function IrisPage() {
  return (
    <>
      <Header />
      <main className="bg-void pt-24 overflow-x-hidden">
        <section className="section-y section-x">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="max-w-3xl mx-auto text-center">
                <p className="eyebrow text-gold mb-5">IRIS</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.05] tracking-tight text-white">
                  Invest{" "}
                  <span className="font-display-gold">
                    ethically
                  </span>{" "}
                  with IRIS
                </h1>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="max-w-3xl mx-auto text-center mt-16 md:mt-20">
                <p className="eyebrow text-white/50 mb-3">Trending</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white">
                  <span className="font-display-gold">
                    Ethical
                  </span>{" "}
                  Stocks
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 md:mt-16 relative rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead>
                      <tr className="border-b border-white/10">
                        {columnHeaders.map((col) => (
                          <th
                            key={col.label}
                            className={`px-4 md:px-6 py-4 align-middle font-medium ${col.align} whitespace-nowrap`}
                          >
                            <div
                              className={`flex items-center gap-1.5 ${
                                col.align === "text-center"
                                  ? "justify-center"
                                  : ""
                              }`}
                            >
                              <span className="eyebrow text-white/50">
                                {col.label}
                              </span>
                              {col.label === "Name" || col.label === "Price" ? (
                                <ArrowDownUp className="h-3 w-3 text-white/30" />
                              ) : null}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {stocks.map((stock) => (
                        <tr
                          key={stock.name}
                          className="blur-sm select-none pointer-events-none"
                        >
                          <td className="px-4 md:px-6 py-4 align-middle font-medium text-white/90 whitespace-nowrap">
                            {stock.name}
                          </td>
                          <td className="px-4 md:px-6 py-4 align-middle font-mono font-semibold text-white whitespace-nowrap">
                            {stock.price}
                          </td>
                          <td className="px-4 md:px-6 py-4 align-middle text-center font-mono text-white/60 whitespace-nowrap">
                            {stock.dayChange}
                          </td>
                          <td className="px-4 md:px-6 py-4 align-middle text-center font-mono text-white/60 whitespace-nowrap">
                            {stock.weekChange}
                          </td>
                          <td
                            className={`px-4 md:px-6 py-4 align-middle text-center font-mono font-bold whitespace-nowrap ${
                              stock.monthChangeColor === "green"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {stock.monthChange}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md">
                  <motion.div
                    className="w-14 h-14 rounded-full flex items-center justify-center border border-gold/40 mb-4"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(225,198,106,0.25)",
                        "0 0 34px rgba(225,198,106,0.55)",
                        "0 0 20px rgba(225,198,106,0.25)",
                      ],
                    }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Lock className="h-6 w-6 text-gold" />
                  </motion.div>
                  <p className="text-white font-medium text-xl mb-5">
                    Subscribe to Access
                  </p>
                  <MagneticButton
                    as="button"
                    type="button"
                    className="inline-flex h-12 px-6 items-center justify-center gap-2 rounded-full bg-[color:var(--color-nuqi-gold)] hover:bg-[color:var(--color-nuqi-gold-dim)] text-black font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(225,198,106,0.5)]"
                  >
                    <Lock className="h-4 w-4" />
                    Sign-Up for free and unlock
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
