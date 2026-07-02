# Strutura — Design System "Nature Warm"

> **Fonte de verdade: a página [`/brand`](app/brand/page.tsx)** (`strutura.ai/brand`, seção 10 — componentes em `components/brand/ds/`) — a página renderiza tokens, tipografia, grão e exemplos ao vivo, além da identidade estratégica da marca. O antigo `design.html` foi aposentado (redirect permanente `/design.html` → `/brand`). Este arquivo é o resumo de trabalho para consulta rápida. **Consultar antes de criar ou alterar qualquer peça.**

> ✅ **Estado da migração:** o **site** (`app/globals.css`, componentes) já roda nos tokens Nature Warm (clima Campo + footer Bosque). Peças (posts, templates, materiais) seguem o mesmo sistema. Os utilitários Tailwind do site estão no [Apêndice](#apêndice--utilitários-tailwind-do-site-nature-warm).

---

## Statement

**Claro, mas não limpo. Calmo, mas não vazio.**

O Warm Minimal foi aposentado porque calmo virou vazio — o diagnóstico não é a cor, é a falta de tensão (espaçamento uniforme, acento tímido, zero textura). Creme quente calmo é o visual mais copiado da internet; o que nos separa é ser **claro mas NÃO limpo** — texturizado e editorial. Grão, furniture de revista e mostarda queimado são o que impedem o genérico.

## Princípios (dogma → forma)

1. **"A IA é o braço, não a cabeça"** → cada elemento tem função. Nada decora à toa. Seco.
2. **"Calma é método"** → respiro e ritmo, mas calma ≠ vazio. Densidade com fôlego.
3. **"Construtor, não guru"** → textura, grão, imperfeição honesta. O oposto do gradiente-startup limpo.
4. **"Aesthetic na forma, seco na palavra"** → a estética pode ser cinematográfica; a palavra é sempre teto de informação, nunca motivacional vazio.
5. **"Natureza como device"** → paisagem como prova do ambiente calmo, nunca wallpaper motivacional.

---

## Os dois climas

Não são intercambiáveis — cada um tem função. É isso que transforma a dualidade em sinal, não ruído.

| | **Campo** (a casa, default) | **Bosque** (o acento raro) |
| --- | --- | --- |
| Clima | Claro, quente, texturizado, editorial | Escuro, verde-floresta, grão pesado, luz de dossel |
| Função | Carrega o grosso do conteúdo, inclusive o denso. Desarma o medo, acolhe (o público é o Diego — não-técnico) | Contraste e quebra de ritmo — o "susto visual". Retenção de perfil, não decoração |
| Frequência | Default | **~1 a cada 5–6 posts** — por sensação, não por cota |

**A regra que amarra:** peso normal mora no Campo — resolvido com **tipografia + mostarda queimado** (título maior, mais contraste, menos respiro). Bosque só entra quando se quer o susto visual; se aparecer demais, vira barulho e perde a graça.

---

## Tokens de cor (CSS custom properties)

### Campo (claro / casa)

| Token | Hex | Uso |
| --- | --- | --- |
| `--campo-base` | `#F1E8D4` | fundo base (creme quente) |
| `--campo-bone` | `#EFE7D6` | superfície alternativa |
| `--campo-haze` | `#E4D2A8` | brilho de alvorada / glow superior |
| `--campo-ink` | `#1E2B22` | tinta principal (verde-escuro, texto) |
| `--campo-verde` | `#788C56` | verde-campo (horizonte, acento natureza) |
| `--campo-verde-deep` | `#5E6B3E` | verde mais fundo (sombra de natureza) |

### Bosque (escuro / acento)

| Token | Hex | Uso |
| --- | --- | --- |
| `--bosque-deep` | `#14201A` | fundo base (floresta profunda) |
| `--bosque-mid` | `#26382B` | verde médio (gradiente, divisórias) |
| `--bosque-bone` | `#EFE7D6` | texto/tinta clara sobre escuro |
| `--bosque-haze` | `#E4D2A8` | luz de dossel, itálico de ênfase |

### Acento compartilhado — mostarda envelhecido

O mostarda não sai — é o único sinal ownable. Mas envelhece: sai do `#C99A2E` puro (amarelo-startup) pra um queimado/terroso que corta sem gritar. **Evolução, não ruptura.**

| Token | Hex | Uso |
| --- | --- | --- |
| `--mostarda` | `#C98A2B` | acento sobre escuro (Bosque) |
| `--mostarda-queimado` | `#A9741F` | acento sobre claro (Campo), o "corte" seco |

---

## Tipografia

Fontes via Google Fonts: **Fraunces** (`ital, opsz, wght 300–600`) + **Inter** (400–600).

- **Display — Fraunces.** Alta personalidade, usada com restrição e em **corpo grande** — é onde mora a personalidade. **Itálico** para ênfase de uma palavra (o "não a cabeça", o "genérica"), sempre na cor de acento do clima.
- **Utilitária — Inter.** Corpo, legendas, meta, eyebrow.
- **Eyebrow:** Inter 600, uppercase, `letter-spacing: .2–.28em`, corpo pequeno. Rótulo do pilar/seção.
- **Assinatura:** **`Leo Abreu · Strutura`**, uppercase pequeno, na cor de acento do clima. Obrigatória em toda peça. **Não usar mais "Leonardo Abreu".**

### Escala de referência — post 1080 × 1350

| Papel | Família / peso | Corpo (px) | Notas |
| --- | --- | --- | --- |
| Display (capa) | Fraunces 300–500, opsz 144 | 88–128 | tracking −0.02em · leading 1.02–1.06 |
| Título de slide | Fraunces 500, opsz 80 | 56–72 | tracking −0.01em · leading 1.1 |
| Corpo (slide) | Inter 400–500 | 28–34 | leading 1.5 · máx. ~46ch |
| Meta / rodapé | Inter 400–500 | 22–26 | cor rebaixada · uma linha |
| Eyebrow | Inter 600 uppercase | 22–26 | letter-spacing 0.2–0.28em |
| Assinatura | Inter 600 uppercase | 20–24 | letter-spacing ~0.22em · cor de acento |

---

## Textura & furniture

**Grão em toda peça** — é o que separa do calmo-liso genérico. Overlay SVG `feTurbulence` (`fractalNoise`, `baseFrequency ≈ 0.85–0.9`, `numOctaves 2`), `mix-blend-mode: overlay` (Campo) ou `soft-light` (Bosque), opacidade ~0.4–0.5 (capa) / ~0.35 (slide de ensino — legibilidade manda). Snippet completo na página `/brand` (seção 10.6, `components/brand/ds/DsTextura.tsx`).

**Furniture editorial** (com propósito, nunca decorar à toa):

- **Eyebrow** — rótulo do pilar (Método, Opinião, Bastidor…)
- **Índice numérico** (`01`, `02/05`…) — **só quando é sequência real** (ordem de slide num carrossel conta; número solto por enfeite, não)
- **Selo de data/edição** — canto da peça
- **Meta em small caps** — canto
- **Barcode/marca discreta** — assinatura visual opcional
- **Assinatura** — obrigatória

Imperfeição honesta > limpeza perfeita. Grão, papel, filme.

---

## Capa vs. slide (vale nos dois climas)

- **Capa = modo pôster.** Título Fraunces enorme, imagem-forward, texto mínimo. É o gancho, para o scroll. Pode ser cinematográfica. Uma ideia só.
- **Slide de conteúdo = modo ensino.** **Legibilidade manda.** Texto denso, método à vista (linhas/passos numerados), rodapé com o **motivo de salvar** ("Salva pra lembrar onde a IA para"). Mesma alma (grão + paleta + serifada + furniture), mas a informação domina.

**Regra de ouro:** a estética **nunca** pode custar a legibilidade do slide.

---

## Imagem de natureza — dois níveis de fidelidade

A peça nunca depende da foto pra existir — **a foto eleva, não sustenta**:

1. **Piso (default de produção):** gradiente quente + grão. Barato, renderiza fácil.
2. **Teto:** foto/IA de natureza por cima (campo, floresta, alvorada), aprofundando o clima.

> 🔶 **PENDENTE:** foto fixa (banco de paisagens) vs. única por post — decisão ligada à capacidade do pipeline de gerar imagem.

---

## Formato

- Post: **1080 × 1350 (4:5)**.
- Pensar o **mosaico**, não só a peça isolada — variar dentro do clima (título grande, luz deslocada, mais/menos texto) pra o feed não virar "mesmo template 9×".

---

## Do / Don't

**Faça:**

- Claro e texturizado (grão sempre presente)
- Fraunces grande com restrição; itálico só pra ênfase
- Mostarda queimado como corte seco
- Furniture editorial com função (índice só em sequência real)
- Peso via tipografia dentro do Campo; Bosque só pro susto visual

**Nunca:**

- Limpo/liso sem textura (= calmo genérico, o espaço mais lotado da internet)
- Palavra motivacional/vibe ("simplicity is the purest form…", frases de efeito vazias)
- Escuro como default (afasta o não-técnico, o Diego)
- Bege sem o mostarda (perde o único sinal ownable)
- Estética custando legibilidade no slide de ensino
- Bosque frequente demais (vira barulho, perde o contraste)

---

## Apêndice — utilitários Tailwind do site (Nature Warm)

O site roda o clima **Campo** nos tokens `@theme` de [`app/globals.css`](app/globals.css). Os **nomes** dos utilitários são os mesmos do Warm Minimal — só os valores mudaram:

| Papel | Hex | Utilitário Tailwind |
| --- | --- | --- |
| Fundo da página (campo-base) | `#f1e8d4` | `bg-background` |
| Superfície (campo-bone — cards, inputs) | `#efe7d6` | `bg-card` |
| Muted (hover, áreas 2.ª) | `#eae0c9` | `bg-muted` |
| Borda padrão (ink ~16% sobre base) | `#cfcab8` | `border-border` |
| Texto primário (campo-ink) | `#1e2b22` | `text-foreground` |
| Texto secundário (ink 78%) | `#4c5549` | `text-ink-soft` |
| Texto muted (ink 56%) | `#7b7e70` | `text-ink-muted` |
| Mostarda queimado (display/itálico de título) | `#a9741f` | `text-mustard` · `bg-mustard` |
| Botão default (queimado escurecido p/ AA) | `#8a5e16` | `bg-primary` |
| Mostarda texto pequeno/ícones (AA) | `#7a5415` | `text-mustard-ink` |
| Mostarda soft (fundo, navbar) | `#eadcc2` | `bg-mustard-soft` |
| Haze (acento sobre foto/escuro, itálico do herói) | `#e4d2a8` | `text-gold-light` |
| Bosque profundo (footer) | `#14201a` | `bg-bosque-deep` |
| Bosque médio (gradiente do footer) | `#26382b` | `from-bosque-mid` |
| Bone (texto sobre Bosque) | `#efe7d6` | `text-bone` |
| Mostarda sobre escuro (acento no Bosque) | `#c98a2b` | `text-mustard-bosque` |

Regras do site:

- **Light-only — sem dark mode.** Nunca `dark:`, toggles ou `prefers-color-scheme`. O footer Bosque é superfície pontual (a única escura permitida), não dark mode.
- **Grão global**: overlay `feTurbulence` em `body::after` (`globals.css`), `mix-blend-mode: overlay`, opacidade 0.25 — mais sutil que nas peças, porque o site é leitura longa. Superfícies não precisam de grão individual.
- `h1, h2` = Fraunces 500 (`@layer base`); **não** usar `font-bold` em display. Acento de título: `<span className="italic text-mustard">…</span>` (renderiza no queimado).
- `#a9741f` (queimado puro) só passa AA em texto grande — texto/ícones/links pequenos usam `text-mustard-ink` (`#7a5415`); botões usam `bg-primary` (`#8a5e16`, AA com texto bone).
- **Eyebrows de seção**: Inter 600, uppercase, `tracking-[0.24em]`, `text-mustard-ink` — sem pill.
- Semânticos (`success`/`danger`/`info` + soft/ink/border) rederivados na paleta Campo: ver `app/globals.css`. Pares `*-ink` sobre `*-soft` validados AA.
- Botões via variantes de [`components/ui/button.tsx`](components/ui/button.tsx) — não passar `className` de cor.

---

_Última atualização: julho de 2026 — design system "Nature Warm" (v3), substituindo o "Warm Minimal" (v2). Site migrado para os tokens Nature Warm. Fonte de verdade: a página [`/brand`](app/brand/page.tsx) (`strutura.ai/brand`, seção 10)._
