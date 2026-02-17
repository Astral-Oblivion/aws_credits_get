import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alpine Energy Systems - Intelligent Energy Management for Modern Buildings",
  description:
    "IoT-based energy monitoring and optimization platform helping commercial buildings reduce energy waste by 20-40%. Built with precision by ETH Zurich research.",
  keywords: [
    "energy management",
    "IoT",
    "building automation",
    "energy efficiency",
    "smart buildings",
    "sustainability",
  ],
  authors: [{ name: "Alpine Energy Systems" }],
  openGraph: {
    title: "Alpine Energy Systems - Intelligent Energy Management",
    description:
      "Reduce building energy waste by 20-40% with AI-powered IoT monitoring",
    type: "website",
    locale: "en_US",
    siteName: "Alpine Energy Systems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
