import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tradinglegend.io"),
  title: "Trading Legend | Premium Trading Promotion Platform",
  description:
    "Connect your trading community with premium promotional opportunities designed to help quality trading channels reach a wider audience.",
  keywords: [
    "trading promotion",
    "trading channels",
    "telegram trading promotion",
    "fintech marketing",
    "trading community growth",
  ],
  authors: [{ name: "Trading Legend" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Trading Legend – Premium Trading Promotion Platform",
    description:
      "Exclusive, vetted promotional opportunities for high-caliber trading communities and creators.",
    url: "https://tradinglegend.com",
    siteName: "Trading Legend",
    images: [
      {
        url: "/logo-dark-mode.png",
        width: 640,
        height: 640,
        alt: "Trading Legend Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#111111] text-[#FFFFFF] font-sans antialiased selection:bg-[#F07800]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
