"use client";
import Text from "../Text/Text";
import { useState, useEffect } from "react";

export default function Slider() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Tentukan batas di mana slider akan menjadi fixed, misalnya setelah header
      const threshold = 500; // Sesuaikan threshold dengan tinggi header Anda
      if (window.scrollY > threshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isFixed ? "fixed top-[352px]" : "sticky top-[352px]"
      } right-[80px] transform -translate-y-1/2 flex flex-col text-right space-y-4 text-white w-[50px]`}
    >
      <Text
        size="small"
        variant="default"
        className="font-poppins font-bold pb-[15px]"
      >
        Start
      </Text>
      <div className="flex flex-col text-right space-y-2">
        <Text
          size="small"
          variant="default"
          className="font-poppins font-bold pb-[8px]"
        >
          01
        </Text>
        <Text
          size="small"
          variant="default"
          className="font-poppins font-bold pb-[8px]"
        >
          02
        </Text>
        <Text
          size="small"
          variant="default"
          className="font-poppins font-bold pb-[8px]"
        >
          03
        </Text>
      </div>
    </div>
  );
}
