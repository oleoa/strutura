import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links — Strutura",
  description:
    "Links úteis da Strutura: WhatsApp, CRM, sites, formulários e mais.",
};

export default function LinktreeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
