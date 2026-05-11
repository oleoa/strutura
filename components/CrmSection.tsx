"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { Button } from "./ui/button";

const CRM_FEATURES = [
  "Caixa de entrada unificada (WhatsApp + Instagram)",
  "Pipeline visual de vendas",
  "Automação de mensagens",
  "Cobrança integrada",
  "Dashboards de conversão",
];

export default function CrmSection() {
  return (
    <section
      id="crm"
      className="flex flex-col items-center justify-center gap-20 md:px-32 px-6 w-full py-28"
      style={{ background: "var(--section-how-bg)" }}
    >
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
        <RevealOnScroll delay={0}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow/10 text-yellow text-sm font-medium tracking-wide uppercase">
            Produto Strutura
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Conheça o <span className="text-yellow">CRM Strutura</span>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-foreground/65 leading-relaxed">
            Nosso produto próprio, pensado para empresários que vendem todos os
            dias pelo WhatsApp e Instagram.
          </p>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.1}>
        <div
          className="w-full max-w-3xl p-8 md:p-10 rounded-2xl
                     bg-yellow/4
                     border border-yellow/25"
        >
          <h3 className="text-sm font-semibold tracking-wide uppercase text-yellow/90 mb-6">
            O que tem dentro
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {CRM_FEATURES.map((item, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-sm text-foreground/85 leading-relaxed"
              >
                <Check
                  className="w-4 h-4 shrink-0 mt-0.5 text-yellow"
                  strokeWidth={2.5}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-foreground/65 leading-relaxed border-t border-yellow/15 pt-6">
            Funciona sozinho ou junto com o resto da infraestrutura que
            construímos pra você.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.15}>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            asChild
            size="xl"
            className="bg-yellow text-black font-bold hover:bg-yellow/80"
          >
            <a href="#crm-detalhes">Conhecer o CRM</a>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-yellow/40 text-foreground hover:bg-yellow/10 hover:text-foreground"
          >
            <Link
              href="https://wa.me/351931135852?text=Ol%C3%A1%2C%20queria%20uma%20demo%20do%20CRM%20Strutura."
              target="_blank"
            >
              Agendar demo
            </Link>
          </Button>
        </div>
      </RevealOnScroll>

      <div id="crm-detalhes" />
    </section>
  );
}
