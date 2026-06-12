# Strutura — Design System "Warm Minimal"

> Fonte única da verdade para o visual do site. **Consultar antes de criar ou alterar qualquer UI.**
> Tokens implementados em [`app/globals.css`](app/globals.css); fontes em [`app/layout.tsx`](app/layout.tsx).

## Princípios

- **Light-only.** Não existe dark mode. Não usar variantes `dark:`, nem `prefers-color-scheme`, nem toggles de tema.
- **Calmo, não vazio · humano, não corporativo · quente, não frio · acentos com propósito.**
- Off-white quente em vez de branco/preto frios; respiração generosa; serifa para momentos de destaque; mostarda em vez de amarelo néon.

---

## Cores (hex + utilitário Tailwind)

Os utilitários abaixo são gerados a partir de `@theme` em `app/globals.css` e suportam modificador de opacidade (ex.: `bg-mustard-soft/60`).

### Neutros / superfícies (via tokens semânticos shadcn, remapeados para warm)
| Papel | Hex | Utilitário |
| --- | --- | --- |
| Fundo da página (base) | `#faf7f2` | `bg-background` |
| Superfície (cards, inputs) | `#fffefb` | `bg-card` |
| Muted (hover, áreas 2.ª) | `#f5f1e8` | `bg-muted` · `bg-secondary` |
| Subtle (divisórias visuais) | `#f0ebdf` | `bg-subtle` |
| Borda padrão | `#e8e0d0` | `border-border` |
| Borda forte (hover/focus) | `#d8cdb5` | `border-border-strong` |

### Texto (ink)
| Papel | Hex | Utilitário |
| --- | --- | --- |
| Primário (títulos, texto forte) | `#2c2820` | `text-foreground` · `text-ink` |
| Secundário (corpo) | `#5c5448` | `text-ink-soft` |
| Muted (labels, meta) | `#8b7e68` | `text-ink-muted` |
| Faint (placeholders, hints) | `#a89a7e` | `text-ink-faint` |

### Acento mostarda
| Papel | Hex | Utilitário |
| --- | --- | --- |
| Acento (preenchimentos / display grande) | `#c99a2e` | `bg-mustard` · `text-mustard` |
| Acento hover | `#b58825` | `bg-mustard-hover` |
| Acento soft (fundo) | `#f5efe0` | `bg-mustard-soft` |
| Acento soft hover | `#efe6cd` | `bg-mustard-soft-hover` |
| **Acento texto (texto pequeno / ícones)** | `#8b6f2c` | `text-mustard-ink` |
| Acento borda | `#e8ddb8` | `border-mustard-border` |

> ⚠️ **Regra de contraste:** `#c99a2e` (`mustard`) reprova WCAG AA como texto pequeno. Usar **`mustard` só em preenchimentos e display grande**; para **texto, ícones, links e labels usar `text-mustard-ink` (`#8b6f2c`)**.

### Semânticos (`success` / `danger` / `info` / `warning`)
Cada um com variantes `-soft` (fundo), `-ink` (texto) e `-border`. Ex.: `bg-danger-soft text-danger-ink border-danger-border`. `warning` == `mustard` (intencional). `destructive` (botões shadcn) = `#b5462e`.

---

## Tipografia

Carregadas via `next/font/google` em `app/layout.tsx`:

| Família | Uso | Variável CSS / utilitário |
| --- | --- | --- |
| **Fraunces** (serifa, variável `opsz` + `SOFT`) | Títulos `h1`/`h2`, display | `font-serif` (aplicado a `h1,h2` no base layer) |
| **Inter** (sans) | Corpo, UI, `h3`, botões, inputs | `font-sans` (default do `body`) |
| **JetBrains Mono** | Dados técnicos / IDs | `font-mono` |

- `h1, h2` recebem **Fraunces 500** automaticamente (regra no `@layer base`). **Não** usar `font-bold` em títulos display — o peso é 500. Para destaque, usar `font-semibold`.
- Acento de título: `<span className="italic text-mustard">…</span>` (itálico mostarda).
- O `<h1>` do herói usa `font-variation-settings: "opsz" 144` (corte fino) via regra `#inicio h1`.
- `h3` (títulos de card) = Inter, `font-semibold` (600).
- Escala de referência do system: Display 56/−1.5 · H1 28 · H2 22 · H3 17 · body 14–16 · label 11 uppercase 600.

---

## Radius, sombras, espaçamento

| Radius | Valor | Utilitário |
| --- | --- | --- |
| sm | 6px | `rounded-sm` |
| md (botões, inputs) | 10px | `rounded-md` |
| lg | 14px | `rounded-lg` |
| xl (chips de ícone) | 16px | `rounded-xl` |
| 2xl (cards principais) | 20px | `rounded-2xl` |
| pill | — | `rounded-full` |

| Sombra (quente, subtil) | Valor | Utilitário |
| --- | --- | --- |
| sm | `0 1px 2px rgba(44,40,32,.04)` | `shadow-sm` |
| md (cards em repouso) | `0 2px 8px rgba(44,40,32,.06)` | `shadow-md` |
| lg (modais, popovers) | `0 8px 24px rgba(44,40,32,.08)` | `shadow-lg` |

Focus ring quente: `--ring` = mostarda; primitivos usam `focus-visible:ring-ring/50 focus-visible:ring-[3px]`.
Espaçamento: escala de 4px (4/8/12/16/20/24/32/40/48) — usar os utilitários Tailwind normais (`gap-*`, `p-*`).

---

## Componentes

- **Botões** ([`components/ui/button.tsx`](components/ui/button.tsx)): `default` = mostarda (`bg-primary text-primary-foreground hover:bg-mustard-hover`); `secondary`/`outline` = superfície + borda; `ghost` = transparente, texto `ink-soft`; `destructive` = danger; `link` = `text-mustard-ink`. Tamanhos `sm`/`default`/`lg`/`xl` + `icon*`. **Não** passar `className` de cor — usar as variantes.
- **Cards / superfícies:** `bg-card border border-border shadow-md rounded-2xl`; hover suave `hover:border-mustard-border hover:bg-muted`.
- **Pills / badges:** `rounded-full bg-mustard-soft text-mustard-ink text-xs font-semibold tracking-wide uppercase` (ou variantes semânticas `*-soft` / `*-ink`).
- **Inputs / textarea** ([`components/ui/`](components/ui/)): `bg-card border border-input rounded-md`; focus → ring mostarda.
- **Secções:** fundos alternam superfície ↔ muted via `var(--section-*)` em `globals.css` (não mudar os nomes das variáveis, só os valores). O herói tem um leve brilho mostarda (6% alpha).

---

## Como está ligado no código

- `@theme` em `app/globals.css` define os tokens de marca (`--color-ink*`, `--color-mustard*`, `--color-subtle`, `--color-border-strong`, semânticos, sombras, radius).
- `@theme inline` mapeia os tokens semânticos shadcn (`--color-background`, `--color-card`, `--color-primary`, …) para os `var(--*)` definidos em `:root`, todos já em valores warm.
- Logo: `public/logos/transparent-extended-logo/light.png` (wordmark serifa escuro — combina com a identidade).

_Última atualização: junho de 2026._
