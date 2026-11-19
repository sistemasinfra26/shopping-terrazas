import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ComingSoon } from "@/components/ComingSoon";
import { CareersSection } from "@/components/CareersSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#08090a] text-zinc-100 selection:bg-[#ffb303] selection:text-black">
      <Navbar />
      <Hero />
      <ComingSoon />
      <CareersSection />
      <Footer />
    </main>
  );
}
