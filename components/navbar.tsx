"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { id: "o-que-fazemos", label: "O que fazemos" },
  { id: "pharos", label: "Pharos" },
  { id: "contato", label: "Contato" },
];

const WHATSAPP_URL =
  "https://wa.me/351931135852?text=Ol%C3%A1%20Leonardo%2C%20queria%20falar%20consigo.";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/pharos") || pathname.startsWith("/links")) return null;

  function handleNav(id: string) {
    setIsOpen(false);
    scrollToSection(id);
  }

  return (
    <div className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto max-w-5xl">
        {/* Pílula */}
        <div
          className={cn(
            "relative flex h-14 items-center justify-between gap-4 rounded-full bg-[#F5EFE0] pl-4 pr-2 transition-all duration-300 sm:pl-5 sm:pr-2.5",
            scrolled
              ? "border border-border-strong shadow-lg"
              : "border border-mustard-border/60 shadow-md",
          )}
        >
          <Link href="/" aria-label="Strutura" className="flex items-center gap-2 self-stretch">
            <Image
              src="/logo.png"
              width={80}
              height={80}
              alt="Strutura"
              priority
              className="h-full w-auto rounded-full"
            />
            <span className="font-serif text-base text-ink sm:text-lg">
              Strutura
            </span>
          </Link>

          {/* Links — desktop */}
          {isHome && (
            <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 md:flex">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-mustard-ink"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          )}

          {/* Ações — direita */}
          <div className="flex items-center gap-1.5">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              className="hidden h-10 items-center gap-1.5 rounded-full bg-mustard px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-mustard-hover sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar com o Leonardo
            </Link>

            {isHome && (
              <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                className="flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-mustard-soft-hover md:hidden"
              >
                {isOpen ? (
                  <X className="h-5 w-5" strokeWidth={2} />
                ) : (
                  <Menu className="h-5 w-5" strokeWidth={2} />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Dropdown — mobile */}
        {isHome && isOpen && (
          <nav className="mt-2 flex flex-col gap-1 rounded-3xl border border-mustard-border/60 bg-[#F5EFE0] p-3 shadow-lg md:hidden">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="rounded-2xl px-4 py-3 text-left text-sm font-medium text-ink-soft transition-colors hover:bg-mustard-soft-hover hover:text-mustard-ink"
              >
                {link.label}
              </button>
            ))}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="mt-1 inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl bg-mustard px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-mustard-hover"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar com o Leonardo
            </Link>
          </nav>
        )}
      </div>
    </div>
  );
}
