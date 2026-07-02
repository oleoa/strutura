import { Callout, Container, Prose, Section, Subhead } from "./ui";

export default function AncoraSection() {
  return (
    <Container>
      <Section
        id="ancora"
        num="01."
        title="A âncora"
        meta="Essência, statement e o teste de tudo"
      >
        <Subhead>Essência — o DNA, uma linha</Subhead>
        <p className="mb-7 mt-2 max-w-[24ch] font-serif text-[clamp(30px,4.5vw,44px)] font-normal leading-[1.15] tracking-[-0.015em] [font-variation-settings:'opsz'_144]">
          Tirar o medo da IA e transformá-la em{" "}
          <em className="italic text-mustard">vantagem real</em> — com calma,
          profundidade e a mão na massa à vista.
        </p>

        <Subhead>Statement completo</Subhead>
        <Prose>
          Para o empreendedor digital que sente que está ficando pra trás na
          IA, a Strutura é <strong>o lugar calmo onde a IA finalmente faz
          sentido</strong> — não pelo hype, mas porque ele vê, passo a passo,
          alguém construindo de verdade e traduzindo o que parece complexo em
          algo que dá pra implementar hoje. Sem trend, sem promessa mágica,
          honesto sobre o que a IA <em>não</em> faz. Ele sai entendendo — e
          para de ter medo do futuro.
        </Prose>

        <Callout title="O teste de tudo">
          <strong>
            Isso tira medo e vira implementação, ou é só barulho?
          </strong>{" "}
          Se é barulho, não é a Strutura.
        </Callout>
      </Section>
    </Container>
  );
}
