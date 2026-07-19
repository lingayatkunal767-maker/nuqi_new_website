import { ArrowDownUp, Lock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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

export default function IrisPage() {
  return (
    <>
      <Header />
      <div className="pt-24 overflow-x-hidden font-poppins">
        <section className="py-5 sm:py-16 lg:py-1">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl -mt-1 font-poppins pb-5 font-medium leading-tight tracking-wide text-[#57c0af] sm:text-3xl lg:text-2xl">
                IRIS
              </h2>
              <p className="max-w-full font-poppins text-5xl leading-relaxed text-white">
                Invest ethically with IRIS
              </p>
            </div>
          </div>
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center lg:text-left">
              <h2 className="text-xl font-poppins sm:text-4xl lg:text-3xl font-medium leading-tight text-[#57c0af] sm:text-center mt-10">
                <span className="text-white">Trending</span> Ethical Stocks
              </h2>
            </div>
          </div>
          <div className="flex md:container py-10 w-full">
            <div className="w-full md:px-8 px-3">
              <div className="rounded-2xl mt-6 flex flex-col border shadow-md text-white relative">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b font-poppins">
                      <tr className="border-b">
                        <th className="px-4 py-2 text-left align-middle font-medium">
                          <div className="flex items-center my-3">
                            <p className="text-center text-lg text-[#57c0af]">
                              Name
                            </p>
                            <ArrowDownUp className="h-4 w-4 ml-1" />
                          </div>
                        </th>
                        <th className="px-4 py-2 text-left align-middle font-medium">
                          <div className="flex items-center">
                            <p className="text-center text-lg text-[#57c0af]">
                              Price
                            </p>
                            <ArrowDownUp className="h-4 w-4 ml-1" />
                          </div>
                        </th>
                        <th className="px-4 py-2 align-middle font-medium text-center underline text-lg text-[#57c0af] pr-10 whitespace-nowrap">
                          1D Change
                        </th>
                        <th className="px-4 py-2 align-middle font-medium text-center underline text-lg text-[#57c0af] pr-16 whitespace-nowrap">
                          1W Change
                        </th>
                        <th className="px-4 py-2 align-middle font-medium text-center underline text-lg text-[#57c0af] pr-16 whitespace-nowrap">
                          1M Change
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0 w-full">
                      {stocks.map((stock) => (
                        <tr
                          key={stock.name}
                          className="border-b blur-sm select-none pointer-events-none"
                        >
                          <td className="px-4 py-2 align-middle font-medium">
                            {stock.name}
                          </td>
                          <td className="px-4 py-2 align-middle font-semibold whitespace-nowrap">
                            {stock.price}
                          </td>
                          <td className="px-4 py-2 align-middle text-center whitespace-nowrap">
                            {stock.dayChange}
                          </td>
                          <td className="px-4 py-2 align-middle text-center whitespace-nowrap">
                            {stock.weekChange}
                          </td>
                          <td
                            className={`px-4 py-2 align-middle text-lg font-bold whitespace-nowrap ${
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
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 rounded-2xl">
                  <Lock className="h-10 w-10 text-[#57c0af] mb-3" />
                  <p className="text-white font-bold text-xl mb-4">
                    Subscribe to Access
                  </p>
                  <button className="inline-flex h-12 px-6 items-center justify-center rounded-md border border-[#57c0af] bg-[#57c0af] text-black font-semibold text-sm md:text-base">
                    <Lock className="mr-2 h-5 w-5" />
                    Sign-Up for free and unlock
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
