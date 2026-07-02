import { Callout, Container, Prose, Section } from "../ui";

/* Seção 10 — abertura do design system + 10.1 Statement.
   Conteúdo migrado integralmente do antigo public/design.html. */

export default function DsIntroStatement() {
  return (
    <Container>
      <Section
        id="design"
        num="10."
        title={
          <>
            Design system — Nature <em className="italic text-mustard">Warm</em> v3
          </>
        }
        meta="Substitui o Warm Minimal (v2)"
      >
        <Prose>
          O sistema visual da Strutura para posts, site e materiais. Dois climas — <strong>Campo</strong> (a casa) e{" "}
          <strong>Bosque</strong> (o acento raro) — amarrados por grão, serifa
          e mostarda envelhecido. Esta seção é a referência de trabalho: quem
          abre aqui reproduz qualquer peça sem adivinhar nada.
        </Prose>
      </Section>

      <Section
        id="ds-statement"
        num="10.1"
        title="Statement"
        meta="A frase-núcleo e o porquê do sistema"
        sub
      >
        <p className="mb-7 mt-2 max-w-[20ch] font-serif text-[clamp(30px,4.5vw,44px)] font-normal leading-[1.15] tracking-[-0.015em] [font-variation-settings:'opsz'_144]">
          Claro, mas <em className="italic text-mustard">não limpo.</em>
          <br />
          Calmo, mas <em className="italic text-mustard">não vazio.</em>
        </p>

        <Prose>
          O Warm Minimal (off-white + mostarda <code>#C99A2E</code> +
          Fraunces/Inter) foi aposentado por um motivo:{" "}
          <strong>ficou &ldquo;morto&rdquo; — calmo virou vazio.</strong> O
          diagnóstico não é a cor, é a falta de tensão: espaçamento uniforme,
          acento tímido, zero textura, zero personalidade. O Nature Warm
          corrige isso sem trocar de alma — a base continua quente e clara,
          mas ganha grão, furniture editorial, natureza como device e um
          segundo clima escuro usado como pontuação.
        </Prose>
        <Prose className="mt-3.5">
          O sistema cai direto da marca, não é &ldquo;aesthetic por
          fora&rdquo;. Cada decisão visual abaixo tem um dogma por trás — e
          quando a estética e a informação disputam espaço num slide,{" "}
          <strong>a informação ganha.</strong>
        </Prose>

        <Callout title="A regra anti-genérico (a mais importante)">
          Creme quente calmo é o visual mais copiado da internet. O que nos
          separa da multidão é ser <strong>claro mas NÃO limpo</strong> —
          texturizado e editorial. Se cair no minimalista liso, some no meio
          de mil. <strong>Grão, furniture de revista e mostarda queimado</strong>{" "}
          são o que impedem isso.
        </Callout>
      </Section>
    </Container>
  );
}
