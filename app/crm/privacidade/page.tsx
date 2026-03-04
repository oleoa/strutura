import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LegalNav, type LegalSection } from "@/components/legal-nav";

export const metadata: Metadata = {
  title: "Política de Privacidade — Strutura CRM",
  description:
    "Política de privacidade do Strutura CRM. Saiba como coletamos, usamos e protegemos os dados pessoais tratados pela plataforma, em conformidade com a LGPD.",
};

const sections: LegalSection[] = [
  { id: "quem-somos", title: "1. Quem Somos" },
  { id: "dados-coletados", title: "2. Dados que Coletamos" },
  { id: "como-usamos", title: "3. Como Usamos os Dados" },
  { id: "base-legal", title: "4. Base Legal (LGPD)" },
  { id: "dados-leads", title: "5. Dados dos Leads" },
  { id: "compartilhamento", title: "6. Compartilhamento com Terceiros" },
  { id: "retencao", title: "7. Retenção e Exclusão" },
  { id: "seguranca", title: "8. Segurança" },
  { id: "direitos", title: "9. Seus Direitos (LGPD)" },
  { id: "alteracoes", title: "10. Alterações nesta Política" },
  { id: "contato", title: "11. Contato" },
];

export default function PrivacidadeCRMPage() {
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
          <LegalNav sections={sections} label="Navegar pela política" />

          <div className="bg-[#1A1A1A] rounded-2xl border border-[#2A2A2A] px-6 py-8 sm:px-10 sm:py-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Política de Privacidade
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
              A Strutura está comprometida com a transparência e a proteção dos
              dados pessoais tratados por meio do{" "}
              <strong className="text-white">Strutura CRM</strong>. Esta
              Política de Privacidade descreve quais dados coletamos, como os
              utilizamos e quais são seus direitos, em conformidade com a Lei
              Geral de Proteção de Dados (LGPD — Lei 13.709/2018).
            </p>

            {/* 1 */}
            <Section id="quem-somos" title="1. Quem Somos">
              <p>
                A Strutura é a empresa responsável pelo desenvolvimento e
                operação do Strutura CRM.
              </p>
              <ul>
                <li>
                  <strong className="text-white">Responsável:</strong> Strutura
                  — Automação com Inteligência Artificial
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
                <li>
                  <strong className="text-white">Contato:</strong>{" "}
                  <a
                    href="mailto:leonardo@strutura.ai"
                    className="text-[#E9D73A] hover:underline"
                  >
                    leonardo@strutura.ai
                  </a>
                </li>
              </ul>
              <p>
                No âmbito da LGPD, a Strutura atua como{" "}
                <strong className="text-white">Operadora</strong> dos dados
                pessoais dos leads gerenciados pelos nossos clientes
                (Controladores). Para os dados dos próprios clientes
                (cadastro, pagamentos), a Strutura atua como{" "}
                <strong className="text-white">Controladora</strong>.
              </p>
            </Section>

            {/* 2 */}
            <Section id="dados-coletados" title="2. Dados que Coletamos">
              <p>
                Coletamos dados em duas categorias principais:
              </p>
              <p>
                <strong className="text-white">Dados dos clientes</strong>{" "}
                (pessoas que contratam o Strutura CRM):
              </p>
              <ul>
                <li>Nome completo e dados da empresa (razão social, CNPJ/CPF)</li>
                <li>Endereço de e-mail e telefone de contato</li>
                <li>
                  Dados de pagamento processados pelo Stripe (não armazenamos
                  dados de cartão de crédito diretamente)
                </li>
                <li>Logs de uso e acesso à plataforma</li>
              </ul>
              <p>
                <strong className="text-white">
                  Dados dos leads (processados como Operadora)
                </strong>
                , fornecidos pelo cliente via integração com canais de
                mensagens:
              </p>
              <ul>
                <li>Nome e número de telefone (WhatsApp)</li>
                <li>Nome de perfil e ID de usuário (Instagram, Facebook)</li>
                <li>
                  Conteúdo das conversas trocadas nos canais integrados
                </li>
                <li>
                  Campos gerados pela IA: temperatura do lead, status, valor
                  potencial estimado, resumo de conversa e próximas ações
                  recomendadas
                </li>
              </ul>
            </Section>

            {/* 3 */}
            <Section id="como-usamos" title="3. Como Usamos os Dados">
              <p>Os dados coletados são utilizados para:</p>
              <ul>
                <li>
                  Prestar o serviço contratado: análise de conversas por IA,
                  atualização de campos do CRM e geração de insights
                </li>
                <li>
                  Gerenciar a conta do cliente, processar pagamentos e emitir
                  comunicações relacionadas ao serviço
                </li>
                <li>
                  Melhorar a qualidade do serviço com base em dados agregados e
                  anonimizados
                </li>
                <li>
                  Cumprir obrigações legais e regulatórias aplicáveis
                </li>
                <li>
                  Prevenir fraudes, abusos e violações de segurança
                </li>
              </ul>
              <p>
                A Strutura{" "}
                <strong className="text-white">não vende dados pessoais</strong>{" "}
                a terceiros e não utiliza dados de leads para fins que não sejam
                a prestação do serviço contratado pelo cliente.
              </p>
            </Section>

            {/* 4 */}
            <Section id="base-legal" title="4. Base Legal (LGPD)">
              <p>
                O tratamento de dados pela Strutura é fundamentado nas seguintes
                bases legais previstas na LGPD:
              </p>
              <ul>
                <li>
                  <strong className="text-white">Execução de contrato</strong>:
                  para processar os dados necessários à prestação do serviço
                  contratado (art. 7º, V).
                </li>
                <li>
                  <strong className="text-white">Legítimo interesse</strong>:
                  para melhorar o serviço, prevenir fraudes e garantir a
                  segurança da plataforma (art. 7º, IX).
                </li>
                <li>
                  <strong className="text-white">Obrigação legal</strong>: para
                  cumprir exigências fiscais, trabalhistas e regulatórias
                  aplicáveis (art. 7º, II).
                </li>
              </ul>
              <p>
                Para os dados dos leads processados em nome dos clientes, a base
                legal é determinada e declarada pelo próprio cliente
                (Controlador), conforme descrito nos{" "}
                <Link
                  href="/crm/termos"
                  className="text-[#E9D73A] hover:underline"
                >
                  Termos de Uso
                </Link>
                .
              </p>
            </Section>

            {/* 5 */}
            <Section id="dados-leads" title="5. Dados dos Leads">
              <p>
                Os dados dos leads inseridos no Strutura CRM pertencem
                integralmente ao cliente (Controlador). A Strutura, como
                Operadora, processa esses dados exclusivamente para:
              </p>
              <ul>
                <li>
                  Analisar conversas e gerar classificações automatizadas por IA
                </li>
                <li>
                  Armazenar e exibir os dados no painel de gestão do cliente
                </li>
                <li>
                  Realizar backups e garantir a integridade dos dados
                </li>
              </ul>
              <p>
                A Strutura não acessa o conteúdo das conversas para fins
                comerciais próprios. O processamento por modelos de linguagem
                (IA) ocorre em lote diário e de forma automatizada, sem revisão
                humana manual do conteúdo das mensagens.
              </p>
            </Section>

            {/* 6 */}
            <Section
              id="compartilhamento"
              title="6. Compartilhamento com Terceiros"
            >
              <p>
                A Strutura pode compartilhar dados com terceiros apenas nas
                seguintes situações:
              </p>
              <ul>
                <li>
                  <strong className="text-white">
                    Provedores de infraestrutura
                  </strong>
                  : serviços de hospedagem, banco de dados e processamento
                  necessários para operar a plataforma, sob acordos de
                  confidencialidade e proteção de dados.
                </li>
                <li>
                  <strong className="text-white">
                    Provedores de modelos de IA
                  </strong>
                  : os conteúdos das conversas são enviados a APIs de modelos de
                  linguagem para análise. Utilizamos provedores que garantem
                  políticas adequadas de privacidade e não utilizam os dados
                  para treinar seus modelos sem consentimento.
                </li>
                <li>
                  <strong className="text-white">Stripe</strong>: processamento
                  de pagamentos, sujeito à{" "}
                  <a
                    href="https://stripe.com/br/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E9D73A] hover:underline"
                  >
                    Política de Privacidade do Stripe
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-white">Obrigação legal</strong>:
                  quando exigido por lei, ordem judicial ou autoridade
                  competente.
                </li>
              </ul>
            </Section>

            {/* 7 */}
            <Section id="retencao" title="7. Retenção e Exclusão de Dados">
              <p>
                Os dados são mantidos pelo tempo necessário para a prestação do
                serviço e cumprimento das obrigações legais aplicáveis.
              </p>
              <ul>
                <li>
                  <strong className="text-white">Durante o contrato</strong>:
                  todos os dados são mantidos ativos enquanto a assinatura
                  estiver vigente.
                </li>
                <li>
                  <strong className="text-white">Após o cancelamento</strong>:
                  os dados são mantidos por{" "}
                  <strong className="text-white">30 dias</strong> para
                  possibilitar a reativação ou exportação.
                </li>
                <li>
                  <strong className="text-white">Após 30 dias</strong>: os dados
                  são permanentemente excluídos dos nossos sistemas.
                </li>
                <li>
                  Dados de pagamento e registros fiscais podem ser retidos pelo
                  prazo exigido pela legislação tributária brasileira (até 5
                  anos).
                </li>
              </ul>
              <p>
                Você pode solicitar a exclusão antecipada dos seus dados ou dos
                dados dos seus leads enviando um e-mail para{" "}
                <a
                  href="mailto:leonardo@strutura.ai"
                  className="text-[#E9D73A] hover:underline"
                >
                  leonardo@strutura.ai
                </a>
                .
              </p>
            </Section>

            {/* 8 */}
            <Section id="seguranca" title="8. Segurança">
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para
                proteger os dados contra acesso não autorizado, perda,
                alteração, divulgação ou destruição indevida, incluindo:
              </p>
              <ul>
                <li>Comunicações protegidas via HTTPS/TLS</li>
                <li>Acesso restrito aos dados por controle de permissões</li>
                <li>
                  Uso de provedores de infraestrutura com certificações de
                  segurança reconhecidas
                </li>
                <li>
                  Monitoramento contínuo de acessos e atividades suspeitas
                </li>
              </ul>
              <p>
                Em caso de incidente de segurança que possa afetar seus dados,
                a Strutura notificará os clientes afetados e a ANPD conforme
                exigido pela LGPD.
              </p>
            </Section>

            {/* 9 */}
            <Section id="direitos" title="9. Seus Direitos (LGPD)">
              <p>
                Conforme a LGPD, você tem os seguintes direitos sobre seus dados
                pessoais:
              </p>
              <ul>
                <li>
                  <strong className="text-white">Acesso</strong>: saber quais
                  dados temos sobre você
                </li>
                <li>
                  <strong className="text-white">Correção</strong>: corrigir
                  dados incompletos, inexatos ou desatualizados
                </li>
                <li>
                  <strong className="text-white">Exclusão</strong>: solicitar a
                  eliminação dos dados tratados com base no consentimento
                </li>
                <li>
                  <strong className="text-white">Portabilidade</strong>: receber
                  seus dados em formato estruturado
                </li>
                <li>
                  <strong className="text-white">Oposição</strong>: opor-se ao
                  tratamento em determinadas circunstâncias
                </li>
                <li>
                  <strong className="text-white">
                    Informação sobre compartilhamento
                  </strong>
                  : saber com quais entidades seus dados são compartilhados
                </li>
                <li>
                  <strong className="text-white">Revogação do consentimento</strong>:
                  quando aplicável
                </li>
              </ul>
              <p>
                Para exercer qualquer um desses direitos, entre em contato pelo
                e-mail{" "}
                <a
                  href="mailto:leonardo@strutura.ai"
                  className="text-[#E9D73A] hover:underline"
                >
                  leonardo@strutura.ai
                </a>
                . Responderemos em até 15 dias úteis.
              </p>
              <p>
                Você também tem o direito de apresentar reclamação à Autoridade
                Nacional de Proteção de Dados (ANPD) caso entenda que seus
                direitos foram violados.
              </p>
            </Section>

            {/* 10 */}
            <Section id="alteracoes" title="10. Alterações nesta Política">
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente
                para refletir mudanças no serviço, na legislação ou nas práticas
                de tratamento de dados.
              </p>
              <ul>
                <li>
                  Mudanças relevantes serão comunicadas por e-mail com pelo
                  menos 15 dias de antecedência.
                </li>
                <li>
                  A versão mais recente está sempre disponível em{" "}
                  <strong className="text-white">
                    strutura.ai/crm/privacidade
                  </strong>
                  .
                </li>
                <li>
                  O uso continuado do serviço após as alterações constitui
                  aceitação da nova política.
                </li>
              </ul>
            </Section>

            {/* 11 */}
            <Section id="contato" title="11. Contato">
              <p>
                Para exercer seus direitos, tirar dúvidas ou fazer solicitações
                relacionadas a esta Política de Privacidade, entre em contato:
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
              href="/crm/termos"
              className="hover:text-[#E9D73A] transition-colors"
            >
              Termos de Uso
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
