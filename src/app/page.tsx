import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LegacySystem from "@/components/LegacySystem";
import HeroModernizeAirport from "@/components/ModernizeAirport";
 
export default function Home() {
  return (
    <main className="bg-white flex justify-center">
      <div className="w-full ">
        <Header />
        <HeroSection />
        <LegacySystem />
        <HeroModernizeAirport/>
        <Footer />
      </div>
    </main>
  );
}