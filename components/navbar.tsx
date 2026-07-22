"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/site";
import { scrollToSection } from "@/lib/scroll";

// Seções com superfície Bosque (escura): a pílula veste o clima de quem passa
// por baixo dela.
const BOSQUE_SECTIONS = ["inicio", "produtos"];

const NAV_LINKS = [
  { id: "a-strutura", label: "A Strutura" },
  { id: "produtos", label: "Produtos" },
  { id: "quem-sou-eu", label: "Quem sou eu" },
  { id: "contato", label: "Contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [overBosque, setOverBosque] = useState(true);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // Linha de prova no centro vertical da pílula (pt-3 + metade de h-14).
    const PROBE = 40;
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      setOverBosque(
        BOSQUE_SECTIONS.some((id) => {
          const rect = document.getElementById(id)?.getBoundingClientRect();
          return !!rect && rect.top <= PROBE && rect.bottom >= PROBE;
        }),
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (pathname.startsWith("/brand")) return null;

  // Sobre superfície Bosque a pílula veste o clima escuro; no Campo, o claro.
  const dark = isHome && overBosque;

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
            "relative flex h-14 items-center justify-between gap-4 rounded-full border pl-4 pr-2 transition-colors duration-300 sm:pl-5 sm:pr-2.5",
            dark
              ? "border-bone/15 bg-bosque-deep/60 backdrop-blur-md"
              : cn(
                  "bg-mustard-soft",
                  scrolled
                    ? "border-border-strong shadow-lg"
                    : "border-mustard-border/60 shadow-md",
                ),
          )}
        >
          <Link href="/" aria-label="Strutura" className="flex items-center gap-2 self-stretch">
            <Image
              src="/tlogo.png"
              width={512}
              height={512}
              alt="Strutura"
              priority
              className="h-9 w-9"
            />
            <span
              className={cn(
                "font-serif text-base transition-colors duration-300 sm:text-lg",
                dark ? "text-bone" : "text-ink",
              )}
            >
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
                  className={cn(
                    "text-sm font-medium transition-colors duration-300",
                    dark
                      ? "text-bone/85 hover:text-mustard-bosque"
                      : "text-ink-soft hover:text-mustard-ink",
                  )}
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
              rel="noopener noreferrer"
              className={cn(
                "hidden h-10 items-center gap-1.5 rounded-full px-5 text-sm font-medium transition-colors duration-300 sm:inline-flex",
                dark
                  ? "bg-mustard-bosque text-bosque-deep hover:bg-gold-light"
                  : "bg-primary text-primary-foreground hover:bg-mustard-hover",
              )}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar com o Leonardo
            </Link>

            {isHome && (
              <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                className={cn(
                  "flex size-10 items-center justify-center rounded-full transition-colors duration-300 md:hidden",
                  dark
                    ? "text-bone hover:bg-bone/10"
                    : "text-ink hover:bg-mustard-soft-hover",
                )}
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
          <nav
            className={cn(
              "mt-2 flex flex-col gap-1 rounded-3xl border p-3 shadow-lg md:hidden",
              dark
                ? "border-bone/15 bg-bosque-deep/90 backdrop-blur-md"
                : "border-mustard-border/60 bg-mustard-soft",
            )}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors",
                  dark
                    ? "text-bone/85 hover:bg-bone/10 hover:text-mustard-bosque"
                    : "text-ink-soft hover:bg-mustard-soft-hover hover:text-mustard-ink",
                )}
              >
                {link.label}
              </button>
            ))}
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className={cn(
                "mt-1 inline-flex h-11 items-center justify-center gap-1.5 rounded-2xl px-5 text-sm font-medium transition-colors",
                dark
                  ? "bg-mustard-bosque text-bosque-deep hover:bg-gold-light"
                  : "bg-primary text-primary-foreground hover:bg-mustard-hover",
              )}
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
