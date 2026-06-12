"use client";

import { ArrowUpRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const CASES = [
  {
    name: "Mentores de Elite",
    description:
      "Landing de alta conversão, automações e CRM em Notion com Stripe e Pix.",
  },
  {
    name: "Tebosa",
    description: "Website para clínica veterinária.",
  },
  {
    name: "Locação Europa",
    description:
      "Prospecção e outreach automatizado para empresas de aluguel de veículos.",
  },
];

export default function CasesSection() {
  return (
    <section
      id="casos"
      className="flex flex-col items-center justify-center gap-16 md:px-32 px-6 w-full py-28"
      style={{ background: "var(--section-products-bg)" }}
    >
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
        <RevealOnScroll delay={0}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-mustard-soft text-mustard-ink text-xs font-semibold tracking-wide uppercase">
            Clientes
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl leading-tight">
            Quem já trabalha com a Strutura
          </h2>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {CASES.map((c, i) => (
          <RevealOnScroll key={i} delay={0.1 + i * 0.1}>
            <div
              className="group relative flex flex-col h-full p-6 rounded-2xl
                         bg-card border border-border shadow-md
                         hover:border-mustard-border hover:bg-muted
                         transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-xl font-semibold leading-snug">{c.name}</h3>
                <ArrowUpRight
                  className="w-4 h-4 text-ink-faint group-hover:text-mustard-ink transition-colors"
                  strokeWidth={2}
                />
              </div>
              <p className="text-sm text-ink-muted leading-relaxed">
                {c.description}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
