import Image from "next/image";
import Logo from "@/assets/icon/logo.svg";
import Text from "@/components/Common/Text/Text";
import profile from "@/assets/icon/cart.svg";

export default function Navbar() {
  return (
    <div className="flex w-full h-[25px] pt-[64px] mb-[198px] items-center z-10">
      <div className="flex">
        <Image src={Logo} alt="" width={108} height={24} className=" cursor-pointer"/>
        <div className="flex gap-[70px] px-[400px]">
          <Text size="small" variant="default" className="font-semibold font-poppins cursor-pointer">
            Equipment
          </Text>
          <Text size="small" variant="default" className="font-semibold font-poppins cursor-pointer">
            About us
          </Text>
          <Text size="small" variant="default" className="font-semibold font-poppins cursor-pointer">
            Blog
          </Text>
        </div>
        <div className="flex items-center gap-[8px]">
          <Image src={profile} alt="" className=" cursor-pointer"/>
          <Text size="small" variant="default" className="font-semibold font-poppins cursor-pointer">Account</Text>
        </div>
      </div>
    </div>
  );
}
