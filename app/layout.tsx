import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = { 
  metadataBase: new URL("https://deeptraining-lilac.vercel.app/"),
  title: "DEEP TRAINING",
  description: "Découvrez des cours créés par la communauté et créez-en par Gemini intégré",
  alternates: { canonical: "/" }, 
  robots: { index: true, follow: true }, 
  openGraph: { title: "Pour votre formation", 
  description: "Découvrez des cours créés par la communauté et créez-en par Gemini intégré",
  type: "website",
  locale: "fr_CD", 
  siteName: "DEEP TRAINING",
  url: "/", },
  verification: { google: "S_x2kdfF4LPKYZmUkCL9PHloLFVzEsjyKTRJNpomJLU", },
}; 

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<GoogleAnalytics gaId="G-Q0P61YZL1J"/> </body>
    </html>
  );
}
