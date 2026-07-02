import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { PHAROS_URL } from "@/lib/site";

const FACTS = [
  "Toda madrugada, a IA lê as conversas do dia e define etapa, próxima ação — e se é hora de agir ou de esperar.",
  "Cada vendedor conecta o próprio WhatsApp; o Instagram Direct entra junto, e a mesma pessoa nos dois canais vira um contato só.",
  "Áudio recebido vira texto automaticamente e entra na análise.",
  "Funil do seu jeito, e cada decisão da IA gravada com o raciocínio, para auditar.",
];

export default function PharosShowcase() {
  return (
    <div id="pharos" className="scroll-mt-24">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <RevealOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-mustard-ink">
              Pharos
            </p>
            <h3 className="mt-5 font-serif text-3xl font-medium leading-[1.12] tracking-tight text-foreground md:text-4xl">
              O Pharos organiza. Você{" "}
              <span className="italic text-mustard">responde</span>.
            </h3>
            <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
              O Pharos é o sistema da Strutura que classifica e organiza leads
              e clientes automaticamente. Ele lê as conversas do WhatsApp e do
              Instagram, interpreta o que aconteceu e deixa pronto o que você
              precisa ver: o que responder, o que ficou sem resposta e qual é a
              próxima ação.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
              O Pharos não responde por você — de propósito. Ninguém gosta de
              falar com um robô quando quer falar com uma pessoa. Ele prepara o
              trabalho; a conversa é sua.
            </p>

            <ul className="mt-8 flex flex-col">
              {FACTS.map((fact) => (
                <li
                  key={fact}
                  className="border-t border-border py-3.5 text-sm leading-relaxed text-ink-soft last:border-b"
                >
                  {fact}
                </li>
              ))}
            </ul>

            <a
              href={PHAROS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-mustard-ink transition-colors hover:text-mustard-hover"
            >
              Ver o Pharos
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
            </a>
          </RevealOnScroll>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <RevealOnScroll delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-transform duration-300 hover:-translate-y-1">
              <Image
                src="/pharos.png"
                alt="Painel do Pharos: saudação do dia, leads quentes e a lista de quem precisa de você hoje, com a próxima ação de cada conversa preparada pela análise noturna."
                width={2964}
                height={1674}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
