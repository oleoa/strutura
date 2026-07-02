import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";
import PharosShowcase from "@/components/PharosShowcase";
import StudioShowcase from "@/components/StudioShowcase";

export default function ProductsSection() {
  return (
    <section id="produtos" className="scroll-mt-24 bg-background py-24 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 md:gap-28 md:px-10">
        <RevealOnScroll>
          <SectionHeader
            num="02"
            eyebrow="Produtos"
            title={
              <>
                O que a Strutura{" "}
                <span className="italic text-mustard">constrói</span>.
              </>
            }
          />
          <p className="mt-6 max-w-2xl text-lg text-ink-soft">
            Dois produtos no ar. Os dois rodam todos os dias dentro da própria
            Strutura.
          </p>
        </RevealOnScroll>

        <PharosShowcase />
        <StudioShowcase />
      </div>
    </section>
  );
}
