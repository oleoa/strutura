# CLAUDE.md · Strutura

This file provides Claude Code with context about the Strutura project, conventions, and rules to follow during development.

---

## 🏢 Project Overview

**Strutura** é a empresa onde Leonardo Abreu constrói os próprios produtos (hoje, o Pharos; o Studio foi arquivado em jul/2026). O site `strutura.ai` é uma **vitrine de marca, não uma máquina de conversão**: quem chega vem do Instagram (@leoabreu.ia) e já conhece o Leonardo. A régua de tudo é *"isto está à altura do Leo que a pessoa já conheceu?"*; a execução do site é o portfólio.

O que a pessoa leva ao sair: **"controle não vem de disciplina, vem de estrutura; esse cara constrói a dele com método e produtiza pedaços do sistema."**

**Silêncios deliberados (não reintroduzir):**

- **Sem captura de email / lead magnet**: isso vive no Instagram.
- **Sem cases/depoimentos no site**: os casos reais (Mentores de Elite, Tebosa, Locação Europa) estão registrados apenas no `/brand` (noindex).
- **Sem preços nem pacotes em superfície institucional**: nem para o Pharos, nem para projetos.
- **Comunidade fora da home até existir** (decisão de jul/2026): a antiga seção "Comunidade" saiu; `components/CommunitySection.tsx` fica órfão no repo, como o padrão do Studio. Volta quando a comunidade abrir.
- **O papel da IA não vira manifesto escrito na home**: "braço, não cabeça" transparece pelas definições dos produtos e pela sintaxe subordinada, nunca como tese anunciada.

**Revisão de jul/2026 (o que deixou de ser silêncio):** a missão e o método em 3 degraus agora aparecem escritos na home, na seção "A empresa" (`StruturaSection`), em forma seca (missão em uma frase + lista dos 3 degraus), sem a palavra "dogma" e sem tom de aula. E os **serviços por projeto entraram na home**: um bloco enxuto (`ProjectsBlock`) dentro da seção Produtos, abaixo do Pharos, sem preços, sem pacotes, "direto com o fundador, sem agência"; a porta continua sendo o WhatsApp.

---

## 🧭 Marca · reposicionamento (julho/2026)

Fonte de verdade completa: a página [`/brand`](app/brand/page.tsx). O centro da marca é **estrutura e organização**; a IA é ferramenta dentro de um sistema, nunca tema-fim. A marca-mãe é o Leo; a Strutura é o veículo.

- **Missão:** "Trazer controle sobre sua vida através da organização da estrutura digital." Organizar é o veículo; controle é o destino (controle sobre a resposta às coisas, não sobre os eventos).
- **Tagline (oficial):** **"Não é disciplina. É strutura."** O dogma condensado em cinco palavras, com o nome da marca dentro; é a única tagline da casa. Grafia canônica **com o trocadilho**: sempre `strutura` (minúsculo, sem o "e"), em toda superfície, inclusive metadata; **nunca** "é estrutura". O ponto depois de "disciplina" é parte da frase (duas sentenças, nunca vírgula). Ênfase sempre na segunda palavra: itálico na mostarda do clima (`#C98A2B` no Bosque, `#A9741F` no Campo; em texto pequeno sobre Campo, `text-mustard-ink`). É **tagline, não assinatura**: a assinatura de peças segue "Leo Abreu · Strutura" e as duas nunca dividem o mesmo bloco. Vive no hero, no bloco de marca do footer, na metadata (title/OG/Twitter) e no 404. Fonte de verdade: seção 04 da [`/brand`](components/brand/MarcaSection.tsx).
- **Dogma (crença-raiz):** "Caos não acontece por falta de disciplina ou foco, acontece por falta de um bom sistema para lidarmos com as informações e emoções da nossa vida." A cabeça é ótima pra ter ideias e resolver problemas, e péssima em armazená-las; por isso o sistema.
- **Método em 3 degraus:** (1) entender os processos da vida e do negócio → (2) criar e **manter** um sistema que os segura → (3) usar as ferramentas (IA incluída) dentro do sistema, do jeito mais eficaz. "Sistema primeiro, ferramenta depois" ordena tudo.
- **Papel da IA:** dentro do sistema, braço, nunca cabeça; executa a função e devolve a decisão ao humano. No produto é literal: o Pharos recusa o bot de auto-resposta de propósito (decisão de produto e orgulho da casa).
- **Público da marca:** o **empreendedor no digital** (rótulo único, o mesmo da bio do Instagram; "empreendedor solo" foi aposentado como rótulo em jul/2026). Persona: **Bruno, 31**, empreende online sozinho; vida e negócio no mesmo sistema (mesmo Notion, mesmo calendário, mesma cabeça). Dores: dispersão, ciclo de recomeço, produção travada. Ele acha que lhe falta disciplina; o que falta é engenharia. **Nuance:** esse é o público da marca e do conteúdo; **os produtos vendem mais largo** (o Pharos mira qualquer negócio que fecha no WhatsApp, times de 1 a 30). Na home isso se resolve por camadas: as seções de marca (hero, A empresa, Quem sou eu) **demarcam forte o empreendedor no digital**; o bloco do Pharos mantém a própria copy comercial, mais larga.
- **Modelo comercial:** o conteúdo ensina a construir; os produtos vendem o pronto. Produto da casa = pedaço do sistema que o próprio Leonardo roda, produtizado. Serviços por projeto continuam (sites, lojas, landing pages, automações, agentes de IA), "direto com o fundador, sem agência".
- **Norte de longo prazo:** "Ser a referência em uso da IA para organizar a vida e o negócio do empreendedor no digital no Brasil." (frase idêntica nas seções 04 e 12 da `/brand`)
- **Instagram (identidade do perfil):** handle **@leoabreu.ia**, display name **"Leo Abreu · Organização com IA"**, bio de 4 linhas: "Controle sobre a vida e negócio / Mostrando meus sistemas / Para empreendedores no digital / Aprenda como ⤵". "Strutura" fica **deliberadamente fora da bio** (o domínio e o contexto dos posts contextualizam) e a categoria do perfil segue oculta. Fonte de verdade: seção 10 da [`/brand`](components/brand/IdentidadeSection.tsx).

