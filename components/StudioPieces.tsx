/*
 * Mosaico de peças 4:5 renderizadas ao vivo — as receitas da página /brand
 * (seção 10.9, DsExemplos), portadas para Tailwind. A prova do Studio é
 * dupla: as peças existem no feed, e o site as renderiza nativamente.
 * Tipografia fluida via container queries (cqw), como nas peças originais.
 */

function CampoCapa() {
  return (
    <div
      className="grain-campo @container flex aspect-[4/5] flex-col overflow-hidden rounded-md px-[8%] py-[7.5%] text-ink shadow-md"
      style={{
        background:
          "radial-gradient(135% 70% at 50% -18%, #e4d2a8 0%, rgba(228,210,168,0) 58%), radial-gradient(180% 42% at 50% 118%, rgba(120,140,86,0.5) 0%, rgba(120,140,86,0) 60%), #f1e8d4",
      }}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[clamp(9px,2.6cqw,12px)] font-semibold uppercase tracking-[0.26em] text-mustard">
          Método
        </span>
        <span className="text-[clamp(8px,2.2cqw,10px)] font-medium uppercase tracking-[0.18em] text-ink/50">
          Jul 2026
        </span>
      </div>
      <div className="mb-[7%] mt-auto font-serif text-[clamp(26px,11cqw,52px)] leading-[1.04] tracking-[-0.02em] [font-variation-settings:'opsz'_144]">
        A IA é o braço.
        <br />
        <em className="font-[480] italic text-mustard">Não a cabeça.</em>
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="whitespace-nowrap text-[clamp(8px,2.3cqw,11px)] font-semibold uppercase tracking-[0.22em] text-mustard">
          Leo Abreu · Strutura
        </span>
        <span className="text-[clamp(8px,2.2cqw,10px)] font-medium uppercase tracking-[0.18em] text-ink/50">
          01/05
        </span>
      </div>
    </div>
  );
}

const SLIDE_STEPS = [
  {
    title: "A IA lê, organiza e aponta.",
    body: "Volume, triagem, resumo. Isso ela faz melhor que você — e de madrugada.",
  },
  {
    title: "A IA não decide.",
    body: "Prioridade, preço e promessa continuam sendo decisão sua.",
  },
  {
    title: "A IA não fala com o seu cliente.",
    body: "Quem conversa e quem fecha é gente. Sempre.",
  },
];

function CampoSlide() {
  return (
    <div className="grain-campo grain-soft @container flex aspect-[4/5] flex-col overflow-hidden rounded-md bg-card px-[8%] py-[7.5%] text-ink shadow-md">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[clamp(7px,2.6cqw,12px)] font-semibold uppercase tracking-[0.26em] text-mustard">
          Método
        </span>
        <span className="font-serif text-[clamp(8px,3.4cqw,16px)] italic text-ink/50">
          02/05
        </span>
      </div>
      <div className="mb-[5%] mt-[5%] font-serif text-[clamp(14px,7.4cqw,36px)] font-medium leading-[1.1] tracking-[-0.01em] [font-variation-settings:'opsz'_80]">
        Onde a IA para
      </div>
      <div className="flex flex-col">
        {SLIDE_STEPS.map((step, i) => (
          <div
            key={step.title}
            className="grid grid-cols-[2.2em_1fr] items-baseline gap-[2.5cqw] border-t border-ink/16 py-[3.6%]"
          >
            <span className="font-serif text-[clamp(9px,4cqw,19px)] italic text-mustard">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="text-[clamp(8px,3.5cqw,16px)] font-semibold leading-[1.35]">
                {step.title}
              </div>
              <div className="text-[clamp(7px,3cqw,13.5px)] leading-[1.5] text-ink/72">
                {step.body}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-baseline justify-between gap-3">
        <span className="text-[clamp(6.5px,2.8cqw,12px)] font-medium text-ink/62">
          Salva pra lembrar onde a IA para.
        </span>
        <span className="whitespace-nowrap text-[clamp(6.5px,2.3cqw,11px)] font-semibold uppercase tracking-[0.22em] text-mustard">
          Leo Abreu · Strutura
        </span>
      </div>
    </div>
  );
}

function BosqueCapa() {
  return (
    <div
      className="grain-bosque grain-strong @container flex aspect-[4/5] flex-col overflow-hidden rounded-md text-bone shadow-md"
      style={{
        background:
          "radial-gradient(95% 55% at 50% -12%, rgba(228,210,168,0.32) 0%, rgba(228,210,168,0) 58%), linear-gradient(178deg, #26382b 0%, #14201a 66%)",
      }}
    >
      <div className="flex h-full flex-col px-[8%] py-[7.5%]">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-[clamp(9px,2.6cqw,12px)] font-semibold uppercase tracking-[0.26em] text-mustard-bosque">
            Opinião
          </span>
          <span className="text-[clamp(8px,2.2cqw,10px)] font-medium uppercase tracking-[0.18em] text-bone/50">
            Jul 2026
          </span>
        </div>
        <div className="mb-[7%] mt-auto font-serif text-[clamp(24px,10cqw,47px)] font-[350] leading-[1.06] tracking-[-0.015em] [font-variation-settings:'opsz'_144]">
          Automação <em className="font-[420] italic text-gold-light">genérica</em>{" "}
          é só bagunça mais rápida.
        </div>
        <div className="flex items-baseline justify-between gap-3">
          <span className="whitespace-nowrap text-[clamp(8px,2.3cqw,11px)] font-semibold uppercase tracking-[0.22em] text-mustard-bosque">
            Leo Abreu · Strutura
          </span>
          <span className="text-[clamp(8px,2.2cqw,10px)] font-medium uppercase tracking-[0.18em] text-bone/50">
            01/04
          </span>
        </div>
      </div>
    </div>
  );
}

export default function StudioPieces() {
  return (
    <div
      role="img"
      aria-label="Três posts de Instagram no formato 4:5, feitos no Studio: duas peças claras e uma escura, no design system da Strutura."
    >
      <div aria-hidden>
        {/* Mobile: faixa com snap · Desktop: mosaico de 3 colunas.
            tabIndex -1: scroller focável dentro de aria-hidden confunde AT; é decorativo. */}
        <div
          tabIndex={-1}
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0"
        >
          <div className="w-[70vw] max-w-[280px] shrink-0 snap-center md:w-auto md:max-w-none">
            <CampoCapa />
          </div>
          <div className="w-[70vw] max-w-[280px] shrink-0 snap-center md:w-auto md:max-w-none md:translate-y-4">
            <CampoSlide />
          </div>
          <div className="w-[70vw] max-w-[280px] shrink-0 snap-center md:w-auto md:max-w-none">
            <BosqueCapa />
          </div>
        </div>
      </div>
    </div>
  );
}
