import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import CustomSolutionsSection from "@/components/CustomSolutionsSection";
import PharosSection from "@/components/PharosSection";
import FinalCtaSection from "@/components/FinalCtaSection";

export default function Home() {
  return (
    <main>
      {/* Fundo fixo do herói — fica pregado na viewport, não rola com a página */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-svh"
      >
        {/* Fundo fotográfico */}
        <Image
          src="/hero.png"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Scrim de legibilidade (quente) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(28,24,16,0.50) 0%, rgba(28,24,16,0.26) 32%, rgba(28,24,16,0.30) 64%, rgba(28,24,16,0.56) 100%)",
          }}
        />
        {/* Escurecimento focado atrás do texto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 58% at 50% 44%, rgba(28,24,16,0.50) 0%, transparent 72%)",
          }}
        />
      </div>

      <section
        id="inicio"
        className="relative flex min-h-svh w-full flex-col items-center justify-center px-6 pb-20 pt-28 md:px-32"
      >
        <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
          <RevealOnScroll delay={0}>
            <h1
              className="text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl"
              style={{ textShadow: "0 2px 28px rgba(28,24,16,0.45)" }}
            >
              <span className="italic text-gold-light">Infraestrutura digital</span>
              <br />
              para o seu negócio
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p
              className="max-w-2xl text-lg text-white/90 md:text-xl"
              style={{ textShadow: "0 1px 14px rgba(28,24,16,0.45)" }}
            >
              Sites, automações, Pharos, integrações — tudo que o seu negócio
              precisa no digital, construído sob medida e operando junto. Direto
              com o fundador, sem agência no meio.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Button asChild size="xl" className="rounded-full">
                <a href="#o-que-fazemos">Ver o que fazemos</a>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="rounded-full border-white/50 bg-white/10 text-white shadow-none hover:bg-white/20 hover:text-white"
              >
                <Link href="https://wa.me/351931135852" target="_blank">
                  Falar com o Leonardo
                </Link>
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <WhatWeDoSection />
      <CustomSolutionsSection />
      <PharosSection />
      <FinalCtaSection />
    </main>
  );
}
