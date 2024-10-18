import Image from "next/image";
import Logo from "@/assets/icon/logo.svg";
import Text from "@/components/Common/Text/Text";
import profile from "@/assets/icon/cart.svg";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex w-full h-[25px] pt-[64px] mb-[198px] items-center z-10 px-[80px]">
      <div className="flex px-[0px]">
        <Image
          src={Logo}
          alt=""
          width={108}
          height={24}
          className="md:ml-[25px] cursor-pointer"
        />
        <div className="hidden md:flex gap-[40px] px-[420px]">
          <Text
            size="small"
            variant="default"
            className="font-semibold font-poppins cursor-pointer"
          >
            Equipment
          </Text>
          <Text
            size="small"
            variant="default"
            className="font-semibold font-poppins cursor-pointer"
          >
            About us
          </Text>
          <Text
            size="small"
            variant="default"
            className="font-semibold font-poppins cursor-pointer"
          >
            Blog
          </Text>
        </div>
        <div className="hidden md:flex items-center gap-[8px]">
          <Image src={profile} alt="" className=" cursor-pointer" />
          <Text
            size="small"
            variant="default"
            className="font-semibold font-poppins cursor-pointer"
          >
            Account
          </Text>
        </div>
      </div>
      <div className="flex md:hidden gap-[40px] pl-[100px]">
        <div onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        {menuOpen && (
          <div className="flex flex-col items-center">
            <Text
              size="small"
              variant="default"
              className="font-semibold font-poppins cursor-pointer"
            >
              Equipment
            </Text>
            <Text
              size="small"
              variant="default"
              className="font-semibold font-poppins cursor-pointer"
            >
              About us
            </Text>
            <Text
              size="small"
              variant="default"
              className="font-semibold font-poppins cursor-pointer"
            >
              Blog
            </Text>
            <div className="flex items-center gap-[8px]">
              <Image src={profile} alt="" className=" cursor-pointer" />
              <Text
                size="small"
                variant="default"
                className="font-semibold font-poppins cursor-pointer"
              >
                Account
              </Text>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
