import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FundMyBrew - Pouring Support, Brewing Dreams.",
  description: "FundMyBrew is a platform where creativity meets support. Empower content creators as they brew dreams by enabling users to contribute and make a difference, one generous backing at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />

        <Navbar />
        {children}</body>
    </html>
  );
}
