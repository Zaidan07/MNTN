import type { Metadata } from "next";
import "./globals.css";
import { playfair, poppins } from "./fonts/font";
import PaddingContainer from "@/components/Common/PaddingContainer/PaddingContainer";
import bgheros from "@/assets/hero/hero-image.png";

export const metadata: Metadata = {
  title: "MNTN",
  description: "MNTN",
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
          className="absolute"
          style={{
            backgroundImage: `url(${bgheros.src})`,
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "1780px",
          }}
        >
          <PaddingContainer>{children}</PaddingContainer>
        </div>
      </body>
    </html>
  );
}
