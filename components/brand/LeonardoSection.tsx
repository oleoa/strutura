import { Container, Prose, Section } from "./ui";

export default function LeonardoSection() {
  return (
    <Container>
      <Section
        id="leonardo"
        num="01."
        title="Leonardo Abreu"
        meta="Quem eu sou"
      >
        <p className="mb-6 mt-2 max-w-[30ch] font-serif text-[clamp(26px,3.8vw,38px)] font-normal leading-[1.2] tracking-[-0.015em] [font-variation-settings:'opsz'_120]">
          Tenho 20 anos, sou{" "}
          <em className="italic text-mustard">programador e empreendedor</em>.
          Faço projetos para clientes, montando sistemas, sites e plataformas
          online.
        </p>
        <Prose>
          Gosto de organização, de tecnologia e de trabalhar de maneira
          inteligente, e entendo que{" "}
          <strong>a IA é uma ferramenta que pode ser usada bem ou mal</strong>.
        </Prose>
      </Section>
    </Container>
  );
}