### Voz (regras duras, valem pra qualquer copy)

- Português do Brasil, **1ª pessoa do Leonardo em todo o site** ("A Strutura é onde eu construo o sistema", "eu construo por projeto", "quem responde sou eu"); decisão de jul/2026 que aposentou a antiga 3ª pessoa factual. CTAs também em 1ª pessoa ("Falar comigo"). Nunca plural corporativo de agência ("nossa equipe"). Metadata (title, description, OG/Twitter) acompanha a 1ª pessoa.
- Seco e denso. Banidos: "revolucionário", "transformação digital", "potencialize", "alavancar", "boost", "unlock", emoji, motivacional vazio.
- Nunca usar as palavras "calma" ou "sem hype": calma se demonstra no tom, não se anuncia.
- Nunca prometer crescimento, transformação ou vida melhor. Demonstrar, não prometer. **"Controle" é o único destino que se nomeia.**
- Nunca culpar falta de disciplina, foco ou caráter do leitor; o diagnóstico é sempre engenharia (falta de sistema).
- IA sempre subordinada ao sistema na sintaxe ("uso da IA **para** organizar…"), nunca como promessa-fim. Gramática: "delegue **à** IA" (nunca "delegue a IA"); o que fica com o humano = "a cabeça / a decisão / a autoria".
- Se citar ferramenta de IA em exemplo, é **Claude** (não ChatGPT).
- Vocabulário interno que não aparece em copy público: "avatar", "dogma", "marca-mãe", "renda-ponte".
- **Nunca usar travessão/em-dash em nenhum texto** (copy, docs, código): usar ponto, vírgula, dois-pontos ou "·".

---

## 📜 leo.md · fonte de verdade da identidade

- [`app/brand/leo.md`](app/brand/leo.md) é a **fonte de verdade da identidade da marca** (quem sou, missão, dogma, avatar, voz, futuro, skills). Servido público como texto puro em `strutura.ai/leo.md` (route handler `app/leo.md/route.ts` + header noindex no `next.config.ts`), com noindex igual à `/brand`.
- **Antes de tocar qualquer copy de marca no projeto, ler o `leo.md`.**
- Quando o `leo.md` mudar: propagar pra página `/brand` e pra toda copy do site que dependa, e **incrementar a versão** no comentário do topo do `leo.md` e no selo da `/brand` (`components/brand/BrandHeader.tsx`, ex.: "leo.md v1 · jul 2026").
- **O texto do `leo.md` é editado só pelo Leonardo**: nunca reescrever identidade sem ele ditar. Vale a mesma régua deste arquivo: transcrever, nunca "melhorar".
- Divisão de papéis: o `leo.md` é a fonte da **identidade**; a `/brand` segue fonte do **design system** e o render navegável da marca.

