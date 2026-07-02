import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

const FACTS: React.ReactNode[] = [
  "Fundada e construída por Leonardo Abreu.",
  "O Pharos no ar, construído e usado dentro de casa.",
  "Tudo roda primeiro dentro de casa: o Pharos organiza os contatos da própria Strutura.",
  <>
    O processo é público, no{" "}
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-mustard-ink underline decoration-mustard-border underline-offset-4 transition-colors hover:decoration-mustard-ink"
    >
      {INSTAGRAM_HANDLE}
    </a>
    .
  </>,
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
                  A Strutura constrói a própria{" "}
                  <span className="italic text-mustard">estrutura</span>.
                </>
              }
            />
          </RevealOnScroll>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <RevealOnScroll delay={0.1}>
            <ul className="flex flex-col">
              {FACTS.map((fact, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-4 border-t border-border py-5 text-lg leading-relaxed text-ink-soft last:border-b"
                >
                  <span
                    aria-hidden
                    className="font-serif text-sm italic text-mustard"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
