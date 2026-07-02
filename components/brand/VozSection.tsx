import { Callout, Container, Prose, Section } from "./ui";

const TRACOS = [
  {
    n: "01",
    title: "Calmo e denso",
    body: "Direto ao ponto, sem pressa, sem aquecimento nem enchimento.",
    nunca: "Urgência artificial, “corre que tá acabando”.",
  },
  {
    n: "02",
    title: "Professor que faz",
    body: "Ensina de dentro da prática, nunca de cima do palco.",
    nunca: "Guru prometendo segredo.",
  },
  {
    n: "03",
    title: "Traduz, não simplifica",
    body: "Complexo → implementável, sem infantilizar.",
    nunca: "Jargão técnico nem “IA pra leigos” bobo.",
  },
  {
    n: "04",
    title: "Honesto sobre o limite",
    body: "Diz o que a IA não resolve, em primeira pessoa.",
    nunca: "Corporativo, nem oversell.",
  },
  {
    n: "05",
    title: "Aesthetic na forma, seco na palavra",
    body: "Beleza no visual, zero floreio no texto.",
    nunca: "Trend por trend, motivacional vazio.",
  },
];

export default function VozSection() {
  return (
    <Container>
      <Section
        id="voz"
        num="07."
        title="Tom de voz"
        meta="Cinco traços, cada um com o seu “nunca”"
      >
        <Prose className="mb-7">
          Escrita em <strong>português do Brasil</strong>. Cada traço carrega
          o próprio guard-rail — o &ldquo;nunca&rdquo; não é rodapé, é metade
          da definição.
        </Prose>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRACOS.map((t) => (
            <div
              key={t.n}
              className="rounded-[4px] border border-ink/10 bg-bone/65 px-6 py-5.5"
            >
              <div className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Traço {t.n}
              </div>
              <h4 className="mb-2 font-serif text-[19px] font-medium leading-[1.25] [font-variation-settings:'opsz'_40]">
                {t.title}
              </h4>
              <p className="text-[13.5px] leading-[1.65] text-ink-soft">
                {t.body}
              </p>
              <p className="mt-2.5 border-t border-ink/10 pt-2.5 text-[12.5px] leading-[1.6] text-danger-ink">
                <span className="font-semibold uppercase tracking-[0.12em] text-[10px]">
                  Nunca ·{" "}
                </span>
                {t.nunca}
              </p>
            </div>
          ))}
        </div>

        <Prose className="mt-7">
          <strong>Síntese:</strong> substância do Nate Herk + calma e estética
          do Dan Koe, num espaço onde ninguém está fazendo isso em português.
          <br />
          <strong>Referências recusadas:</strong> conteúdo relaxado que não
          agrega (linha Dan Martell) e formato de trend (reel de adivinhação
          com IA na testa).
        </Prose>

        <Callout title="Regra de ouro">
          <strong>Calma é demonstrada, nunca anunciada</strong> — nada de
          &ldquo;calma&rdquo; ou &ldquo;sem hype&rdquo; no copy; a contenção
          no tom carrega.
        </Callout>
      </Section>
    </Container>
  );
}