---

## 👤 Owner

- **Name:** Leonardo
- **Email:** leonardo@strutura.ai
- **Website:** strutura.ai

---

## 🎨 Brand & Design

> **Design system: "Nature Warm"**: fonte de verdade na página [`/brand`](app/brand/page.tsx) (`strutura.ai/brand`, seção 11; componentes em `components/brand/ds/`), que também é a source of truth da marca inteira; resumo em [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md). O antigo `design.html` foi aposentado (redirect permanente `/design.html` → `/brand`). **Consultar antes de criar/alterar qualquer peça ou UI.**

### Identidade "Nature Warm" (posts, templates, materiais)

- **Dois climas:** **Campo** (claro, quente, texturizado, editorial: a casa/default) e **Bosque** (escuro verde-floresta: acento raro, **~1 a cada 5–6 posts**, só pro "susto visual").
- **Acento mostarda envelhecido:** `#A9741F` (`--mostarda-queimado`, sobre claro) e `#C98A2B` (`--mostarda`, sobre escuro). Evolução do `#C99A2D` antigo, não ruptura.
- **Grão em toda peça** (SVG `feTurbulence`) + furniture editorial com função (eyebrow, índice só em sequência real, selo de data, meta). Regra central: **claro mas não limpo; calmo mas não vazio.**
- **Capa = pôster** (Fraunces enorme, texto mínimo) · **slide = ensino** (legibilidade manda, método à vista, rodapé com motivo de salvar). A estética nunca custa a legibilidade.
- Palavra sempre seca e informativa, **nunca motivacional vazio.**
- **Assinatura padrão: `Leo Abreu · Strutura`** (nunca "Leonardo Abreu").
- Fontes: **Fraunces** (display 300–600, itálico de ênfase na cor de acento do clima) + **Inter** (utilitária 400–600).
- Post: **1080 × 1350 (4:5)**; pensar o mosaico do feed, não só a peça.

### Site (implementação atual: Nature Warm, clima Campo)

O código do site (`app/globals.css`, componentes) roda nos tokens **Nature Warm**. Os nomes dos utilitários são os mesmos do sistema anterior; só os valores mudaram (tabela completa no apêndice do [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)):

| Name                        | Hex       | Tailwind              |
| --------------------------- | --------- | --------------------- |
| Background (campo-base)     | `#F1E8D4` | `bg-background`       |
| Surface (campo-bone)        | `#EFE7D6` | `bg-card`             |
| Muted (hover, 2nd areas)    | `#EAE0C9` | `bg-muted`            |
| Mostarda queimado (display) | `#A9741F` | `text-mustard`        |
| Botão default (AA)          | `#8A5E16` | `bg-primary`          |
| Accent text (small/icons)   | `#7A5415` | `text-mustard-ink`    |
| Text · primary (campo-ink)  | `#1E2B22` | `text-foreground`     |
| Text · muted                | `#7B7E70` | `text-ink-muted`      |
| Border                      | `#CFCAB8` | `border-border`       |
| Bosque (footer)             | `#14201A` | `bg-bosque-deep`      |
| Mostarda sobre escuro       | `#C98A2B` | `text-mustard-bosque` |

### Typography & Style (regras do site)

- **Light-only, sem dark mode.** Never use `dark:` variants, theme toggles, or `prefers-color-scheme`. **Hero e footer são as duas únicas superfícies Bosque (escuras)**: moldura deliberada; nenhum outro bloco escuro.
- **Grão global** em `body::after` (`globals.css`): overlay SVG `feTurbulence`, `mix-blend-mode: overlay`, opacidade 0.25. Blocos Bosque usam grão local extra via `.grain-bosque` (soft-light 0.5; footer `.grain-soft` 0.45). As peças 4:5 do `StudioPieces` usam `.grain-campo`/`.grain-bosque` com modificadores. Não adicionar grão individual a cards/superfícies comuns.
- Fonts: **Fraunces** (serif → headings `h1`/`h2`), **Inter** (sans → body/UI/`h3`), **JetBrains Mono** (technical). Loaded in `app/layout.tsx`.
- Headings are serif **500**: don't use `font-bold` on display headings; accent words use `italic text-mustard` (renderiza no queimado `#A9741F`).
- Queimado `#A9741F` only for large display; for **small text, icons, links use `text-mustard-ink`** (`#7A5415`); button fills use `bg-primary` (`#8A5E16`, o queimado escurecido para passar WCAG AA com texto bone).
- Eyebrows de seção: Inter 600, uppercase, `tracking-[0.24em]`, `text-mustard-ink`, sem pill.
- Warm, subtle shadows (`shadow-md`); generous radii (cards `rounded-2xl`).
- Texturizado e editorial: "claro mas não limpo; calmo mas não vazio". Professional but approachable tone.
- All user-facing copy is in **Portuguese (Brazil)**: a voz do Instagram @leoabreu.ia. (Regra antiga de pt-PT foi aposentada com o reposicionamento de julho/2026.)

