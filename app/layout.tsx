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
  title: "Mahmudul Hasan Masum | MERN Developer",
  description:
    "Junior Full Stack MERN Developer building modern, scalable web applications with React, Node.js, Express, and MongoDB.",
  metadataBase: new URL("https://mahmudulhasan.vercel.app"),
  openGraph: {
    title: "Mahmudul Hasan Masum | MERN Developer",
    description:
      "Portfolio of Mahmudul Hasan Masum — MERN Developer. Projects, skills, and contact.",
    type: "website",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
