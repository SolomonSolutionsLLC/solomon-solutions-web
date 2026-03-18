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
      <Navigation />
      <main>
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
