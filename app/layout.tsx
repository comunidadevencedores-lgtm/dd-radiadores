import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-90TNRKWR5D";
const GTM_ID = "GTM-TD5DJ8K9";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const SITE_URL = "https://ddradiadores.com.br";

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
        url: "/images/og-image.jpg",
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
    images: ["/images/og-image.jpg"],
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
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "DD Radiadores",
  image: `${SITE_URL}/images/og-image.jpg`,
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
      <body className="antialiased">
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics (GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
