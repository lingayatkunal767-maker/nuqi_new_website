import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollChoreography } from "@/components/ScrollChoreography";
import { Advantage } from "@/components/Advantage";
import { CepCarousel } from "@/components/CepCarousel";
import { PriveIntro } from "@/components/PriveIntro";
import { PriveOfferings } from "@/components/PriveOfferings";
import { Faq } from "@/components/Faq";
import { Ecosystem } from "@/components/Ecosystem";
import { News } from "@/components/News";
import { AppStoreBanner } from "@/components/AppStoreBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="overflow-x-hidden font-sans">
        <Hero />
        <ScrollChoreography
          eyebrow="EVERY PRINCIPLE, ENGINEERED"
          headline="This is Nuqi."
          subline="Where ethical wealth is engineered, not compromised."
          topLeft={{ src: "/images/hero/stone.png", alt: "Balanced stacked stones", caption: "BALANCE" }}
          bottomLeft={{ src: "/images/hero/pen.png", alt: "Gold fountain pen", caption: "PRECISION" }}
          bottomRight={{ src: "/images/hero/mumbai-birds.jpg", alt: "Advisor in navy suit", caption: "DISCIPLINE" }}
          reveal={{ src: "/images/universe-gold.png", alt: "The Nuqi gold mark", caption: "" }}
        />
        <Advantage />
        <CepCarousel />
        <PriveIntro />
        <PriveOfferings />
        <Faq />
        <Ecosystem />
        <News />
        <AppStoreBanner />
      </div>
      <Footer />
    </>
  );
}
