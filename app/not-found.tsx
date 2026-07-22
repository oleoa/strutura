import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

const quickLinks = [
  { label: "Pharos", href: "/#pharos" },
  { label: "Contato", href: "/#contato" },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-[70svh] flex-col items-center justify-center overflow-hidden bg-background px-6 py-24 text-center">
      {/* Brilho quente ambiente */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_38%,rgba(228,210,168,0.6)_0%,transparent_70%)]"
      />

      <div className="relative flex max-w-xl flex-col items-center">
        <span className="rounded-full border border-mustard-border bg-mustard-soft px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-mustard-ink">
          Erro 404
        </span>

        <h1 className="mt-6 text-4xl text-foreground sm:text-5xl">
          Página não <span className="italic text-mustard">encontrada</span>
        </h1>

        <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
          Essa página não existe ou mudou de endereço. A volta é curta.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <Button asChild size="xl" className="rounded-full">
            <Link href="/">
              <ArrowLeft className="size-5" />
              Voltar ao início
            </Link>
          </Button>
          <Button asChild variant="outline" size="xl" className="rounded-full">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="size-5" />
              Falar com o Leonardo
            </a>
          </Button>
        </div>

        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {quickLinks.map((link, i) => (
            <div key={link.href} className="flex items-center gap-x-5">
              {i > 0 && (
                <span aria-hidden className="text-border">
                  ·
                </span>
              )}
              <Link
                href={link.href}
                className="text-ink-muted transition-colors hover:text-mustard-ink"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        <p className="mt-10 font-serif text-sm text-ink-muted">
          Não é disciplina. É{" "}
          <span className="italic text-mustard-ink">strutura</span>.
        </p>
      </div>
    </main>
  );
}
