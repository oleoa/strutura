import { Callout, Card, Container, Prose, Section, Subhead } from "./ui";

export default function MarcaSection() {
  return (
    <Container>
      <Section
        id="marca"
        num="03."
        title="Quem é a marca"
        meta="Leo Abreu, marca-mãe · Strutura, veículo"
      >
        <Prose>
          <strong>Leonardo Abreu</strong> — construtor solo da{" "}
          <strong>Strutura</strong>. Constrói com IA e ensina, a partir do
          fazer, como aplicar IA em negócios. Meta: virar{" "}
          <strong>referência em IA aplicada a negócios no Brasil</strong>.
        </Prose>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <Card label="Marca-mãe" title={<>A cara é <em>dele</em></>}>
            <p>
              A marca-mãe é o Leonardo. A Strutura é o veículo — a empresa pela
              qual entrega produtos e serviços, e o nome da comunidade. O
              mercado o conhece primeiro: sabe que a Strutura é dele, mais do
              que sabe que ele está na Strutura.{" "}
              <strong>Autoridade pessoal como base de tudo.</strong>
            </p>
          </Card>
          <Card label="Produtos" title={<>Prova, <em>não negócios paralelos</em></>}>
            <p>
              O Pharos nasce do próprio negócio e aparece como evidência do
              pensamento — &ldquo;uma solução que já fiz pra mim&rdquo;. Se
              crescer o bastante, pode virar marca própria depois —{" "}
              <strong>optionalidade guardada, não a postura de agora.</strong>
            </p>
          </Card>
        </div>

        <Callout title="Vocabulário">
          &ldquo;Founder&rdquo; é palavra de guru/LinkedIn — a marca usa{" "}
          <strong>construtor que faz</strong>, nunca{" "}
          <em>founder que anuncia</em>.
        </Callout>

        <Subhead>Posicionamento</Subhead>
        <Prose>
          <strong>De fundo:</strong> <em>uso IA pra criar a estrutura digital
          do seu negócio.</em>
          <br />
          <strong>No Instagram (fase de autoridade):</strong> educador.
        </Prose>
      </Section>
    </Container>
  );
}
