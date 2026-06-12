"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (pathname.startsWith("/crm") || pathname.startsWith("/linktree")) return null;

  function handleNav(id: string) {
    setIsOpen(false);
    scrollToSection(id);
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center md:px-32 px-6 w-full backdrop-blur-xl border-b border-border bg-background/80 h-20">
        <Link href="/">
          <Image
            src="/logos/transparent-extended-logo/light.png"
            width={160}
            height={40}
            alt="Strutura Logo"
          />
        </Link>

        {/* Desktop nav */}
        {isHome && (
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium hover:text-mustard-ink transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("o-que-fazemos")}
              className="text-sm font-medium hover:text-mustard-ink transition-colors"
            >
              O que fazemos
            </button>
            <button
              onClick={() => scrollToSection("crm")}
              className="text-sm font-medium hover:text-mustard-ink transition-colors"
            >
              CRM
            </button>
            <button
              onClick={() => scrollToSection("casos")}
              className="text-sm font-medium hover:text-mustard-ink transition-colors"
            >
              Casos
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm font-medium hover:text-mustard-ink transition-colors"
            >
              Contato
            </button>
          </nav>
        )}

        {/* Mobile controls */}
        {isHome && (
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Abrir menu"
              className="text-2xl hover:text-mustard-ink transition-colors"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        )}
      </div>

      {/* Mobile dropdown */}
      {isHome && isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-6 backdrop-blur-xl border-b border-border bg-background/80">
          <button
            onClick={() => handleNav("inicio")}
            className="text-sm font-medium hover:text-mustard-ink transition-colors text-left"
          >
            Início
          </button>
          <button
            onClick={() => handleNav("o-que-fazemos")}
            className="text-sm font-medium hover:text-mustard-ink transition-colors text-left"
          >
            O que fazemos
          </button>
          <button
            onClick={() => handleNav("crm")}
            className="text-sm font-medium hover:text-mustard-ink transition-colors text-left"
          >
            CRM
          </button>
          <button
            onClick={() => handleNav("casos")}
            className="text-sm font-medium hover:text-mustard-ink transition-colors text-left"
          >
            Casos
          </button>
          <button
            onClick={() => handleNav("contato")}
            className="text-sm font-medium hover:text-mustard-ink transition-colors text-left"
          >
            Contato
          </button>
        </div>
      )}
    </div>
  );
}
