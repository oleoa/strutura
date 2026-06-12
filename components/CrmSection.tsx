"use client";

import Link from "next/link";
import {
  MoonStar,
  AudioLines,
  ListTodo,
  Users,
  SlidersHorizontal,
} from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import { Button } from "./ui/button";

const FEATURES = [
  {
    Icon: MoonStar,
    title: "A IA lê tudo, toda noite",
    description:
      "Toda madrugada, a IA passa pelas conversas do dia, move cada contato para a etapa certa do funil e define a próxima ação — e quando.",
    example:
      "Lead pediu orçamento e sumiu há três dias → de manhã ele aparece no topo da sua lista: “retomar hoje, proposta enviada sem resposta”.",
  },
  {
    Icon: AudioLines,
    title: "Áudio vira texto na hora",
    description:
      "Todo áudio recebido no WhatsApp ou no Instagram é transcrito automaticamente. Vira texto pesquisável e entra no contexto que a IA analisa.",
    example:
      "Cliente mandou áudio de 4 minutos às 22h pedindo orçamento → de manhã o vendedor lê a transcrição em 30 segundos e já vê a próxima ação sugerida.",
  },
  {
    Icon: ListTodo,
    title: "A bola está com quem?",
    description:
      "Duas listas limpas no dashboard: quem espera uma ação sua agora e quem ficou de responder — com prazo estimado pela IA.",
    example:
      "Cliente disse “te respondo depois do feriado” → o contato sai da sua frente e volta para a lista na data certa, sozinho.",
  },
  {
    Icon: Users,
    title: "Todo o time num lugar só",
    description:
      "Cada vendedor conecta o próprio número de WhatsApp; o Instagram Direct entra junto. O mesmo cliente em dois canais vira uma pessoa só.",
    example:
      "Cliente chamou no direct e depois mandou WhatsApp para outro vendedor → o histórico aparece unificado e ninguém pergunta de novo o que ele já contou.",
  },
  {
    Icon: SlidersHorizontal,
    title: "Funil do seu jeito, IA auditável",
    description:
      "Você define etapas, temperatura, tags e motivos de não-compra. E cada decisão da IA fica gravada, com o raciocínio, para quem quiser conferir.",
    example:
      "A IA marcou um lead como frio → o gestor abre o histórico e lê o motivo: “cliente disse que só decide depois da reforma, em agosto”.",
  },
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-mustard-soft text-mustard-ink text-xs font-semibold tracking-wide uppercase">
            Strutura CRM
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl leading-tight">
            Nenhum lead esquecido no WhatsApp.{" "}
            <span className="italic text-mustard">Nunca mais.</span>
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-ink-muted leading-relaxed">
            A IA lê todas as conversas do seu time toda madrugada e entrega, de
            manhã, a lista exata de quem precisa de resposta — e o que falar.
          </p>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {FEATURES.map((feature, i) => (
          <RevealOnScroll
            key={i}
            delay={0.1 + i * 0.08}
            className={i === FEATURES.length - 1 ? "md:col-span-2" : ""}
          >
            <div
              className="group relative flex flex-col h-full p-8 rounded-2xl
                         bg-card border border-border shadow-md
                         hover:border-mustard-border hover:bg-muted
                         transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="p-3 rounded-xl bg-mustard-soft border border-mustard-border
                              group-hover:bg-mustard-soft-hover transition-colors duration-300"
                >
                  <feature.Icon
                    className="w-5 h-5 text-mustard-ink"
                    strokeWidth={1.75}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed mb-5">
                {feature.description}
              </p>
              <div className="mt-auto p-4 rounded-xl bg-muted border border-border">
                <span className="block text-[11px] font-semibold tracking-wide uppercase text-mustard-ink mb-1.5">
                  Na prática
                </span>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {feature.example}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll delay={0.1}>
        <div
          className="w-full max-w-3xl p-8 md:p-10 rounded-2xl
                     bg-mustard-soft border border-mustard-border"
        >
          <h3 className="text-sm font-semibold tracking-wide uppercase text-mustard-ink mb-4">
            Para quem é
          </h3>
          <p className="text-base text-ink-soft leading-relaxed">
            O Strutura CRM é para quem fecha venda dentro do WhatsApp: clínicas
            que agendam avaliações, imobiliárias com dezenas de conversas por
            corretor, infoprodutores e agências que vivem no direct, lojas de
            alto ticket e consultorias. Times de 1 a 30 vendedores —
            principalmente os que já tentaram CRM tradicional e desistiram
            porque ninguém preenchia.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.15}>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button asChild size="xl">
            <Link href="https://crm.strutura.ai" target="_blank">
              Ver o CRM por dentro
            </Link>
          </Button>
          <Button asChild size="xl" variant="outline">
            <Link
              href="https://wa.me/351931135852?text=Ol%C3%A1%2C%20queria%20uma%20demo%20do%20Strutura%20CRM."
              target="_blank"
            >
              Agendar demo
            </Link>
          </Button>
        </div>
      </RevealOnScroll>
    </section>
  );
}
