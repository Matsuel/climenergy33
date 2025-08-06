import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarProvider from "@/contexts/NavbarContext";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Climenergy33",
  description: "Climenergy33 - Installation de systèmes de climatisation et de chauffage en Gironde",
  openGraph: {
    title: "Climenergy33",
    description: "Climenergy33 - Installation de systèmes de climatisation et de chauffage en Gironde",
    url: "https://climenergy33.fr",
    siteName: "Climenergy33"
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
        <NavbarProvider>
          <Toaster />
          {children}
        </NavbarProvider>
      </body>
    </html>
  );
}
