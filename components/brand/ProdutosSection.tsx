import { Callout, Container, DotList, Prose, Section, Subhead } from "./ui";

export default function ProdutosSection() {
  return (
    <Container>
      <Section
        id="produtos"
        num="06."
        title="Produtos"
        meta="Pharos · renda-ponte"
      >
        <Subhead>Strutura Pharos — flagship SaaS</Subhead>
        <Prose>
          Gestão de leads de WhatsApp + Instagram. Hook:{" "}
          <em className="font-serif text-base italic text-mustard-ink">
            nenhum lead esquecido no WhatsApp.
          </em>{" "}
          A IA lê todas as conversas de madrugada (~3h), categoriza leads por
          fase do funil e temperatura, define a próxima ação e o timing.
        </Prose>
        <div className="mt-4 max-w-[740px]">
          <DotList
            items={[
              <>Transcrição automática de áudios.</>,
              <>
                Duas listas limpas:{" "}
                <strong>quem espera por você / quem te deve resposta</strong>.
              </>,
              <>Contatos multicanal unificados.</>,
              <>Funil personalizável com raciocínio da IA auditável.</>,
              <>
                Diferenciais: setup &lt;5 min, suporte em português, sem
                lock-in.
              </>,
              <>
                Alvo: negócios que fecham vendas no WhatsApp — clínicas,
                imobiliárias, infoprodutores, agências, lojas high-ticket,
                consultorias; equipes de 1–30.
              </>,
              <>
                Casos: Mentores de Elite, Tebosa (clínica veterinária), Locação
                Europa.
              </>,
            ]}
          />
        </div>
        <Callout title="Ponto de arquitetura-dogma">
          O Pharos <strong>recusa deliberadamente o auto-reply</strong> — lê,
          organiza, relembra o contexto e diz o próximo passo, mas para antes
          de responder.
        </Callout>

        <Subhead>Renda-ponte — soluções sob medida</Subhead>
        <Prose>
          Sites institucionais e landing pages, lojas online (Stripe/Pix/
          checkout próprio), formulários inteligentes e captação de leads,
          automações (n8n/WhatsApp/Instagram), integrações
          (Notion/Stripe/Google), agentes de IA para
          suporte/orçamentos/qualificação. Casos: Mentores de Elite, Tebosa,
          Locação Europa.
        </Prose>

        <Callout title="Regra: produtos são prova, não pauta">
          No Instagram aparecem como &ldquo;uma solução que já fiz pro meu
          próprio negócio&rdquo; — <strong>nunca como tema ou pitch.</strong>
        </Callout>
      </Section>
    </Container>
  );
}
