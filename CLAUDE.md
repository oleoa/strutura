# CLAUDE.md — Strutura

This file provides Claude Code with context about the Strutura project, conventions, and rules to follow during development.

---

## 🏢 Project Overview

**Strutura** é a empresa onde Leonardo Abreu constrói os próprios produtos (hoje, o Pharos; o Studio foi arquivado em jul/2026). O site `strutura.ai` é uma **vitrine de marca, não uma máquina de conversão**: quem chega vem do Instagram (@leoabreu.ia) e já conhece o Leonardo. A régua de tudo é *"isto está à altura do Leo que a pessoa já conheceu?"* — a execução do site é o portfólio.

O que a pessoa leva ao sair: **"esse cara constrói a própria estrutura digital, com método, e a IA fica no lugar certo — de braço, não de cabeça."**

**Silêncios deliberados (não reintroduzir):**

- **Sem venda de serviço** — nada de "o que fazemos por você", pacotes ou preços. Contato é só o CTA discreto "Falar com o Leonardo" → WhatsApp.
- **Sem captura de email / lead magnet** — isso vive no Instagram.
- **Sem cases/depoimentos** — não há prova externa ainda; a prova são os produtos e o próprio site.
- **O dogma ("IA é braço, não cabeça") nunca vira manifesto escrito** — transparece pelas definições dos produtos.

**Voz:** 3ª pessoa factual em todo o site ("A Strutura desenvolveu o Pharos"); **1ª pessoa só na seção "Quem sou eu"**; nunca plural corporativo de agência ("nossa equipe"). Banidos: "revolucionário", "transformação digital", "potencialize", "alavancar", "boost", "unlock", emoji, motivacional vazio.

---

## 👤 Owner

- **Name:** Leonardo
- **Email:** leonardo@strutura.ai
- **Website:** strutura.ai

---

## 🎨 Brand & Design

> **Design system: "Nature Warm"** — fonte de verdade na página [`/brand`](app/brand/page.tsx) (`strutura.ai/brand`, seção 10; componentes em `components/brand/ds/`), que também é a source of truth da marca inteira; resumo em [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md). O antigo `design.html` foi aposentado (redirect permanente `/design.html` → `/brand`). **Consultar antes de criar/alterar qualquer peça ou UI.**

### Identidade "Nature Warm" (posts, templates, materiais)

- **Dois climas:** **Campo** (claro, quente, texturizado, editorial — a casa/default) e **Bosque** (escuro verde-floresta — acento raro, **~1 a cada 5–6 posts**, só pro "susto visual").
- **Acento mostarda envelhecido:** `#A9741F` (`--mostarda-queimado`, sobre claro) e `#C98A2B` (`--mostarda`, sobre escuro). Evolução do `#C99A2D` antigo, não ruptura.
- **Grão em toda peça** (SVG `feTurbulence`) + furniture editorial com função (eyebrow, índice só em sequência real, selo de data, meta). Regra central: **claro mas não limpo; calmo mas não vazio.**
- **Capa = pôster** (Fraunces enorme, texto mínimo) · **slide = ensino** (legibilidade manda, método à vista, rodapé com motivo de salvar). A estética nunca custa a legibilidade.
- Palavra sempre seca e informativa — **nunca motivacional vazio.**
- **Assinatura padrão: `Leo Abreu · Strutura`** (nunca "Leonardo Abreu").
- Fontes: **Fraunces** (display 300–600, itálico de ênfase na cor de acento do clima) + **Inter** (utilitária 400–600).
- Post: **1080 × 1350 (4:5)**; pensar o mosaico do feed, não só a peça.

### Site (implementação atual — Nature Warm, clima Campo)

O código do site (`app/globals.css`, componentes) roda nos tokens **Nature Warm**. Os nomes dos utilitários são os mesmos do sistema anterior — só os valores mudaram (tabela completa no apêndice do [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)):

