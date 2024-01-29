import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yuliia's portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-[rgb(36,36,36)] text-white`}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
