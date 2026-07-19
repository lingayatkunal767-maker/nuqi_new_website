import Image from "next/image";

export function AppStoreBanner() {
  return (
    <div className="flex flex-col items-center justify-center pt-12 mt-12">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] px-8 gap-8">
        <div className="relative flex w-[500px] h-[300px] flex-col items-center justify-center gap-6 rounded-[20px] bg-[#0d0d0d] p-12">

          <h2 className="text-3xl lg:text-4xl font-poppins text-[#57c0af] mb-6">
            Now Available On
          </h2>
          <div className="flex gap-16">
            <div className="flex items-center justify-center">
              <Image
                src="/images/play-store.png"
                alt="Play Store"
                width={100}
                height={100}
                className="object-contain w-[100px] h-[100px]"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/images/app-store.png"
                alt="App Store"
                width={100}
                height={100}
                className="object-contain w-[100px] h-[100px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
