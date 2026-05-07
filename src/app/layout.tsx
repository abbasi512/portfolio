import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanzeel Abbas — React & Full-Stack Developer",
  description:
    "Portfolio of Tanzeel Abbas — React and full-stack developer building modern web applications, AI-powered tools, and great user experiences with TypeScript, Next.js, and Node.",
  metadataBase: new URL("https://tanzeel.dev"),
  openGraph: {
    title: "Tanzeel Abbas — React & Full-Stack Developer",
    description:
      "React and full-stack developer based in Pakistan. Building modern web apps with TypeScript, Next.js, and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
