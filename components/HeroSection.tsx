import { ArrowDown } from "lucide-react";
import HeroBackdrop from "@/components/HeroBackdrop";
import ScrollButton from "@/components/ScrollButton";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="grain-bosque relative flex min-h-svh w-full flex-col overflow-hidden border-b border-gold-light/15 bg-bosque-deep"
    >
      <HeroBackdrop />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-28 pt-32 md:px-10">
        <h1 className="animate-rise max-w-4xl text-5xl leading-[1.05] text-bone sm:text-6xl md:text-7xl lg:text-8xl">
          Não é disciplina.
          <br />É <span className="italic text-mustard-bosque">strutura</span>.
        </h1>

        <p className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-bone/80 [animation-delay:120ms] md:text-xl">
          A Strutura é onde eu construo o sistema que organiza a minha vida e o
          meu negócio. Meus sistemas viram produtos que você pode usar também
          para estruturar sua vida e sua empresa.
        </p>

        <div className="animate-rise mt-10 [animation-delay:240ms]">
          <ScrollButton
            targetId="a-strutura"
            className="inline-flex h-12 items-center gap-2.5 rounded-full border border-bone/35 bg-bone/10 px-7 text-sm font-medium text-bone transition-colors hover:bg-bone/15"
          >
            Como funciona
            <ArrowDown className="size-4" aria-hidden />
          </ScrollButton>
        </div>
      </div>
    </section>
  );
}
