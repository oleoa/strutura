/* Seção 02 — O dogma. A seção de maior peso da página: clima Bosque
   (o "susto visual" deliberado — a única superfície escura do documento). */

export default function DogmaSection() {
  return (
    <section id="dogma" className="mb-20 scroll-mt-8">
      <div className="grain-bosque bg-bosque-deep py-14 sm:py-16 [background-image:radial-gradient(120%_65%_at_50%_-15%,rgba(228,210,168,0.22)_0%,rgba(228,210,168,0)_60%),linear-gradient(175deg,#26382b_0%,#14201a_62%)]">
        <div className="mx-auto w-full max-w-[1080px] px-5 sm:px-8">
          <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-bone/20 pb-3">
            <span className="font-serif text-sm font-medium italic text-mustard-bosque">
              02.
            </span>
            <h2 className="font-serif text-[26px] font-medium tracking-[-0.01em] text-bone sm:text-3xl [font-variation-settings:'opsz'_60]">
              O dogma
            </h2>
            <span className="ml-auto text-xs text-bone/55 max-sm:ml-0 max-sm:w-full sm:text-right">
              A crença-raiz que não se negocia
            </span>
          </div>

          <p className="mb-8 mt-8 max-w-[16ch] font-serif text-[clamp(40px,6vw,64px)] font-[350] leading-[1.06] tracking-[-0.015em] text-bone [font-variation-settings:'opsz'_144]">
            A IA é braço,{" "}
            <em className="italic text-gold-light">nunca cabeça.</em>
          </p>

          <div className="max-w-[740px] space-y-3.5 text-[14.5px] leading-[1.75] text-bone/[0.82] [&_strong]:font-semibold [&_strong]:text-bone">
            <p>
              Mais fundo que o posicionamento. O posicionamento é como a marca
              se coloca no mercado; o dogma é a crença-raiz que não se negocia
              — a que cria <strong>inimigos</strong>, não só diferenciação.
              Nasceu na engenharia dos produtos, não numa sessão de marca: por
              isso é verdadeiro, o produto prova sozinho.
            </p>
            <p>
              Ela executa a função e recua na autoria. Vai até o fim do
              trabalho chato e para na porta do humano. Quem entrega a própria
              cabeça — por medo, preguiça, ou por achar a IA um deus — é
              engolido; não pela IA, pela própria escolha de ajoelhar. Quem a
              usa como braço, dirigindo com a própria cabeça, escala e mostra
              valor.
            </p>
          </div>

          <h3 className="mb-3.5 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-bone/60">
            A linha nunca é <em className="italic">quanto</em> automatizar — é{" "}
            <em className="italic">o quê</em>
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[4px] border border-bone/20 px-6 py-5.5">
              <div className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-bosque">
                Função (encanamento)
              </div>
              <h4 className="mb-2 font-serif text-[19px] font-medium leading-[1.25] text-bone [font-variation-settings:'opsz'_40]">
                A IA vai <em className="italic text-gold-light">até o fim</em>
              </h4>
              <p className="text-[13.5px] leading-[1.65] text-bone/[0.78]">
                Um Instagram comercial é operação/finança, não arte — nenhuma
                autoria é violada. Por isso aqui a IA pode gerar o post
                inteiro: a cabeça continua sendo você, ditando frase por
                frase, layout por layout.
              </p>
            </div>
            <div className="rounded-[4px] border border-bone/20 px-6 py-5.5">
              <div className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-bosque">
                Autoria + relação humana
              </div>
              <h4 className="mb-2 font-serif text-[19px] font-medium leading-[1.25] text-bone [font-variation-settings:'opsz'_40]">
                A IA vai até a porta{" "}
                <em className="italic text-gold-light">e recua</em>
              </h4>
              <p className="text-[13.5px] leading-[1.65] text-bone/[0.78]">
                O Pharos lê, categoriza, organiza, relembra a conversa e aponta
                o próximo passo — e <strong className="font-semibold text-bone">para antes de responder</strong>.
                Devolve a decisão pro humano, nunca fala por ele. No instante
                em que outra pessoa entra na relação, a IA sai.
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-[740px] text-[14.5px] leading-[1.75] text-bone/[0.82]">
            <strong className="font-semibold text-bone">
              A arte é a cabeça humana em estado puro
            </strong>{" "}
            — por isso é o exemplo mais alto do que a IA não toca.
          </p>

          <h3 className="mb-3.5 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-bone/60">
            Os três hereges — a mesma heresia: tratar a IA como{" "}
            <em className="italic">mais</em> do que ela é
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                n: "01",
                title: "O vendedor de hype",
                body: "IA = mágica e urgência; tudo aponta pra um curso.",
              },
              {
                n: "02",
                title: "O evangelista da IA-artista",
                body: "IA cria e substitui o humano (arte, design, música).",
              },
              {
                n: "03",
                title: "O que odeia a IA",
                body: "Posta contra achando que faz algo, em vez de jogar com a carta que está na mesa.",
              },
            ].map((h) => (
              <div
                key={h.n}
                className="rounded-[4px] border border-bone/20 px-5 py-4.5"
              >
                <span className="font-serif text-lg italic text-mustard-bosque">
                  {h.n}
                </span>
                <h4 className="mb-1 mt-1 text-sm font-semibold text-bone">
                  {h.title}
                </h4>
                <p className="text-[13px] leading-[1.6] text-bone/[0.72]">
                  {h.body}
                </p>
              </div>
            ))}
          </div>

          <div className="my-8 max-w-[740px] border-l-[3px] border-mustard-bosque py-1 pl-5.5 text-sm leading-[1.7] text-bone/[0.82]">
            <span className="mb-1.5 block font-serif text-[17px] italic text-bone">
              A prova mais cara
            </span>
            O Pharos recusa de propósito o bot que responde sozinho — a feature
            que o mercado inteiro vende como o auge, a mais fácil de vender.
            Abrir mão dela é o dogma virando arquitetura.{" "}
            <strong className="font-semibold text-bone">
              É o &ldquo;não&rdquo; mais caro.
            </strong>
          </div>

          <h3 className="mb-3.5 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-bone/60">
            As três frases de rua — sistema que rima
            (&ldquo;cabeça&rdquo; volta em duas)
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Bandeira · topo, repetir sempre",
                frase: "A IA é o braço, não a cabeça.",
              },
              {
                label: "Explicação · o mecanismo",
                frase: "A IA faz o trabalho todo e te devolve a decisão.",
              },
              {
                label: "Instrução · o fechamento",
                frase: "Delega o chato. A cabeça é tua.",
              },
            ].map((f) => (
              <div
                key={f.label}
                className="rounded-[4px] border border-bone/20 px-5 py-4.5"
              >
                <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-bosque">
                  {f.label}
                </div>
                <p className="font-serif text-[19px] font-medium leading-[1.3] text-bone [font-variation-settings:'opsz'_40]">
                  {f.frase}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-[740px] space-y-3.5 text-[14.5px] leading-[1.75] text-bone/[0.82] [&_strong]:font-semibold [&_strong]:text-bone [&_code]:rounded-[3px] [&_code]:bg-bone/10 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-bone">
            <p>
              <strong>Cuidado de copy:</strong> é{" "}
              <em className="italic">delega/delegue à IA</em>, nunca
              &ldquo;delegue a IA&rdquo;. E o que fica com o humano{" "}
              <strong>não</strong> é &ldquo;a parte criativa&rdquo; (isso
              contradiz &ldquo;Instagram comercial não é arte&rdquo;) — é{" "}
              <em className="italic text-gold-light">
                a cabeça · a decisão · a autoria
              </em>
              .
            </p>
            <p>
              O dogma <strong>não</strong> precisa aparecer em todo post — é a
              crença-raiz, acionada quando cabe, não um carimbo em todo
              conteúdo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
