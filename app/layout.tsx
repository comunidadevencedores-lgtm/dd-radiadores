import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Cores da marca: Preto (#000000) e Vermelho (#dc2626)

const SITE_URL = "https://ddradiadores.com.br";

// Manifest PWA
const manifest = {
  name: "DD Radiadores",
  short_name: "DD Radiadores",
  description: "Especialistas em manutenção de radiadores e ar-condicionado automotivo em Curitiba",
  start_url: "/",
  display: "standalone",
  background_color: "#000000",
  theme_color: "#dc2626",
  icons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "DD Radiadores | Conserto e Manutenção de Radiadores em Curitiba",
    template: "%s | DD Radiadores",
  },
  description:
    "Especialistas em manutenção de radiadores e ar-condicionado automotivo em Curitiba. Veículos leves e pesados, nacionais e importados. +20 anos de experiência. Orçamento grátis pelo WhatsApp.",
  keywords: [
    "radiadores curitiba",
    "conserto radiador curitiba",
    "manutenção radiador curitiba",
    "ar condicionado automotivo curitiba",
    "intercooler curitiba",
    "solda de radiador curitiba",
    "radiadores dd",
    "oficina de radiadores capão da imbuia",
  ],
  authors: [{ name: "DD Radiadores" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "DD Radiadores | Conserto e Manutenção de Radiadores em Curitiba",
    description:
      "Especialistas em manutenção de radiadores e ar-condicionado automotivo. +20 anos de experiência em Curitiba. Qualidade, agilidade e preço justo.",
    url: SITE_URL,
    siteName: "DD Radiadores",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fachada da DD Radiadores em Curitiba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DD Radiadores | Conserto e Manutenção de Radiadores em Curitiba",
    description:
      "Especialistas em manutenção de radiadores e ar-condicionado automotivo em Curitiba. +20 anos de experiência.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dc2626",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "DD Radiadores",
  image: `${SITE_URL}/images/og-image.png`,
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: "+554132319088",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Prof. Nivaldo Braga, 1922",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    addressCountry: "BR",
    postalCode: "82810-150",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -25.419,
    longitude: -49.219,
  },
  areaServed: {
    "@type": "City",
    name: "Curitiba",
  },
  sameAs: ["https://www.instagram.com/radiadoresdd"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Manutenção de Radiadores e Intercooler",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Conserto de Ar Condicionado Automotivo",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>y className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

// Manifest for PWA
export async function generateStaticParams() {
  return [];
}
