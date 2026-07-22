import { Callout, Card, Container, Prose, Section } from "./ui";

export default function MetodoSection() {
  return (
    <Container>
      <Section
        id="metodo"
        num="04."
        title="O método"
        meta="Três degraus · sistema primeiro, ferramenta depois"
      >
        <Prose className="mb-7">
          A ordem de operação de tudo o que a marca ensina, constrói e vende.
          Os degraus sobem nessa sequência e não invertem:{" "}
          <strong>sistema primeiro, ferramenta depois.</strong>
        </Prose>

        <div className="grid gap-4 sm:grid-cols-3">
          <Card label="Degrau 01" title={<>Entender os <em>processos</em></>}>
            <p>
              Mapear os processos da vida e do negócio. Pro empreendedor no
              digital
              não existem dois mundos: é o mesmo calendário, o mesmo Notion, a
              mesma cabeça.
            </p>
          </Card>
          <Card
            label="Degrau 02"
            title={<>Criar e <em>manter</em> um sistema</>}
          >
            <p>
              Construir o sistema que segura esses processos, e mantê-lo.{" "}
              <strong>Manter é o verbo que importa:</strong> sistema montado e
              abandonado é só mais um app na pilha.
            </p>
          </Card>
          <Card
            label="Degrau 03"
            title={<>Usar as <em>ferramentas</em> dentro dele</>}
          >
            <p>
              Com o sistema de pé, as ferramentas entram no lugar certo, do
              jeito mais eficaz. A IA inclusive:{" "}
              <strong>braço dentro do sistema, nunca cabeça</strong> (seção
              03).
            </p>
          </Card>
        </div>

        <Callout title="A ordem não inverte">
          Ferramenta escolhida antes do sistema vira mais um app espalhado.
          Sistema montado sem manutenção vira mais um sistema abandonado.{" "}
          <strong>Primeiro o degrau de baixo.</strong>
        </Callout>
      </Section>
    </Container>
  );
}
