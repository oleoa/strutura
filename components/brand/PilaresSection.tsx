import { Card, Container, DotList, Prose, Section, Subhead } from "./ui";

export default function PilaresSection() {
  return (
    <Container>
      <Section
        id="pilares"
        num="08."
        title="Pilares & conteúdo"
        meta="Lifestyle · business · 3 pilares + tempero"
      >
        <Subhead>Lifestyle — o Leonardo que aparece</Subhead>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card label="01" title={<>Calma como <em>método</em></>}>
            <p>Foco, um assunto por vez, profundidade.</p>
          </Card>
          <Card label="02" title={<>Natureza &amp; <em>espaço</em></>}>
            <p>
              Grava fora, paisagem no fundo. O oposto visual do
              escritório-caos do Diego. (Madeira é acidente geográfico, fica
              fora de cena; a natureza é recurso de marca, não local
              turístico.)
            </p>
          </Card>
          <Card label="03" title={<>Construtor, <em>não guru</em></>}>
            <p>
              A mão na massa à vista. Aprende em público, mostra o processo
              real.
            </p>
          </Card>
          <Card label="04" title={<>Curiosidade <em>honesta</em></>}>
            <p>
              Testa, erra, mostra onde a ferramenta trava.{" "}
              <strong>A honestidade é o carisma.</strong>
            </p>
          </Card>
        </div>

        <Subhead>Business — a Strutura que sustenta</Subhead>
        <div className="max-w-[740px]">
          <DotList
            items={[
              <>
                <strong>Autoridade / Educação (o motor)</strong> — destino:
                comunidade paga.
              </>,
              <>
                <strong>Produtos como prova (o ativo)</strong> — Pharos e
                Studio.
              </>,
              <>
                <strong>Serviço direto com o fundador (a ponte)</strong> —
                feito pra ser superado.
              </>,
            ]}
          />
        </div>

        <Subhead>Conteúdo — 3 pilares + 1 tempero</Subhead>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card label="Pilar 1 · motor" title="Ensinar IA">
            <p>
              O que é, para que serve, como usar e como <em>não</em> usar;
              tutoriais aplicados.
            </p>
          </Card>
          <Card label="Pilar 2 · prova" title="Como eu faço / building in public">
            <p>Gravações de tela narradas de builds reais.</p>
          </Card>
          <Card label="Pilar 3 · conexão" title="Jornada & opinião">
            <p>Bastidores + leituras medidas do mercado de IA.</p>
          </Card>
          <Card label="Tempero · avulso, sem agenda" title="Pessoal">
            <p>Humaniza; feito quando dá vontade.</p>
          </Card>
        </div>

        <Prose className="mt-6">
          <strong>Cadência:</strong> 3 posts/semana, sustentável acima de
          heroico. <strong>Formato:</strong> majoritariamente carrosséis +
          gravações de tela narradas; rosto na câmera entra devagar, sem
          prazo.
        </Prose>

        <Subhead>Princípios fixados</Subhead>
        <div className="max-w-[740px]">
          <DotList
            items={[
              <>
                <strong>Produtos como prova, não pauta.</strong>
              </>,
              <>
                <strong>Barra de dupla reação</strong> — o leigo pensa
                &ldquo;não fazia ideia que dava pra usar IA assim&rdquo;{" "}
                <em>e</em> o experiente pensa &ldquo;que esperto usar
                assim&rdquo;, via superfície acessível + profundidade em{" "}
                <em>uma</em> aplicação específica.
              </>,
              <>
                <strong>Saves são a métrica</strong> — o que é salvo é uma
                ferramenta que se guarda, não um pensamento que se consome.
                Todo post se resolve por completo (sem teaser) e fecha com
                razão explícita de save.
              </>,
              <>
                <strong>Defesa contra o genérico</strong> — avatar amplo
                (alcance), cada post cirúrgico com exemplo específico
                (credibilidade).
              </>,
              <>
                <strong>Dois relógios de comprador coexistem</strong> — não
                conflacionar os tempos.
              </>,
              <>
                <strong>Calma é demonstrada, nunca anunciada.</strong>
              </>,
            ]}
          />
        </div>

        <Subhead>5 tensões de posicionamento — o fosso</Subhead>
        <div className="max-w-[740px]">
          <DotList
            items={[
              <>
                Ensina como pessoa ↔ constrói produto que roda sem ela.
              </>,
              <>Calmo no tom ↔ ambicioso no destino.</>,
              <>Profundo no &ldquo;como&rdquo; ↔ acessível pro leigo.</>,
              <>
                Honesto sobre o que a IA não faz ↔ vende IA —{" "}
                <strong>a honestidade É o mecanismo de venda.</strong>
              </>,
              <>
                Serviço que paga hoje ↔ educação que é o destino — dois
                relógios, um motor.
              </>,
            ]}
          />
        </div>
      </Section>
    </Container>
  );
}
