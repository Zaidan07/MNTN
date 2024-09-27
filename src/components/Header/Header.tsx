"use client";
// import { useEffect, useState } from "react";
import Image from "next/image";
import arrow_down from "@/assets/icon/arrow_down.svg";
import line from "@/assets/icon/line.svg";
import Text from "../Common/Text/Text";
import Navbar from "../Common/Navbar/Navbar";
// import FollowUs from './FollowUs';
import ig from "@/assets/icon/instagram.svg";
import tw from "@/assets/icon/twitter.svg";

export default function Header() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center flex-col mt-[198px] px-[210px] ml-[70px]">
        <div className="absolute left-[50px] top-[352px] flex flex-col w-auto h-auto items-center justify-center">
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
        <div className="absolute right-[100px] top-[305px] flex flex-col w-auto h-auto items-center justify-center">
          <Text
            size="small"
            variant="default"
            className="font-poppins font-bold mb-[40px]"
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
              className="font-poppins font-bold"
            >
              03
            </Text>
          </div>
        </div>
        <div className="flex items-center justify-between w-[316px] h-[22px] gap-[20px]">
          <Image src={line} alt="line" width={72} height={2} />
          <Text
            size="p"
            variant="primary"
            className="font-semibold uppercase tracking-[6px] font-poppins"
          >
            A Hiking Guide
          </Text>
        </div>

        <div className="w-[950px] h-[200px] pt-[32px] flex items-center">
          <Text
            size="h2"
            variant="default"
            className="text-[77px] font-playfair"
          >
            Be Prepared For The Mountains And Beyond!
          </Text>
        </div>

        <div className="flex gap-[10px] mt-[50px] text-center">
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

      {/* Slider di dalam Header */}
    </>
  );
}
