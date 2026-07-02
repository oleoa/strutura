import { ArrowUpRight } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import StudioPieces from "@/components/StudioPieces";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, STUDIO_URL } from "@/lib/site";

export default function StudioShowcase() {
  return (
    <div id="studio" className="scroll-mt-24">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:order-2 lg:col-span-5 lg:col-start-8">
          <RevealOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-mustard-ink">
              Studio
            </p>
            <h3 className="mt-5 font-serif text-3xl font-medium leading-[1.12] tracking-tight text-foreground md:text-4xl">
              O Studio desenha. Você{" "}
              <span className="italic text-mustard">publica</span>.
            </h3>
            <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
              O Studio é a ferramenta da Strutura para posts comerciais. Quase
              um Canva que faz por você: descreva a peça, o Studio gera — e
              depois você gerencia e organiza tudo num lugar só. É post de
              negócio, não arte; por isso, aqui, a IA pode fazer o trabalho
              inteiro.
            </p>

            <ul className="mt-8 flex flex-col">
              <li className="border-t border-border py-3.5 text-sm leading-relaxed text-ink-soft">
                O Instagram do Leonardo,{" "}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mustard-ink underline decoration-mustard-border underline-offset-4 transition-colors hover:decoration-mustard-ink"
                >
                  {INSTAGRAM_HANDLE}
                </a>
                , é feito inteiro no Studio.
              </li>
              <li className="border-y border-border py-3.5 text-sm leading-relaxed text-ink-soft">
                Geração, ajustes e organização das peças no mesmo lugar.
              </li>
            </ul>

            <a
              href={STUDIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-mustard-ink transition-colors hover:text-mustard-hover"
            >
              Ver o Studio
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
            </a>
          </RevealOnScroll>
        </div>

        <div className="min-w-0 lg:order-1 lg:col-span-7">
          <RevealOnScroll delay={0.1}>
            <StudioPieces />
            <p className="mt-5 text-xs text-ink-muted">
              Peças feitas no Studio — publicadas em{" "}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-mustard-ink"
              >
                {INSTAGRAM_HANDLE}
              </a>
              .
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
