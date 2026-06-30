import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://arabella-grace-media.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arabella Grace — Essays, Notes & a Weekly Letter",
    template: "%s · Arabella Grace",
  },
  description:
    "A cultural-media studio of one. Long-form essays, short notes, and a quiet weekly letter on culture, attention, and the examined life.",
  keywords: [
    "Arabella Grace",
    "essays",
    "newsletter",
    "cultural criticism",
    "writing",
  ],
  authors: [{ name: "Arabella Grace" }],
  openGraph: {
    type: "website",
    title: "Arabella Grace — Essays, Notes & a Weekly Letter",
    description:
      "Long-form essays, short notes, and a quiet weekly letter on culture, attention, and the examined life.",
    url: SITE_URL,
    siteName: "Arabella Grace",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arabella Grace — Essays, Notes & a Weekly Letter",
    description:
      "Long-form essays, short notes, and a quiet weekly letter on culture and the examined life.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-ink text-ivory antialiased">
        <span className="grain" aria-hidden="true" />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="relative z-[2]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
