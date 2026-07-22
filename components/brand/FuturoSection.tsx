import { Container, DotList, Section } from "./ui";

export default function FuturoSection() {
  return (
    <Container>
      <Section id="futuro" num="12." title="Futuro" meta="O horizonte, sem ruptura">
        <div className="max-w-[740px]">
          <DotList
            items={[
              <>
                Ser <strong>a referência em uso da IA para organizar a vida e
                o negócio do empreendedor no digital no Brasil</strong>.
              </>,
              <>
                Sair gradualmente do projeto/horas conforme educação e SaaS
                compõem: <strong>sem ruptura</strong>, o serviço por projeto
                sai de cena quando os produtos sustentam.
              </>,
              <>
                <strong>Comunidade paga como destino</strong>: dinheiro
                paciente ao lado da renda de curto prazo.
              </>,
              <>
                Produtos como <strong>prova e entrada de dinheiro</strong>{" "}
                hoje, marca própria talvez amanhã; opcionalidade guardada.
              </>,
              <>
                <strong>Lead magnet:</strong> placeholder; quando existir, o
                destino será definido (a página de links foi apagada; o site
                não captura email).
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
