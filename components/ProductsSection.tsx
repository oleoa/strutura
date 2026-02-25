"use client";

import { Star, FileText, MessageSquare, Settings2, Check } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import Actions from "./Actions";

// Produtos digitais com descrição, casos de uso e benefício principal
const PRODUCTS = [
  {
    Icon: MessageSquare,
    number: "01",
    title: "Suporte ao Cliente & FAQs Automatizados",
    description:
      "Agentes de IA que respondem instantaneamente às dúvidas mais frequentes dos teus clientes, via chat, e-mail, WhatsApp e ligação.",
    useCases: [
      "Chatbots com base de conhecimento personalizada",
      "Triagem e classificação de tickets automática",
      "Escalonamento inteligente para humanos",
    ],
    benefit:
      "Reduz a carga de suporte em até 70%. Respostas em segundos, a qualquer hora.",
  },
  {
    Icon: FileText,
    number: "02",
    title: "Agente de Orçamentos com IA",
    description:
      "Agente de IA que recolhe os requisitos do cliente e gera orçamentos personalizados em segundos — via WhatsApp, Instagram, e-mail ou ligação. Sem intervenção manual, sem demoras.",
    useCases: [
      "Disponível via WhatsApp, Instagram, e-mail e ligação",
      "Cálculo de preços com base em regras de negócio personalizadas",
      "Geração e envio automático de propostas em PDF",
    ],
    benefit:
      "Orçamentos enviados em minutos, não dias. Mais rapidez, mais conversões.",
  },
  {
    Icon: Star,
    number: "03",
    title: "Agente de Google Reviews com IA",
    description:
      "Agente de IA que envia automaticamente pedidos de review aos clientes após o fecho do negócio — e alerta-te em tempo real sempre que aparece uma avaliação negativa para agires antes que cause dano.",
    useCases: [
      "Envio automático de pedidos de review após negócio fechado",
      "Alertas imediatos por WhatsApp ou email em reviews negativas",
      "Mensagens personalizadas por cliente para maior taxa de resposta",
    ],
    benefit:
      "Mais reviews 5 estrelas no piloto automático. Nenhuma avaliação negativa passa despercebida. Resultado direto: melhor posicionamento orgânico no Google.",
  },
  {
    Icon: Settings2,
    number: "04",
    title: "Automação de Processos Internos",
    description:
      "Fluxos de trabalho automatizados que eliminam tarefas repetitivas — desde relatórios e faturação até gestão de dados e notificações.",
    useCases: [
      "Integrações entre ferramentas (CRM, ERP, email)",
      "Geração automática de documentos e relatórios",
      "Alertas, sincronizações e dashboards automáticos",
    ],
    benefit:
      "As tuas equipas focam-se no que importa. As máquinas tratam do resto.",
  },
];

export default function ProductsSection() {
  return (
    <section
      id="produtos"
      className="flex flex-col items-center justify-center gap-20 md:px-32 px-6 w-full py-28"
      style={{ background: "var(--section-products-bg)" }}
    >
      {/* Cabeçalho da secção */}
      <div className="flex flex-col items-center gap-6 max-w-3xl text-center">
        <RevealOnScroll delay={0}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow/10 text-yellow text-sm font-medium tracking-wide uppercase">
            Produtos Digitais
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Automações que geram resultados
          </h2>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2}>
          <p className="text-lg text-foreground/65 leading-relaxed">
            Soluções de automação com IA prontas a implementar no teu negócio —
            sem complexidade técnica, com resultados mensuráveis desde o
            primeiro mês.
          </p>
        </RevealOnScroll>
      </div>

      {/* Cards de produto — grid 1→2 colunas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {PRODUCTS.map((product, i) => (
          <RevealOnScroll key={i} delay={0.1 + i * 0.1}>
            <div
              className="group relative flex flex-col h-full p-8 rounded-2xl
                         bg-white dark:bg-transparent
                         border border-foreground/8 dark:border-foreground/10
                         shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-none
                         hover:border-yellow/35 hover:bg-yellow/[0.02]
                         transition-all duration-300 overflow-hidden"
            >
              {/* Linha de destaque no topo ao hover */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-yellow/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Ícone e número de ordem */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="p-3 rounded-xl bg-yellow/10 border border-yellow/20
                              group-hover:bg-yellow/15 transition-colors duration-300"
                >
                  <product.Icon
                    className="w-5 h-5 text-yellow"
                    strokeWidth={1.75}
                  />
                </div>
                <span className="text-5xl font-bold text-foreground/[0.06] select-none tabular-nums">
                  {product.number}
                </span>
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold mb-3 leading-snug">
                {product.title}
              </h3>

              {/* Descrição */}
              <p className="text-sm text-foreground/65 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Lista de casos de uso */}
              <div className="flex-1 mb-6 space-y-2.5">
                {product.useCases.map((uc, j) => (
                  <div
                    key={j}
                    className="flex gap-2.5 text-sm text-foreground/75"
                  >
                    <Check
                      className="w-4 h-4 shrink-0 mt-0.5 text-yellow/70"
                      strokeWidth={2.5}
                    />
                    <span>{uc}</span>
                  </div>
                ))}
              </div>

              {/* Badge com benefício principal */}
              <div className="mt-auto p-4 rounded-xl bg-yellow/[0.07] border border-yellow/20 text-sm text-yellow/90 leading-relaxed">
                {product.benefit}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* CTA final */}
      <RevealOnScroll delay={0}>
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="text-foreground/55 text-lg max-w-md">
            Pronto para automatizar? Fala connosco e mostramos como funciona
            para o teu negócio.
          </p>
          <Actions />
        </div>
      </RevealOnScroll>
    </section>
  );
}
