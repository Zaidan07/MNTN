import type { Metadata } from "next";
import "./globals.css";
import { playfair, poppins } from "./fonts/font";
import PaddingContainer from "@/components/Common/PaddingContainer/PaddingContainer";
// import bgheros from "@/assets/hero/hero-image.png";
import back from "@/assets/images/back.png"

export const metadata: Metadata = {
  title: "MNTN Hiking Guide",
  description: "A Hiking Guide Website MNTN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="32x32"/>
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        <div
          className="absolute"
          style={{
            backgroundImage: `url(${back.src})`,
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "1380px",
            zIndex: "-1",
          }}
        >
          <PaddingContainer>{children}</PaddingContainer>
        </div>
      </body>
    </html>
  );
}
