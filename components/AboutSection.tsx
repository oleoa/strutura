"use client";

import RevealOnScroll from "./RevealOnScroll";

export default function AboutSection() {
  return (
    <section
      id="sobre"
      className="flex flex-col items-center justify-center gap-10 md:px-32 px-6 w-full py-28"
      style={{ background: "var(--section-how-bg)" }}
    >
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
        <RevealOnScroll delay={0}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow/10 text-yellow text-sm font-medium tracking-wide uppercase">
            Sobre
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Atendimento direto, sem intermediários
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Sou o Leonardo, fundador da Strutura. Toda conversa, todo projeto e
            todo código passa por mim. Sem agência, sem terceirização, sem
            ficar explicando seu negócio pra três pessoas diferentes.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.3}>
          <p className="text-base text-foreground/55 leading-relaxed">
            Baseado em Funchal, Madeira. Atendo empresários no Brasil e na
            Europa.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
