import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LegalNav, type LegalSection } from "@/components/legal-nav";

export const metadata: Metadata = {
  title: "Termos de Uso — Strutura CRM",
  description:
    "Termos de uso do Strutura CRM, a plataforma de gestão de leads com inteligência artificial para pequenas e médias empresas.",
};

const sections: LegalSection[] = [
  { id: "aceitacao", title: "1. Aceitação dos Termos" },
  { id: "definicoes", title: "2. Definições" },
  { id: "descricao-servico", title: "3. Descrição do Serviço" },
  { id: "cadastro-conta", title: "4. Cadastro e Conta" },
  { id: "pagamentos", title: "5. Planos, Pagamentos e Cobrança" },
  { id: "plano-gratuito", title: "6. Plano Gratuito e Teste" },
  { id: "uso-aceitavel", title: "7. Uso Aceitável" },
  { id: "lgpd", title: "8. Responsabilidades — LGPD" },
  { id: "propriedade-intelectual", title: "9. Propriedade Intelectual" },
  { id: "disponibilidade", title: "10. Disponibilidade e SLA" },
  { id: "limitacao", title: "11. Limitação de Responsabilidade" },
  { id: "indenizacao", title: "12. Indenização" },
  { id: "cancelamento", title: "13. Cancelamento e Rescisão" },
  { id: "modificacoes", title: "14. Modificações nos Termos" },
  { id: "disposicoes", title: "15. Disposições Gerais" },
  { id: "legislacao", title: "16. Legislação e Foro" },
  { id: "contato", title: "17. Contato" },
];

