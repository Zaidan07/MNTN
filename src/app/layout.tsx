import type { Metadata } from "next";
import "./globals.css";
import { playfair, poppins } from "./fonts/font";
import bghero from "@/assets/hero/hero-image.png";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        <div
          className="relative"
          style={{
            backgroundImage: `url(${bghero.src})`,
            backgroundSize: "cover",
            width: "100%",
            height: "100vh",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
