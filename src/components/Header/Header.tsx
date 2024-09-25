import Image from "next/image";
import arrow_down from "@/assets/logo/arrow_down.svg";
import line from "@/assets/logo/line.svg";
import Text from "../Common/Text/Text";
import Navbar from "../Common/Navbar/Navbar";

export default function Header() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center flex-col mt-[198px] px-[210px] ml-[70px]">
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
          <Text size="h2" variant="default" className="text-[77px] font-playfair">
            Be Prepared For The Mountains And Beyond!
          </Text>
        </div>

        <div className="flex gap-[10px] mt-[50px] text-center ">
          <Text
            size="p"
            variant="default"
            className="font-semibold font-poppins mt-[10px]"
          >
            scroll down
          </Text>
          <Image src={arrow_down} alt="arrow down" width={16} height={24} />
        </div>
      </div>
    </>
  );
}
