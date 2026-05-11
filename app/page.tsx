import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import CustomSolutionsSection from "@/components/CustomSolutionsSection";
import CrmSection from "@/components/CrmSection";
import CasesSection from "@/components/CasesSection";
import AboutSection from "@/components/AboutSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export default function Home() {
  return (
    <main>
      <section
        id="inicio"
        className="relative flex flex-col items-center justify-center gap-8 min-h-screen"
        style={{ background: "var(--section-hero-bg)" }}
      >
        <div className="relative z-10 flex flex-col items-center gap-8 md:px-32 px-6">
          <RevealOnScroll delay={0}>
            <h1 className="md:text-6xl text-4xl text-center font-bold leading-tight">
              <span className="text-yellow">Infraestrutura digital</span>
              <br />
              para o seu negócio
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="text-center text-lg md:text-xl lg:text-2xl max-w-3xl text-foreground/80">
              Sites, automações, CRM, integrações — tudo que o seu negócio
              precisa no digital, construído sob medida e operando junto.
              Direto com o fundador, sem agência no meio.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                asChild
                size="xl"
                className="bg-yellow text-black font-bold hover:bg-yellow/80"
              >
                <a href="#o-que-fazemos">Ver o que fazemos</a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-yellow/40 text-foreground hover:bg-yellow/10 hover:text-foreground"
              >
                <Link
                  href="https://wa.me/351931135852"
                  target="_blank"
                >
                  Falar com o Leonardo
                </Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "80px",
            background:
              "linear-gradient(to bottom, transparent, var(--section-hero-fade))",
            pointerEvents: "none",
          }}
        />
      </section>
      <WhatWeDoSection />
      <CustomSolutionsSection />
      <CrmSection />
      <CasesSection />
      <AboutSection />
      <FinalCtaSection />
    </main>
  );
}
