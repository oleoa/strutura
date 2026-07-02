import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeader from "@/components/SectionHeader";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { EMAIL, WHATSAPP_URL } from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-24 bg-card py-20 md:py-28">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <RevealOnScroll className="flex flex-col items-center">
          <SectionHeader
            num="05"
            eyebrow="Contato"
            align="center"
            title={
              <>
                A porta é o{" "}
                <span className="italic text-mustard">WhatsApp</span>.
              </>
            }
          />

          <p className="mt-6 text-lg text-ink-soft">
            Sem formulário: quem responde é o Leonardo.
          </p>

          <Button asChild size="xl" className="mt-8 rounded-full">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Falar com o Leonardo
            </a>
          </Button>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-5 text-sm text-ink-muted transition-colors hover:text-mustard-ink"
          >
            {EMAIL}
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
