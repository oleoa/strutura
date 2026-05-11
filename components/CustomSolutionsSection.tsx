"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { Button } from "./ui/button";

const DELIVERABLES = [
  "Sites institucionais e landing pages",
  "Lojas online (Stripe, Pix, checkout customizado)",
  "Formulários inteligentes e captura de leads",
  "Automações com n8n, OpenAI, WhatsApp e Instagram",
  "Integrações com ferramentas que você já usa (Notion, Stripe, Google, etc.)",
  "Agentes de IA para atendimento, orçamentos e qualificação",
];

export default function CustomSolutionsSection() {
  return (
    <section
      id="sob-medida"
      className="flex flex-col items-center justify-center gap-20 md:px-32 px-6 w-full py-28"
      style={{ background: "var(--section-products-bg)" }}
    >
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
        <RevealOnScroll delay={0}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow/10 text-yellow text-sm font-medium tracking-wide uppercase">
            Soluções sob medida
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Soluções sob medida,
            <br />
            construídas com você
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-foreground/65 leading-relaxed">
            Cada projeto começa com uma conversa pra entender exatamente o que o
            seu negócio precisa. Depois eu construo, entrego e fico disponível
            pra evoluir junto.
          </p>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.1}>
        <div
          className="w-full max-w-3xl p-8 md:p-10 rounded-2xl
                     bg-white dark:bg-transparent
                     border border-foreground/8 dark:border-foreground/10
                     shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none"
        >
          <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground/55 mb-6">
            O que costumo entregar
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {DELIVERABLES.map((item, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-sm text-foreground/80 leading-relaxed"
              >
                <Check
                  className="w-4 h-4 shrink-0 mt-0.5 text-yellow/80"
                  strokeWidth={2.5}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.15}>
        <Button
          asChild
          size="xl"
          className="bg-yellow text-black font-bold hover:bg-yellow/80"
        >
          <Link
            href="https://wa.me/351931135852?text=Ol%C3%A1%20Leonardo%2C%20queria%20pedir%20um%20or%C3%A7amento."
            target="_blank"
          >
            Pedir orçamento
          </Link>
        </Button>
      </RevealOnScroll>
    </section>
  );
}
