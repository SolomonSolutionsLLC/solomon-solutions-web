import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import WhatWeDoSection from "@/components/sections/WhatWeDoSection";
import ProductsSection from "@/components/sections/ProductsSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import ConsultingSection from "@/components/sections/ConsultingSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-charcoal focus:rounded-lg focus:font-semibold"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <HeroSection />
        <WhySection />
        <WhatWeDoSection />
        <ProductsSection />
        <EcosystemSection />
        <ConsultingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
