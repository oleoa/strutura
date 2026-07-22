import { Container, Eyebrow, Selo } from "./ui";

const TOC = [
  { id: "leonardo", num: "01", label: "Leonardo Abreu" },
  { id: "missao", num: "02", label: "Missão e posicionamento" },
  { id: "dogma", num: "03", label: "O dogma" },
  { id: "metodo", num: "04", label: "O método" },
  { id: "modelo", num: "05", label: "Modelo de negócio" },
  { id: "avatar", num: "06", label: "Avatar" },
  { id: "produtos", num: "07", label: "Produtos" },
  { id: "voz", num: "08", label: "Tom de voz" },
  { id: "pilares", num: "09", label: "Pilares & conteúdo" },
  { id: "identidade", num: "10", label: "Identidade visível" },
  { id: "design", num: "11", label: "Design system" },
  { id: "futuro", num: "12", label: "Futuro" },
];

export default function BrandHeader() {
  return (
    <Container>
      <header className="grain-campo grain-soft mb-10 overflow-hidden rounded-[4px] border border-ink/16 bg-[radial-gradient(120%_90%_at_50%_-20%,#e4d2a8_0%,rgba(228,210,168,0)_55%)] bg-bone px-6 pb-7 pt-8 sm:px-11 sm:pb-11 sm:pt-12">
        <div className="mb-10 flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline sm:gap-4">
          <Eyebrow>Strutura · Brand book · Fonte de verdade</Eyebrow>
          <Selo>Julho 2026</Selo>
        </div>
        <h1 className="mb-5 max-w-[15ch] font-serif text-[clamp(44px,7vw,72px)] font-normal leading-[1.02] tracking-[-0.02em] [font-variation-settings:'opsz'_144]">
          Leo Abreu @ Strutura
        </h1>
        <p className="max-w-[620px] text-base leading-[1.7] text-ink-soft [&_strong]:font-semibold [&_strong]:text-ink">
          A fonte da verdade do Leonardo Abreu e da Strutura num lugar só:
          <strong> identidade estratégica</strong> (missão, dogma, método,
          público, modelo, voz) e o <strong>design system Nature Warm v3</strong>{" "}
          (Campo e Bosque). Documento de trabalho: quem abre aqui decide,
          escreve e desenha qualquer peça sem adivinhar nada.
        </p>
      </header>

      {/* Sumário: âncoras de trabalho */}
      <nav
        aria-label="Sumário"
        className="mb-16 rounded-[4px] border border-ink/10 bg-bone/65 px-6 py-5 sm:px-7"
      >
        <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-ink-muted">
          Navegação
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
          {TOC.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="py-0.5 text-[13px] text-ink-soft transition-colors hover:text-mustard-ink"
            >
              <span className="inline-block w-6 font-serif text-[12px] italic text-mustard-ink">
                {item.num}
              </span>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </Container>
  );
}
