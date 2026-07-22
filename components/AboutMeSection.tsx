import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";
import { ABOUT_PHOTO, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

export default function AboutMeSection() {
  return (
    <section id="quem-sou-eu" className="scroll-mt-24 bg-card py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <RevealOnScroll>
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border-strong shadow-lg">
              <Image
                src={ABOUT_PHOTO}
                alt="Leonardo Abreu"
                fill
                sizes="(min-width: 768px) 33vw, 80vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <RevealOnScroll delay={0.1}>
            <SectionHeader
              num="03"
              eyebrow="Quem sou eu"
              title={
                <>
                  Eu criei a <span className="italic text-mustard">Strutura</span>.
                </>
              }
            />

            <div className="mt-8 flex max-w-xl flex-col gap-4 text-lg leading-relaxed text-ink-soft">
              <p>
                Meu nome é Leonardo Abreu. Eu empreendo sozinho: a vida e o
                negócio rodam no mesmo sistema, que eu construí e mantenho
                todos os dias.
              </p>
              <p>
                A Strutura é onde esse sistema vira produto. O Pharos nasceu
                assim: um pedaço da minha estrutura que eu uso no meu próprio
                negócio e decidi abrir.
              </p>
              <p>
                O processo fica público no{" "}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mustard-ink underline decoration-mustard-border underline-offset-4 transition-colors hover:decoration-mustard-ink"
                >
                  {INSTAGRAM_HANDLE}
                </a>
                . O que aparece lá foi feito aqui.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-mustard-ink">
                Leo Abreu · Strutura
              </span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-mustard-ink"
              >
                Instagram
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
