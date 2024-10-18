import Image from "next/image";
import line from "@/assets/icon/line.svg";
import arrowRight from "@/assets/icon/arrow_right.svg";
import { contentData } from "./contentData";
import Text from "../Text/Text";

export default function ContentSection() {
  return (
    <div className="pt-0">
      {contentData.map((content, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-[64px] md:px-[48px] pb-[96px]"
        >
          {index % 2 === 0 ? (
            <>
              <div className="relative col-span-1 md:col-span-2">
                <div className="relative z-20 w-full max-w-[896px] h-auto pt-[48px]">
                  <Text
                    size="h1"
                    variant="default"
                    className="absolute top-[-40px] left-[-40px] font-bold opacity-10"
                  >
                    {index < 10 ? `0${index + 1}` : index + 1}
                  </Text>
                  <div className="pl-[5px] md:pl-[32px]">
                    <div className="flex items-center pb-[16px]">
                      <Image
                        src={line}
                        alt="line"
                        className="h-[4px] md:h-[2px] w-[35px] md:w-[72px]"
                      />
                      <Text
                        size="small"
                        variant="primary"
                        className="font-poppins font-semibold md:font-bold uppercase pl-[16px] tracking-[4px] md:tracking-[3px]"
                      >
                        {content.subtitle}
                      </Text>
                    </div>
                    <Text
                      size="h3"
                      variant="default"
                      className="font-playfair text-left pb-[16px]"
                    >
                      {content.title}
                    </Text>
                    <Text
                      size="small"
                      variant="default"
                      className="font-poppins font-normal md:font-semibold text-[15px] leading-[2px] md:tracking-[3px]"
                    >
                      {content.paragraph}
                    </Text>
                    <div className="flex gap-4 cursor-pointer items-center mt-6">
                      <Text
                        size="small"
                        variant="primary"
                        className="font-poppins font-semibold text-sm tracking-wide"
                      >
                        read more
                      </Text>
                      <Image src={arrowRight} alt="" width={16} height={24} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-auto z-40">
                <Image
                  src={content.image}
                  alt={content.title}
                  width={460}
                  height={620}
                  className="object-cover w-full h-auto max-w-md mx-auto"
                />
              </div>
            </>
          ) : (
            <>
              <div className="relative w-full h-auto z-40">
                <Image
                  src={content.image}
                  alt={content.title}
                  width={460}
                  height={620}
                  className="object-cover w-full h-auto max-w-md mx-auto"
                />
              </div>

              <div className="relative col-span-1 md:col-span-2 md:pl-[32px]">
                <div className="relative z-10 w-full max-w-[896px] h-auto pt-[48px]">
                  <Text
                    size="h1"
                    variant="default"
                    className="absolute top-[-40px] left-[-40px] font-bold opacity-10"
                  >
                    {index < 10 ? `0${index + 1}` : index + 1}
                  </Text>
                  <div className="pl-[5px] md:pl-[32px]">
                    <div className="flex items-center pb-[16px]">
                      <Image src={line} alt="" width={72} height={2} />
                      <Text
                        size="small"
                        variant="primary"
                        className="font-poppins font-semibold md:font-bold uppercase pl-[16px] tracking-[4px] md:tracking-[3px]"
                      >
                        {content.subtitle}
                      </Text>
                    </div>
                    <Text
                      size="h3"
                      variant="default"
                      className="font-playfair text-left pb-[16px]"
                    >
                      {content.title}
                    </Text>
                    <Text
                      size="small"
                      variant="default"
                      className="font-poppins font-normal md:font-semibold text-[15px] leading-[2px] md:tracking-[3px]"
                    >
                      {content.paragraph}
                    </Text>
                    <div className="flex gap-4 cursor-pointer items-center mt-6">
                      <Text
                        size="small"
                        variant="primary"
                        className="font-poppins font-semibold text-sm tracking-wide"
                      >
                        read more
                      </Text>
                      <Image src={arrowRight} alt="" width={16} height={24} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
