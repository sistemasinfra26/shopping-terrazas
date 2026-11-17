import { ComingSoon } from "@/components/ComingSoon";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#08090a] text-zinc-100 selection:bg-amber-400 selection:text-black">
      <Hero />
      <ComingSoon />
    </main>
  );
}
