import Image from "next/image";
import {
  ChevronRight,
  Globe,
  MessageCircle,
  Users,
  type LucideIcon,
} from "lucide-react";

type LinkItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const links: LinkItem[] = [
  {
    icon: Users,
    title: "Strutura Pharos",
    description: "Organização e Classificação Automática de Leads e Clientes",
    href: "https://crm.strutura.ai",
  },
  {
    icon: Globe,
    title: "Sites",
    description: "Site profissional para o teu negócio",
    href: "https://sites.strutura.ai",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Fala diretamente comigo",
    href: "https://wa.me/351931135852",
  },
];

export default function LinksPage() {
  return (
    <main className="relative flex min-h-svh flex-col items-center overflow-hidden bg-background px-6 py-16">
      {/* Brilho quente ambiente */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72"
        style={{
          background:
            "radial-gradient(80% 100% at 50% 0%, rgba(201,154,45,0.16) 0%, transparent 70%)",
        }}
      />
      <div className="relative flex w-full max-w-md flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full bg-mustard-soft opacity-70 blur-xl"
            />
            <Image
              src="/pfp.jpg"
              width={112}
              height={112}
              alt="Leonardo Abreu de Paulo"
              priority
              className="relative rounded-full border-2 border-mustard-border shadow-md"
            />
          </div>
          <h1 className="mt-5 text-3xl text-foreground">
            Leonardo <span className="not-italic text-ink-faint">·</span>{" "}
            <span className="italic text-mustard">Strutura</span>
          </h1>
          <p className="mt-2 text-center text-sm text-ink-muted">
            Infraestrutura digital para empresários
          </p>
        </div>

        <div className="mt-10 w-full flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-4 p-4 rounded-2xl bg-card border border-border shadow-md hover:border-mustard-border hover:bg-muted transition-all duration-300"
            >
              <div className="shrink-0 p-3 rounded-xl bg-mustard-soft border border-mustard-border group-hover:bg-mustard-soft-hover transition-colors duration-300">
                <link.icon
                  className="w-5 h-5 text-mustard-ink"
                  strokeWidth={1.75}
                />
              </div>
              <div className="flex flex-col min-w-0">
                <h3 className="font-semibold text-foreground leading-snug">
                  {link.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {link.description}
                </p>
              </div>
              <ChevronRight
                className="ml-auto w-4 h-4 shrink-0 text-ink-muted group-hover:text-mustard-ink transition-colors duration-300"
                strokeWidth={1.75}
              />
            </a>
          ))}
        </div>

        <a
          href="https://strutura.ai"
          className="mt-12 text-xs text-ink-muted hover:text-mustard-ink transition-colors"
        >
          strutura.ai
        </a>
      </div>
    </main>
  );
}
