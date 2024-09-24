import Image from "next/image";
import line from "@/assets/logo/line.svg";
import arrowRight from "@/assets/logo/arrow_right.svg";
import { contentData } from "./contentData"; // Import data dari file terpisah
import Text from "../Text/Text"; // Komponen teks Anda

export default function ContentSection() {
  return (
    <div className="pt-[80px]">
      {contentData.map((content, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-[114px] md:px-[70px]"
        >
          <div className="relative ">
            <Text
              size="h1"
              variant="default"
              className="absolute -top-10 -left-10 font-bold opacity-10"
            >
              {index < 10 ? `0${index + 1}` : index + 1}
            </Text>

            <div className="relative z-10 w-[560px] pt-[50px]">
              <div className="flex pb-[27px]">
                <Image src={line} alt="" className="pb-[2px]" />
                <Text
                  size="p"
                  variant="primary"
                  className="font-poppins font-bold uppercase pl-[24px] tracking-[6px]"
                >
                  Get Started
                </Text>
              </div>
              <Text size="h3" variant="default" className="font-playfair">
                {content.title}
              </Text>
              <Text
                size="p"
                variant="default"
                className="font-poppins font-normal text-[13px] tracking-[1px] leading-[20px] pt-[27px]"
              >
                {content.paragraph}
              </Text>
              <div className="flex gap-[16px]">
                <Text
                  size="p"
                  variant="primary"
                  className="font-poppins font-semibold mt-[27px]"
                >
                  read more
                </Text>
                <Image src={arrowRight} alt="" className="pt-[28px]"/>
              </div>
            </div>
          </div>

          {/* Bagian kanan: Gambar */}
          <div className="relative w-full h-full">
            <Image
              src={content.image}
              alt={content.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
