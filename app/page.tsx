import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import StruturaSection from "@/components/StruturaSection";
import ProductsSection from "@/components/ProductsSection";
import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";

// Canonical só da home: no layout raiz seria herdado por qualquer outra rota.
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/" },
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StruturaSection />
      <ProductsSection />
      <AboutMeSection />
      <ContactSection />
    </main>
  );
}
