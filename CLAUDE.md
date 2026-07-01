# CLAUDE.md — Strutura

This file provides Claude Code with context about the Strutura project, conventions, and rules to follow during development.

---

## 🏢 Project Overview

**Strutura** is an AI automation agency based in Portugal that helps businesses scale operations without increasing headcount. The website at `strutura.ai` is the primary marketing and lead generation tool for the business.

The site exists to:

- Communicate Strutura's value proposition clearly to Portuguese SMBs
- Generate leads through a free business audit offer
- Build credibility and trust in a market still unfamiliar with AI automation
- Convert visitors into booked audit sessions via Cal.com

The core message is: **"Automação personalizada para empresas portuguesas. Auditoria gratuita, sem compromisso."**

---

## 👤 Owner

- **Name:** Leonardo
- **Email:** leonardo@strutura.ai
- **Website:** strutura.ai

---

## 🎨 Brand & Design

> **Design system: "Nature Warm"** — fonte de verdade em [`public/design.html`](public/design.html) (`strutura.ai/design.html`); resumo em [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md). **Consultar antes de criar/alterar qualquer peça ou UI.**

### Identidade "Nature Warm" (posts, templates do Studio, materiais)

- **Dois climas:** **Campo** (claro, quente, texturizado, editorial — a casa/default) e **Bosque** (escuro verde-floresta — acento raro, **~1 a cada 5–6 posts**, só pro "susto visual").
- **Acento mostarda envelhecido:** `#A9741F` (`--mostarda-queimado`, sobre claro) e `#C98A2B` (`--mostarda`, sobre escuro). Evolução do `#C99A2D` antigo, não ruptura.
- **Grão em toda peça** (SVG `feTurbulence`) + furniture editorial com função (eyebrow, índice só em sequência real, selo de data, meta). Regra central: **claro mas não limpo; calmo mas não vazio.**
- **Capa = pôster** (Fraunces enorme, texto mínimo) · **slide = ensino** (legibilidade manda, método à vista, rodapé com motivo de salvar). A estética nunca custa a legibilidade.
- Palavra sempre seca e informativa — **nunca motivacional vazio.**
- **Assinatura padrão: `Leo Abreu · Strutura`** (nunca "Leonardo Abreu").
- Fontes: **Fraunces** (display 300–600, itálico de ênfase na cor de acento do clima) + **Inter** (utilitária 400–600).
- Post: **1080 × 1350 (4:5)**; pensar o mosaico do feed, não só a peça.

### Site (implementação atual — ainda "Warm Minimal", migração pendente)

O código do site (`app/globals.css`, componentes) **ainda roda nos tokens Warm Minimal**. Até a migração, UI do site usa estes utilitários (tabela completa no apêndice do [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)):

| Name                       | Hex       | Tailwind           |
| -------------------------- | --------- | ------------------ |
| Background (base)          | `#FAF7F2` | `bg-background`    |
| Surface (cards, inputs)    | `#FFFEFB` | `bg-card`          |
| Muted (hover, 2nd areas)   | `#F5F1E8` | `bg-muted`         |
| Accent — mustard (fills)   | `#C99A2D` | `bg-mustard`       |
| Accent text (small/icons)  | `#8B6F2C` | `text-mustard-ink` |
| Text — primary (ink)       | `#2C2820` | `text-foreground`  |
| Text — muted               | `#8B7E68` | `text-ink-muted`   |
| Border                     | `#E8E0D0` | `border-border`    |

### Typography & Style (regras do site)

- **Light-only — sem dark mode.** Never use `dark:` variants, theme toggles, or `prefers-color-scheme`. (Vale nos dois sistemas — o Bosque é clima de peça, não dark mode do site.)
- Fonts: **Fraunces** (serif → headings `h1`/`h2`), **Inter** (sans → body/UI/`h3`), **JetBrains Mono** (technical). Loaded in `app/layout.tsx`.
- Headings are serif **500** — don't use `font-bold` on display headings; accent words use `italic text-mustard`.
- Mustard `#C99A2D` only for fills / large display; for **small text, icons, links use `text-mustard-ink`** (`#8B6F2C`).
- Warm, subtle shadows (`shadow-md`); generous radii (cards `rounded-2xl`).
- Clean, minimal — avoid visual clutter. Professional but approachable tone.
- All user-facing copy should be in **Portuguese (Portugal)**.

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

| Route             | Purpose                                      |
| ----------------- | -------------------------------------------- |
| `/`               | Homepage — hero, services, how it works, CTA |
| `/privacidade`    | Privacy Policy (WhatsApp Business)           |
| `/termos`         | Terms of Service (WhatsApp Business)         |
| `/eliminar-dados` | User Data Deletion instructions              |

---

## 📦 Produto: Strutura Pharos

Primeiro produto da casa, vendido no site institucional (seção `#pharos` da homepage) e operado em `crm.strutura.ai`. Usar **apenas** os fatos abaixo ao escrever sobre o Pharos — não inventar features.

**O que é (1 frase):** CRM de WhatsApp e Instagram que usa IA para ler todas as conversas toda madrugada e dizer ao vendedor exatamente com quem precisa falar — e o que falar — sem que ninguém atualize status manualmente.

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

**Tom de voz da copy do Pharos:** português **brasileiro** (exceção à regra pt-PT do resto do site — público BR/LATAM), direto, frases curtas, verbos no presente, gírias leves de comercial ("a bola está com você", "lead quente"). Banidos: "revolucionário", "transformação digital", "potencialize", "alavancar", "boost", "unlock", emoji. Preços só em página de pricing, nunca na seção institucional.

---

## 🔗 Integrations & External Services

- **Cal.com** — appointment booking for free business audits
- **WhatsApp Business** — primary communication channel with leads
- **n8n** — backend workflow automation

---

_Last updated: July 2026 — adopted the "Nature Warm" design system (source of truth: [`public/design.html`](public/design.html); summary in [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md)). Site code still runs on Warm Minimal tokens until migration._
