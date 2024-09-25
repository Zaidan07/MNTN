import Image from "next/image";
import Logo from "@/assets/icon/logo.svg";
import Text from "@/components/Common/Text/Text";
import profile from "@/assets/icon/cart.svg";

export default function Navbar() {
  return (
    <div className="flex w-full h-[25px] pt-[64px] mb-[198px] items-center">
      <div className="flex">
        <Image src={Logo} alt="" width={108} height={24} />
        <div className="flex gap-[40px] px-[425px]">
          <Text size="small" variant="default" className="font-semibold font-poppins">
            Equipment
          </Text>
          <Text size="small" variant="default" className="font-semibold font-poppins">
            About us
          </Text>
          <Text size="small" variant="default" className="font-semibold font-poppins">
            Blog
          </Text>
        </div>
        <div className="flex items-center gap-[8px]">
          <Image src={profile} alt="" />
          <Text size="small" variant="default" className="font-semibold font-poppins">Account</Text>
        </div>
      </div>
    </div>
  );
}
