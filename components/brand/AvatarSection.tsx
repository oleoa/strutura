import { Callout, Card, Container, Prose, Section, Subhead } from "./ui";

export default function AvatarSection() {
  return (
    <Container>
      <Section
        id="avatar"
        num="06."
        title="Para quem"
        meta="Bruno · o empreendedor no digital"
      >
        <Subhead>Persona: Bruno, 31, empreendedor no digital</Subhead>
        <Prose>
          Empreende online, sozinho. Vida e negócio moram no mesmo sistema:{" "}
          <strong>
            o mesmo Notion, o mesmo calendário, a mesma cabeça.
          </strong>{" "}
          A marca fala com ele de dentro da experiência:{" "}
          <em>
            &ldquo;falo para a minha versão de antigamente e ensino o que
            aprendi nesses anos empreendendo online.&rdquo;
          </em>
        </Prose>

        <Subhead>
          Três dores, mesma raiz: nenhum sistema segurando a vida e a operação
        </Subhead>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card label="Dor 01" title={<><em>Dispersão</em></>}>
            <p>
              Agenda num app, tarefas em dois, notas no bloco de notas,
              lembrete mandado pra si mesmo no WhatsApp, prazo na cabeça.
              Nenhum lugar é confiável, então o índice é a memória, e a
              memória falha.{" "}
              <strong>
                O domingo à noite com a sensação de que esqueceu algo é o
                retrato dessa dor.
              </strong>
            </p>
          </Card>
          <Card label="Dor 02" title={<>Ciclo de <em>recomeço</em></>}>
            <p>
              Já montou o Notion duas vezes, abandonou duas vezes. Baixa app
              novo, dura três semanas. Acha que o problema é ele:{" "}
              <strong>
                &ldquo;sou desorganizado&rdquo;, &ldquo;não sou bom com
                tecnologia&rdquo;.
              </strong>
            </p>
          </Card>
          <Card label="Dor 03" title={<>Produção <em>travada</em></>}>
            <p>
              As ideias existem, a vontade existe. Mas viram peso mental em
              vez de projeto andando. Procrastina e acha que é defeito de
              caráter.{" "}
              <strong>
                Quando o negócio é você, produção é faturamento.
              </strong>
            </p>
          </Card>
        </div>
        <Prose className="mt-5">
          Por cima das três:{" "}
          <strong>
            ele acha que lhe falta disciplina; o que falta é engenharia.
          </strong>
        </Prose>

        <Callout title="O destino: controle">
          Um sistema que segura as informações da vida e do negócio e devolve
          a resposta certa quando as coisas chegam.{" "}
          <strong>Controle é o único destino que a marca nomeia</strong>;
          crescimento, transformação e vida melhor não entram em promessa
          nenhuma.
        </Callout>

        <Subhead>Público da marca ≠ alcance dos produtos</Subhead>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card label="Marca e conteúdo">
            <p>
              Falam com o Bruno: <strong>o empreendedor no digital</strong>{" "}
              estruturando vida e operação.
            </p>
          </Card>
          <Card label="Produtos e serviços">
            <p>
              Vendem mais largo. O Pharos mira{" "}
              <strong>qualquer negócio que fecha no WhatsApp</strong> (times de
              1 a 30; um dos casos é uma clínica veterinária); os serviços por
              projeto atendem negócios em geral.
            </p>
          </Card>
        </div>

        <Callout title="Regra de ICP">
          A persona descreve a <strong>experiência vivida real</strong>, NUNCA
          trabalha de trás pra frente a partir de features de produto: essa é
          a armadilha que leva ao conteúdo genérico de guru.
        </Callout>
      </Section>
    </Container>
  );
}
