import Image from "next/image";
import Logo from "@/assets/icon/logo.svg";
import Text from "@/components/Common/Text/Text";

export default function Footer() {
  return (
    <>
      <div className="w-full h-auto px-[50px] pb-[50px] flex flex-col justify-between">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Left Section */}
          <div className="flex flex-col w-full md:w-[350px]">
            <Image src={Logo} alt="" className=" cursor-pointer" />
            <Text
              size="p"
              variant="default"
              className="font-poppins font-semibold leading-[10px] md:leading-[40px] mt-[10px] md:mt-[24px]"
            >
              Get out there & discover your next slope, mountain & destination!
            </Text>
          </div>
          
          {/* Middle Section */}
          <div className="md:ml-[280px] w-[200px] pt-[15px]">
            <Text
              size="p"
              variant="primary"
              className="font-poppins font-semibold text-[11px]"
            >
              More on The Blog
            </Text>
            <div className="flex flex-col gap-[8px] md:gap-[30px] pt-[8px] md:pt-[24px]">
              <Text
                size="small"
                variant="default"
                className="font-poppins cursor-pointer text-[10px] hover:text-[#FBD784]"
              >
                About MNTM
              </Text>
              <Text
                size="small"
                variant="default"
                className="font-poppins cursor-pointer text-[10px] hover:text-[#FBD784]"
              >
                Contributors & Writers
              </Text>
              <Text
                size="small"
                variant="default"
                className="font-poppins cursor-pointer text-[10px] hover:text-[#FBD784]"
              >
                Write For Us
              </Text>
              <Text
                size="small"
                variant="default"
                className="font-poppins cursor-pointer text-[10px] hover:text-[#FBD784]"
              >
                Contact Us
              </Text>
              <Text
                size="small"
                variant="default"
                className="font-poppins cursor-pointer text-[10px] hover:text-[#FBD784]"
              >
                Privacy Policy
              </Text>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="md:ml-[265px] w-[140px] pt-[18px] md:pt-0">
            <Text
              size="p"
              variant="primary"
              className="font-poppins text-[11px] font-semibold"
            >
              More on MNTN
            </Text>
            <div className="flex flex-col gap-[8px] md:gap-[30px] pt-[8px] md:pt-[24px]">
              <Text
                size="small"
                variant="default"
                className="font-poppins cursor-pointer text-[10px] hover:text-[#FBD784]"
              >
                The Team
              </Text>
              <Text
                size="small"
                variant="default"
                className="font-poppins cursor-pointer text-[10px] hover:text-[#FBD784]"
              >
                Jobs
              </Text>
              <Text
                size="small"
                variant="default"
                className="font-poppins cursor-pointer text-[10px] hover:text-[#FBD784]"
              >
                Press
              </Text>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Copyright */}
        <div className="mt-auto pt-[20px] md:pt-0 w-full md:w-[350px]">
          <Text
            size="small"
            variant="secondary"
            className="font-poppins text-[4px] font-normal mt-[24px]"
          >
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </Text>
        </div>
      </div>
    </>
  );
}
