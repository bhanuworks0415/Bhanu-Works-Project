import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesPreview from "@/components/ServicesPreview";
import FeaturedWork from "@/components/FeaturedWork";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Featured Projects / Trusted By (Restored) */}
        <TrustSection />

        {/* 3. Services Capabilities Grid */}
        <ServicesPreview />

        {/* 4. Featured Project Cards (View case study path) */}
        <FeaturedWork />

        {/* 5. How We Work Process Timeline */}
        <Process />

        {/* 6. FAQ Accordion (Restored) */}
        <Faq />

        {/* 7. Contact CTA Form */}
        <Cta />
      </main>

      {/* 8. Footer Layout */}
      <Footer />
    </>
  );
}
