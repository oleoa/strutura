import { Callout, Container, Prose, Section, Subhead } from "./ui";

export default function AncoraSection() {
  return (
    <Container>
      <Section
        id="ancora"
        num="01."
        title="A âncora"
        meta="Missão, statement e o teste de tudo"
      >
        <Subhead>Missão: o DNA, uma linha</Subhead>
        <p className="mb-7 mt-2 max-w-[24ch] font-serif text-[clamp(30px,4.5vw,44px)] font-normal leading-[1.15] tracking-[-0.015em] [font-variation-settings:'opsz'_144]">
          Trazer <em className="italic text-mustard">controle</em> sobre sua
          vida através da organização da estrutura digital.
        </p>

        <Subhead>Statement completo</Subhead>
        <Prose>
          Para o empreendedor no digital, que carrega vida e negócio no mesmo
          sistema, a Strutura organiza a estrutura digital que segura os dois.
          <strong> Organizar é o veículo; controle é o destino</strong>:
          controle sobre a resposta às coisas, não sobre os eventos. O que a
          marca entrega não é uma vida sem imprevisto; é um sistema que devolve
          a resposta certa quando o imprevisto chega.
        </Prose>

        <Callout title="O teste de tudo">
          <strong>
            Isso devolve controle através de estrutura, ou é só ferramenta nova
            fazendo barulho?
          </strong>{" "}
          Se é barulho, não é a Strutura.
        </Callout>
      </Section>
    </Container>
  );
}
