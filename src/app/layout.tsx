import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Agentation } from "agentation";
import "./globals.css";

const agentationEnabled = process.env.NEXT_PUBLIC_ENABLE_AGENTATION === "true";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
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
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-poppins bg-black text-white">
        {children}
        {agentationEnabled && <Agentation />}
      </body>
    </html>
  );
}
