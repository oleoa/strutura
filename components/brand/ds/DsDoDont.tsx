import { Container, DotList, Section } from "../ui";

export default function DsDoDont() {
  return (
    <Container>
      <Section
        id="ds-do-dont"
        num="10.10"
        title="Do / Don't"
        meta="Guard-rails — em dúvida, volte aqui"
        sub
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[4px] border border-ink/10 bg-bone/65 px-6 py-6">
            <h4 className="mb-4 border-b border-ink/10 pb-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-campo-verde-deep">
              Faça
            </h4>
            <DotList
              dotClassName="bg-campo-verde"
              items={[
                <>
                  <strong>Claro e texturizado</strong> — grão sempre presente,
                  em toda peça.
                </>,
                <>
                  <strong>Fraunces grande com restrição</strong>; itálico só
                  pra ênfase de uma palavra, na cor de acento do clima.
                </>,
                <>
                  <strong>Mostarda queimado como corte seco</strong> — o
                  acento corta, não grita.
                </>,
                <>
                  <strong>Furniture editorial com função</strong> — índice
                  numérico só em sequência real.
                </>,
                <>
                  <strong>Peso via tipografia dentro do Campo</strong>; Bosque
                  só pro susto visual (~1:5–6).
                </>,
              ]}
            />
          </div>
          <div className="rounded-[4px] border border-ink/10 bg-bone/65 px-6 py-6">
            <h4 className="mb-4 border-b border-ink/10 pb-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-danger">
              Nunca
            </h4>
            <DotList
              dotClassName="bg-danger"
              items={[
                <>
                  <strong>Limpo/liso sem textura</strong> — é o calmo
                  genérico, o espaço mais lotado da internet.
                </>,
                <>
                  <strong>Palavra motivacional/vibe</strong> — &ldquo;simplicity
                  is the purest form…&rdquo;, frases de efeito vazias.
                </>,
                <>
                  <strong>Escuro como default</strong> — afasta o não-técnico,
                  o Diego.
                </>,
                <>
                  <strong>Bege sem o mostarda</strong> — perde o único sinal
                  ownable.
                </>,
                <>
                  <strong>Estética custando legibilidade</strong> no slide de
                  ensino.
                </>,
                <>
                  <strong>Bosque frequente demais</strong> — vira barulho,
                  perde o contraste.
                </>,
              ]}
            />
          </div>
        </div>
      </Section>
    </Container>
  );
}
