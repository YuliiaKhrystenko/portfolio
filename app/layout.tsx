import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuliia | Personal portfolio",
  description: "Personal portfolio built with React, Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-[rgb(38,43,54)] text-white`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
