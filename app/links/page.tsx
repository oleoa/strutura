import Image from "next/image";
import {
  ChevronRight,
  Globe,
  Inbox,
  MessageCircle,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { PHAROS_URL, STUDIO_URL, WHATSAPP_URL } from "@/lib/site";

type LinkItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const links: LinkItem[] = [
  {
    icon: Inbox,
    title: "Pharos",
    description: "A IA organiza leads e clientes. Quem responde é você.",
    href: PHAROS_URL,
  },
  {
    icon: Palette,
    title: "Studio",
    description: "Posts comerciais prontos. O @leoabreu.ia é feito nele.",
    href: STUDIO_URL,
  },
  {
    icon: Globe,
    title: "Site da Strutura",
    description: "Os produtos, o método e quem constrói.",
    href: "https://strutura.ai",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Falar com o Leonardo.",
    href: WHATSAPP_URL,
  },
];

export default function LinksPage() {
  return (
    <main className="relative flex min-h-svh flex-col items-center overflow-hidden bg-background px-6 py-16">
      {/* Brilho quente ambiente */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(80%_100%_at_50%_0%,rgba(228,210,168,0.7)_0%,transparent_70%)]"
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
              alt="Leonardo Abreu"
              priority
              className="relative rounded-full border-2 border-mustard-border shadow-md"
            />
          </div>
          <h1 className="mt-5 text-3xl text-foreground">
            Leo Abreu <span className="not-italic text-ink-faint">·</span>{" "}
            <span className="italic text-mustard">Strutura</span>
          </h1>
          <p className="mt-2 text-center text-sm text-ink-muted">
            Produtos próprios, construídos com método
          </p>
        </div>

        <div className="mt-10 flex w-full flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-md transition-all duration-300 hover:border-mustard-border hover:bg-muted"
            >
              <div className="shrink-0 rounded-xl border border-mustard-border bg-mustard-soft p-3 transition-colors duration-300 group-hover:bg-mustard-soft-hover">
                <link.icon
                  className="h-5 w-5 text-mustard-ink"
                  strokeWidth={1.75}
                />
              </div>
              <div className="flex min-w-0 flex-col">
                <h3 className="font-semibold leading-snug text-foreground">
                  {link.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {link.description}
                </p>
              </div>
              <ChevronRight
                className="ml-auto h-4 w-4 shrink-0 text-ink-muted transition-colors duration-300 group-hover:text-mustard-ink"
                strokeWidth={1.75}
              />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
