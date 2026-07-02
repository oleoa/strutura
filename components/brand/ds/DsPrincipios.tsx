import { Card, Container, Section } from "../ui";

export default function DsPrincipios() {
  return (
    <Container>
      <Section
        id="ds-principios"
        num="10.2"
        title="Princípios"
        meta="Dogma → forma. O design obedece a estes cinco."
        sub
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            label="Princípio 01"
            title={<>&ldquo;A IA é o braço, <em>não a cabeça</em>&rdquo;</>}
          >
            <p>
              Cada elemento tem função. Nada decora à toa. Se um número, uma
              linha ou um selo não carrega informação ou estrutura, ele sai.
              Seco.
            </p>
          </Card>
          <Card label="Princípio 02" title={<>&ldquo;Calma é <em>método</em>&rdquo;</>}>
            <p>
              Respiro e ritmo — mas calma ≠ vazio (esse foi o erro do sistema
              antigo). O alvo é <strong>densidade com fôlego</strong>:
              conteúdo denso, hierarquia clara, espaço que trabalha.
            </p>
          </Card>
          <Card
            label="Princípio 03"
            title={<>&ldquo;Construtor, <em>não guru</em>&rdquo;</>}
          >
            <p>
              Textura, grão, imperfeição honesta. O oposto do
              gradiente-startup limpo. A peça pode parecer papel, filme,
              oficina — nunca pitch deck.
            </p>
          </Card>
          <Card
            label="Princípio 04"
            title={
              <>&ldquo;Aesthetic na forma, <em>seco na palavra</em>&rdquo;</>
            }
          >
            <p>
              A estética pode ser cinematográfica; a palavra é sempre teto de
              informação, nunca motivacional vazio. Se a frase serve pra
              qualquer marca, ela não serve pra nenhuma peça nossa.
            </p>
          </Card>
          <Card
            label="Princípio 05"
            title={<>&ldquo;Natureza como <em>device</em>&rdquo;</>}
          >
            <p>
              Paisagem entra como prova do ambiente calmo — o oposto do
              escritório caótico que o Diego vive. Nunca como wallpaper
              motivacional.
            </p>
          </Card>
        </div>
      </Section>
    </Container>
  );
}
