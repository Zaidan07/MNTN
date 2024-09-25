import Image from "next/image";
import Logo from "@/assets/icon/logo.svg";
import Text from "@/components/Common/Text/Text";

export default function Footer() {
  return (
    <>
      <div className="w-full h-[280px] grid grid-cols-3 pb-[380px] px-[50px]">
        <div className="flex flex-col w-[350px]">
          <Image src={Logo} alt="" className=" cursor-pointer"/>
          <Text
            size="p"
            variant="default"
            className="font-poppins font-semibold leading-[40px] mt-[24px]"
          >
            Get out there & discover your next slope, mountain & destination!
          </Text>
          <Text
            size="small"
            variant="secondary"
            className="font-poppins font-normal mt-[122px]"
          >
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </Text>
        </div>
        <div className="ml-[280px] w-[200px]">
          <Text
            size="p"
            variant="primary"
            className="font-poppins font-semibold"
          >
            More on The Blog
          </Text>
          <div className="flex flex-col gap-[30px] mt-[24px]">
            <Text size="small" variant="default" className="font-poppins cursor-pointer">About MNTM</Text>
            <Text size="small" variant="default" className="font-poppins cursor-pointer">Contributors & Writers</Text>
            <Text size="small" variant="default" className="font-poppins cursor-pointer">Write For Us</Text>
            <Text size="small" variant="default" className="font-poppins cursor-pointer">Contact Us</Text>
            <Text size="small" variant="default" className="font-poppins cursor-pointer">Privacy Policy</Text>
          </div>
        </div>
        <div className="ml-[265px] w-[140px]">
          <Text
            size="p"
            variant="primary"
            className="font-poppins font-semibold"
          >
            More on MNTN
          </Text>
          <div className="flex flex-col gap-[30px] mt-[24px]">
            <Text size="small" variant="default" className="font-poppins cursor-pointer">The Team</Text>
            <Text size="small" variant="default" className="font-poppins cursor-pointer">Jobs</Text>
            <Text size="small" variant="default" className="font-poppins cursor-pointer">Press</Text>
          </div>
        </div>
      </div>
    </>
  );
}