---

## 🛠️ Tech Stack

| Layer           | Technology              |
| --------------- | ----------------------- |
| Framework       | Next.js (App Router)    |
| Language        | TypeScript              |
| Styling         | Tailwind CSS v4 (@theme) |
| Components      | shadcn/ui               |
| Icons           | Lucide React            |
| Version Control | Git + GitHub            |

### Conventions

- Use TypeScript strictly; avoid `any` types
- Use Tailwind utility classes for styling; avoid inline styles
- **Styling follows [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)**: warm palette, serif headings, light-only. Design tokens live in `@theme` (`app/globals.css`); use the semantic utilities (`bg-card`, `text-ink-muted`, `bg-mustard-soft`, …) rather than raw hex.
- Use shadcn/ui components where possible before building custom ones
- Use Lucide React for all icons
- Component files use PascalCase (e.g. `HeroSection.tsx`)
- Utility/helper files use camelCase (e.g. `formatDate.ts`)
- Keep components small and focused; split when a file exceeds ~150 lines
- Never write an em-dash in any text, comment or copy; use alternative punctuation

---

## 🚫 Rules · Read Carefully

### Git

> ⛔ **Never touch Git without explicit permission.**
>
> Do not run `git add`, `git commit`, `git push`, `git pull`, `git merge`, `git rebase`, `git reset`, or any other Git command unless Leonardo explicitly asks for it in that message. This applies even if a task feels "complete" or "ready to commit."

### Files

- Never delete files without confirming with Leonardo first
- Never rename files or move them between directories without asking

### Communication

- If something is unclear or could be done in multiple ways, ask before implementing
- When a task is done, briefly summarize what was changed and why
- Flag any decisions that could have side effects elsewhere in the codebase

---

## 📁 Key Pages & Structure

| Route       | Purpose                                                                 |
| ----------- | ----------------------------------------------------------------------- |
| `/`         | Home · Hero (Bosque) → 01 A Strutura (missão + método) → 02 O que a Strutura constrói (Pharos + Projetos) → 03 Quem sou eu → 04 Contato → Footer (Bosque) |
| `/brand`    | Brand book (noindex) · design system e render da marca (a identidade vive no [`leo.md`](app/brand/leo.md)): 12 seções (01 âncora/missão, 02 dogma, 03 método, 04 marca, 05 modelo, 06 para quem, 07 produtos, 08 voz, 09 pilares, 10 identidade, 11 design system, 12 futuro) |
| `/leo.md`   | Texto puro (noindex) · a fonte de verdade da identidade, servida direto de `app/brand/leo.md` |

> A antiga página `/links` (linktree próprio) foi apagada em jul/2026: o Instagram passou a apontar direto para a home. Sem redirect, a URL cai no 404.

**Home:** cada seção é um componente server em `components/` (`HeroSection`, `StruturaSection`, `ProductsSection`/`PharosShowcase`/`ProjectsBlock`, `AboutMeSection`, `ContactSection`; `CommunitySection` está órfão, fora da home). URLs/constantes centrais em `lib/site.ts` (WhatsApp, Pharos, Instagram, `HERO_IMAGE`).

**Hero atual:** H1 = a tagline "Não é disciplina. É strutura." (o dogma na porta, sem a palavra "dogma"); CTA "Como funciona" → `#a-strutura`. Title/OG/Twitter: a mesma frase, sem prefixo de marca (o nome chega pelo `openGraph.siteName` e pelo template "%s | Strutura").

