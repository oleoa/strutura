import { Callout, Container, Section } from "../ui";

export default function DsNatureza() {
  return (
    <Container>
      <Section
        id="ds-natureza"
        num="11.8"
        title="Imagem de natureza"
        meta="A peça pesada · decisão em aberto"
        sub
      >
        <p className="mb-5 max-w-[740px] text-[14.5px] leading-[1.75] text-ink-soft [&_strong]:font-semibold [&_strong]:text-ink">
          Nas referências, a foto/IA de natureza é o que carrega o clima
          (floresta, campo, luz, alvorada). É o elemento mais caro do sistema,
          e o que decide se o{" "}
          <strong>pipeline de geração consegue montar a peça sozinho</strong>:
          se cada post exige imagem nova, o pipeline precisa gerar imagem,
          não só compor texto. Por isso o sistema funciona em{" "}
          <strong>dois níveis de fidelidade</strong>:
        </p>

        <div className="my-5 grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-[4px] border border-ink/10 bg-bone/65">
            <div className="grain-campo relative h-[200px] bg-bone [background-image:radial-gradient(140%_85%_at_50%_-25%,#e4d2a8_0%,rgba(228,210,168,0)_62%)]">
              <span className="absolute left-4 top-3.5 z-[40] rounded-[2px] bg-background/75 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Nível 1 · piso
              </span>
            </div>
            <div className="px-5.5 py-4.5">
              <h4 className="mb-1 text-[13px] font-semibold text-ink">
                Sem foto · gradiente quente + grão
              </h4>
              <p className="text-[12.5px] leading-[1.6] text-ink-soft [&_code]:rounded-[3px] [&_code]:bg-ink/[0.07] [&_code]:px-1 [&_code]:py-px [&_code]:font-mono [&_code]:text-[11px]">
                O que os mockups usam. Barato, renderiza fácil (só CSS: glow
                de <code>--campo-haze</code> + grão).{" "}
                <strong className="font-semibold text-ink">
                  É o piso: a peça nunca depende da foto pra existir.
                </strong>
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-[4px] border border-ink/10 bg-bone/65">
            <div className="grain-campo relative h-[200px] [background-image:radial-gradient(120%_60%_at_50%_-10%,rgba(228,210,168,0.9)_0%,rgba(228,210,168,0)_55%),linear-gradient(180deg,#efe7d6_0%,#e4d2a8_46%,#788c56_72%,#5e6b3e_100%)]">
              <span className="absolute left-4 top-3.5 z-[40] rounded-[2px] bg-background/75 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                Nível 2 · teto (simulação)
              </span>
            </div>
            <div className="px-5.5 py-4.5">
              <h4 className="mb-1 text-[13px] font-semibold text-ink">
                Com foto/IA de natureza por cima
              </h4>
              <p className="text-[12.5px] leading-[1.6] text-ink-soft">
                Aprofunda o clima: paisagem real ou gerada (campo, floresta,
                alvorada) atrás do texto, com o mesmo grão por cima.{" "}
                <strong className="font-semibold text-ink">
                  A foto eleva, não sustenta.
                </strong>{" "}
                (Preview acima é simulado em gradiente.)
              </p>
            </div>
          </div>
        </div>

        <Callout tag="Pendente" title="Foto fixa vs. única por post">
          Decisão em aberto, ligada à capacidade do pipeline: usar um banco
          fixo de paisagens (barato, repete) ou gerar imagem única por post
          (caro, exige geração de imagem no pipeline). Enquanto não decidir, o{" "}
          <strong>nível 1 é o default de produção.</strong>
        </Callout>
      </Section>
    </Container>
  );
}
