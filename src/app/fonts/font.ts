import { Playfair, Poppins } from "next/font/google";

export const playfair = Playfair({
    subsets: ["latin"],
    weight: "600",
    variable: "--font-playfair",
  });
  
export const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
    variable: "--font-poppins",
  });

