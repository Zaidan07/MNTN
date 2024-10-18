import type { Metadata } from "next";
import "./globals.css";
import { playfair, poppins } from "./fonts/font";
import PaddingContainer from "@/components/Common/PaddingContainer/PaddingContainer";
// import bgheros from "@/assets/hero/hero-image.png";
// import Navbar from "@/components/Common/Navbar/Navbar";
import back from "@/assets/images/back.png";
import Header from "@/components/Header/Header";

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
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        <div
          className="absolute w-full h-full md:h-[1380px]"
          style={{
            backgroundImage: `url(${back.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: "-1",
          }}
        >
          <Header/>
          <PaddingContainer>{children}</PaddingContainer>
        </div>
      </body>
    </html>
  );
}
