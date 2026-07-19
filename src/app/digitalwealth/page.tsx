import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PriveIntro } from "@/components/PriveIntro";
import { PriveOfferings } from "@/components/PriveOfferings";

export default function DigitalWealthPage() {
  return (
    <>
      <Header />
      <div className="overflow-x-hidden font-poppins pt-24">
        <PriveIntro />
        <PriveOfferings />
      </div>
      <Footer />
    </>
  );
}
