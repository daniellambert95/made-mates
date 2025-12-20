import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/CookieBanner";
import HtmlLangWrapper from "@/components/HtmlLangWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MADE mates Holding GmbH | Diverse Portfolio Across 6 Industries",
  description: "MADE mates Holding GmbH drives growth across fashion, healthcare, toys, pet care, electronics, and energy sectors. Your trusted B2B partner in Berlin, Germany.",
  keywords: ["B2B", "holding company", "fashion", "healthcare", "toys", "pet products", "electronics", "energy", "Berlin", "Germany", "MADE mates"],
  authors: [{ name: "MADE mates Holding GmbH" }],
  openGraph: {
    title: "MADE mates Holding GmbH | Diverse Portfolio Across 6 Industries",
    description: "MADE mates Holding GmbH drives growth across fashion, healthcare, toys, pet care, electronics, and energy sectors.",
    url: "https://mademates.com",
    siteName: "MADE mates Holding",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MADE mates Holding GmbH | Diverse Portfolio Across 6 Industries",
    description: "Your trusted B2B partner across 6 industries",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <HtmlLangWrapper />
        <StructuredData />
        <div className="relative">
          <Navbar />
          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
