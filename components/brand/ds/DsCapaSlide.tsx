import { Callout, Container, DotList, Section } from "../ui";

export default function DsCapaSlide() {
  return (
    <Container>
      <Section
        id="ds-capa-slide"
        num="11.7"
        title="Capa vs. slide"
        meta="Dois modos · vale nos dois climas"
        sub
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[4px] border border-ink/10 bg-bone/65 px-6 py-6">
            <h4 className="mb-1 font-serif text-[21px] font-medium [font-variation-settings:'opsz'_60]">
              Capa · modo pôster
            </h4>
            <div className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-ink">
              O gancho · para o scroll
            </div>
            <DotList
              items={[
                <>Título Fraunces enorme, imagem-forward, texto mínimo.</>,
                <>Pode ser cinematográfica: é onde a estética estica.</>,
                <>Eyebrow do pilar + assinatura; furniture no mínimo.</>,
                <>Uma ideia só. Se precisa de segunda frase, é slide.</>,
              ]}
            />
          </div>
          <div className="rounded-[4px] border border-ink/10 bg-bone/65 px-6 py-6">
            <h4 className="mb-1 font-serif text-[21px] font-medium [font-variation-settings:'opsz'_60]">
              Slide · modo ensino
            </h4>
            <div className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-ink">
              Legibilidade manda
            </div>
            <DotList
              items={[
                <>Texto denso, método à vista: linhas e passos numerados.</>,
                <>
                  Rodapé com o <strong>motivo de salvar</strong> (&ldquo;Salva
                  pra lembrar onde a IA para&rdquo;).
                </>,
                <>
                  Mesma alma (grão + paleta + serifada + furniture), mas a
                  informação domina.
                </>,
                <>
                  Grão mais leve (~0.35), corpo confortável, contraste alto.
                </>,
              ]}
            />
          </div>
        </div>

        <Callout title="Regra de ouro">
          A estética <strong>nunca</strong> pode custar a legibilidade do
          slide. Pôster no gancho, clareza no ensino.
        </Callout>
      </Section>
    </Container>
  );
}
