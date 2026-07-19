import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function AppStoreBanner() {
  return (
    <div className="flex flex-col items-center justify-center px-6 pt-12 pb-24 md:px-12 md:pb-32">
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-8 lg:flex-row">
        <Reveal className="relative flex w-full max-w-[500px] flex-col items-center justify-center gap-6 rounded-2xl border border-white/10 bg-black/40 px-8 py-12 backdrop-blur-sm transition-colors duration-300 hover:border-[#57c0af]/40">
          <span className="eyebrow text-[#57c0af]">Get The App</span>
          <h2 className="text-2xl font-medium tracking-tight text-white lg:text-3xl">
            Now Available On
          </h2>
          <div className="flex gap-16">
            <div className="flex items-center justify-center">
              <Image
                src="/images/play-store.png"
                alt="Play Store"
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/app-store.png"
                alt="App Store"
                width={100}
                height={100}
                className="h-[100px] w-[100px] object-contain"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
