import type React from "react";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
//   preload: false,
// });

export const metadata: Metadata = {
  title: "AltPlus - Création de Sites Web Professionnels",
  description:
    "AltPlus est une startup spécialisée dans la création de sites web modernes et performants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
