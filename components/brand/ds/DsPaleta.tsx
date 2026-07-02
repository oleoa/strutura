import { Callout, Container, Section, Subhead } from "../ui";

type Swatch = {
  name: string;
  token: string;
  hex: string;
  uso: string;
};

const CAMPO: Swatch[] = [
  { name: "Base", token: "--campo-base", hex: "#F1E8D4", uso: "fundo base (creme quente)" },
  { name: "Bone", token: "--campo-bone", hex: "#EFE7D6", uso: "superfície alternativa" },
  { name: "Haze", token: "--campo-haze", hex: "#E4D2A8", uso: "brilho de alvorada / glow superior" },
  { name: "Ink", token: "--campo-ink", hex: "#1E2B22", uso: "tinta principal (verde-escuro, texto)" },
  { name: "Verde", token: "--campo-verde", hex: "#788C56", uso: "verde-campo (horizonte, acento natureza)" },
  { name: "Verde deep", token: "--campo-verde-deep", hex: "#5E6B3E", uso: "verde mais fundo (sombra de natureza)" },
];

const BOSQUE: Swatch[] = [
  { name: "Deep", token: "--bosque-deep", hex: "#14201A", uso: "fundo base (floresta profunda)" },
  { name: "Mid", token: "--bosque-mid", hex: "#26382B", uso: "verde médio (gradiente, divisórias)" },
  { name: "Bone", token: "--bosque-bone", hex: "#EFE7D6", uso: "texto/tinta clara sobre escuro" },
  { name: "Haze", token: "--bosque-haze", hex: "#E4D2A8", uso: "luz de dossel, itálico de ênfase" },
];

const ACENTO: Swatch[] = [
  { name: "Mostarda", token: "--mostarda", hex: "#C98A2B", uso: "acento sobre escuro (Bosque)" },
  { name: "Mostarda queimado", token: "--mostarda-queimado", hex: "#A9741F", uso: "acento sobre claro (Campo), o “corte” seco" },
];

function SwatchGrid({ swatches }: { swatches: Swatch[] }) {
  return (
    <div className="mb-2 grid grid-cols-[repeat(auto-fill,minmax(158px,1fr))] gap-3">
      {swatches.map((s) => (
        <div
          key={s.token}
          className="overflow-hidden rounded-[4px] border border-ink/10 bg-bone"
        >
          {/* Swatches sem grão de propósito — fidelidade do hex */}
          <div
            className="h-[78px] border-b border-ink/10"
            style={{ background: s.hex }}
          />
          <div className="px-3.5 pb-3 pt-3">
            <div className="mb-1 text-xs font-semibold text-ink">{s.name}</div>
            <div className="font-mono text-[10px] text-ink-muted">
              {s.token}
            </div>
            <div className="mb-1.5 font-mono text-[11px] text-ink-soft">
              {s.hex}
            </div>
            <div className="text-[11px] leading-[1.45] text-ink-muted">
              {s.uso}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DsPaleta() {
  return (
    <Container>
      <Section
        id="ds-paleta"
        num="10.4"
        title="Paleta"
        meta="Tokens como CSS custom properties em :root"
        sub
      >
        <p className="mb-7 max-w-[740px] text-[14.5px] leading-[1.75] text-ink-soft">
          Três grupos: os dois climas e o acento compartilhado. Os swatches
          abaixo são renderizados sem grão de propósito — aqui vale a
          fidelidade do hex; o grão entra na peça, não no token.
        </p>

        <Subhead>Campo (claro / casa)</Subhead>
        <SwatchGrid swatches={CAMPO} />

        <Subhead>Bosque (escuro / acento)</Subhead>
        <SwatchGrid swatches={BOSQUE} />

        <Subhead>Acento compartilhado — o mostarda envelhecido</Subhead>
        <p className="mb-4 max-w-[740px] text-[14.5px] leading-[1.75] text-ink-soft [&_code]:rounded-[3px] [&_code]:bg-ink/[0.07] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-ink">
          O mostarda{" "}
          <strong className="font-semibold text-ink">não sai</strong> — é o
          único sinal ownable de hoje. Mas{" "}
          <strong className="font-semibold text-ink">envelhece</strong>: sai
          do <code>#C99A2E</code> puro (amarelo-startup) pra um
          queimado/terroso que corta sem gritar.
        </p>
        <SwatchGrid swatches={ACENTO} />

        <Callout title="Nota de transição">
          Onde o sistema antigo usava <code>#C99A2E</code>, o novo usa{" "}
          <code>#C98A2B</code> (sobre escuro) ou <code>#A9741F</code> (sobre
          claro), conforme o clima. É <strong>evolução, não ruptura</strong> —
          o sinal continua sendo mostarda; só perdeu o brilho de startup.
        </Callout>
      </Section>
    </Container>
  );
}
