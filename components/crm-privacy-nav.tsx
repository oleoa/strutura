"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

const sections = [
  { id: "introducao", label: "1. Introdução" },
  { id: "definicoes", label: "2. Definições" },
  { id: "dados-coletados", label: "3. Dados que Coletamos" },
  { id: "uso-dos-dados", label: "4. Como Usamos os Dados" },
  { id: "base-legal", label: "5. Base Legal (LGPD)" },
  { id: "controlador-operador", label: "6. Controlador vs. Operador" },
  { id: "compartilhamento", label: "7. Compartilhamento de Dados" },
  { id: "armazenamento-seguranca", label: "8. Armazenamento e Segurança" },
  { id: "retencao", label: "9. Retenção de Dados" },
  { id: "direitos-titular", label: "10. Direitos do Titular" },
  { id: "inteligencia-artificial", label: "11. Uso de IA e Decisões Automatizadas" },
  { id: "transferencia-internacional", label: "12. Transferência Internacional" },
  { id: "cookies", label: "13. Cookies" },
  { id: "alteracoes", label: "14. Alterações nesta Política" },
  { id: "contato", label: "15. Contato e DPO" },
];

interface NavLinkProps {
  section: { id: string; label: string };
  onClick?: () => void;
}

function NavLink({ section, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(section.id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    onClick?.();
  };

  return (
    <a
      href={`#${section.id}`}
      onClick={handleClick}
      className="block text-sm text-[#A0A0A0] hover:text-[#E9D73A] transition-colors duration-150 py-1 leading-snug"
    >
      {section.label}
    </a>
  );
}

export function CrmPrivacyNavDesktop() {
  return (
    <nav className="hidden lg:block sticky top-8 w-64 shrink-0 self-start">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#E9D73A] mb-4">
        Nesta página
      </p>
      <ul className="space-y-0.5">
        {sections.map((section) => (
          <li key={section.id}>
            <NavLink section={section} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function CrmPrivacyNavMobile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden mb-8">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between w-full px-4 py-3 rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] text-sm font-medium text-white"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <Menu className="w-4 h-4 text-[#E9D73A]" />
          Navegar por seções
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-[#A0A0A0]" />
        ) : (
          <ChevronDown className="w-4 h-4 text-[#A0A0A0]" />
        )}
      </button>

      {open && (
        <div className="mt-2 px-4 py-3 rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] space-y-0.5">
          {sections.map((section) => (
            <NavLink
              key={section.id}
              section={section}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
