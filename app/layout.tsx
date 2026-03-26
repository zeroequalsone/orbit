import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

import { Montserrat } from "next/font/google";

const montserratFont = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orbit",
  description:
    "Orbit ist eine Weltraum-Entdeckungsseite, auf der du das Sonnensystem erkunden und mehr über die Planeten erfahren kannst.",
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
    <html lang="en">
      <body className={`antialiased ${montserratFont.className} bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
