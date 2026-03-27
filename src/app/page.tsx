import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DharmaPillarsSection from "@/components/DharmaPillarsSection";
import ImpactSection from "@/components/ImpactSection";
import HavanContent from "@/components/HavanContent";
import HistoryContent from "@/components/HistoryContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <DharmaPillarsSection />
        <ImpactSection />
        <HavanContent />
        <HistoryContent />
      </main>
      <Footer />
    </>
  );
}
