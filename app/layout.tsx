import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://strutura.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Strutura — Automação com IA para Empresas",
    template: "%s | Strutura",
  },
  description:
    "Automatize processos com IA de próxima geração. Captação de leads, qualificação automática, relatórios e integração com CRM — escale sem aumentar a sua equipa.",
  keywords: [
    "automação com IA",
    "inteligência artificial para empresas",
    "automação de processos",
    "captação de leads",
    "CRM com IA",
    "Strutura",
    "Portugal",
  ],
  authors: [{ name: "Leonardo Abreu de Paulo", url: siteUrl }],
  creator: "Leonardo Abreu de Paulo",
  publisher: "Strutura",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
    languages: { "pt-PT": siteUrl },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: siteUrl,
    siteName: "Strutura",
    title: "Strutura — Automação com IA para Empresas",
    description:
      "Automatize processos com IA de próxima geração. Captação de leads, qualificação automática, relatórios e integração com CRM — escale sem aumentar a sua equipa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strutura — Automação com IA para Empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strutura — Automação com IA para Empresas",
    description:
      "Automatize processos com IA de próxima geração. Escale sem aumentar a sua equipa.",
    images: ["/og-image.png"],
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
  description:
    "Automação com IA de próxima geração para escalar empresas sem aumentar a equipa.",
  founder: {
    "@type": "Person",
    name: "Leonardo Abreu de Paulo",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["Portuguese"],
  },
  sameAs: [
    // TODO: adicionar os URLs dos perfis de redes sociais
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          id="vtag-ai-js"
          async
          src="https://r2.leadsy.ai/tag.js"
          data-pid="ci2KKkZ70Yi7Ww68"
          data-version="062024"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(window.matchMedia('(prefers-color-scheme: dark)').matches){document.documentElement.classList.add('dark')}})()`,
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${geistMono.variable} bg-background antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
