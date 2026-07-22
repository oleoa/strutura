"use client";

import type { ReactNode } from "react";
import { scrollToSection } from "@/lib/scroll";

type ScrollButtonProps = {
  targetId: string;
  className?: string;
  children: ReactNode;
};

export default function ScrollButton({
  targetId,
  className,
  children,
}: ScrollButtonProps) {
  return (
    <button
      type="button"
      onClick={() => scrollToSection(targetId)}
      className={className}
    >
      {children}
    </button>
  );
}
