import {
  Assinatura,
  Container,
  Eyebrow,
  Prose,
  Section,
  Selo,
  Subhead,
} from "../ui";

const GRAIN_SNIPPET = `/* grão reutilizável — data-URI, sem asset externo */
--grain-url: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.87' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E");

.grain::after {
  content: "";
  position: absolute; inset: 0;
  background-image: var(--grain-url);
  mix-blend-mode: overlay; /* Bosque: soft-light */
  opacity: 0.45;           /* slide de ensino: ~0.35 */
  pointer-events: none;
}`;

const FURNITURE = [
  {
    sample: <Eyebrow>Método</Eyebrow>,
    title: "Eyebrow",
    body: "Rótulo do pilar de conteúdo (Método, Opinião, Bastidor…). Inter 600, uppercase, tracking largo, na cor de acento do clima.",
  },
  {
    sample: (
      <span className="font-serif text-[26px] italic text-mustard">02/05</span>
    ),
    title: "Índice numérico",
    body: (
      <>
        <strong className="font-semibold text-ink">
          Só quando é sequência real
        </strong>{" "}
        — ordem de slide num carrossel conta; número solto por enfeite, não.
      </>
    ),
  },
  {
    sample: <Selo>Jul 2026 · Ed. 03</Selo>,
    title: "Selo de data / edição",
    body: "No canto da peça, corpo pequeno. Marca a peça no tempo — device de revista, não carimbo decorativo.",
  },
  {
    sample: <Selo>strutura.ai</Selo>,
    title: "Meta em small caps",
    body: "Informação auxiliar de canto (origem, contexto, referência). Uppercase pequeno, cor rebaixada.",
  },
  {
    sample: (
      <span
        role="img"
        aria-label="Barcode decorativo de assinatura"
        className="inline-block h-[26px] w-[92px] opacity-55 [background:repeating-linear-gradient(90deg,#1e2b22_0_2px,transparent_2px_5px,#1e2b22_5px_6px,transparent_6px_10px,#1e2b22_10px_13px,transparent_13px_16px)]"
      />
    ),
    title: "Barcode / marca discreta",
    body: (
      <>
        Assinatura visual{" "}
        <strong className="font-semibold text-ink">opcional</strong> — usada
        com parcimônia, num canto, quando a peça pede um fecho gráfico.
      </>
    ),
  },
  {
    sample: <Assinatura />,
    title: "Assinatura",
    body: "Obrigatória em toda peça. Uppercase pequeno na cor de acento do clima. Padrão único: “Leo Abreu · Strutura”.",
  },
];

export default function DsTextura() {
  return (
    <Container>
      <Section
        id="ds-textura"
        num="10.6"
        title="Textura & furniture"
        meta="O que faz “editorial, não Pinterest”"
        sub
      >
        <p className="mb-7 max-w-[740px] text-[14.5px] leading-[1.75] text-ink-soft">
          O grão está presente em{" "}
          <strong className="font-semibold text-ink">toda peça</strong> — é o
          que separa o Nature Warm do calmo-liso genérico. Imperfeição honesta
          &gt; limpeza perfeita: grão, papel, filme.
        </p>

        <Subhead>Spec do grão</Subhead>
        <Prose>
          Overlay SVG com <code>feTurbulence</code> (<code>fractalNoise</code>,{" "}
          <code>baseFrequency ≈ 0.85–0.9</code>, <code>numOctaves 2</code>),
          aplicado num pseudo-elemento por cima da peça com{" "}
          <code>mix-blend-mode: overlay</code> (Campo) ou{" "}
          <code>soft-light</code> (Bosque) e opacidade ~0.4–0.5. No slide de
          ensino, baixar para ~0.35 — legibilidade manda.
        </Prose>

        <pre className="my-4 overflow-x-auto rounded-[4px] bg-bosque-deep px-6 py-5 font-mono text-xs leading-[1.7] text-bone">
          {GRAIN_SNIPPET}
        </pre>

        <div className="my-5 grid gap-4 sm:grid-cols-2">
          <div className="flex min-h-[190px] flex-col justify-end rounded-[4px] border border-ink/16 bg-bone px-7 py-8 [background-image:radial-gradient(130%_80%_at_50%_-20%,#e4d2a8_0%,rgba(228,210,168,0)_60%)]">
            <div className="mb-auto text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Sem grão — genérico
            </div>
            <h4 className="font-serif text-[26px] font-[450] leading-[1.1] [font-variation-settings:'opsz'_100]">
              Calmo que vira liso.
              <br />
              Some no feed.
            </h4>
          </div>
          <div className="grain-campo flex min-h-[190px] flex-col justify-end overflow-hidden rounded-[4px] border border-ink/16 bg-bone px-7 py-8 [background-image:radial-gradient(130%_80%_at_50%_-20%,#e4d2a8_0%,rgba(228,210,168,0)_60%)]">
            <div className="mb-auto text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Com grão — Nature Warm
            </div>
            <h4 className="font-serif text-[26px] font-[450] leading-[1.1] [font-variation-settings:'opsz'_100]">
              Mesma peça, com filme.
              <br />
              Editorial.
            </h4>
          </div>
        </div>

        <Subhead>Inventário de furniture editorial</Subhead>
        <p className="mb-4 max-w-[740px] text-[14.5px] leading-[1.75] text-ink-soft">
          Furniture de revista, sempre{" "}
          <strong className="font-semibold text-ink">com propósito</strong> —
          nunca decorar à toa (princípio 01).
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FURNITURE.map((f) => (
            <div
              key={f.title}
              className="rounded-[4px] border border-ink/10 bg-bone/65 px-5.5 py-5"
            >
              <div className="mb-3 flex min-h-[44px] items-center">
                {f.sample}
              </div>
              <h4 className="mb-1 text-[13px] font-semibold text-ink">
                {f.title}
              </h4>
              <p className="text-[12.5px] leading-[1.6] text-ink-soft">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
