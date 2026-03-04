"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface LegalSection {
  id: string;
  title: string;
}

interface LegalNavProps {
  sections: LegalSection[];
  label?: string;
}

export function LegalNav({
  sections,
  label = "Navegar pelas seções",
}: LegalNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden mb-6 rounded-xl overflow-hidden border border-[#2A2A2A]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-[#1A1A1A] text-white text-sm font-medium"
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#A0A0A0] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <nav className="bg-[#1A1A1A] border-t border-[#2A2A2A]">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="w-full text-left px-4 py-2.5 text-sm text-[#A0A0A0] hover:text-[#E9D73A] hover:bg-[#222222] transition-colors border-b border-[#2A2A2A] last:border-b-0"
            >
              {section.title}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
