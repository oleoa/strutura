import { Callout, Container, Section, Subhead } from "../ui";

export default function DsClimas() {
  return (
    <Container>
      <Section
        id="ds-climas"
        num="11.3"
        title="Os dois climas"
        meta="Não são intercambiáveis: cada um tem função"
        sub
      >
        <p className="mb-7 max-w-[740px] text-[14.5px] leading-[1.75] text-ink-soft">
          O sistema tem dois climas. É isso que transforma a dualidade em{" "}
          <strong className="font-semibold text-ink">sinal, não ruído</strong>:
          o Campo carrega o conteúdo e acolhe; o Bosque quebra o ritmo e
          acorda o olho. Cada card abaixo está renderizado no próprio clima,
          com grão, gradiente e acento reais.
        </p>

        <div className="mb-5 grid gap-4 sm:grid-cols-2">
          {/* Campo: renderizado no próprio clima */}
          <div className="grain-campo overflow-hidden rounded-[4px] border border-ink/16 bg-bone px-7 pb-6 pt-7 [background-image:radial-gradient(130%_70%_at_50%_-15%,#e4d2a8_0%,rgba(228,210,168,0)_60%)]">
            <div className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-mustard-ink">
              A casa · default
            </div>
            <h4 className="mb-3.5 font-serif text-[34px] font-[450] leading-[1.05] tracking-[-0.01em] [font-variation-settings:'opsz'_100]">
              Campo
            </h4>
            <p className="mb-3 text-[13.5px] leading-[1.7] text-ink-soft">
              Claro, quente, texturizado, editorial.{" "}
              <strong className="font-semibold text-ink">
                Carrega o grosso do conteúdo, inclusive o denso.
              </strong>
            </p>
            <p className="text-[13.5px] leading-[1.7] text-ink-soft">
              Por que é a casa: o público é o empreendedor no digital, que{" "}
              <strong className="font-semibold text-ink">não</strong> quer
              virar técnico e já vive soterrado de coisa espalhada. O claro
              acolhe, lê como ambiente arrumado, reduz a barreira de entrada.
              Casa com a missão (controle através da organização). Escuro como
              default sussurraria &ldquo;isso é pra quem manja&rdquo; na cara
              de quem a gente quer desintimidar.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["claro", "quente", "texturizado", "editorial"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-[2px] border border-ink/16 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-muted"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Bosque: renderizado no próprio clima */}
          <div className="grain-bosque overflow-hidden rounded-[4px] px-7 pb-6 pt-7 text-bone [background-image:radial-gradient(120%_65%_at_50%_-15%,rgba(228,210,168,0.22)_0%,rgba(228,210,168,0)_60%),linear-gradient(175deg,#26382b_0%,#14201a_62%)]">
            <div className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-mustard-bosque">
              O acento raro · ~1 a cada 5–6 posts
            </div>
            <h4 className="mb-3.5 font-serif text-[34px] font-[450] leading-[1.05] tracking-[-0.01em] [font-variation-settings:'opsz'_100]">
              Bosque
            </h4>
            <p className="mb-3 text-[13.5px] leading-[1.7] text-bone/[0.82]">
              Escuro, verde-floresta, grão pesado, luz de dossel.{" "}
              <strong className="font-semibold text-bone">
                Aparece pontualmente; nunca vira default.
              </strong>
            </p>
            <p className="text-[13.5px] leading-[1.7] text-bone/[0.82]">
              Por que existe (e por que raro): o Bosque cria contraste e
              quebra de ritmo. A pessoa rola o feed, bate no escuro, o olho
              acorda. Isso é{" "}
              <strong className="font-semibold text-bone">
                retenção de perfil, não decoração.
              </strong>{" "}
              Como é raro, carrega peso por contraste (um marco, uma opinião
              mais firme, um respiro de curiosidade) sem intimidar. Um feed de
              uma cor só achata; o Bosque pontual mantém o feed vivo.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["escuro", "verde-floresta", "grão pesado", "luz de dossel"].map(
                (chip) => (
                  <span
                    key={chip}
                    className="rounded-[2px] border border-bone/25 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-bone/70"
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        <Callout title="A regra que amarra os dois">
          <strong>Peso normal mora no Campo</strong>, resolvido com
          tipografia + mostarda queimado (título maior, mais contraste, menos
          respiro). Não precisa apagar a luz pra falar firme.{" "}
          <strong>Bosque só entra quando se quer o &ldquo;susto
          visual&rdquo;</strong>: por sensação, não por cota. Se aparecer
          demais, vira barulho e perde a graça.
        </Callout>

        <Subhead>Cadência de referência no feed</Subhead>
        <div
          role="img"
          aria-label="Seis miniaturas de posts: cinco claras (Campo) e uma escura (Bosque)"
          className="mb-2 mt-1 grid max-w-[560px] grid-cols-6 gap-2"
        >
          {[false, false, true, false, false, false].map((bosque, i) => (
            <div
              key={i}
              className={`aspect-[4/5] rounded-[3px] border ${
                bosque
                  ? "border-bosque-deep [background-image:linear-gradient(170deg,#26382b,#14201a)]"
                  : "border-ink/16 bg-bone"
              }`}
            />
          ))}
        </div>
        <p className="max-w-[560px] text-xs leading-relaxed text-ink-muted">
          ~1 Bosque a cada 5–6 posts. A posição não é fixa: a decisão é por
          sensação (o post pede o susto?), a cadência é só o teto de
          frequência.
        </p>
      </Section>
    </Container>
  );
}
