import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "DD Radiadores | Curitiba | Conserto e Manutenção de Radiadores",
  description:
    "Especialistas em manutenção de radiadores e ar-condicionado para veículos leves e pesados em Curitiba. +20 anos de experiência. Orçamento grátis!",
  keywords: [
    "radiadores curitiba",
    "conserto radiador curitiba",
    "manutenção radiador",
    "ar condicionado automotivo curitiba",
    "intercooler",
    "radiadores dd",
  ],
  openGraph: {
    title: "DD Radiadores | Curitiba",
    description:
      "Especialistas em manutenção de radiadores e ar-condicionado. Qualidade, rapidez e preço justo.",
    url: "https://ddradiadores.com.br",
    siteName: "DD Radiadores",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
