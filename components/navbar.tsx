"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "./theme-provider";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (pathname.startsWith("/crm")) return null;

  function handleNav(id: string) {
    setIsOpen(false);
    scrollToSection(id);
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center md:px-32 px-6 w-full backdrop-blur-xl border-b border-black/8 dark:border-yellow bg-white/80 dark:bg-transparent h-20">
        <Link href="/">
          <Image
            src={
              isDark
                ? "/logos/transparent-extended-logo/dark.png"
                : "/logos/transparent-extended-logo/light.png"
            }
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
              className="text-sm font-medium hover:text-yellow transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-sm font-medium hover:text-yellow transition-colors"
            >
              Como funciona
            </button>
            <button
              onClick={() => scrollToSection("produtos")}
              className="text-sm font-medium hover:text-yellow transition-colors"
            >
              Produtos
            </button>
          </nav>
        )}

        {/* Mobile controls */}
        {isHome && (
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Abrir menu"
              className="text-2xl hover:text-yellow transition-colors"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        )}
      </div>

      {/* Mobile dropdown */}
      {isHome && isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-6 backdrop-blur-xl border-b border-black/8 dark:border-yellow bg-white/80 dark:bg-transparent">
          <button
            onClick={() => handleNav("inicio")}
            className="text-sm font-medium hover:text-yellow transition-colors text-left"
          >
            Início
          </button>
          <button
            onClick={() => handleNav("como-funciona")}
            className="text-sm font-medium hover:text-yellow transition-colors text-left"
          >
            Como funciona
          </button>
          <button
            onClick={() => handleNav("produtos")}
            className="text-sm font-medium hover:text-yellow transition-colors text-left"
          >
            Produtos
          </button>
        </div>
      )}
    </div>
  );
}
