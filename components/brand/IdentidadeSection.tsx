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
        num="09."
        title="Identidade visível"
        meta="Instagram · assinatura · óculos"
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
          <Card label="Display name" title="Leo Abreu · IA para empreendedores">
            <p>
              Bio: L1 <em>Descomplicando IA para empreendedores</em> · L2{" "}
              <em>A IA jogando do seu lado · não contra você</em> · L3{" "}
              <em>Entenda como ⤵</em>
            </p>
          </Card>
        </div>
        <div className="mt-5 max-w-[740px]">
          <DotList
            items={[
              <>
                <strong>Strutura deliberadamente FORA da bio</strong> — o
                contexto dos posts e o domínio strutura.ai/links contextualizam
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
                <strong>Regra de handle:</strong> se um handle limpo estiver
                tomado, ADICIONA (sobrenome, ponto) — nunca mutila vogais;
                handle comprimido lê como growth-hacker.
              </>,
            ]}
          />
        </div>

        <Subhead>Página de links — strutura.ai/links</Subhead>
        <Prose>
          Build próprio em Next.js (dogfooding, não Linktree). Links
          self-serve de produto primeiro, WhatsApp/contato por último; futuro
          lead magnet assume a primeira posição quando existir.
        </Prose>

        <Subhead>Dispositivo pessoal — os óculos</Subhead>
        <Prose>
          Aviador de lente <strong>ÂMBAR</strong> (Ray-Ban Aviator, tint
          âmbar/laranja fixo, não fotocromático; nunca o verde/G-15
          polarizado). Dois motivos:
        </Prose>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Card label="Motivo 01">
            <p>
              Lente translúcida <strong>mantém os olhos visíveis</strong> —
              contato visual é o mecanismo de venda do professor que desarma o
              medo; lente escura/espelhada esconde os olhos e cria distância =
              sinal de guru.
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
