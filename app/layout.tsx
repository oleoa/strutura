import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { INSTAGRAM_URL, LINKEDIN_URL, PHAROS_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  // Variable font: omit `weight` so `wght` stays a variable axis (any weight works),
  // and request the optical-size + SOFT axes used by the hero display heading.
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://strutura.ai";

const siteDescription =
  "A Strutura é a empresa onde Leonardo Abreu constrói os próprios produtos, como o Pharos, com método e com a IA no lugar certo.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Strutura — A IA no lugar certo",
    template: "%s | Strutura",
  },
  description: siteDescription,
  keywords: ["Strutura", "Pharos", "Leo Abreu", "Leonardo Abreu"],
  authors: [{ name: "Leonardo Abreu de Paulo", url: siteUrl }],
  creator: "Leonardo Abreu de Paulo",
  publisher: "Strutura",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Strutura",
    title: "Strutura — A IA no lugar certo",
    description:
      "Os produtos de Leonardo Abreu: o Pharos organiza leads e clientes. Construído com método, usado todos os dias.",
    images: [
      {
        url: "/banner.png",
        width: 1584,
        height: 396,
        alt: "Strutura — A IA no lugar certo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strutura — A IA no lugar certo",
    description:
      "Os produtos de Leonardo Abreu: o Pharos organiza leads e clientes.",
    images: ["/banner.png"],
  },
  verification: {
    google: "", // TODO: adicionar o token de verificação do Google Search Console
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Strutura",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
  founder: {
    "@type": "Person",
    name: "Leonardo Abreu de Paulo",
  },
  owns: [
    {
      "@type": "SoftwareApplication",
      name: "Pharos",
      url: PHAROS_URL,
      applicationCategory: "BusinessApplication",
    },
  ],
  sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${fraunces.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="bg-background antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
