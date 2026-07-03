import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BhanuWorks | Premium Software Studio",
  description: "BhanuWorks builds scalable digital products, custom web applications, AI integration, and business automation systems for startups, restaurants, and growing businesses.",
  metadataBase: new URL("https://bhanuworks.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BhanuWorks | Premium Software Studio",
    description: "BhanuWorks builds custom web applications, AI integration, and automated operations for modern businesses.",
    url: "https://bhanuworks.com",
    type: "website",
    locale: "en_US",
    siteName: "BhanuWorks",
  },
  twitter: {
    card: "summary_large_image",
    title: "BhanuWorks | Premium Software Studio",
    description: "BhanuWorks builds custom web applications, AI integration, and automated operations for modern businesses.",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bhanuworks.com/#organization",
        "name": "BhanuWorks",
        "url": "https://bhanuworks.com",
        "logo": "https://bhanuworks.com/logo.png",
        "description": "Premium software studio crafting digital products for modern businesses.",
      },
      {
        "@type": "WebSite",
        "@id": "https://bhanuworks.com/#website",
        "url": "https://bhanuworks.com",
        "name": "BhanuWorks",
        "publisher": {
          "@id": "https://bhanuworks.com/#organization",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable} h-full scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans min-h-full flex flex-col antialiased selection:bg-accent-primary/20 selection:text-text-primary">
        {children}
      </body>
    </html>
  );
}
