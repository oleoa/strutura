/* Seção 03: o dogma. A seção de maior peso da página: clima Bosque
   (o "susto visual" deliberado, a única superfície escura do documento). */

export default function DogmaSection() {
  return (
    <section id="dogma" className="mb-20 scroll-mt-8">
      <div className="grain-bosque bg-bosque-deep py-14 sm:py-16 [background-image:radial-gradient(120%_65%_at_50%_-15%,rgba(228,210,168,0.22)_0%,rgba(228,210,168,0)_60%),linear-gradient(175deg,#26382b_0%,#14201a_62%)]">
        <div className="mx-auto w-full max-w-[1080px] px-5 sm:px-8">
          <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-bone/20 pb-3">
            <span className="font-serif text-sm font-medium italic text-mustard-bosque">
              03.
            </span>
            <h2 className="font-serif text-[26px] font-medium tracking-[-0.01em] text-bone sm:text-3xl [font-variation-settings:'opsz'_60]">
              O dogma
            </h2>
            <span className="ml-auto text-xs text-bone/55 max-sm:ml-0 max-sm:w-full sm:text-right">
              A crença-raiz que não se negocia
            </span>
          </div>

          <p className="mb-8 mt-8 max-w-[20ch] font-serif text-[clamp(40px,6vw,64px)] font-[350] leading-[1.06] tracking-[-0.015em] text-bone [font-variation-settings:'opsz'_144]">
            Caos não é falta de disciplina.
            <br />É falta de{" "}
            <em className="italic text-gold-light">sistema.</em>
          </p>

          <div className="max-w-[740px] space-y-3.5 text-[14.5px] leading-[1.75] text-bone/[0.82] [&_strong]:font-semibold [&_strong]:text-bone">
            <p>
              Mais fundo que o posicionamento. O posicionamento é como a marca
              se coloca no mercado; o dogma é a crença-raiz que não se negocia,
              a que cria <strong>inimigos</strong>, não só diferenciação. Por
              extenso:{" "}
              <strong>
                caos não acontece por falta de disciplina ou foco, acontece por
                falta de um bom sistema para lidarmos com as informações e
                emoções da nossa vida.
              </strong>
            </p>
            <p>
              A cabeça é ótima pra ter ideias e resolver problemas, e péssima
              em armazená-las. O sistema existe pra segurar as informações, e
              as emoções que elas carregam, e devolver à cabeça só o que ela
              faz bem: <strong>decidir</strong>.
            </p>
            <p>
              O outro lado é emocional: podemos ficar super-estimulados e
              ansiosos quando temos grandes ambições ou quando estamos passando
              por grandes problemas.{" "}
              <strong>
                Escrever sobre como nos sentimos e o que podemos fazer alivia
                muito esse peso e nos dá direção.
              </strong>
            </p>
          </div>

          <h3 className="mb-3.5 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-bone/60">
            Os dois diagnósticos <em className="italic">errados</em>
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[4px] border border-bone/20 px-6 py-5.5">
              <div className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-bosque">
                Diagnóstico 01
              </div>
              <h4 className="mb-2 font-serif text-[19px] font-medium leading-[1.25] text-bone [font-variation-settings:'opsz'_40]">
                &ldquo;Me falta{" "}
                <em className="italic text-gold-light">disciplina</em>&rdquo;
              </h4>
              <p className="text-[13.5px] leading-[1.65] text-bone/[0.78]">
                O falso defeito de caráter. Ninguém segura agenda, prazo e
                ideia de cabeça; quem tenta vive apagando incêndio e assina a
                culpa. O que falta é engenharia, não força de vontade.
              </p>
            </div>
            <div className="rounded-[4px] border border-bone/20 px-6 py-5.5">
              <div className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-bosque">
                Diagnóstico 02
              </div>
              <h4 className="mb-2 font-serif text-[19px] font-medium leading-[1.25] text-bone [font-variation-settings:'opsz'_40]">
                &ldquo;Me falta a{" "}
                <em className="italic text-gold-light">ferramenta certa</em>
                &rdquo;
              </h4>
              <p className="text-[13.5px] leading-[1.65] text-bone/[0.78]">
                O reflexo de baixar mais um app. Ferramenta escolhida antes do
                sistema vira mais um lugar onde as coisas se perdem:{" "}
                <strong className="font-semibold text-bone">
                  acelera o caos em vez de resolver.
                </strong>
              </p>
            </div>
          </div>

          <h3 className="mb-3.5 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-bone/60">
            O papel da IA dentro do sistema: braço,{" "}
            <em className="italic">nunca cabeça</em>
          </h3>
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-bosque">
            Sub-dogma
          </p>
          <p className="mb-5 max-w-[26ch] font-serif text-[clamp(22px,3.2vw,30px)] font-[350] leading-[1.22] tracking-[-0.01em] text-bone [font-variation-settings:'opsz'_96]">
            Um bom uso da IA ajuda na{" "}
            <em className="italic text-gold-light">organização</em>, e uma boa
            organização melhora o uso da{" "}
            <em className="italic text-gold-light">IA</em>.
          </p>
          <p className="mb-5 max-w-[740px] text-[14.5px] leading-[1.75] text-bone/[0.82] [&_strong]:font-semibold [&_strong]:text-bone">
            Dentro do sistema, a IA executa a função e recua na autoria. Vai
            até o fim do trabalho chato e para na porta do humano:{" "}
            <strong>devolve a decisão a quem decide</strong>. É sempre possível
            entregar a decisão para a IA e deixar ela decidir, mas deixa de ser
            seu trabalho, sua arte e deixa de estar ao seu controle. A linha
            nunca é <em className="italic">quanto</em> automatizar; é{" "}
            <em className="italic">o quê</em>.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[4px] border border-bone/20 px-6 py-5.5">
              <div className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-bosque">
                Função (encanamento)
              </div>
              <h4 className="mb-2 font-serif text-[19px] font-medium leading-[1.25] text-bone [font-variation-settings:'opsz'_40]">
                A IA vai <em className="italic text-gold-light">até o fim</em>
              </h4>
              <p className="text-[13.5px] leading-[1.65] text-bone/[0.78]">
                Um Instagram comercial é operação/finança, não arte: nenhuma
                autoria é violada. Por isso aqui a IA pode gerar o post
                inteiro; a cabeça continua sendo você, ditando frase por
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
                o próximo passo, e{" "}
                <strong className="font-semibold text-bone">
                  para antes de responder
                </strong>
                . Devolve a decisão pro humano, nunca fala por ele. No instante
                em que outra pessoa entra na relação, a IA sai.
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-[740px] text-[14.5px] leading-[1.75] text-bone/[0.82]">
            <strong className="font-semibold text-bone">
              A arte é a cabeça humana em estado puro
            </strong>
            ; por isso é o exemplo mais alto do que a IA não toca.
          </p>

          <div className="my-8 max-w-[740px] border-l-[3px] border-mustard-bosque py-1 pl-5.5 text-sm leading-[1.7] text-bone/[0.82]">
            <span className="mb-1.5 block font-serif text-[17px] italic text-bone">
              A prova mais cara
            </span>
            O Pharos recusa de propósito o bot que responde sozinho, a feature
            que o mercado inteiro vende como o auge, a mais fácil de vender.
            Abrir mão dela é o dogma virando arquitetura.{" "}
            <strong className="font-semibold text-bone">
              É o &ldquo;não&rdquo; mais caro. Decisão de produto e orgulho da
              casa.
            </strong>
          </div>

          <h3 className="mb-3.5 mt-10 text-xs font-semibold uppercase tracking-[0.14em] text-bone/60">
            As três frases de rua do papel da IA
          </h3>
          <ul className="max-w-[740px] space-y-2.5">
            {[
              {
                label: "Bandeira",
                frase: "A IA é o braço, não a cabeça.",
              },
              {
                label: "Mecanismo",
                frase: "A IA faz o trabalho todo e te devolve a decisão.",
              },
              {
                label: "Fechamento",
                frase: "Delega o chato. A cabeça é tua.",
              },
            ].map((f) => (
              <li key={f.label} className="flex flex-wrap items-baseline gap-x-3">
                <span className="w-28 shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-mustard-bosque">
                  {f.label}
                </span>
                <span className="font-serif text-[17px] font-medium leading-[1.3] text-bone [font-variation-settings:'opsz'_40]">
                  {f.frase}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 max-w-[740px] space-y-3.5 text-[14.5px] leading-[1.75] text-bone/[0.82] [&_strong]:font-semibold [&_strong]:text-bone">
            <p>
              <strong>Cuidado de copy:</strong> é{" "}
              <em className="italic">delega/delegue à IA</em>, nunca
              &ldquo;delegue a IA&rdquo;. E o que fica com o humano{" "}
              <strong>não</strong> é &ldquo;a parte criativa&rdquo; (isso
              contradiz &ldquo;Instagram comercial não é arte&rdquo;); é{" "}
              <em className="italic text-gold-light">
                a cabeça · a decisão · a autoria
              </em>
              .
            </p>
            <p>
              O dogma <strong>não</strong> precisa aparecer em todo post: é a
              crença-raiz, acionada quando cabe, não um carimbo em todo
              conteúdo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
