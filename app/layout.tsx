import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Dancing_Script,
  Montserrat,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adinda & Adi — Undangan Pernikahan",
  description:
    "Dengan penuh syukur dan kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam pernikahan Adinda Alfianty Fatrisini & Adi Saputra, Minggu 28 Juni 2026.",
  openGraph: {
    title: "Adinda & Adi — Undangan Pernikahan",
    description: "Minggu, 28 Juni 2026 · Mega Regency, Bekasi",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${dancing.variable} ${montserrat.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
