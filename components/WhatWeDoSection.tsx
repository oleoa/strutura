"use client";

import { Globe, Workflow, MessageSquareText, Wrench } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const AREAS = [
  {
    Icon: Globe,
    title: "Sites e landing pages",
    description: "Institucionais, de alta conversão, lojas online.",
  },
  {
    Icon: Workflow,
    title: "Automações e integrações",
    description:
      "Workflows com n8n, agentes de IA e conexão entre as suas ferramentas.",
  },
  {
    Icon: MessageSquareText,
    title: "CRM Strutura",
    description:
      "Nosso produto próprio para gestão de WhatsApp e vendas.",
  },
  {
    Icon: Wrench,
    title: "Infraestrutura sob medida",
    description:
      "Formulários, dashboards ou qualquer outra peça que faltar.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section
      id="o-que-fazemos"
      className="relative flex flex-col items-center justify-center gap-20 md:px-32 px-6 w-full py-28"
      style={{ background: "var(--section-how-bg)" }}
    >
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
        <RevealOnScroll delay={0}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow/10 text-yellow text-sm font-medium tracking-wide uppercase">
            O que fazemos
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            O que fazemos
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-foreground/65 leading-relaxed">
            Trabalhamos com empresários que querem parar de improvisar o
            digital. Cada negócio recebe a estrutura que precisa — não um pacote
            engessado.
          </p>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {AREAS.map((area, i) => (
          <RevealOnScroll key={i} delay={0.1 + i * 0.08}>
            <div
              className="group relative flex flex-col h-full p-8 rounded-2xl
                         bg-white dark:bg-transparent
                         border border-foreground/8 dark:border-foreground/10
                         shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none
                         hover:border-yellow/35 hover:bg-yellow/[0.02]
                         transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="p-3 rounded-xl bg-yellow/10 border border-yellow/20
                              group-hover:bg-yellow/15 transition-colors duration-300"
                >
                  <area.Icon
                    className="w-5 h-5 text-yellow"
                    strokeWidth={1.75}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 leading-snug">
                {area.title}
              </h3>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {area.description}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