export default function TermosCRMPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Header */}
      <header className="border-b border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logos/expanded-logo/yellow.png"
              alt="Strutura"
              width={140}
              height={35}
              className="h-8 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-[#A0A0A0] hover:text-[#E9D73A] transition-colors"
          >
            ← Início
          </Link>
        </div>
      </header>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 lg:py-12 lg:flex lg:gap-10">
        {/* Sidebar — desktop only */}
        <aside className="hidden lg:block w-60 shrink-0">
          <div className="sticky top-8">
            <p className="text-xs font-semibold text-[#A0A0A0] uppercase tracking-wider mb-3">
              Nesta página
            </p>
            <nav className="space-y-0.5">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm text-[#A0A0A0] hover:text-[#E9D73A] py-1.5 px-3 rounded-lg hover:bg-[#1A1A1A] transition-colors leading-snug"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Mobile nav */}
          <LegalNav sections={sections} label="Navegar pelos termos" />

          <div className="bg-[#1A1A1A] rounded-2xl border border-[#2A2A2A] px-6 py-8 sm:px-10 sm:py-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Termos de Uso
              </h1>
              <p className="text-sm text-[#A0A0A0]">
                Strutura CRM &mdash; strutura.ai/crm
              </p>
              <p className="text-sm text-[#A0A0A0] mt-1">
                Última atualização: 4 de março de 2026
              </p>
            </div>

            <div className="h-px bg-[#2A2A2A] mb-8" />

            <p className="text-sm text-[#A0A0A0] leading-relaxed mb-10">
              Estes Termos de Uso regulam o acesso e o uso do{" "}
              <strong className="text-white">Strutura CRM</strong>, plataforma
              de gestão de leads com inteligência artificial desenvolvida e
              operada pela Strutura. Leia com atenção antes de utilizar o
              serviço.
            </p>

            {/* 1 */}
            <Section id="aceitacao" title="1. Aceitação dos Termos">
              <p>
                Ao acessar ou utilizar o Strutura CRM, você declara ter lido,
                compreendido e concordado com estes Termos de Uso e com nossa{" "}
                <Link
                  href="/crm/privacidade"
                  className="text-[#E9D73A] hover:underline"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
              <p>
                Se você não concordar com qualquer parte destes termos, não deve
                utilizar o serviço. O uso continuado da plataforma após
                eventuais alterações constitui aceitação automática das novas
                condições.
              </p>
              <p>
                Estes termos se aplicam a todos os usuários da plataforma,
                incluindo pessoas físicas (MEI, profissionais liberais) e
                pessoas jurídicas.
              </p>
            </Section>

            {/* 2 */}
            <Section id="definicoes" title="2. Definições">
              <p>
                Para fins destes Termos, os seguintes termos têm os significados
                abaixo:
              </p>
              <ul>
                <li>
                  <strong className="text-white">&ldquo;Plataforma&rdquo;</strong>{" "}
                  ou{" "}
                  <strong className="text-white">&ldquo;Serviço&rdquo;</strong>:
                  o Strutura CRM, incluindo todas as suas funcionalidades,
                  integrações e atualizações.
                </li>
                <li>
                  <strong className="text-white">&ldquo;Cliente&rdquo;</strong>{" "}
                  ou{" "}
                  <strong className="text-white">&ldquo;você&rdquo;</strong>: a
                  pessoa física ou jurídica que contrata e utiliza o Strutura
                  CRM.
                </li>
                <li>
                  <strong className="text-white">
                    &ldquo;Usuário final&rdquo;
                  </strong>{" "}
                  ou{" "}
                  <strong className="text-white">&ldquo;Lead&rdquo;</strong>: os
                  contatos gerenciados pelo Cliente dentro do CRM.
                </li>
                <li>
                  <strong className="text-white">
                    &ldquo;Conversas&rdquo;
                  </strong>
                  : mensagens trocadas via WhatsApp Business API, Instagram
                  Direct ou Facebook Messenger que são analisadas pela
                  plataforma.
                </li>
                <li>
                  <strong className="text-white">&ldquo;Créditos&rdquo;</strong>{" "}
                  ou{" "}
                  <strong className="text-white">
                    &ldquo;Conversas analisadas&rdquo;
                  </strong>
                  : unidade de cobrança do serviço, equivalente à análise de
                  uma thread de conversa por dia pela IA.
                </li>
                <li>
                  <strong className="text-white">&ldquo;Nós&rdquo;</strong>,{" "}
                  <strong className="text-white">&ldquo;nossa&rdquo;</strong> ou{" "}
                  <strong className="text-white">&ldquo;Strutura&rdquo;</strong>
                  : a empresa responsável pelo desenvolvimento e operação do
                  Strutura CRM.
                </li>
              </ul>
            </Section>

            {/* 3 */}
            <Section id="descricao-servico" title="3. Descrição do Serviço">
              <p>
                O Strutura CRM é uma plataforma de gestão de relacionamento com
                clientes enriquecida por inteligência artificial, voltada para
                pequenas e médias empresas brasileiras. O serviço inclui:
              </p>
              <ul>
                <li>
                  Leitura e análise automatizada de conversas via{" "}
                  <strong className="text-white">WhatsApp Business API</strong>,{" "}
                  <strong className="text-white">Instagram Direct</strong>{" "}
                  (Instagram Graph API) e{" "}
                  <strong className="text-white">Facebook Messenger</strong>{" "}
                  (Messenger Platform)
                </li>
                <li>
                  Classificação de leads por temperatura, status e valor
                  potencial estimado
                </li>
                <li>
                  Geração automática de resumos acumulados e recomendações de
                  próximas ações
                </li>
                <li>
                  Atualização diária automatizada dos campos do CRM por modelos
                  de linguagem (IA generativa)
                </li>
                <li>
                  Armazenamento e gestão de dados de leads (nome, telefone,
                  status, histórico de interações)
                </li>
                <li>
                  Painel de gestão via Notion (fase atual, sujeito a evolução
                  futura sem aviso prévio)
                </li>
                <li>
                  Processamento de pagamentos de assinatura via Stripe
                </li>
              </ul>
              <p>
                A análise de IA é processada em{" "}
                <strong className="text-white">lote diário</strong> — não em
                tempo real. O serviço é fornecido{" "}
                <em>&ldquo;como está&rdquo;</em> (&ldquo;as is&rdquo;) e pode
                evoluir com novas funcionalidades sem aviso prévio.
              </p>
            </Section>

            {/* 4 */}
            <Section id="cadastro-conta" title="4. Cadastro e Conta">
              <p>
                Para utilizar o Strutura CRM, você deve fornecer informações
                verdadeiras, precisas e completas no momento do cadastro e
                mantê-las atualizadas.
              </p>
              <ul>
                <li>
                  Você é integralmente responsável pela confidencialidade das
                  suas credenciais de acesso e por não compartilhá-las com
                  terceiros.
                </li>
                <li>
                  Em caso de uso não autorizado da sua conta, notifique
                  imediatamente a Strutura pelo e-mail{" "}
                  <a
                    href="mailto:leonardo@strutura.ai"
                    className="text-[#E9D73A] hover:underline"
                  >
                    leonardo@strutura.ai
                  </a>
                  .
                </li>
                <li>
                  É permitida uma conta por empresa (CNPJ) ou por pessoa física
                  (CPF para MEI e profissionais liberais).
                </li>
                <li>
                  A Strutura pode solicitar documentação adicional para
                  verificação de identidade ou regularidade fiscal.
                </li>
              </ul>
              <p>
                Você é responsável por todas as atividades realizadas na sua
                conta, inclusive aquelas efetuadas por colaboradores ou
                terceiros a quem você concedeu acesso.
              </p>
            </Section>

            {/* 5 */}
            <Section
              id="pagamentos"
              title="5. Planos, Pagamentos e Cobrança"
            >
              <p>
                O acesso ao Strutura CRM é cobrado por meio de assinatura mensal
                em reais brasileiros (BRL), processada pelo Stripe.
              </p>
              <ul>
                <li>
                  A unidade de cobrança é a{" "}
                  <strong className="text-white">
                    &ldquo;conversa analisada&rdquo;
                  </strong>
                  : uma thread de mensagens entre você e um lead, processada
                  pela IA em um determinado dia.
                </li>
                <li>
                  Os planos vigentes, preços e limites de créditos estão
                  disponíveis na página de preços da plataforma.
                </li>
                <li>
                  A Strutura reserva-se o direito de alterar preços e planos com
                  aviso prévio mínimo de{" "}
                  <strong className="text-white">30 dias</strong> por e-mail.
                </li>
                <li>
                  Créditos não utilizados no mês corrente{" "}
                  <strong className="text-white">não acumulam</strong> para o
                  período seguinte.
                </li>
                <li>
                  Em caso de falta de pagamento: (i) notificação por e-mail;
                  (ii) suspensão do serviço após 7 dias de atraso; (iii)
                  cancelamento da conta após 30 dias de inadimplência.
                </li>
                <li>
                  A Strutura não armazena dados de cartão de crédito. Todos os
                  pagamentos são processados exclusivamente pelo Stripe,
                  sujeito aos seus próprios termos e política de privacidade.
                </li>
              </ul>
            </Section>

            {/* 6 */}
            <Section
              id="plano-gratuito"
              title="6. Plano Gratuito e Período de Teste"
            >
              <p>
                Quando disponível, o plano gratuito ou período de teste do
                Strutura CRM está sujeito às seguintes condições:
              </p>
              <ul>
                <li>
                  O plano gratuito possui limite reduzido de conversas
                  analisadas por mês, definido pela Strutura.
                </li>
                <li>
                  A Strutura pode descontinuar, modificar ou restringir planos
                  gratuitos a qualquer momento, sem necessidade de aviso prévio.
                </li>
                <li>
                  Planos gratuitos não incluem garantia de nível de serviço
                  (SLA) nem suporte dedicado.
                </li>
                <li>
                  O período de teste, quando oferecido, encerra-se
                  automaticamente ao final do prazo indicado, sem geração de
                  cobrança automática salvo se contratado.
                </li>
              </ul>
            </Section>

            {/* 7 */}
            <Section id="uso-aceitavel" title="7. Uso Aceitável">
              <p>Ao utilizar o Strutura CRM, você concorda em:</p>
              <ul>
                <li>
                  Usar o serviço apenas para fins legítimos de gestão de
                  relacionamento com clientes e leads.
                </li>
                <li>
                  Ter obtido consentimento ou base legal adequada dos seus leads
                  para a coleta e o tratamento de suas conversas, conforme a
                  LGPD.
                </li>
                <li>
                  Não utilizar a plataforma para spam, assédio, phishing ou
                  qualquer outra atividade ilegal ou abusiva.
                </li>
                <li>
                  Não enviar mensagens em massa não solicitadas com dados
                  obtidos via a plataforma.
                </li>
                <li>
                  Não tentar acessar dados, sistemas ou contas de outros
                  clientes da Strutura.
                </li>
                <li>
                  Não realizar engenharia reversa, descompilação, desmontagem ou
                  qualquer tentativa de extrair o código-fonte da plataforma ou
                  dos algoritmos de IA.
                </li>
                <li>
                  Não revender, sublicenciar ou redistribuir o acesso ao serviço
                  sem autorização prévia e por escrito da Strutura.
                </li>
                <li>
                  Não armazenar ou transmitir conteúdo ilegal, difamatório ou
                  que viole direitos de terceiros por meio da plataforma.
                </li>
                <li>
                  Não sobrecarregar intencionalmente a infraestrutura do serviço
                  (ex.: ataques de DoS, scraping automatizado excessivo).
                </li>
              </ul>
              <p>
                O descumprimento de qualquer item acima pode resultar em
                suspensão imediata da conta, sem direito a reembolso.
              </p>
            </Section>

            {/* 8 */}
            <Section
              id="lgpd"
              title="8. Responsabilidades do Cliente quanto à LGPD"
            >
              <p>
                No âmbito da Lei Geral de Proteção de Dados (LGPD — Lei
                13.709/2018):
              </p>
              <ul>
                <li>
                  O{" "}
                  <strong className="text-white">
                    Cliente atua como Controlador
                  </strong>{" "}
                  dos dados pessoais dos seus leads e contatos gerenciados no
                  CRM.
                </li>
                <li>
                  A{" "}
                  <strong className="text-white">
                    Strutura atua como Operadora
                  </strong>
                  , tratando os dados exclusivamente conforme as instruções do
                  Cliente e estes Termos.
                </li>
              </ul>
              <p>Como Controlador, você é integralmente responsável por:</p>
              <ul>
                <li>
                  Obter base legal adequada (consentimento, legítimo interesse,
                  execução de contrato, etc.) para o tratamento dos dados dos
                  seus leads.
                </li>
                <li>
                  Informar seus leads sobre o tratamento de dados, incluindo a
                  análise automatizada por inteligência artificial.
                </li>
                <li>
                  Responder a solicitações dos titulares sobre seus direitos
                  previstos na LGPD (acesso, correção, exclusão, portabilidade,
                  etc.).
                </li>
                <li>
                  Garantir que os canais integrados (WhatsApp, Instagram,
                  Facebook) estejam devidamente autorizados para o tratamento de
                  dados.
                </li>
              </ul>
              <p>
                A Strutura auxiliará o Cliente no cumprimento dessas obrigações
                dentro do razoável e tecnicamente viável. O Cliente concorda em
                indenizar a Strutura por quaisquer danos decorrentes do
                descumprimento de suas obrigações como Controlador.
              </p>
            </Section>

            {/* 9 */}
            <Section
              id="propriedade-intelectual"
              title="9. Propriedade Intelectual"
            >
              <p>
                Todos os direitos de propriedade intelectual sobre a plataforma
                são reservados à Strutura, incluindo:
              </p>
              <ul>
                <li>Marca, logotipo, identidade visual e materiais de marketing</li>
                <li>
                  Código-fonte, algoritmos de IA, modelos de linguagem
                  personalizados, prompts e workflows
                </li>
                <li>Interface, design e arquitetura da plataforma</li>
              </ul>
              <p>
                O Cliente retém a propriedade integral dos seus dados:
                conversas, informações de leads e demais conteúdos inseridos na
                plataforma.
              </p>
              <p>
                Ao utilizar o serviço, o Cliente concede à Strutura uma{" "}
                <strong className="text-white">
                  licença limitada, não exclusiva e revogável
                </strong>{" "}
                para processar seus dados exclusivamente para a prestação do
                serviço contratado.
              </p>
              <p>
                A Strutura pode utilizar dados anonimizados e agregados — sem
                possibilidade de identificação individual — para melhoria do
                serviço, estatísticas internas e desenvolvimento de produto.
              </p>
            </Section>

            {/* 10 */}
            <Section
              id="disponibilidade"
              title="10. Disponibilidade e Nível de Serviço"
            >
              <p>
                A Strutura se esforça para manter o Strutura CRM disponível 24
                horas por dia, 7 dias por semana, mas não garante
                disponibilidade ininterrupta.
              </p>
              <ul>
                <li>
                  Manutenções programadas serão comunicadas com antecedência
                  razoável sempre que possível.
                </li>
                <li>
                  A Strutura não se responsabiliza por indisponibilidades
                  causadas por terceiros (Meta/WhatsApp, Instagram, Facebook,
                  Stripe, provedores de hospedagem ou de modelos de IA) ou por
                  força maior (desastres naturais, falhas de infraestrutura de
                  internet, ações governamentais).
                </li>
                <li>
                  A análise de IA é processada em lote diário. Atrasos pontuais
                  de até{" "}
                  <strong className="text-white">24 horas</strong> no
                  processamento não constituem falha do serviço.
                </li>
                <li>
                  Em caso de indisponibilidade prolongada superior a{" "}
                  <strong className="text-white">72 horas consecutivas</strong>{" "}
                  causada exclusivamente pela Strutura, o Cliente pode solicitar
                  créditos proporcionais ao período afetado.
                </li>
              </ul>
            </Section>

            {/* 11 */}
            <Section
              id="limitacao"
              title="11. Limitação de Responsabilidade"
            >
              <p>
                Na máxima extensão permitida pela legislação brasileira, a
                Strutura não se responsabiliza por:
              </p>
              <ul>
                <li>
                  Decisões comerciais tomadas com base nas análises e
                  recomendações geradas pela IA — a IA é uma ferramenta de
                  apoio à decisão, e a{" "}
                  <strong className="text-white">
                    decisão final é sempre do Cliente
                  </strong>
                  .
                </li>
                <li>
                  Perdas de negócio, lucros cessantes, oportunidades perdidas ou
                  danos à reputação.
                </li>
                <li>
                  Danos indiretos, incidentais, especiais ou consequenciais.
                </li>
                <li>
                  Conteúdo das conversas entre o Cliente e seus leads.
                </li>
                <li>
                  Ações ou omissões de terceiros (leads, provedores de canais,
                  provedores de IA).
                </li>
                <li>
                  Dados incorretos, incompletos ou desatualizados fornecidos
                  pelo Cliente.
                </li>
              </ul>
              <p>
                A{" "}
                <strong className="text-white">
                  responsabilidade total máxima
                </strong>{" "}
                da Strutura, por qualquer causa e sob qualquer teoria legal,
                fica limitada ao valor efetivamente pago pelo Cliente nos
                últimos{" "}
                <strong className="text-white">3 (três) meses</strong> de
                assinatura do serviço.
              </p>
            </Section>

            {/* 12 */}
            <Section id="indenizacao" title="12. Indenização">
              <p>
                O Cliente concorda em indenizar, defender e isentar a Strutura,
                seus sócios, colaboradores e parceiros de quaisquer reclamações,
                danos, perdas, responsabilidades e despesas (incluindo
                honorários advocatícios razoáveis) decorrentes de:
              </p>
              <ul>
                <li>Violação destes Termos de Uso pelo Cliente</li>
                <li>Uso indevido ou ilegal da plataforma</li>
                <li>Violação de direitos de terceiros pelo Cliente</li>
                <li>
                  Descumprimento das obrigações do Cliente como Controlador de
                  dados nos termos da LGPD
                </li>
                <li>
                  Informações falsas ou incorretas fornecidas no cadastro ou no
                  uso do serviço
                </li>
              </ul>
            </Section>

            {/* 13 */}
            <Section id="cancelamento" title="13. Cancelamento e Rescisão">
              <p>
                O Cliente pode cancelar sua assinatura a qualquer momento
                diretamente pela plataforma ou enviando um e-mail para{" "}
                <a
                  href="mailto:leonardo@strutura.ai"
                  className="text-[#E9D73A] hover:underline"
                >
                  leonardo@strutura.ai
                </a>
                .
              </p>
              <ul>
                <li>
                  O cancelamento tem efeito no fim do período já pago. Não há
                  reembolso proporcional pelos dias não utilizados.
                </li>
                <li>
                  A Strutura pode suspender ou encerrar a conta do Cliente em
                  caso de: (i) violação destes Termos, com notificação prévia de
                  5 dias úteis, salvo em casos graves; (ii) inadimplência
                  superior a 30 dias; (iii) uso ilegal ou abusivo da plataforma
                  (suspensão imediata).
                </li>
                <li>
                  Após o cancelamento, os dados do Cliente são mantidos por{" "}
                  <strong className="text-white">30 dias</strong> para possível
                  reativação.
                </li>
                <li>
                  Após 30 dias, os dados são{" "}
                  <strong className="text-white">
                    permanentemente excluídos
                  </strong>{" "}
                  sem possibilidade de recuperação.
                </li>
                <li>
                  O Cliente pode solicitar a exportação dos seus dados a qualquer
                  momento dentro do período de 30 dias após o cancelamento.
                </li>
              </ul>
            </Section>

            {/* 14 */}
            <Section id="modificacoes" title="14. Modificações nos Termos">
              <p>
                A Strutura pode atualizar estes Termos de Uso periodicamente
                para refletir mudanças no serviço, na legislação ou nas
                práticas internas.
              </p>
              <ul>
                <li>
                  Mudanças relevantes serão comunicadas por e-mail com pelo
                  menos{" "}
                  <strong className="text-white">
                    15 dias de antecedência
                  </strong>
                  .
                </li>
                <li>
                  O uso continuado da plataforma após o prazo de notificação
                  constitui aceitação automática dos novos termos.
                </li>
                <li>
                  Se você não concordar com as alterações, pode cancelar o
                  serviço sem penalidade antes da data de entrada em vigor dos
                  novos termos.
                </li>
              </ul>
              <p>
                A versão mais recente dos Termos está sempre disponível em{" "}
                <strong className="text-white">strutura.ai/crm/termos</strong>.
              </p>
            </Section>

            {/* 15 */}
            <Section id="disposicoes" title="15. Disposições Gerais">
              <ul>
                <li>
                  Se qualquer cláusula destes Termos for considerada inválida ou
                  inaplicável, as demais permanecem em pleno vigor.
                </li>
                <li>
                  A tolerância da Strutura quanto ao descumprimento de qualquer
                  cláusula não implica renúncia ao direito de exigi-la
                  posteriormente.
                </li>
                <li>
                  Estes Termos, em conjunto com a{" "}
                  <Link
                    href="/crm/privacidade"
                    className="text-[#E9D73A] hover:underline"
                  >
                    Política de Privacidade
                  </Link>
                  , constituem o acordo integral entre as partes sobre o uso do
                  Strutura CRM e substituem quaisquer acordos anteriores sobre o
                  mesmo objeto.
                </li>
                <li>
                  Comunicações oficiais entre as partes serão feitas por e-mail
                  para os endereços cadastrados.
                </li>
              </ul>
            </Section>

            {/* 16 */}
            <Section id="legislacao" title="16. Legislação Aplicável e Foro">
              <p>
                Estes Termos são regidos pelas leis da República Federativa do
                Brasil, aplicando-se especialmente:
              </p>
              <ul>
                <li>Código Civil (Lei 10.406/2002)</li>
                <li>
                  Código de Defesa do Consumidor (Lei 8.078/1990), quando
                  aplicável
                </li>
                <li>Marco Civil da Internet (Lei 12.965/2014)</li>
                <li>
                  Lei Geral de Proteção de Dados — LGPD (Lei 13.709/2018)
                </li>
              </ul>
              <p>
                Para clientes que se qualifiquem como consumidores, fica eleito
                o foro da comarca de domicílio do Cliente, conforme o art. 101,
                I, do Código de Defesa do Consumidor.
              </p>
              <p>
                Para clientes pessoa jurídica que não se enquadrem na categoria
                de consumidor, fica eleito o foro da comarca de{" "}
                <strong className="text-white">São Paulo/SP</strong>, com
                renúncia expressa a qualquer outro, por mais privilegiado que
                seja.
              </p>
              <p>
                As partes se comprometem a tentar resolver quaisquer disputas de
                forma amigável antes de recorrer ao Poder Judiciário.
              </p>
            </Section>

            {/* 17 */}
            <Section id="contato" title="17. Contato">
              <p>
                Para dúvidas, solicitações ou comunicações relacionadas a estes
                Termos de Uso, entre em contato:
              </p>
              <ul>
                <li>
                  <strong className="text-white">E-mail:</strong>{" "}
                  <a
                    href="mailto:leonardo@strutura.ai"
                    className="text-[#E9D73A] hover:underline"
                  >
                    leonardo@strutura.ai
                  </a>
                </li>
                <li>
                  <strong className="text-white">Site:</strong>{" "}
                  <a
                    href="https://strutura.ai"
                    className="text-[#E9D73A] hover:underline"
                  >
                    strutura.ai
                  </a>
                </li>
              </ul>
            </Section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#2A2A2A] mt-8 lg:mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#A0A0A0]">
          <p>© 2025 Strutura — Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:leonardo@strutura.ai"
              className="hover:text-[#E9D73A] transition-colors"
            >
              leonardo@strutura.ai
            </a>
            <Link
              href="/crm/privacidade"
              className="hover:text-[#E9D73A] transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-8">
      <h2 className="text-base font-semibold text-white mb-4 pb-2 border-b border-[#2A2A2A]">
        {title}
      </h2>
      <div className="text-sm text-[#A0A0A0] leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mt-2">
        {children}
      </div>
    </section>
  );
}