| Name                        | Hex       | Tailwind              |
| --------------------------- | --------- | --------------------- |
| Background (campo-base)     | `#F1E8D4` | `bg-background`       |
| Surface (campo-bone)        | `#EFE7D6` | `bg-card`             |
| Muted (hover, 2nd areas)    | `#EAE0C9` | `bg-muted`            |
| Mostarda queimado (display) | `#A9741F` | `text-mustard`        |
| Botão default (AA)          | `#8A5E16` | `bg-primary`          |
| Accent text (small/icons)   | `#7A5415` | `text-mustard-ink`    |
| Text — primary (campo-ink)  | `#1E2B22` | `text-foreground`     |
| Text — muted                | `#7B7E70` | `text-ink-muted`      |
| Border                      | `#CFCAB8` | `border-border`       |
| Bosque (footer)             | `#14201A` | `bg-bosque-deep`      |
| Mostarda sobre escuro       | `#C98A2B` | `text-mustard-bosque` |

### Typography & Style (regras do site)

- **Light-only — sem dark mode.** Never use `dark:` variants, theme toggles, or `prefers-color-scheme`. **Hero e footer são as duas únicas superfícies Bosque (escuras)** — moldura deliberada; nenhum outro bloco escuro.
- **Grão global** em `body::after` (`globals.css`) — overlay SVG `feTurbulence`, `mix-blend-mode: overlay`, opacidade 0.25. Blocos Bosque usam grão local extra via `.grain-bosque` (soft-light 0.5; footer `.grain-soft` 0.45). As peças 4:5 do `StudioPieces` usam `.grain-campo`/`.grain-bosque` com modificadores. Não adicionar grão individual a cards/superfícies comuns.
- Fonts: **Fraunces** (serif → headings `h1`/`h2`), **Inter** (sans → body/UI/`h3`), **JetBrains Mono** (technical). Loaded in `app/layout.tsx`.
- Headings are serif **500** — don't use `font-bold` on display headings; accent words use `italic text-mustard` (renderiza no queimado `#A9741F`).
- Queimado `#A9741F` only for large display; for **small text, icons, links use `text-mustard-ink`** (`#7A5415`); button fills use `bg-primary` (`#8A5E16` — o queimado escurecido para passar WCAG AA com texto bone).
- Eyebrows de seção: Inter 600, uppercase, `tracking-[0.24em]`, `text-mustard-ink` — sem pill.
- Warm, subtle shadows (`shadow-md`); generous radii (cards `rounded-2xl`).
- Texturizado e editorial — "claro mas não limpo; calmo mas não vazio". Professional but approachable tone.
- All user-facing copy is in **Portuguese (Brazil)** — a voz do Instagram @leoabreu.ia. (Regra antiga de pt-PT foi aposentada com o reposicionamento de julho/2026.)

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

- Use TypeScript strictly — avoid `any` types
- Use Tailwind utility classes for styling — avoid inline styles
- **Styling follows [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)** — warm palette, serif headings, light-only. Design tokens live in `@theme` (`app/globals.css`); use the semantic utilities (`bg-card`, `text-ink-muted`, `bg-mustard-soft`, …) rather than raw hex.
- Use shadcn/ui components where possible before building custom ones
- Use Lucide React for all icons
- Component files use PascalCase (e.g. `HeroSection.tsx`)
- Utility/helper files use camelCase (e.g. `formatDate.ts`)
- Keep components small and focused — split when a file exceeds ~150 lines

---

## 🚫 Rules — Read Carefully

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
| `/`         | Home — Hero (Bosque) → A Strutura → Produtos (Pharos) → Quem sou eu → Comunidade → Contato → Footer (Bosque) |

> A antiga página `/links` (linktree próprio) foi apagada em jul/2026: o Instagram passou a apontar direto para a home. Sem redirect, a URL cai no 404.

**Home:** cada seção é um componente server em `components/` (`HeroSection`, `StruturaSection`, `ProductsSection`/`PharosShowcase`, `AboutMeSection`, `CommunitySection`, `ContactSection`). URLs/constantes centrais em `lib/site.ts` (WhatsApp, Pharos, Instagram, `HERO_IMAGE`).

**Imagem do hero:** a imagem escolhida vive em `public/` e é apontada por `HERO_IMAGE` em `lib/site.ts`; `null` faz rollback para a cena CSS/SVG ("floresta-catedral") em `HeroBackdrop`. Ao trocar a imagem, manter ≤ 350 KB (webp de preferência).

---

## 📦 Produto: Strutura Pharos

