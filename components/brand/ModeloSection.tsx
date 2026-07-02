import { Callout, Card, Container, Prose, Section } from "./ui";

export default function ModeloSection() {
  return (
    <Container>
      <Section
        id="modelo"
        num="04."
        title="Modelo de negócio"
        meta="Um motor, três relógios"
      >
        <Prose className="mb-7">
          Tudo gira em torno de um único motor — a autoridade — que alimenta
          três frentes com <strong>tempos diferentes de retorno</strong>. Os
          tempos coexistem; não se conflacionam.
        </Prose>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card label="Motor · agora e sempre" title={<><em>Autoridade</em></>}>
            <p>
              Ensinar IA aplicada a negócios (Instagram/conteúdo). Constrói
              reputação e <strong>faz tudo o resto valer mais</strong>.
            </p>
          </Card>
          <Card label="Destino · ~12–18 meses" title={<><em>Educação</em></>}>
            <p>
              <strong>Comunidade paga</strong> (modelo Skool): conteúdo
              exclusivo, lives, camada de membros. É pra onde a autoridade
              converte — dinheiro paciente.{" "}
              <strong>Sem cursos avulsos</strong> — nada de curso de R$100
              solto.
            </p>
          </Card>
          <Card label="Ativo" title={<><em>SaaS</em></>}>
            <p>
              Produto próprio sob a Strutura: <strong>Strutura Pharos</strong>{" "}
              (flagship). Usado por clientes do mercado <em>e</em> pela própria
              marca — serve de prova.
            </p>
          </Card>
          <Card label="Renda-ponte · hoje" title={<><em>Serviço direto</em></>}>
            <p>
              Projeto a projeto (sites, lojas, landing pages, automações,
              agentes de IA), direto com o fundador, sem agência. Paga as
              contas agora e serve de prova;{" "}
              <strong>feita pra ser superada, não escalada.</strong>
            </p>
          </Card>
        </div>

        <Callout title="Dois relógios de comprador coexistem">
          Curto prazo (serviços/SaaS agora) e dinheiro paciente (comunidade em
          12–18 meses) vivem no mesmo conteúdo —{" "}
          <strong>não conflacionar os tempos ao medir conversão.</strong>
        </Callout>
      </Section>
    </Container>
  );
}
