import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandSection from "@/components/BrandSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <BrandSection />
    </main>
  );
}