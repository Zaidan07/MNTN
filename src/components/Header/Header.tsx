"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import arrow_down from "@/assets/icon/arrow_down.svg";
import line from "@/assets/icon/line.svg";
import Text from "../Common/Text/Text";
// import Navbar from "../Common/Navbar/Navbar";
import ig from "@/assets/icon/instagram.svg";
import tw from "@/assets/icon/twitter.svg";
import front from "@/assets/images/front2.png";
import Navbar from "../Common/Navbar/Navbar";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imagePosition, setImagePosition] = useState(0); // State for image position

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    setScrollPosition(scrollPercent);

    // Adjust the image position based on scroll position
    setImagePosition(scrollTop * 0.1); // Change 0.3 to control the parallax effect speed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-auto h-[1380px] relative">
      <Navbar />
      <Image
        src={front}
        alt=""
        className="z-20 absolute left-0"
        style={{
          width: "100vw",
          height: "auto",
          top: `calc(730px - ${imagePosition}px)`,
          transition: "top 0.1s ease-out", 
        }}
        width={1520}
        height={280}
      />

      <div className="flex justify-center flex-col mt-[198px]">
        <div className="absolute left-[80px] top-[350px] flex flex-col w-auto h-auto items-center justify-center">
          <Text
            size="p"
            variant="default"
            className="font-poppins font-semibold transform text-center rotate-[90deg] items-center justify-center"
          >
            Follow us
          </Text>
          <Image src={ig} alt="Instagram Icon" className="pt-[60px]" />
          <Image src={tw} alt="Twitter Icon" className="pt-[30px]" />
        </div>

        <div className="fixed right-[80px] top-[305px] flex flex-row items-center justify-center z-50">
          <div className="flex flex-col text-right space-y-2 mr-[10px]">
            <Text
              size="small"
              variant="default"
              className="font-poppins font-bold mb-[25px] text-[13px]"
            >
              Start
            </Text>
            <Text
              size="small"
              variant="default"
              className="font-poppins font-bold pb-[15px] text-[13px]"
            >
              01
            </Text>
            <Text
              size="small"
              variant="default"
              className="font-poppins font-bold pb-[15px] text-[13px]"
            >
              02
            </Text>
            <Text
              size="small"
              variant="default"
              className="font-poppins font-bold"
            >
              03
            </Text>
          </div>

          <div className="relative h-[170px] w-[3px] bg-gray-300">
            <div
              className="absolute left-0 top-0 w-[3px] bg-white"
              style={{
                height: `${scrollPosition}%`,
              }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between w-[316px] h-[22px] gap-[20px] ml-[345px]">
          <Image src={line} alt="line" width={72} height={2} />
          <Text
            size="p"
            variant="primary"
            className="font-semibold uppercase tracking-[6px] font-poppins"
          >
            A Hiking Guide
          </Text>
        </div>

        <div className="w-[950px] h-[200px] pt-[32px] flex items-center ml-[345px]">
          <Text
            size="h2"
            variant="default"
            className="text-[77px] font-playfair"
          >
            Be Prepared For The Mountains And Beyond!
          </Text>
        </div>

        <div className="flex gap-[10px] mt-[20px] text-center ml-[345px]">
          <Text
            size="p"
            variant="default"
            className="font-semibold font-poppins mt-[10px]"
          >
            scroll down
          </Text>
          <Image
            src={arrow_down}
            alt="arrow down"
            width={16}
            height={24}
            className="pt-[15px] animate-bounce"
          />
        </div>
      </div>
    </div>
  );
}
