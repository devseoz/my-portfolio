import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SEOHYEON | Product Designer & Visual Creator",
    template: "%s | SEOHYEON",
  },
  description:
    "Product Designer & Visual Creator crafting thoughtful digital experiences with editorial precision and minimal aesthetics.",
  keywords: [
    "product design",
    "UI/UX",
    "visual design",
    "branding",
    "3D design",
    "graphic design",
    "portfolio",
  ],
  authors: [{ name: "SEOHYEON" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "SEOHYEON",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
