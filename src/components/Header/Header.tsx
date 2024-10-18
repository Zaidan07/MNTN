"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import arrow_down from "@/assets/icon/arrow_down.svg";
import line from "@/assets/icon/line.svg";
import Text from "../Common/Text/Text";
import ig from "@/assets/icon/instagram.svg";
import tw from "@/assets/icon/twitter.svg";
import front from "@/assets/images/front2.png";
import Navbar from "../Common/Navbar/Navbar";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imagePosition, setImagePosition] = useState(0); 
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    setScrollPosition(scrollPercent);

    setImagePosition(scrollTop * 0.1); 
  };

  const handleResize = () => {
    // Check if the screen width is less than 768px (mobile size)
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Check on initial load
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-auto h-[600px] md:h-[1380px] relative mt-[100px] md:mt-[10px]">
      <Navbar />
      <Image
        src={front}
        alt=""
        className="z-20 absolute left-0"
        style={{
          width: "100vw",
          height: isMobile ? "60vh" : "auto",
          top: isMobile
            ? `calc(37vh - ${imagePosition}px)` // Adjust for mobile
            : `calc(100vh - ${imagePosition}px)`, // Adjust for desktop
          objectFit: "cover",
          transition: "top 0.2s ease-out", // Smooth transition for both
        }}
        priority={true} // Load image eagerly
        width={1520}
        height={280}
      />

      <div className="flex justify-center flex-col mt-[30px] md:mt-[198px]">
        <div className="absolute left-[10px] md:left-[80px] top-[300px] md:top-[400px] flex flex-col w-auto h-auto items-center justify-center">
          <Text
            size="p"
            variant="default"
            className="font-poppins font-semibold transform text-center rotate-[90deg] items-center justify-center text-[6px]"
          >
            Follow us
          </Text>
          <Image src={ig} alt="Instagram Icon" className="pt-[15px] md:pt-[60px] w-[10px] md:w-[24px] h-auto" />
          <Image src={tw} alt="Twitter Icon" className="pt-[10px] md:pt-[30px] w-[10px] md:w-[24px] h-auto" />
        </div>

        <div className="hidden md:fixed right-[60px] top-[305px] md:flex flex-row items-center justify-center z-50">
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

        <div className="flex items-center justify-between w-[170px] gap-[10px] ml-[60px] md:w-[316px] h-[22px] md:gap-[20px] md:ml-[345px]">
          <Image src={line} alt="line" className="w-[35px] md:w-[72px] h-[2px]"/>
          <Text
            size="p"
            variant="primary"
            className="font-semibold uppercase text-[10px] tracking-[3px] md:tracking-[6px] font-poppins"
          >
            A Hiking Guide
          </Text>
        </div>

        <div className="w-[300px] md:w-[950px] md:h-[200px] pt-[5px] md:pt-[20px] flex items-center ml-[60px] md:ml-[345px]">
          <Text
            size="h2"
            variant="default"
            className="text-[20px] font-playfair leading-[40px]"
          >
            Be Prepared For The Mountains And Beyond!
          </Text>
        </div>

        <div className="flex gap-[10px] mt-[5px] md:mt-[20px] text-center ml-[60px] md:ml-[345px]">
          <Text
            size="p"
            variant="default"
            className="font-semibold font-poppins mt-[5px] md:mt-[10px]"
          >
            scroll down
          </Text>
          <Image
            src={arrow_down}
            alt="arrow down"
            className="pt-[15px] animate-bounce w-[6px] md:w-[16px] md:h-[24px]"
          />
        </div>
      </div>
    </div>
  );
}