Produto principal da casa, apresentado na seção `#pharos` da homepage (porta: `pharos.strutura.ai`). Usar **apenas** os fatos abaixo ao escrever sobre o Pharos — não inventar features.

**O que é (1 frase):** sistema que classifica e organiza leads e clientes automaticamente — lê as conversas de WhatsApp e Instagram, interpreta e deixa preparado o que responder, o que falta responder e a próxima ação. **Ele não responde por você — de propósito.**

> ⚠️ No site, o Pharos **nunca** é chamado de "CRM", nem posicionado como "automatize seu WhatsApp" ou "IA que responde". A prova visual é um screenshot real do produto (`public/pharos.png`) emoldurado no `PharosShowcase.tsx`. (Existe também um mock HTML/CSS em `PharosMock.tsx`, hoje sem uso — alternativa caso o screenshot saia de sincronia com o produto.)

**Para quem:** PMEs brasileiras e LATAM que vendem por WhatsApp/Instagram Direct (clínicas, imobiliárias, infoprodutos, agências, lojas de alto ticket, consultorias). Times de 1–30 vendedores. Cobrança em BRL, USD e EUR.

**Features reais (lista fechada):**

1. Multi-conta WhatsApp por vendedor — cada um conecta o próprio número; tudo unificado no Pharos
2. Instagram Direct integrado — mesmo contato em IG + WhatsApp é tratado como uma pessoa só
3. IA noturna lê todas as conversas que mexeram no dia — decide etapa do funil, próxima ação (e quando), e se está "aguardando resposta" do cliente (com prazo)
4. Transcrição automática de áudio (Whisper) — WhatsApp e Instagram; vira texto pesquisável e entra no contexto da IA
5. Funil customizável por workspace — status de lead/cliente, temperatura, tags e motivos de não-compra definidos pela empresa
6. Dashboard "bola está comigo / bola está com ele" — duas listas: ação sua agora vs. aguardando o cliente
7. Permissões granulares — visibilidade de contatos, convites, edição de funil, histórico de IA por vendedor
8. Histórico de análises de IA — todo raciocínio gravado e auditável
9. Soft delete em tudo — lixeira por 30 dias

**O que NÃO é / nunca prometer:**

- Não é chatbot — a IA não responde pelo vendedor; quem fala com o cliente é gente
- Não é HubSpot/Pipedrive genérico (sem B2B enterprise, contratos, automação de marketing)
- Sem integração com Salesforce/HubSpot/RD/Pipedrive
- Sem telefonia — só WhatsApp e Instagram
- Sem app mobile nativo — é web responsivo
- Usa WAHA self-hosted (QR code), não WhatsApp API oficial (BSP)

**Tom de voz da copy do Pharos:** direto, frases curtas, verbos no presente, gírias leves de comercial ("a bola está com você", "lead quente"). Preços só em página de pricing, nunca na seção institucional.

---

## 🗄️ Produto: Strutura Studio (ARQUIVADO em jul/2026)

O Studio foi **arquivado** e não aparece em nenhuma superfície pública: fora da home, do footer, da metadata/SEO, do 404 e da página `/brand`. **Não reintroduzir menções ao Studio no site sem pedido explícito do Leonardo.**

O que era: ferramenta da Strutura para posts comerciais ("quase um Canva que faz por você"). O código continua no repo, apenas desmontado: `components/StudioShowcase.tsx` e `components/StudioPieces.tsx` estão sem uso, e `STUDIO_URL` permanece em `lib/site.ts` só para o typecheck desses componentes órfãos.

---

## 🔗 Integrations & External Services

- **WhatsApp** (`wa.me/351931135852`) — único canal de contato do site; CTA "Falar com o Leonardo"
- Sem analytics de lead-gen, sem Cal.com, sem formulários — removidos no reposicionamento

---

_Last updated: July 2026 — site reescrito como **vitrine de marca** (copy pt-BR, voz 3ª pessoa, hero Bosque "floresta-catedral", seções A Strutura / Produtos / Quem sou eu / Comunidade / Contato). Source of truth da marca + design system "Nature Warm" unificados na página [`/brand`](app/brand/page.tsx) (`strutura.ai/brand`, noindex; `design.html` aposentado com redirect permanente); resumo em [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md). Strutura Studio arquivado e página `/links` apagada._
