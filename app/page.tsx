import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { PricingTiers } from "@/components/landing/PricingTiers";
import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0B14] text-slate-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <Hero />
        <Features />
        <PricingTiers />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
