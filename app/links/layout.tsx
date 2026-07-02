import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Os links do Leonardo Abreu: Pharos, Studio, o site da Strutura e o WhatsApp.",
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
