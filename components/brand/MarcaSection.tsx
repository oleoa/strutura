import {
  Callout,
  Card,
  Container,
  DotList,
  Prose,
  Section,
  Subhead,
} from "./ui";

export default function MarcaSection() {
  return (
    <Container>
      <Section
        id="marca"
        num="04."
        title="Quem é a marca"
        meta="Leo Abreu, marca-mãe · Strutura, veículo · tagline"
      >
        <Prose>
          <strong>Leonardo Abreu</strong>, construtor solo da{" "}
          <strong>Strutura</strong>. Constrói a própria estrutura digital e
          ensina, a partir do fazer, como construir a mesma. Norte de longo
          prazo:{" "}
          <strong>
            ser a referência em uso da IA para organizar a vida e o negócio do
            empreendedor no digital no Brasil
          </strong>
          .
        </Prose>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <Card label="Marca-mãe" title={<>A cara é <em>dele</em></>}>
            <p>
              A marca-mãe é o Leonardo. A Strutura é o veículo: a empresa pela
              qual entrega produtos e serviços, e o nome da comunidade. O
              mercado o conhece primeiro: sabe que a Strutura é dele, mais do
              que sabe que ele está na Strutura.{" "}
              <strong>Autoridade pessoal como base de tudo.</strong>
            </p>
          </Card>
          <Card label="Produtos" title={<>Prova, <em>não negócios paralelos</em></>}>
            <p>
              O Pharos nasce do próprio negócio e aparece como evidência do
              pensamento: &ldquo;uma solução que já fiz pra mim&rdquo;. Se
              crescer o bastante, pode virar marca própria depois;{" "}
              <strong>opcionalidade guardada, não a postura de agora.</strong>
            </p>
          </Card>
        </div>

        <Callout title="Vocabulário">
          &ldquo;Founder&rdquo; é palavra de guru/LinkedIn. A marca usa{" "}
          <strong>construtor que faz</strong>, nunca{" "}
          <em>founder que anuncia</em>.
        </Callout>

        <Subhead>Posicionamento</Subhead>
        <Prose>
          <strong>De fundo:</strong> <em>organizo a estrutura digital da vida
          e do negócio; a IA trabalha dentro dela.</em>
          <br />
          <strong>No Instagram (fase de autoridade):</strong> educador.
        </Prose>

        <Subhead>Tagline</Subhead>
        <p className="max-w-[740px] font-serif text-[30px] font-medium leading-[1.15] tracking-[-0.01em] [font-variation-settings:'opsz'_60] sm:text-[38px]">
          Não é disciplina.
          <br />É <em className="italic text-mustard">strutura</em>.
        </p>
        <Prose className="mt-5">
          O dogma condensado: o diagnóstico (não é caráter) e a solução
          (sistema) em cinco palavras, com o nome da marca dentro. É a única
          tagline da casa.
        </Prose>
        <Callout title="Regras da tagline">
          <DotList
            items={[
              <>
                <strong>Grafia canônica com o trocadilho:</strong> sempre{" "}
                <code>strutura</code> (minúsculo, sem o &ldquo;e&rdquo;), em
                toda superfície, inclusive metadata. Nunca{" "}
                <em>&ldquo;é estrutura&rdquo;</em>.
              </>,
              <>
                O <strong>ponto final depois de &ldquo;disciplina&rdquo;</strong>{" "}
                é parte da frase: são duas sentenças, nunca uma vírgula.
              </>,
              <>
                A ênfase cai <strong>sempre na segunda palavra</strong>: itálico
                na mostarda do clima (<code>#C98A2B</code> no Bosque,{" "}
                <code>#A9741F</code> no Campo).
              </>,
              <>
                É <strong>tagline, não assinatura</strong>: a assinatura de
                posts segue &ldquo;Leo Abreu · Strutura&rdquo; (seção 10). As
                duas nunca aparecem no mesmo bloco.
              </>,
              <>
                <strong>Onde vive hoje:</strong> hero da home, bloco de marca do
                footer, metadata (title/OG/Twitter) e página 404.
              </>,
            ]}
          />
        </Callout>
      </Section>
    </Container>
  );
}
