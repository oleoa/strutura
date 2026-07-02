import type { ReactNode } from "react";
import { Assinatura, Callout, Container, Eyebrow, Section, Subhead } from "../ui";

function TypeRow({
  meta,
  sample,
}: {
  meta: ReactNode;
  sample: ReactNode;
}) {
  return (
    <div className="grid items-center gap-3.5 rounded-[4px] border border-ink/10 bg-bone/65 p-5 sm:grid-cols-[210px_1fr] sm:gap-8 sm:px-7 sm:py-6">
      <div className="text-xs leading-[1.55] text-ink-muted [&_strong]:mb-1 [&_strong]:block [&_strong]:text-[13px] [&_strong]:font-semibold [&_strong]:text-ink [&_code]:rounded-[3px] [&_code]:bg-mustard/10 [&_code]:px-1 [&_code]:py-px [&_code]:font-mono [&_code]:text-[10px] [&_code]:text-mustard-ink">
        {meta}
      </div>
      <div>{sample}</div>
    </div>
  );
}

const SPEC_ROWS = [
  {
    papel: "Display (capa)",
    familia: "Fraunces 300–500, opsz 144",
    corpo: "88–128",
    notas: "−0.02em · leading 1.02–1.06 · itálico só na palavra de ênfase",
  },
  {
    papel: "Título de slide",
    familia: "Fraunces 500, opsz 80",
    corpo: "56–72",
    notas: "−0.01em · leading 1.1",
  },
  {
    papel: "Corpo (slide)",
    familia: "Inter 400–500",
    corpo: "28–34",
    notas: "leading 1.5 · máx. ~46ch",
  },
  {
    papel: "Meta / rodapé",
    familia: "Inter 400–500",
    corpo: "22–26",
    notas: "cor rebaixada · uma linha",
  },
  {
    papel: "Eyebrow",
    familia: "Inter 600, uppercase",
    corpo: "22–26",
    notas: "letter-spacing 0.2–0.28em",
  },
  {
    papel: "Assinatura",
    familia: "Inter 600, uppercase",
    corpo: "20–24",
    notas: "letter-spacing ~0.22em · cor de acento do clima",
  },
];

export default function DsTipografia() {
  return (
    <Container>
      <Section
        id="ds-tipografia"
        num="10.5"
        title="Tipografia"
        meta="Fraunces (display) · Inter (utilitária) · Google Fonts"
        sub
      >
        <p className="mb-7 max-w-[740px] text-[14.5px] leading-[1.75] text-ink-soft [&_strong]:font-semibold [&_strong]:text-ink [&_code]:rounded-[3px] [&_code]:bg-ink/[0.07] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-ink">
          <strong>Fraunces</strong> é onde mora a personalidade — alta
          personalidade, usada com{" "}
          <strong>restrição e em corpo grande</strong> (pesos 300–600, eixo{" "}
          <code>opsz</code> alto no display). <strong>Inter</strong> faz todo
          o resto: corpo, legendas, meta, eyebrow (400–600). O{" "}
          <strong>itálico</strong> da Fraunces marca a ênfase de uma palavra —
          o &ldquo;não a cabeça&rdquo;, o &ldquo;genérica&rdquo; — sempre na
          cor de acento do clima.
        </p>

        <div className="flex flex-col gap-3.5">
          <TypeRow
            meta={
              <>
                <strong>Display (capa)</strong>
                <code>Fraunces 300–500 it.</code>
                <br />
                opsz 144 · tracking −0.02em
                <br />
                leading 1.02–1.06 · corpo grande
              </>
            }
            sample={
              <div className="font-serif text-[clamp(34px,5vw,54px)] font-normal leading-[1.04] tracking-[-0.02em] [font-variation-settings:'opsz'_144]">
                O braço,{" "}
                <em className="italic font-[480] text-mustard">
                  não a cabeça.
                </em>
              </div>
            }
          />
          <TypeRow
            meta={
              <>
                <strong>Título de slide</strong>
                <code>Fraunces 500</code>
                <br />
                opsz 80 · tracking −0.01em
                <br />
                leading 1.1
              </>
            }
            sample={
              <div className="font-serif text-3xl font-medium leading-[1.12] tracking-[-0.01em] [font-variation-settings:'opsz'_80]">
                Onde a IA para
              </div>
            }
          />
          <TypeRow
            meta={
              <>
                <strong>Corpo</strong>
                <code>Inter 400</code>
                <br />
                leading 1.5–1.65
                <br />
                máx. ~46ch por linha
              </>
            }
            sample={
              <div className="max-w-[46ch] text-base leading-[1.65] text-ink-soft">
                A IA lê, organiza e aponta. Decidir prioridade, preço e
                promessa continua sendo trabalho seu.
              </div>
            }
          />
          <TypeRow
            meta={
              <>
                <strong>Meta / legenda</strong>
                <code>Inter 400</code>
                <br />
                cor rebaixada (ink ~55%)
              </>
            }
            sample={
              <div className="text-[13px] leading-normal text-ink-muted">
                Método completo no post fixado do perfil.
              </div>
            }
          />
          <TypeRow
            meta={
              <>
                <strong>Eyebrow</strong>
                <code>Inter 600 · UPPERCASE</code>
                <br />
                letter-spacing 0.2–0.28em
                <br />
                corpo pequeno · rótulo do pilar/seção
              </>
            }
            sample={<Eyebrow>Método · Automação</Eyebrow>}
          />
          <TypeRow
            meta={
              <>
                <strong>Assinatura</strong>
                <code>Inter 600 · UPPERCASE</code>
                <br />
                small caps / uppercase pequeno,
                <br />
                cor de acento do clima
              </>
            }
            sample={<Assinatura />}
          />
        </div>

        <Callout title="Padrão de assinatura">
          Toda peça assina <strong>&ldquo;Leo Abreu · Strutura&rdquo;</strong>{" "}
          — uppercase pequeno, na cor de acento do clima
          (<code>--mostarda-queimado</code> no Campo, <code>--mostarda</code>{" "}
          no Bosque). <strong>Não usar mais &ldquo;Leonardo Abreu&rdquo;.</strong>
        </Callout>

        <Subhead>Escala de referência — post 1080 × 1350</Subhead>
        <div className="overflow-x-auto">
          <table className="mt-2 w-full border-collapse text-[13px]">
            <thead>
              <tr>
                {["Papel", "Família / peso", "Corpo (px no post)", "Tracking / notas"].map(
                  (th) => (
                    <th
                      key={th}
                      className="border-b border-ink/16 px-3.5 py-2 text-left text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-muted"
                    >
                      {th}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {SPEC_ROWS.map((row) => (
                <tr key={row.papel}>
                  <td className="whitespace-nowrap border-b border-ink/10 px-3.5 py-2.5 align-top font-medium text-ink">
                    {row.papel}
                  </td>
                  <td className="border-b border-ink/10 px-3.5 py-2.5 align-top font-mono text-[11.5px] text-ink-soft">
                    {row.familia}
                  </td>
                  <td className="border-b border-ink/10 px-3.5 py-2.5 align-top text-ink-soft">
                    {row.corpo}
                  </td>
                  <td className="border-b border-ink/10 px-3.5 py-2.5 align-top text-ink-soft">
                    {row.notas}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
    </Container>
  );
}
