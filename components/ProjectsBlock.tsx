import { ArrowUpRight } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { WHATSAPP_URL } from "@/lib/site";

export default function ProjectsBlock() {
  return (
    <div>
      <RevealOnScroll>
        <div className="max-w-2xl border-t border-bone/15 pt-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-mustard-bosque">
            Projetos sob medida
          </p>
          <h3 className="mt-5 font-serif text-3xl font-medium leading-[1.12] tracking-tight text-bone md:text-4xl">
            Estrutura construída por{" "}
            <span className="italic text-mustard-bosque">projeto</span>.
          </h3>
          <p className="mt-6 text-base leading-relaxed text-bone/80 md:text-lg">
            Sites, lojas, landing pages, automações e agentes de IA. Sob
            medida, direto comigo, sem agência. Cada projeto começa por uma
            conversa.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-mustard-bosque transition-colors hover:text-gold-light"
          >
            Falar comigo
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
          </a>
        </div>
      </RevealOnScroll>
    </div>
  );
}
