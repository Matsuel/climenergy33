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
  applicationName: "Climenergy33",
  keywords: [
    "climatisation",
    "chauffage",
    "installation",
    "Gironde",
    "Bordeaux",
    "Climenergy33",
    "systèmes de climatisation",
    "systèmes de chauffage",
    "énergie",
    "économies d'énergie",
    "confort thermique",
    "professionnels",
    "services de climatisation",
    "services de chauffage",
    "maintenance"
  ],
  authors: [
    {
      name: "Mathéo Lang",
      url: "https://matheolang.fr"
    }
  ],
  creator: "Mathéo Lang",
  publisher: "Climenergy33",
  
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
    <html lang="fr">
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
