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
    default: "Strutura — Infraestrutura digital para o seu negócio",
    template: "%s | Strutura",
  },
  description:
    "Sites, automações, CRM e integrações construídos sob medida. Trabalho direto com o fundador, sem agência no meio. Atendendo empresários no Brasil e na Europa.",
  keywords: [
    "infraestrutura digital",
    "CRM para WhatsApp",
    "automações para empresas",
    "sites e landing pages",
    "agentes de IA",
    "integrações n8n",
    "Strutura",
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
    languages: { "pt-BR": siteUrl },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Strutura",
    title: "Strutura — Infraestrutura digital para o seu negócio",
    description:
      "Sites, automações, CRM e integrações construídos sob medida. Trabalho direto com o fundador, sem agência no meio. Atendendo empresários no Brasil e na Europa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strutura — Infraestrutura digital para o seu negócio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strutura — Infraestrutura digital para o seu negócio",
    description:
      "Sites, automações, CRM e integrações construídos sob medida. Direto com o fundador, sem agência no meio.",
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
    "Infraestrutura digital sob medida para o seu negócio — sites, automações, CRM e integrações, construídos direto com o fundador.",
  founder: {
    "@type": "Person",
    name: "Leonardo Abreu de Paulo",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["Portuguese", "pt-BR"],
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
    <html lang="pt-BR" suppressHydrationWarning>
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
