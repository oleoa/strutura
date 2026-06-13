import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links — Strutura",
  description:
    "Links úteis da Strutura: WhatsApp, Pharos, sites, formulários e mais.",
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
