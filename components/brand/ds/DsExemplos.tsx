import type { ReactNode } from "react";
import { Callout, Container, Section } from "../ui";

/* As quatro peças 4:5 do design.html §09, renderizadas ao vivo (não são
   prints): capa e slide de cada clima, com grão, furniture e copy real das
   âncoras. Tipografia fluida via container queries (cqw), como nas peças
   originais: mesmo padrão do StudioPieces (componente hoje sem uso; o
   Studio foi arquivado em jul/2026). */

function PieceLabel({ title, code }: { title: string; code: string }) {
  return (
    <div className="mb-2.5 flex justify-between gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
      <span>{title}</span>
      <code className="font-mono text-[10px] normal-case tracking-normal text-ink-faint">
        {code}
      </code>
    </div>
  );
}

function PieceHead({
  eyebrow,
  right,
  accent,
}: {
  eyebrow: string;
  right: ReactNode;
  accent: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span
        className={`text-[clamp(9px,2.6cqw,12px)] font-semibold uppercase tracking-[0.26em] ${accent}`}
      >
        {eyebrow}
      </span>
      {right}
    </div>
  );
}

function CampoCapa() {
  return (
    <div
      className="grain-campo @container flex aspect-[4/5] flex-col overflow-hidden rounded-[4px] px-[8%] py-[7.5%] text-ink"
      style={{
        background:
          "radial-gradient(135% 70% at 50% -18%, #e4d2a8 0%, rgba(228,210,168,0) 58%), radial-gradient(180% 42% at 50% 118%, rgba(120,140,86,0.5) 0%, rgba(120,140,86,0) 60%), #f1e8d4",
      }}
    >
      <PieceHead
        eyebrow="Método"
        accent="text-mustard"
        right={
          <span className="text-[clamp(8px,2.2cqw,10px)] font-medium uppercase tracking-[0.18em] text-ink/50">
            Jul 2026
          </span>
        }
      />
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

const CAMPO_STEPS = [
  {
    title: "A IA lê, organiza e aponta.",
    body: "Volume, triagem, resumo. Isso ela faz melhor que você, e de madrugada.",
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
    <div className="grain-campo grain-soft @container flex aspect-[4/5] flex-col overflow-hidden rounded-[4px] bg-card px-[8%] py-[7.5%] text-ink">
      <PieceHead
        eyebrow="Método"
        accent="text-mustard"
        right={
          <span className="font-serif text-[clamp(8px,3.4cqw,16px)] italic text-ink/50">
            02/05
          </span>
        }
      />
      <div className="mb-[5%] mt-[5%] font-serif text-[clamp(14px,7.4cqw,36px)] font-medium leading-[1.1] tracking-[-0.01em] [font-variation-settings:'opsz'_80]">
        Onde a IA para
      </div>
      <div className="flex flex-col">
        {CAMPO_STEPS.map((step, i) => (
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
      className="grain-bosque grain-strong @container flex aspect-[4/5] flex-col overflow-hidden rounded-[4px] px-[8%] py-[7.5%] text-bone"
      style={{
        background:
          "radial-gradient(95% 55% at 50% -12%, rgba(228,210,168,0.32) 0%, rgba(228,210,168,0) 58%), linear-gradient(178deg, #26382b 0%, #14201a 66%)",
      }}
    >
      <PieceHead
        eyebrow="Opinião"
        accent="text-mustard-bosque"
        right={
          <span className="text-[clamp(8px,2.2cqw,10px)] font-medium uppercase tracking-[0.18em] text-bone/50">
            Jul 2026
          </span>
        }
      />
      <div className="mb-[7%] mt-auto font-serif text-[clamp(24px,10cqw,47px)] font-[350] leading-[1.06] tracking-[-0.015em] [font-variation-settings:'opsz'_144]">
        Automação{" "}
        <em className="font-[420] italic text-gold-light">genérica</em> é só
        bagunça mais rápida.
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
  );
}

const BOSQUE_STEPS = [
  {
    title: "Processo bagunçado + IA = bagunça mais rápida.",
    body: "A ferramenta acelera o que existe, inclusive o erro.",
  },
  {
    title: "Desenha o passo a passo no papel primeiro.",
    body: "Se você não consegue explicar o processo, não dá pra automatizar ele.",
  },
  {
    title: "Automatiza só o que já funciona sem você.",
    body: "O resto é decisão; e decisão fica com a cabeça, não com o braço.",
  },
];

function BosqueSlide() {
  return (
    <div
      className="grain-bosque @container flex aspect-[4/5] flex-col overflow-hidden rounded-[4px] px-[8%] py-[7.5%] text-bone"
      style={{
        background: "linear-gradient(178deg, #1a2a20 0%, #14201a 55%)",
      }}
    >
      <PieceHead
        eyebrow="Opinião"
        accent="text-mustard-bosque"
        right={
          <span className="font-serif text-[clamp(8px,3.4cqw,16px)] italic text-bone/50">
            02/04
          </span>
        }
      />
      <div className="mb-[5%] mt-[5%] font-serif text-[clamp(14px,7.4cqw,36px)] font-[450] leading-[1.1] tracking-[-0.01em] [font-variation-settings:'opsz'_80]">
        Arruma antes de automatizar
      </div>
      <div className="flex flex-col">
        {BOSQUE_STEPS.map((step, i) => (
          <div
            key={step.title}
            className="grid grid-cols-[2.2em_1fr] items-baseline gap-[2.5cqw] border-t border-bone/[0.18] py-[3.6%]"
          >
            <span className="font-serif text-[clamp(9px,4cqw,19px)] italic text-mustard-bosque">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="text-[clamp(8px,3.5cqw,16px)] font-semibold leading-[1.35] text-bone">
                {step.title}
              </div>
              <div className="text-[clamp(7px,3cqw,13.5px)] leading-[1.5] text-bone/70">
                {step.body}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-baseline justify-between gap-3">
        <span className="text-[clamp(6.5px,2.8cqw,12px)] font-medium text-bone/60">
          Salva pra fazer antes de contratar qualquer IA.
        </span>
        <span className="whitespace-nowrap text-[clamp(6.5px,2.3cqw,11px)] font-semibold uppercase tracking-[0.22em] text-mustard-bosque">
          Leo Abreu · Strutura
        </span>
      </div>
    </div>
  );
}

export default function DsExemplos() {
  return (
    <Container>
      <Section
        id="ds-exemplos"
        num="11.9"
        title="Exemplos ao vivo"
        meta="HTML real, 4:5 (1080 × 1350) · nível 1 de fidelidade"
        sub
      >
        <p className="mb-7 max-w-[740px] text-[14.5px] leading-[1.75] text-ink-soft">
          Quatro peças renderizadas nesta página (não são prints): capa e
          slide de cada clima, com grão, furniture e copy real das âncoras da
          marca. As duas primeiras formam um carrossel (&ldquo;O braço, não a
          cabeça&rdquo;); as duas últimas, outro (&ldquo;Arruma antes de
          automatizar&rdquo;).
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <PieceLabel
              title="Campo · capa (pôster)"
              code="--campo-* · grão 0.45 · overlay"
            />
            <CampoCapa />
          </div>
          <div>
            <PieceLabel
              title="Campo · slide (ensino)"
              code="grão 0.35 · legibilidade manda"
            />
            <CampoSlide />
          </div>
          <div>
            <PieceLabel
              title="Bosque · capa (pôster)"
              code="--bosque-* · grão 0.55 · soft-light"
            />
            <BosqueCapa />
          </div>
          <div>
            <PieceLabel
              title="Bosque · slide (ensino)"
              code="bone sobre deep · acento --mostarda"
            />
            <BosqueSlide />
          </div>
        </div>

        <Callout title="Pensar o mosaico, não só a peça">
          O perfil mostra grid em 4:5: a peça vive ao lado das vizinhas.{" "}
          <strong>Variar dentro do clima</strong> (título grande, luz
          deslocada, mais/menos texto) pra o feed não virar &ldquo;mesmo
          template 9×&rdquo;. O Bosque pontual (11.3) é a outra metade dessa
          variação.
        </Callout>
      </Section>
    </Container>
  );
}
