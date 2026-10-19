import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

import { Montserrat } from "next/font/google";
import Footer from "./components/Footer";

const montserratFont = Montserrat({
  subsets: ["latin"],
});

const siteDescription =
  "Orbit ist deine Weltraum-Entdeckungsseite: Erkunde das Sonnensystem, lerne Planeten, Monde und Zwergplaneten kennen und nutze Rechner für Distanz, Größe und Gewicht.";

export const metadata: Metadata = {
  title: {
    default: "Orbit | Das Universum entdecken",
    template: "%s | Orbit",
  },
  description: siteDescription,
  keywords: [
    "Astronomie",
    "Sonnensystem",
    "Planeten",
    "Monde",
    "Zwergplaneten",
    "Asteroidengürtel",
    "Sterne",
    "Weltraum",
    "Astronomy Picture of the Day",
    "NASA",
    "Distanz-Rechner",
    "Gewicht auf anderen Planeten",
    "Landsat",
  ],
  authors: [{ name: "zeroequalsone", url: "https://github.com/zeroequalsone" }],
  openGraph: {
    title: "Orbit | Das Universum entdecken",
    description: siteDescription,
    siteName: "Orbit",
    locale: "de_DE",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`antialiased ${montserratFont.className} bg-black text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
