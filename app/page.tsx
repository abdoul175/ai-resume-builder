import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ExploreGrid from "@/components/ExploreGrid";
import Testimonials from "@/components/Testimonials";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 selection:bg-rose-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <ExploreGrid />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
