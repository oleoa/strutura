import { Callout, Container, DotList, Prose, Section, Subhead } from "./ui";

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
    nunca: "Jargão técnico nem “tecnologia pra leigos” bobo.",
  },
  {
    n: "04",
    title: "Honesto sobre o limite",
    body: "Diz o que a ferramenta não resolve, em primeira pessoa.",
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
        num="08."
        title="Tom de voz"
        meta="Cinco traços · regras duras de copy"
      >
        <Prose className="mb-7">
          Escrita em <strong>português do Brasil</strong>. Cada traço carrega
          o próprio guard-rail: o &ldquo;nunca&rdquo; não é rodapé, é metade
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

        <Subhead>Regras duras de copy (valem pra qualquer texto)</Subhead>
        <div className="max-w-[740px]">
          <DotList
            items={[
              <>
                O site fala em <strong>1ª pessoa do Leonardo</strong>:
                &ldquo;a Strutura é onde eu construo&rdquo;, &ldquo;quem
                responde sou eu&rdquo;, CTA &ldquo;Falar comigo&rdquo;. Nunca
                plural corporativo de agência (&ldquo;nossa equipe&rdquo;).
              </>,
              <>
                Nunca culpar falta de <strong>disciplina, foco ou
                caráter</strong> do leitor. O diagnóstico é sempre engenharia
                (falta de sistema), nunca defeito de quem lê.
              </>,
              <>
                <strong>Controle é o único destino nomeado.</strong> Nunca
                prometer crescimento, transformação ou vida melhor:
                demonstrar, não prometer.
              </>,
              <>
                IA sempre subordinada ao sistema na sintaxe:{" "}
                <strong>&ldquo;uso da IA para organizar…&rdquo;</strong>,
                nunca a IA como promessa-fim.
              </>,
              <>
                É <strong>&ldquo;delegue à IA&rdquo;</strong> (com crase),
                nunca &ldquo;delegue a IA&rdquo;. O que fica com o humano: a
                cabeça, a decisão, a autoria.
              </>,
              <>
                Se um exemplo cita ferramenta de IA, a ferramenta é{" "}
                <strong>Claude</strong>.
              </>,
              <>
                Vocabulário interno que não aparece em copy público:{" "}
                <strong>avatar, dogma, marca-mãe, renda-ponte</strong>.
              </>,
              <>
                Travessão (em-dash) não existe em texto da marca: ponto,
                vírgula, dois-pontos ou &ldquo;·&rdquo;.
              </>,
            ]}
          />
        </div>

        <Prose className="mt-7">
          <strong>Síntese:</strong> substância do Nate Herk + estética e
          contenção do Dan Koe, num espaço vazio: organização de vida e
          negócio para o empreendedor no digital, em português.
          <br />
          <strong>Referências recusadas:</strong> conteúdo relaxado que não
          agrega (linha Dan Martell) e formato de trend (reel de adivinhação
          com IA na testa).
        </Prose>

        <Callout title="Regra de ouro">
          <strong>Calma é demonstrada, nunca anunciada</strong>: as palavras
          &ldquo;calma&rdquo; e &ldquo;sem hype&rdquo; não aparecem em copy;
          a contenção no tom carrega.
        </Callout>
      </Section>
    </Container>
  );
}
