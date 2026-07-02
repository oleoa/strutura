import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

export default function CommunitySection() {
  return (
    <section id="comunidade" className="scroll-mt-24 bg-background py-20 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <RevealOnScroll className="flex flex-col items-center">
          <SectionHeader
            num="04"
            eyebrow="Comunidade"
            align="center"
            title={
              <>
                Vai ter <span className="italic text-mustard">comunidade</span>.
              </>
            }
          />

          <span className="mt-8 rounded-full border border-border px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
            Em breve
          </span>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            A Strutura vai abrir um espaço para quem constrói a própria
            estrutura digital. Sem lista de espera: quando abrir, o aviso sai
            no{" "}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mustard-ink underline decoration-mustard-border underline-offset-4 transition-colors hover:decoration-mustard-ink"
            >
              {INSTAGRAM_HANDLE}
            </a>
            .
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
