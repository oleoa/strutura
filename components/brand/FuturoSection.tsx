import { Container, DotList, Section } from "./ui";

export default function FuturoSection() {
  return (
    <Container>
      <Section id="futuro" num="11." title="Futuro" meta="O horizonte — sem ruptura">
        <div className="max-w-[740px]">
          <DotList
            items={[
              <>
                Ser <strong>referência em IA aplicada a negócios no
                Brasil</strong>.
              </>,
              <>
                Sair gradualmente do projeto/horas conforme educação e SaaS
                compõem — <strong>sem ruptura</strong>.
              </>,
              <>
                <strong>Comunidade paga como destino</strong> (Skool, 12–18
                meses, dinheiro paciente).
              </>,
              <>
                Produtos como prova hoje, marca própria talvez amanhã —
                optionalidade guardada.
              </>,
              <>
                <strong>Lead magnet:</strong> placeholder; quando existir, vai
                primeiro na página de links.
              </>,
              <>
                <strong>Rosto na câmera:</strong> introdução gradual, sem
                prazo.
              </>,
              <>
                <strong>Página &ldquo;sobre&rdquo; da Strutura:</strong> será
                construída e deixada solta no site, sem dependência de
                sequência.
              </>,
            ]}
          />
        </div>
      </Section>
    </Container>
  );
}