**Footer:** o bloco de marca é a tagline (Fraunces, `strutura` em `text-mustard-bosque`), sem wordmark e sem parágrafo descritivo; abaixo dela, os ícones sociais. A barra de baixo mantém copyright + assinatura "Leo Abreu · Strutura". O 404 fecha com a tagline em corpo pequeno (`text-mustard-ink`).

**Imagem do hero:** a imagem escolhida vive em `public/` e é apontada por `HERO_IMAGE` em `lib/site.ts`; `null` faz rollback para a cena CSS/SVG ("floresta-catedral") em `HeroBackdrop`. Ao trocar a imagem, manter ≤ 350 KB (webp de preferência).

---

## 📦 Produto: Strutura Pharos

Produto principal da casa, apresentado na seção `#pharos` da homepage (porta: `pharos.strutura.ai`). Usar **apenas** os fatos abaixo ao escrever sobre o Pharos; não inventar features.

**O que é (1 frase):** sistema que classifica e organiza leads e clientes automaticamente: lê as conversas de WhatsApp e Instagram, interpreta e deixa preparado o que responder, o que falta responder e a próxima ação. **Ele não responde por você. De propósito.**

**Hook:** "nenhum lead esquecido no WhatsApp." **Diferenciais:** setup < 5 min, suporte em português, sem lock-in.

> ⚠️ No site, o Pharos **nunca** é chamado de "CRM", nem posicionado como "automatize seu WhatsApp" ou "IA que responde". A prova visual é um screenshot real do produto (`public/pharos.png`) emoldurado no `PharosShowcase.tsx`.

**Para quem:** PMEs brasileiras e LATAM que vendem por WhatsApp/Instagram Direct (clínicas, imobiliárias, infoprodutos, agências, lojas de alto ticket, consultorias). Times de 1–30 vendedores. Cobrança em BRL, USD e EUR.

**Features reais (lista fechada):**

1. Multi-conta WhatsApp por vendedor: cada um conecta o próprio número; tudo unificado no Pharos
2. Instagram Direct integrado: mesmo contato em IG + WhatsApp é tratado como uma pessoa só
3. IA noturna (~3h) lê todas as conversas que mexeram no dia: decide etapa do funil, próxima ação (e quando), e se está "aguardando resposta" do cliente (com prazo)
4. Transcrição automática de áudio (Whisper): WhatsApp e Instagram; vira texto pesquisável e entra no contexto da IA
5. Funil customizável por workspace: status de lead/cliente, temperatura, tags e motivos de não-compra definidos pela empresa
6. Dashboard "bola está comigo / bola está com ele": duas listas, ação sua agora vs. aguardando o cliente
7. Permissões granulares: visibilidade de contatos, convites, edição de funil, histórico de IA por vendedor
8. Histórico de análises de IA: todo raciocínio gravado e auditável
9. Soft delete em tudo: lixeira por 30 dias

**O que NÃO é / nunca prometer:**

- Não é chatbot: a IA não responde pelo vendedor; quem fala com o cliente é gente
- Não é HubSpot/Pipedrive genérico (sem B2B enterprise, contratos, automação de marketing)
- Sem integração com Salesforce/HubSpot/RD/Pipedrive
- Sem telefonia: só WhatsApp e Instagram
- Sem app mobile nativo: é web responsivo
- Usa WAHA self-hosted (QR code), não WhatsApp API oficial (BSP)

**Tom de voz da copy do Pharos:** direto, frases curtas, verbos no presente, gírias leves de comercial ("a bola está com você", "lead quente"). Preços só em página de pricing, nunca na seção institucional.

---

## 🗄️ Produto: Strutura Studio (ARQUIVADO em jul/2026)

O Studio foi **arquivado** e não aparece em nenhuma superfície pública: fora da home, do footer, da metadata/SEO, do 404 e da página `/brand`. **Não reintroduzir menções ao Studio no site sem pedido explícito do Leonardo.**

O que era: ferramenta da Strutura para posts comerciais ("quase um Canva que faz por você"). O código continua no repo, apenas desmontado: `components/StudioShowcase.tsx` e `components/StudioPieces.tsx` estão sem uso, e `STUDIO_URL` permanece em `lib/site.ts` só para o typecheck desses componentes órfãos.

---

## 🔗 Integrations & External Services

- **WhatsApp** (`wa.me/351931135852`): único canal de contato do site; CTA "Falar comigo"
- Sem analytics de lead-gen, sem Cal.com, sem formulários: removidos no reposicionamento

