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
          className="grid grid-cols-1 md:grid-cols-3 md:px-[50px]"
        >
          <div className="relative col-span-2">
            <div className="relative z-10 w-[600px] h-[432px] pt-[50px]">
              <Text
                size="h1"
                variant="default"
                className="absolute -top-10 -left-10 font-bold opacity-10 pl-[33px] pt-[4px]"
              >
                {index < 10 ? `0${index + 1}` : index + 1}
              </Text>
              <div className="pl-[96px]">
                <div className="flex pb-[27px]">
                  <Image src={line} alt="" className="pb-[2px]" />
                  <Text
                    size="small"
                    variant="primary"
                    className="font-poppins font-bold uppercase pl-[24px] tracking-[6px]"
                  >
                    Get Started
                  </Text>
                </div>
                <Text
                  size="h3"
                  variant="default"
                  className="font-playfair pb-[28px]"
                >
                  {content.title}
                </Text>
                <Text
                  size="small"
                  variant="default"
                  className="font-poppins font-semibold text-[12px] tracking-[1px] leading-[25px]"
                >
                  {content.paragraph}
                </Text>
                <div className="flex gap-[16px]">
                  <Text
                    size="p"
                    variant="primary"
                    className="font-poppins font-semibold mt-[27px] text-[12px] tracking-[1px]" 
                  >
                    read more
                  </Text>
                  <Image src={arrowRight} alt="" className="pt-[28px]" width={16} height={24}/>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-[466] h-full">
            <Image
              src={content.image}
              alt={content.title}
              width={466}
              height={620}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
