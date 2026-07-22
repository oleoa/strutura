import { Container, Prose, Section, Subhead } from "./ui";

export default function MissaoSection() {
  return (
    <Container>
      <Section
        id="missao"
        num="02."
        title="Missão e posicionamento"
        meta="O DNA em uma linha · a lacuna que eu ocupo"
      >
        <Subhead>Missão</Subhead>
        <p className="mb-7 mt-2 max-w-[24ch] font-serif text-[clamp(30px,4.5vw,44px)] font-normal leading-[1.15] tracking-[-0.015em] [font-variation-settings:'opsz'_144]">
          Trazer <em className="italic text-mustard">controle</em> sobre sua
          vida através da organização da estrutura digital.
        </p>

        <Subhead>Posicionamento</Subhead>
        <div className="space-y-3.5">
          <Prose>
            Ajudar as pessoas a entender os processos que acontecem na vida
            delas, criar e manter um sistema que segura e organiza a vida
            delas, e a usar as ferramentas que temos à nossa disposição (IA e
            tecnologia) do jeito mais eficaz.
          </Prose>
          <Prose>
            <strong>
              Criadores de organização não usam IA para seu potencial máximo e
              criadores de IA não usam com missão.
            </strong>{" "}
            Eu crio a estrutura que conecta tudo, uso IA como ferramenta para
            alcançar uma vida mais calma, organizada, produtiva e que alcança
            mais.
          </Prose>
          <Prose>
            Ensino como uso as ferramentas que temos à nossa disposição para o
            melhor proveito: não exagerando e deixando tudo para elas, mas
            poupando nosso tempo e nos dando melhor visibilidade e controle
            sobre a vida.
          </Prose>
        </div>
      </Section>
    </Container>
  );
}
