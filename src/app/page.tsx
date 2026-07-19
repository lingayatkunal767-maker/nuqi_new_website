import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
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
      <div className="overflow-x-hidden font-poppins">
        <Hero />
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
