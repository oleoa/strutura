import RevealOnScroll from "@/components/RevealOnScroll";
import Actions from "@/components/Actions";
// import ElevenLabs from "@/components/ElevenLabs";
import ProductsSection from "@/components/ProductsSection";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      <section
        id="inicio"
        className="relative flex flex-col items-center justify-center gap-8 min-h-screen"
        style={{ background: "var(--section-hero-bg)" }}
      >
        {/* <ElevenLabs /> */}

        <div className="relative z-10 flex flex-col items-center gap-8 md:px-32 px-6">
          <RevealOnScroll delay={0}>
            <h1 className="md:text-6xl text-4xl text-center font-bold">
              <span className="text-yellow">Automação com AI</span>
              <br />
              Escale sem aumentar equipe
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <p className="text-center text-lg md:text-xl lg:text-2xl">
              Automação personalizada para empresas portuguesas.
              <br />
              Sessão de descoberta gratuita, sem compromisso.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Actions />
          </RevealOnScroll>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "80px", background: "linear-gradient(to bottom, transparent, var(--section-hero-fade))", pointerEvents: "none" }} />
      </section>
      <HowItWorks />
      <ProductsSection />
    </main>
  );
}
