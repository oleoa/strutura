import type { Metadata } from "next";
import BrandHeader from "@/components/brand/BrandHeader";
import LeonardoSection from "@/components/brand/LeonardoSection";
import MissaoSection from "@/components/brand/MissaoSection";
import DogmaSection from "@/components/brand/DogmaSection";
import MetodoSection from "@/components/brand/MetodoSection";
import ModeloSection from "@/components/brand/ModeloSection";
import AvatarSection from "@/components/brand/AvatarSection";
import ProdutosSection from "@/components/brand/ProdutosSection";
import VozSection from "@/components/brand/VozSection";
import PilaresSection from "@/components/brand/PilaresSection";
import IdentidadeSection from "@/components/brand/IdentidadeSection";
import DsIntroStatement from "@/components/brand/ds/DsIntroStatement";
import DsPrincipios from "@/components/brand/ds/DsPrincipios";
import DsClimas from "@/components/brand/ds/DsClimas";
import DsPaleta from "@/components/brand/ds/DsPaleta";
import DsTipografia from "@/components/brand/ds/DsTipografia";
import DsTextura from "@/components/brand/ds/DsTextura";
import DsCapaSlide from "@/components/brand/ds/DsCapaSlide";
import DsNatureza from "@/components/brand/ds/DsNatureza";
import DsExemplos from "@/components/brand/ds/DsExemplos";
import DsDoDont from "@/components/brand/ds/DsDoDont";
import FuturoSection from "@/components/brand/FuturoSection";
import { Assinatura, Container } from "@/components/brand/ui";

export const metadata: Metadata = {
  title: "Brand · source of truth",
  description:
    "O brand book da Strutura: identidade estratégica e design system Nature Warm num lugar só.",
  // Referência interna publicada; não é conteúdo pra indexar.
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function BrandPage() {
  return (
    <main className="pb-24 pt-10 sm:pt-14">
      <BrandHeader />
      <LeonardoSection />
      <MissaoSection />
      <DogmaSection />
      <MetodoSection />
      <ModeloSection />
      <AvatarSection />
      <ProdutosSection />
      <VozSection />
      <PilaresSection />
      <IdentidadeSection />
      <DsIntroStatement />
      <DsPrincipios />
      <DsClimas />
      <DsPaleta />
      <DsTipografia />
      <DsTextura />
      <DsCapaSlide />
      <DsNatureza />
      <DsExemplos />
      <DsDoDont />
      <FuturoSection />
      <Container>
        <footer className="flex flex-wrap justify-between gap-4 border-t border-ink/16 pt-6 text-xs text-ink-muted">
          <span>
            Brand book · Nature Warm v3 (substitui o design.html) · identidade
            estratégica e design system
          </span>
          <Assinatura />
        </footer>
      </Container>
    </main>
  );
}