---

_Last updated: 22 de julho de 2026 (sexta revisão do dia). **leo.md criado como fonte de verdade da identidade**: o texto da identidade (quem sou, missão, dogma, avatar, voz, futuro, skills) migrou do doc mestre do Notion para [`app/brand/leo.md`](app/brand/leo.md) (v1), editado só pelo Leonardo e servido público como texto puro em `strutura.ai/leo.md` (route handler `app/leo.md/route.ts`, force-static, noindex via header no handler e no `next.config.ts`). O selo do header da `/brand` passou a exibir a versão ("leo.md v1 · jul 2026") e o eyebrow, o rodapé e a metadata description da `/brand` passaram a apontar a identidade pro leo.md; a `/brand` segue fonte do design system e render navegável da marca, com o conteúdo estratégico das 12 seções intacto. Seção nova neste arquivo com as regras do leo.md (ler antes de tocar copy de marca; propagar mudanças e incrementar versão; nunca reescrever identidade sem o Leonardo ditar). Contexto anterior no mesmo dia (quinta revisão): **Identidade do Instagram fechada e rótulo do público trocado**: display name "Leo Abreu · Organização com IA" e a bio de 4 linhas viraram fonte de verdade na seção 10 da `/brand` (`IdentidadeSection`), no lugar do card "a definir"; junto com ela, **"empreendedor solo" saiu como rótulo de público e virou "empreendedor no digital"** em todo o `/brand` (seções 01, 04, 06, 07 do método, 08, 09, 11 e 12), no `DESIGN_SYSTEM.md` e neste arquivo, inclusive dentro do norte de longo prazo. A persona segue Bruno, 31, com as mesmas três dores; "construtor solo da Strutura" (seção 04) descreve o Leonardo e ficou intacto. Contexto anterior no mesmo dia (quarta revisão): **"Não é disciplina. É strutura." virou a tagline oficial da marca**, com grafia canônica fixa (o trocadilho `strutura`, minúsculo, inclusive em metadata): registrada como bullet próprio na seção Marca deste arquivo e codificada com regras de uso na seção 04 da `/brand` (`MarcaSection`), com a fronteira tagline × assinatura anotada na seção 10 (`IdentidadeSection`). Aplicada no bloco de marca do footer (substituiu o wordmark "Strutura" e o parágrafo descritivo), na metadata (title, OG, alt do banner, Twitter: saiu o "é estrutura") e como assinatura discreta no 404. Hero inalterado, já estava na forma canônica. Contexto anterior no mesmo dia (terceira revisão): voz do site migrada para **1ª pessoa do Leonardo** em toda a home (hero, A empresa, Produtos "O que eu construo", Pharos "o sistema que eu construí", Projetos "direto comigo", Contato "quem responde sou eu", footer) e na metadata (description e Twitter); CTAs "Falar com o Leonardo" viraram "Falar comigo"; regra de voz atualizada neste arquivo e regra nova de 1ª pessoa adicionada à seção 08 (Voz) do `/brand`. Contexto anterior no mesmo dia (segunda revisão): Home realinhada ao centro novo da marca (Direção "dogma na porta"): hero "Não é disciplina. É estrutura." com CTA "Como funciona"; StruturaSection reconstruída com a missão e os 3 degraus do método; Produtos virou "O que a Strutura constrói" com o novo bloco `ProjectsBlock` (serviços por projeto, sem preços) abaixo do Pharos; Quem sou eu reescrito no eixo solo/estrutura; seção Comunidade removida da home (componente órfão); metadados, JSON-LD e tagline do footer atualizados; takeaway e silêncios deliberados revisados neste arquivo. A arte de `public/banner.png` (imagem OG) é só logo + "Strutura.ai", sem tagline: segue válida. Contexto anterior no mesmo dia: `/brand` realinhado ao reposicionamento (centro = estrutura e organização; IA como ferramenta dentro do sistema): missão nova na âncora, dogma caos/sistema com o papel da IA como sub-bloco, seção nova "O método" (renumeração 01–12), persona Bruno (empreendedor solo) no lugar da persona anterior, regras duras de voz codificadas, norte novo no Futuro. Em-dash banido de todo texto. Contexto anterior: site reescrito como **vitrine de marca** (copy pt-BR, voz 3ª pessoa, hero Bosque "floresta-catedral"); Strutura Studio arquivado e página `/links` apagada._
