import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";
import PharosShowcase from "@/components/PharosShowcase";
import ProjectsBlock from "@/components/ProjectsBlock";

export default function ProductsSection() {
  return (
    <section
      id="produtos"
      className="grain-bosque scroll-mt-24 bg-linear-175 from-bosque-mid to-bosque-deep to-62% py-24 md:py-32"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 md:gap-28 md:px-10">
        <RevealOnScroll>
          <SectionHeader
            num="02"
            eyebrow="Produtos"
            tone="bosque"
            title={
              <>
                O que eu{" "}
                <span className="italic text-mustard-bosque">construo</span>.
              </>
            }
          />
          <p className="mt-6 max-w-2xl text-lg text-bone/80">
            O que eu crio para mim vira produto. O que um cliente precisa, eu
            construo por projeto.
          </p>
        </RevealOnScroll>

        <PharosShowcase />

        <ProjectsBlock />
      </div>
    </section>
  );
}
