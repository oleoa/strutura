import {
  Callout,
  Card,
  Container,
  DotList,
  Prose,
  Section,
  Subhead,
} from "./ui";

export default function IdentidadeSection() {
  return (
    <Container>
      <Section
        id="identidade"
        num="10."
        title="Identidade visível"
        meta="Instagram · tagline · assinatura · óculos"
      >
        <Subhead>Instagram</Subhead>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card label="Handle" title="@leoabreu.ia">
            <p>
              A marca-mãe é o Leonardo, então o handle é ELE; &ldquo;Leo&rdquo;
              pela proximidade; &ldquo;.ia&rdquo; recupera o sinal de
              categoria.
            </p>
          </Card>
          <Card label="Display name" title="Leo Abreu · Organização com IA">
            <p>
              Carrega a <strong>categoria</strong> que o handle só insinua no
              &ldquo;.ia&rdquo;: organização com IA, nessa ordem (sistema
              primeiro, ferramenta depois). Strutura segue fora; o domínio e o
              contexto dos posts fazem esse trabalho.
            </p>
          </Card>
        </div>
        <div className="mt-4 max-w-[740px]">
          <Card label="Bio · fonte de verdade">
            <p className="font-serif text-[17px] leading-[1.5] text-ink [font-variation-settings:'opsz'_40]">
              Controle sobre a vida e negócio
              <br />
              Mostrando meus sistemas
              <br />
              Para empreendedores no digital
              <br />
              Aprenda como ⤵
            </p>
            <p className="mt-3.5">
              Quatro linhas, uma escada: <strong>o destino</strong> (controle,
              o único destino que a marca nomeia) · <strong>a prova</strong>{" "}
              (mostrar o próprio sistema, o modelo da seção 05: o conteúdo
              ensina a construir) · <strong>para quem</strong> ·{" "}
              <strong>a porta</strong> pro link. A seta é apontamento, não
              enfeite; é a única figura permitida ali.
            </p>
          </Card>
        </div>
        <div className="mt-5 max-w-[740px]">
          <DotList
            items={[
              <>
                <strong>Strutura deliberadamente FORA da bio</strong>: o
                contexto dos posts e o domínio strutura.ai contextualizam
                sem gastar espaço de bio.
              </>,
              <>
                Categoria/label do perfil <strong>oculta</strong> (era em
                inglês num perfil em português, selo de guru).
              </>,
              <>
                <strong>
                  Assinatura de posts: &ldquo;Leo Abreu · Strutura&rdquo;
                </strong>{" "}
                em todos os posts.
              </>,
              <>
                <strong>Assinatura não é tagline:</strong> a tagline
                (&ldquo;Não é disciplina. É strutura.&rdquo;, logo abaixo) é
                frase de marca e vive nas superfícies do site; a assinatura é
                crédito de peça. As duas nunca dividem o mesmo bloco.
              </>,
              <>
                <strong>Regra de handle:</strong> se um handle limpo estiver
                tomado, ADICIONA (sobrenome, ponto): nunca mutila vogais;
                handle comprimido lê como growth-hacker.
              </>,
            ]}
          />
        </div>

        <Subhead>Tagline</Subhead>
        <p className="max-w-[740px] font-serif text-[30px] font-medium leading-[1.15] tracking-[-0.01em] [font-variation-settings:'opsz'_60] sm:text-[38px]">
          Não é disciplina.
          <br />É <em className="italic text-mustard">strutura</em>.
        </p>
        <Prose className="mt-5">
          O dogma condensado: o diagnóstico (não é caráter) e a solução
          (sistema) em cinco palavras, com o nome da marca dentro. É a única
          tagline da casa.
        </Prose>
        <Callout title="Regras da tagline">
          <DotList
            items={[
              <>
                <strong>Grafia canônica com o trocadilho:</strong> sempre{" "}
                <code>strutura</code> (minúsculo, sem o &ldquo;e&rdquo;), em
                toda superfície, inclusive metadata. Nunca{" "}
                <em>&ldquo;é estrutura&rdquo;</em>.
              </>,
              <>
                O <strong>ponto final depois de &ldquo;disciplina&rdquo;</strong>{" "}
                é parte da frase: são duas sentenças, nunca uma vírgula.
              </>,
              <>
                A ênfase cai <strong>sempre na segunda palavra</strong>: itálico
                na mostarda do clima (<code>#C98A2B</code> no Bosque,{" "}
                <code>#A9741F</code> no Campo).
              </>,
              <>
                É <strong>tagline, não assinatura</strong>: a assinatura de
                posts segue &ldquo;Leo Abreu · Strutura&rdquo; (acima). As
                duas nunca aparecem no mesmo bloco.
              </>,
              <>
                <strong>Onde vive hoje:</strong> hero da home, bloco de marca do
                footer, metadata (title/OG/Twitter) e página 404.
              </>,
            ]}
          />
        </Callout>

        <Subhead>Dispositivo pessoal · os óculos</Subhead>
        <Prose>
          Aviador de lente <strong>ÂMBAR</strong> (Ray-Ban Aviator, tint
          âmbar/laranja fixo, não fotocromático; nunca o verde/G-15
          polarizado). Dois motivos:
        </Prose>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Card label="Motivo 01">
            <p>
              Lente translúcida <strong>mantém os olhos visíveis</strong>:
              contato visual é o mecanismo do professor; lente
              escura/espelhada esconde os olhos e cria distância = sinal de
              guru.
            </p>
          </Card>
          <Card label="Motivo 02">
            <p>
              O tint âmbar <strong>É a cor mostarda da marca no rosto.</strong>
            </p>
          </Card>
        </div>
        <Callout title="Regras dos óculos">
          <strong>UM modelo sempre</strong> (reconhecimento vive na
          repetição); âmbar para caminhada/b-roll/natureza; considerar sem
          óculos em takes de fala com contato visual direto; parear com o
          clima Campo/natureza.
        </Callout>
      </Section>
    </Container>
  );
}
