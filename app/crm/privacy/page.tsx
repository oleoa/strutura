import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import {
  CrmPrivacyNavDesktop,
  CrmPrivacyNavMobile,
} from "@/components/crm-privacy-nav";

export const metadata: Metadata = {
  title: "Política de Privacidade — Strutura CRM",
  description:
    "Saiba como o Strutura CRM coleta, usa e protege seus dados pessoais em conformidade com a LGPD (Lei 13.709/2018).",
};

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
    <section
      id={id}
      className="scroll-mt-24 mb-12"
    >
      <h2 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-[#2A2A2A]">
        {title}
      </h2>
      <div className="text-[#A0A0A0] text-sm leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[#E9D73A] font-medium">{children}</span>
  );
}

function InfoCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-[#2A2A2A] bg-[#111111] px-5 py-4 text-sm text-[#A0A0A0] leading-relaxed">
      {children}
    </div>
  );
}

function DefinitionItem({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="shrink-0 text-[#E9D73A] font-semibold">{term}:</span>
      <span>{definition}</span>
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#E9D73A]" />
      <span>{children}</span>
    </li>
  );
}

export default function CrmPrivacidadePage() {
  const lastUpdated = "04 de março de 2026";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0D0D0D" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#2A2A2A]" style={{ backgroundColor: "#0D0D0D" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Image
              src="/logos/expanded-logo/yellow.png"
              alt="Strutura"
              width={120}
              height={32}
              className="h-7 w-auto"
              priority
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-[#A0A0A0] hover:text-[#E9D73A] transition-colors duration-150"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="border-b border-[#2A2A2A]" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex items-start gap-4">
            <div className="shrink-0 p-3 rounded-xl" style={{ backgroundColor: "#0D0D0D" }}>
              <Shield className="w-6 h-6 text-[#E9D73A]" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#E9D73A] mb-1">
                Strutura CRM
              </p>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Política de Privacidade
              </h1>
              <p className="text-sm text-[#A0A0A0]">
                Última atualização: {lastUpdated} · Em conformidade com a{" "}
                <span className="text-white">LGPD — Lei 13.709/2018</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          {/* Sidebar — desktop */}
          <CrmPrivacyNavDesktop />

          {/* Content */}
          <main className="min-w-0 flex-1">
            {/* Mobile nav */}
            <CrmPrivacyNavMobile />

            {/* 1. Introdução */}
            <Section id="introducao" title="1. Introdução">
              <p>
                A <Highlight>Strutura</Highlight> é uma empresa de automação com inteligência artificial
                com sede em Portugal, com atuação no mercado brasileiro por meio do{" "}
                <Highlight>Strutura CRM</Highlight> — um sistema de gestão de relacionamento com
                clientes (CRM) dotado de inteligência artificial, desenvolvido para pequenas e
                médias empresas no Brasil.
              </p>
              <p>
                O Strutura CRM conecta-se aos canais de mensagens dos nossos clientes (WhatsApp
                Business API, Instagram Direct e Facebook Messenger), analisa as conversas de forma
                automatizada usando modelos de linguagem avançados e atualiza automaticamente os
                dados dos leads no CRM, gerando resumos, classificações e recomendações de ações.
              </p>
              <p>
                Levamos a proteção de dados pessoais muito a sério. Esta Política de Privacidade
                descreve de forma transparente quais dados coletamos, como os utilizamos, com quem
                os compartilhamos e quais são os seus direitos como titular de dados, em plena
                conformidade com a{" "}
                <Highlight>Lei Geral de Proteção de Dados Pessoais (LGPD — Lei 13.709/2018)</Highlight>.
              </p>
              <p>
                Esta política aplica-se ao uso da plataforma Strutura CRM acessível em{" "}
                <span className="text-white">strutura.ai/crm</span> e a todos os serviços
                relacionados prestados pela Strutura.
              </p>
            </Section>

            {/* 2. Definições */}
            <Section id="definicoes" title="2. Definições">
              <p>
                Para melhor compreensão desta política, apresentamos os principais termos utilizados
                conforme definidos pela LGPD:
              </p>
              <div className="space-y-3">
                <DefinitionItem
                  term="Dados Pessoais"
                  definition="Qualquer informação relacionada a pessoa natural identificada ou identificável, como nome, telefone, e-mail, entre outros."
                />
                <DefinitionItem
                  term="Dados Pessoais Sensíveis"
                  definition="Dados sobre origem racial ou étnica, convicção religiosa, opinião política, saúde, vida sexual, dado genético ou biométrico."
                />
                <DefinitionItem
                  term="Tratamento"
                  definition="Toda operação realizada com dados pessoais, como coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação."
                />
                <DefinitionItem
                  term="Controlador"
                  definition="Pessoa natural ou jurídica que toma as decisões referentes ao tratamento de dados pessoais."
                />
                <DefinitionItem
                  term="Operador"
                  definition="Pessoa natural ou jurídica que realiza o tratamento de dados pessoais em nome do controlador."
                />
                <DefinitionItem
                  term="Titular"
                  definition="Pessoa natural a quem se referem os dados pessoais que são objeto de tratamento."
                />
                <DefinitionItem
                  term="ANPD"
                  definition="Autoridade Nacional de Proteção de Dados — órgão da administração pública federal responsável por zelar, implementar e fiscalizar o cumprimento da LGPD."
                />
                <DefinitionItem
                  term="Consentimento"
                  definition="Manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados pessoais para uma finalidade determinada."
                />
                <DefinitionItem
                  term="Eliminação"
                  definition="Exclusão de dados ou de conjunto de dados armazenados em banco de dados, independentemente do procedimento empregado."
                />
                <DefinitionItem
                  term="Anonimização"
                  definition="Utilização de meios técnicos razoáveis e disponíveis no momento do tratamento, por meio dos quais um dado perde a possibilidade de associação, direta ou indireta, a um indivíduo."
                />
                <DefinitionItem
                  term="Cliente"
                  definition="Empresa ou pessoa que contrata o Strutura CRM e acessa a plataforma para gerir seus leads."
                />
                <DefinitionItem
                  term="Lead"
                  definition="Contato ou potencial cliente gerenciado pelo Cliente dentro do Strutura CRM."
                />
              </div>
            </Section>

            {/* 3. Dados que coletamos */}
            <Section id="dados-coletados" title="3. Dados que Coletamos">
              <p>
                O Strutura CRM coleta dados de diferentes categorias, dependendo da relação que você
                tem conosco. Apresentamos abaixo cada categoria de forma detalhada:
              </p>

              <div className="space-y-5">
                <InfoCard>
                  <p className="text-white font-semibold mb-2">Dados de Cadastro do Cliente</p>
                  <p className="mb-2">Coletados quando você cria uma conta no Strutura CRM:</p>
                  <ul className="space-y-1">
                    <li>• Nome completo e cargo</li>
                    <li>• Endereço de e-mail</li>
                    <li>• Número de telefone</li>
                    <li>• Nome da empresa</li>
                    <li>• CNPJ ou CPF (para emissão de notas fiscais quando aplicável)</li>
                    <li>• Dados de acesso (credenciais de login protegidas com hash)</li>
                  </ul>
                </InfoCard>

                <InfoCard>
                  <p className="text-white font-semibold mb-2">Dados dos Leads Gerenciados no CRM</p>
                  <p className="mb-2">
                    Informações sobre os contatos que você, como Cliente, insere ou que são captadas
                    automaticamente pela integração com seus canais:
                  </p>
                  <ul className="space-y-1">
                    <li>• Nome e dados de identificação do lead</li>
                    <li>• Número de telefone (WhatsApp)</li>
                    <li>• Perfil do Instagram ou Facebook (quando aplicável)</li>
                    <li>• Status de qualificação, temperatura e valor potencial estimado</li>
                    <li>• Próximas ações recomendadas</li>
                  </ul>
                </InfoCard>

                <InfoCard>
                  <p className="text-white font-semibold mb-2">Conteúdo de Conversas</p>
                  <p className="mb-2">
                    Com autorização do Cliente, acessamos e processamos o conteúdo das conversas
                    nos canais integrados:
                  </p>
                  <ul className="space-y-1">
                    <li>• Mensagens trocadas via WhatsApp Business API</li>
                    <li>• Conversas via Instagram Direct (Instagram Graph API)</li>
                    <li>• Mensagens via Facebook Messenger (Messenger Platform)</li>
                  </ul>
                  <p className="mt-2 text-xs text-[#777]">
                    Importante: o acesso às conversas é feito exclusivamente por meio das APIs
                    oficiais das respectivas plataformas, com autorização expressa do Cliente.
                  </p>
                </InfoCard>

                <InfoCard>
                  <p className="text-white font-semibold mb-2">Dados Gerados pela IA</p>
                  <p className="mb-2">
                    A análise automatizada das conversas pela IA gera os seguintes dados derivados:
                  </p>
                  <ul className="space-y-1">
                    <li>• Resumos acumulados das conversas com cada lead</li>
                    <li>• Classificação de temperatura do lead (frio, morno, quente)</li>
                    <li>• Score de interesse e engajamento</li>
                    <li>• Valor potencial estimado de negócio</li>
                    <li>• Recomendações de próximas ações para o vendedor</li>
                    <li>• Status de qualificação do lead</li>
                  </ul>
                </InfoCard>

                <InfoCard>
                  <p className="text-white font-semibold mb-2">Dados de Uso da Plataforma</p>
                  <ul className="space-y-1">
                    <li>• Logs de acesso (data, hora, endereço IP)</li>
                    <li>• Ações realizadas na plataforma</li>
                    <li>• Dados de sessão e autenticação</li>
                    <li>• Informações sobre o dispositivo e navegador utilizado</li>
                    <li>• Quantidade de conversas analisadas (créditos consumidos)</li>
                  </ul>
                </InfoCard>

                <InfoCard>
                  <p className="text-white font-semibold mb-2">Dados de Pagamento</p>
                  <p>
                    O processamento de pagamentos é realizado diretamente pelo{" "}
                    <span className="text-white">Stripe</span>, parceiro certificado PCI-DSS. A
                    Strutura <span className="text-white font-medium">não armazena</span> dados de
                    cartão de crédito, débito ou quaisquer informações de meios de pagamento
                    sensíveis. Apenas retemos informações básicas de faturamento e o histórico de
                    transações para gestão da assinatura.
                  </p>
                </InfoCard>
              </div>
            </Section>

            {/* 4. Como usamos os dados */}
            <Section id="uso-dos-dados" title="4. Como Usamos os Dados">
              <p>
                Utilizamos os dados coletados exclusivamente para as finalidades descritas abaixo:
              </p>
              <ul className="space-y-2.5 mt-2">
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Análise automatizada de conversas:</span>{" "}
                    processamos o conteúdo das conversas diariamente usando modelos de IA para
                    identificar o estágio do lead no funil, extrair informações relevantes e gerar
                    classificações automáticas.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Geração de resumos e recomendações:</span>{" "}
                    a IA gera resumos acumulados das conversas e recomendações de próximas ações para
                    apoiar o trabalho dos vendedores.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Atualização automática do CRM:</span>{" "}
                    com base na análise da IA, os campos do CRM como status, temperatura, valor
                    potencial e próximos passos são atualizados automaticamente após cada ciclo de
                    análise.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Processamento de pagamentos e gestão de assinaturas:</span>{" "}
                    gerenciamos sua assinatura mensal, controle de créditos e cobrança via Stripe.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Comunicação sobre o serviço:</span>{" "}
                    enviamos notificações importantes sobre sua conta, atualizações da plataforma,
                    alertas de crédito e comunicações de suporte.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Segurança e prevenção de fraudes:</span>{" "}
                    monitoramos acessos e atividades para detectar uso indevido da plataforma e
                    proteger a segurança dos dados.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Melhoria contínua do serviço:</span>{" "}
                    utilizamos dados anonimizados e agregados para aprimorar os algoritmos de IA e
                    a experiência da plataforma. Nunca utilizamos dados pessoais identificáveis
                    para treinar modelos sem consentimento explícito.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Cumprimento de obrigações legais:</span>{" "}
                    mantemos registros necessários para atender obrigações fiscais, regulatórias e
                    legais aplicáveis.
                  </span>
                </ListItem>
              </ul>
            </Section>

            {/* 5. Base legal */}
            <Section id="base-legal" title="5. Base Legal para o Tratamento (LGPD Art. 7º)">
              <p>
                Todo tratamento de dados realizado pelo Strutura CRM possui uma base legal
                específica nos termos da LGPD. Abaixo detalhamos as hipóteses aplicáveis:
              </p>
              <div className="space-y-4 mt-2">
                <InfoCard>
                  <p className="text-white font-semibold mb-1">
                    Execução de Contrato — Art. 7º, V
                  </p>
                  <p>
                    O tratamento é necessário para a execução do contrato de prestação de serviços
                    firmado entre você e a Strutura. Isso inclui: análise de conversas, atualização
                    do CRM, geração de relatórios e gestão da assinatura.
                  </p>
                </InfoCard>
                <InfoCard>
                  <p className="text-white font-semibold mb-1">Consentimento — Art. 7º, I</p>
                  <p>
                    Para finalidades que vão além da execução do contrato, como envio de
                    comunicações de marketing ou uso de dados para melhoria de modelos de IA,
                    solicitamos seu consentimento expresso, que pode ser revogado a qualquer
                    momento.
                  </p>
                </InfoCard>
                <InfoCard>
                  <p className="text-white font-semibold mb-1">
                    Legítimo Interesse — Art. 7º, IX
                  </p>
                  <p>
                    Utilizamos dados para finalidades legítimas como segurança da plataforma,
                    prevenção de fraudes e melhoria da experiência do usuário com dados
                    anonimizados, desde que tais interesses não violem seus direitos e liberdades
                    fundamentais.
                  </p>
                </InfoCard>
                <InfoCard>
                  <p className="text-white font-semibold mb-1">
                    Cumprimento de Obrigação Legal — Art. 7º, II
                  </p>
                  <p>
                    Mantemos determinados dados para cumprir obrigações legais e regulatórias,
                    como obrigações fiscais, tributárias e respostas a ordens judiciais ou
                    requisições de autoridades competentes.
                  </p>
                </InfoCard>
              </div>
            </Section>

            {/* 6. Controlador vs Operador */}
            <Section id="controlador-operador" title="6. Papel da Strutura: Controlador vs. Operador">
              <p>
                A LGPD distingue dois papéis fundamentais no tratamento de dados pessoais:
                o <Highlight>Controlador</Highlight> (quem decide sobre o tratamento) e o{" "}
                <Highlight>Operador</Highlight> (quem realiza o tratamento em nome do
                Controlador). A Strutura ocupa papéis diferentes dependendo do tipo de dado:
              </p>
              <div className="space-y-4 mt-2">
                <InfoCard>
                  <p className="text-white font-semibold mb-2">
                    Para dados dos Clientes (quem contrata o Strutura CRM)
                  </p>
                  <p>
                    A <span className="text-white">Strutura é a Controladora</span>. Determinamos
                    a finalidade e os meios de tratamento dos dados de cadastro, acesso,
                    faturamento e uso da plataforma pelo Cliente. Assumimos plena responsabilidade
                    pelo tratamento adequado desses dados conforme a LGPD.
                  </p>
                </InfoCard>
                <InfoCard>
                  <p className="text-white font-semibold mb-2">
                    Para dados dos Leads gerenciados pelo Cliente
                  </p>
                  <p className="mb-2">
                    A <span className="text-white">Strutura é a Operadora</span>. Os leads
                    inseridos ou captados no CRM pertencem à base de dados do Cliente, que é o
                    Controlador dessas informações. A Strutura processa esses dados
                    exclusivamente conforme as instruções do Cliente e para as finalidades
                    contratadas.
                  </p>
                  <p>
                    Isso significa que é responsabilidade do Cliente obter as bases legais
                    adequadas para coletar e processar os dados de seus leads, bem como respeitar
                    os direitos dos titulares dessas informações. A Strutura apoia o Cliente nesse
                    processo, fornecendo ferramentas técnicas adequadas e comprometendo-se a
                    tratar esses dados com o mesmo nível de proteção aplicado aos dados dos
                    Clientes.
                  </p>
                </InfoCard>
              </div>
            </Section>

            {/* 7. Compartilhamento */}
            <Section id="compartilhamento" title="7. Compartilhamento de Dados">
              <p>
                A Strutura <Highlight>não vende, não aluga e não comercializa</Highlight> dados
                pessoais a terceiros. Compartilhamos dados apenas nas situações descritas abaixo e
                sempre com as garantias de segurança adequadas:
              </p>
              <ul className="space-y-3 mt-2">
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Stripe:</span> nosso parceiro de
                    processamento de pagamentos. Os dados necessários para faturamento e cobrança
                    são transmitidos ao Stripe em ambiente seguro e certificado PCI-DSS.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Provedores de infraestrutura:</span>{" "}
                    utilizamos serviços de hospedagem em nuvem e banco de dados de provedores de
                    confiança com contratos de proteção de dados adequados.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Meta Platforms (WhatsApp Business API, Instagram Graph API, Messenger Platform):</span>{" "}
                    a integração com os canais de mensagens do Cliente é feita por meio das APIs
                    oficiais da Meta, necessária para o funcionamento do serviço contratado.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Provedores de modelos de IA:</span>{" "}
                    o conteúdo das conversas é enviado a provedores de inteligência artificial para
                    análise. Adotamos medidas para minimizar a identificação direta dos titulares
                    quando tecnicamente possível. Todos os provedores são selecionados com base em
                    padrões rigorosos de privacidade e segurança.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Autoridades competentes:</span>{" "}
                    podemos compartilhar dados mediante ordem judicial, requisição de autoridade
                    administrativa competente ou quando exigido por obrigação legal, sempre nos
                    limites do que for estritamente necessário.
                  </span>
                </ListItem>
              </ul>
            </Section>

            {/* 8. Armazenamento e segurança */}
            <Section id="armazenamento-seguranca" title="8. Armazenamento e Segurança">
              <p>
                Adotamos medidas técnicas e organizacionais apropriadas para proteger seus dados
                pessoais contra acesso não autorizado, alteração, divulgação ou destruição:
              </p>
              <ul className="space-y-2.5 mt-2">
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Criptografia em trânsito:</span> toda
                    comunicação entre seu dispositivo e nossos servidores utiliza protocolo TLS/SSL
                    (HTTPS).
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Criptografia em repouso:</span> dados
                    sensíveis armazenados em nossos bancos de dados são criptografados.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Controle de acesso:</span> o acesso
                    aos dados é restrito por princípio de menor privilégio — apenas colaboradores
                    com necessidade justificada têm acesso a dados específicos.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Backups regulares:</span> realizamos
                    cópias de segurança periódicas para garantir a disponibilidade e integridade
                    dos dados.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Monitoramento de acessos:</span>{" "}
                    mantemos logs de auditoria para detectar e responder a atividades suspeitas.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Dados de pagamento:</span> processados
                    exclusivamente em ambiente PCI-DSS gerenciado pelo Stripe. Não armazenamos
                    dados de cartão de crédito em nossos sistemas.
                  </span>
                </ListItem>
              </ul>
              <p className="mt-4">
                Em caso de incidente de segurança que possa afetar seus dados pessoais, nos
                comprometemos a notificá-lo e à ANPD conforme os prazos e procedimentos
                estabelecidos pela LGPD.
              </p>
            </Section>

            {/* 9. Retenção */}
            <Section id="retencao" title="9. Retenção de Dados">
              <p>
                Mantemos seus dados pelo tempo necessário para as finalidades descritas nesta
                política, observando os seguintes critérios:
              </p>
              <ul className="space-y-2.5 mt-2">
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Conta ativa:</span> dados são mantidos
                    enquanto sua conta no Strutura CRM estiver ativa e o contrato de prestação de
                    serviços estiver vigente.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Após cancelamento:</span> os dados são
                    mantidos por <span className="text-white">30 dias</span> para possibilitar uma
                    eventual reativação da conta sem perda de histórico.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Exclusão definitiva:</span> decorrido
                    o período de 30 dias após o cancelamento sem reativação, todos os dados
                    pessoais são permanentemente excluídos de nossos sistemas, exceto quando houver
                    obrigação legal de retenção.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Obrigações legais e fiscais:</span>{" "}
                    determinados dados, como registros de transações financeiras, podem ser retidos
                    pelo período exigido pela legislação fiscal e tributária brasileira aplicável.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Solicitação antecipada:</span> você
                    pode solicitar a exclusão antecipada de seus dados a qualquer momento, sujeita
                    às limitações legais aplicáveis.
                  </span>
                </ListItem>
              </ul>
            </Section>

            {/* 10. Direitos do titular */}
            <Section id="direitos-titular" title="10. Direitos do Titular (LGPD Art. 18)">
              <p>
                Você, como titular de dados pessoais, possui os seguintes direitos garantidos pela
                LGPD, que podem ser exercidos a qualquer momento:
              </p>
              <div className="space-y-3 mt-2">
                <InfoCard>
                  <p className="text-white font-semibold mb-0.5">Confirmação e acesso</p>
                  <p>
                    Confirmar a existência de tratamento dos seus dados pessoais e acessar
                    informações completas sobre quais dados tratamos.
                  </p>
                </InfoCard>
                <InfoCard>
                  <p className="text-white font-semibold mb-0.5">Correção</p>
                  <p>
                    Solicitar a correção de dados incompletos, inexatos ou desatualizados.
                  </p>
                </InfoCard>
                <InfoCard>
                  <p className="text-white font-semibold mb-0.5">Anonimização, bloqueio ou eliminação</p>
                  <p>
                    Requerer a anonimização, o bloqueio ou a eliminação de dados desnecessários,
                    excessivos ou tratados em desconformidade com a LGPD.
                  </p>
                </InfoCard>
                <InfoCard>
                  <p className="text-white font-semibold mb-0.5">Portabilidade</p>
                  <p>
                    Solicitar a portabilidade dos seus dados a outro fornecedor de serviço ou
                    produto, mediante requisição expressa, em formato estruturado e de uso comum.
                  </p>
                </InfoCard>
                <InfoCard>
                  <p className="text-white font-semibold mb-0.5">Eliminação de dados tratados com consentimento</p>
                  <p>
                    Requerer a eliminação dos dados pessoais tratados com base no seu
                    consentimento, exceto nas hipóteses previstas no Art. 16 da LGPD.
                  </p>
                </InfoCard>
                <InfoCard>
                  <p className="text-white font-semibold mb-0.5">Informação sobre compartilhamento</p>
                  <p>
                    Obter informações sobre as entidades públicas e privadas com as quais a
                    Strutura realizou uso compartilhado de seus dados.
                  </p>
                </InfoCard>
                <InfoCard>
                  <p className="text-white font-semibold mb-0.5">Revogação do consentimento</p>
                  <p>
                    Revogar o consentimento dado a qualquer momento, sendo que a revogação não
                    afeta a validade do tratamento realizado anteriormente.
                  </p>
                </InfoCard>
                <InfoCard>
                  <p className="text-white font-semibold mb-0.5">Informação sobre consequências de não consentir</p>
                  <p>
                    Ser informado sobre a possibilidade de não fornecer consentimento e sobre as
                    consequências dessa negativa.
                  </p>
                </InfoCard>
              </div>
              <p className="mt-4">
                Para exercer qualquer um desses direitos, envie um e-mail para{" "}
                <a
                  href="mailto:leonardo@strutura.ai"
                  className="text-[#E9D73A] hover:underline underline-offset-4"
                >
                  leonardo@strutura.ai
                </a>{" "}
                com o assunto <span className="text-white">"Direitos LGPD"</span> e a descrição da
                sua solicitação. Responderemos no prazo de{" "}
                <span className="text-white font-medium">15 dias úteis</span>, conforme previsto
                na LGPD.
              </p>
            </Section>

            {/* 11. IA e decisões automatizadas */}
            <Section
              id="inteligencia-artificial"
              title="11. Uso de Inteligência Artificial e Decisões Automatizadas"
            >
              <p>
                O Strutura CRM utiliza modelos de linguagem avançados (Large Language Models — LLMs)
                para analisar o conteúdo das conversas dos seus leads e gerar classificações e
                recomendações automáticas. Prezamos pela transparência nesse processo:
              </p>
              <ul className="space-y-2.5 mt-2">
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Análise em lote diário:</span> as
                    conversas são processadas pela IA em ciclos diários, não em tempo real. O
                    sistema analisa o histórico de mensagens acumulado e atualiza os campos do CRM.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Ferramenta de apoio à decisão:</span>{" "}
                    as análises e classificações geradas pela IA são recomendações para apoiar o
                    trabalho dos vendedores. A IA não toma decisões finais sobre os leads — essas
                    decisões continuam sendo humanas.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Direito à revisão humana:</span>{" "}
                    conforme o Art. 20 da LGPD, você tem o direito de solicitar revisão humana de
                    decisões tomadas unicamente com base no tratamento automatizado de dados
                    pessoais que afetem seus interesses. Para exercer esse direito, entre em
                    contato pelo e-mail{" "}
                    <a
                      href="mailto:leonardo@strutura.ai"
                      className="text-[#E9D73A] hover:underline underline-offset-4"
                    >
                      leonardo@strutura.ai
                    </a>
                    .
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Transparência algorítmica:</span>{" "}
                    mediante solicitação, fornecemos informações sobre a lógica geral dos
                    algoritmos utilizados na análise de conversas e geração de classificações.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Privacidade por design:</span>{" "}
                    enviamos ao provedor de IA apenas as informações necessárias para a análise,
                    adotando práticas de minimização de dados.
                  </span>
                </ListItem>
              </ul>
            </Section>

            {/* 12. Transferência internacional */}
            <Section
              id="transferencia-internacional"
              title="12. Transferência Internacional de Dados"
            >
              <p>
                O Strutura CRM é uma empresa com operações internacionais. Para fornecer nosso
                serviço, alguns dados podem ser processados por provedores localizados fora do
                território brasileiro:
              </p>
              <ul className="space-y-2.5 mt-2">
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Provedores de IA:</span> os modelos
                    de linguagem utilizados para análise de conversas podem ser operados por
                    empresas com servidores nos Estados Unidos ou na Europa.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Infraestrutura em nuvem:</span> nossos
                    servidores e bancos de dados podem estar localizados em data centers fora do
                    Brasil, operados por provedores de nuvem de referência global.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Stripe:</span> nosso processador de
                    pagamentos tem operações internacionais, com servidores principalmente nos
                    Estados Unidos.
                  </span>
                </ListItem>
              </ul>
              <p className="mt-4">
                Todas as transferências internacionais são realizadas com{" "}
                <span className="text-white">garantias adequadas</span> conforme o Art. 33 da LGPD,
                que incluem: cláusulas contratuais específicas de proteção de dados, padrões de
                segurança reconhecidos internacionalmente e seleção de provedores com certificações
                de conformidade relevantes (como SOC 2, ISO 27001 ou equivalentes).
              </p>
            </Section>

            {/* 13. Cookies */}
            <Section id="cookies" title="13. Cookies e Tecnologias Similares">
              <p>
                O Strutura CRM utiliza cookies e tecnologias similares para garantir o
                funcionamento da plataforma e melhorar sua experiência:
              </p>
              <ul className="space-y-2.5 mt-2">
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Cookies essenciais:</span> necessários
                    para o funcionamento básico da plataforma, como manutenção da sessão autenticada.
                    Não podem ser desativados sem comprometer o uso do serviço.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Cookies de preferências:</span>{" "}
                    armazenam suas preferências de uso da plataforma para personalizar sua
                    experiência.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    <span className="text-white font-medium">Cookies analíticos:</span> utilizamos
                    ferramentas de análise para entender como os usuários interagem com a
                    plataforma e identificar áreas de melhoria. Esses dados são coletados de forma
                    agregada.
                  </span>
                </ListItem>
              </ul>
              <p className="mt-4">
                Você pode gerenciar as preferências de cookies nas configurações do seu navegador.
                A desativação de cookies essenciais pode impedir o correto funcionamento da
                plataforma.
              </p>
            </Section>

            {/* 14. Alterações */}
            <Section id="alteracoes" title="14. Alterações nesta Política">
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir
                mudanças em nossos serviços, práticas de tratamento de dados ou alterações na
                legislação aplicável.
              </p>
              <ul className="space-y-2.5 mt-2">
                <ListItem>
                  <span>
                    A data de última atualização é sempre exibida no topo desta página.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    Mudanças relevantes que afetem seus direitos ou nossa forma de tratar seus
                    dados serão comunicadas por e-mail com antecedência razoável antes de entrarem
                    em vigor.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    O uso continuado do Strutura CRM após a notificação das alterações constitui
                    aceitação da política atualizada.
                  </span>
                </ListItem>
                <ListItem>
                  <span>
                    Em caso de discordância com as alterações, você poderá encerrar sua conta e
                    solicitar a exclusão dos seus dados antes que as mudanças entrem em vigor.
                  </span>
                </ListItem>
              </ul>
            </Section>

            {/* 15. Contato e DPO */}
            <Section id="contato" title="15. Contato e Encarregado de Dados (DPO)">
              <p>
                Se você tiver dúvidas, preocupações ou solicitações relacionadas ao tratamento de
                dados pessoais pelo Strutura CRM, entre em contato conosco:
              </p>
              <InfoCard>
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <span className="text-[#E9D73A] font-semibold shrink-0">Empresa:</span>
                    <span>Strutura — Automação com Inteligência Artificial</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#E9D73A] font-semibold shrink-0">Site:</span>
                    <a
                      href="https://strutura.ai"
                      className="text-white hover:text-[#E9D73A] transition-colors"
                    >
                      strutura.ai
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#E9D73A] font-semibold shrink-0">E-mail:</span>
                    <a
                      href="mailto:leonardo@strutura.ai"
                      className="text-white hover:text-[#E9D73A] transition-colors"
                    >
                      leonardo@strutura.ai
                    </a>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-[#E9D73A] font-semibold shrink-0">Encarregado (DPO):</span>
                    <span>Leonardo Abreu de Paulo</span>
                  </div>
                </div>
              </InfoCard>
              <p className="mt-4">
                O nosso Encarregado de Proteção de Dados (DPO) está disponível para esclarecer
                dúvidas sobre o tratamento de dados pessoais, auxiliar no exercício dos seus
                direitos como titular e receber comunicações da ANPD.
              </p>
              <p>
                Caso não esteja satisfeito com nossas respostas, você tem o direito de apresentar
                reclamação à{" "}
                <span className="text-white">
                  Autoridade Nacional de Proteção de Dados (ANPD)
                </span>{" "}
                pelo site{" "}
                <span className="text-white">gov.br/anpd</span>.
              </p>
            </Section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#2A2A2A] mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#A0A0A0]">
            <p>
              © 2025 Strutura — Todos os direitos reservados
            </p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:leonardo@strutura.ai"
                className="hover:text-[#E9D73A] transition-colors"
              >
                leonardo@strutura.ai
              </a>
              <span className="text-[#2A2A2A]">|</span>
              <Link
                href="/crm/termos"
                className="hover:text-[#E9D73A] transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
