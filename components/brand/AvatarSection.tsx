import { Callout, Card, Container, Prose, Section, Subhead } from "./ui";

export default function AvatarSection() {
  return (
    <Container>
      <Section
        id="avatar"
        num="05."
        title="Para quem"
        meta="Diego (primário) · Rafa (secundário)"
      >
        <Subhead>Avatar primário — Diego (~32)</Subhead>
        <Prose>
          Empreendedor digital, operação 100% online. Quatro encarnações do
          mesmo perfil: <strong>infoprodutor</strong>, <strong>dono de
          pequena agência</strong>, <strong>prestador de serviço digital
          escalando</strong>, ou <strong>e-commerce</strong>. Sozinho ou com
          1–2 pessoas/VAs. Brasil primeiro, Europa em segundo. O ponto que
          define: <strong>já fatura, mas no improviso</strong> — tem receita,
          não tem sistema. A alavanca de IA é proporcional ao quão digital é o
          trabalho dele.
        </Prose>
        <Prose className="mt-3.5">
          <strong>O que ele quer:</strong> tempo de volta; clareza no lugar do
          caos; controle da própria operação; usar IA <em>de verdade</em>, com
          método. <strong>O que não quer:</strong> mais um curso genérico de
          &ldquo;10 prompts que mudam sua vida&rdquo;.
        </Prose>

        <Subhead>
          Três dores, mesma raiz — não saber usar IA como ela realmente pode
          ser usada
        </Subhead>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card label="Dor 01">
            <p>
              <strong>Fazer o produto/entregável</strong> — ele é o funil
              inteiro.
            </p>
          </Card>
          <Card label="Dor 02">
            <p>
              <strong>Organizar a operação</strong> — ferramentas espalhadas,
              nada conversa, tudo na cabeça dele.
            </p>
          </Card>
          <Card label="Dor 03">
            <p>
              <strong>Dar conta dos clientes e das conversas</strong> — a
              sensação de que algo sempre escapa.
            </p>
          </Card>
        </div>
        <Prose className="mt-5">
          Por cima das três:{" "}
          <strong>&ldquo;IA é pra todo mundo menos pra mim.&rdquo;</strong>
        </Prose>

        <Callout title="A transformação">
          Ele <strong>para de ter medo do futuro da IA</strong> e começa a
          usá-la no potencial completo. Esse é o núcleo de tudo que a marca
          promete.
        </Callout>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card label="Gatilho de confiança">
            <p>
              Ver IA resolver um problema digital real, com método claro,
              vindo de alguém calmo que também mostra onde a IA <em>não</em>{" "}
              ajuda.
            </p>
          </Card>
          <Card label="Gatilho de compra">
            <p>
              Ver a marca fazer em 5 minutos o que ele faz em 3 horas na mão.
            </p>
          </Card>
        </div>

        <Subhead>Audiências secundárias</Subhead>
        <Prose>
          <strong>Rafa (secundário):</strong> entusiasta de IA, pode nem ter
          negócio. <strong>Não é alvo de conteúdo</strong> — é capturado de
          graça pelo conteúdo feito para o Diego. Apontar copy pro Rafa
          derrapa no espaço genérico de hype.
        </Prose>
        <Prose className="mt-3.5">
          <strong>Negócio físico/local (audiência menor):</strong> tocado só
          pelo lado informacional (marketing, atendimento, organização), nunca
          pela operação física.
        </Prose>

        <Callout title="Regra de ICP">
          O avatar descreve a <strong>experiência vivida real do Diego</strong>,
          NUNCA trabalha de trás pra frente a partir de features de produto —
          essa é a armadilha que leva ao conteúdo genérico de guru.
        </Callout>
      </Section>
    </Container>
  );
}
