import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

const STEPS = [
  "Entender os processos da vida e do negócio.",
  "Criar e manter um sistema que segura esses processos.",
  "Usar as ferramentas que temos ao nosso dispor, como a IA, dentro do sistema, do jeito mais eficaz.",
];

export default function StruturaSection() {
  return (
    <section id="a-strutura" className="scroll-mt-24 bg-card py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <RevealOnScroll>
            <SectionHeader
              num="01"
              eyebrow="A empresa"
              title={
                <>
                  Organizar é o veículo. O destino é o{" "}
                  <span className="italic text-mustard">controle</span>.
                </>
              }
            />
          </RevealOnScroll>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <RevealOnScroll delay={0.1}>
            <p className="text-lg leading-relaxed text-ink-soft">
              A minha missão com a Strutura: trazer controle sobre a vida
              através da organização da estrutura digital. Pra quem empreende
              sozinho e carrega o negócio e a vida no mesmo sistema, na mesma
              cabeça.
            </p>

            <ul className="mt-8 flex flex-col">
              {STEPS.map((step, i) => (
                <li
                  key={step}
                  className="flex items-baseline gap-4 border-t border-border py-5 text-lg leading-relaxed text-ink-soft last:border-b"
                >
                  <span
                    aria-hidden
                    className="font-serif text-sm italic text-mustard"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Sistema primeiro, ferramenta depois. Crio e uso para mim, e mostro
              o processo no{" "}
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
      </div>
    </section>
  );
}
