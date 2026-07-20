import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Agentation } from "agentation";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

const agentationEnabled = process.env.NEXT_PUBLIC_ENABLE_AGENTATION === "true";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nuqi Wealth",
  description:
    "Nuqi delivers sustainable growth, prosperity, and financial security through innovative strategies and expert guidance, tailored specifically to your aspirations.",
  icons: {
    icon: "/seo/favicon.png",
  },
  openGraph: {
    images: ["/seo/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white">
        <Preloader />
        <div className="grain-overlay" aria-hidden />
        <SmoothScroll>{children}</SmoothScroll>
        {agentationEnabled && <Agentation />}
      </body>
    </html>
  );
}
