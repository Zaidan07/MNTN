import Image from "next/image";
import Logo from "@/assets/icon/logo.svg";
import Text from "@/components/Common/Text/Text";
import profile from "@/assets/icon/cart.svg";
import { useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div
      className="w-full h-auto py-[16px] px-[20px] md:py-[40px] md:relative fixed md:px-[80px] z-50 top-0 mb-[30px] backdrop-blur-[16px] bg-white/5 md:backdrop-blur-none md:bg-transparent transition-all duration-300"
    >
      <div className="flex justify-between items-center">
        {/* Logo Section (Hidden when menu is open) */}
        {!menuOpen && (
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="Logo"
              width={108}
              height={24}
              className="cursor-pointer"
            />
          </div>
        )}

        {/* Menu Items for Larger Screens */}
        <div className="hidden md:flex gap-10 items-center">
          <Text
            size="small"
            variant="default"
            className="font-semibold font-poppins cursor-pointer hover:text-[#fbd784]"
          >
            Equipment
          </Text>
          <Text
            size="small"
            variant="default"
            className="font-semibold font-poppins cursor-pointer hover:text-[#fbd784]"
          >
            About Us
          </Text>
          <Text
            size="small"
            variant="default"
            className="font-semibold font-poppins cursor-pointer hover:text-[#fbd784]"
          >
            Blog
          </Text>
        </div>

        {/* Account Section for Larger Screens */}
        <div className="hidden md:flex items-center gap-3">
          <Image
            src={profile}
            alt="Profile"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Text
            size="small"
            variant="default"
            className="font-semibold font-poppins cursor-pointer"
          >
            Account
          </Text>
        </div>

        {/* Hamburger Menu for Mobile Screens */}
        <div className="flex md:hidden text-white">
          <div onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>

      {/* Dropdown Menu for Mobile Screens */}
      {menuOpen && (
        <div
          className={`flex flex-col items-center mt-4 md:hidden p-4 transition-all duration-300 ease-in-out ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <Text
            size="small"
            variant="default"
            className="font-semibold font-poppins cursor-pointer mb-2"
          >
            Equipment
          </Text>
          <Text
            size="small"
            variant="default"
            className="font-semibold font-poppins cursor-pointer mb-2"
          >
            About Us
          </Text>
          <Text
            size="small"
            variant="default"
            className="font-semibold font-poppins cursor-pointer mb-2"
          >
            Blog
          </Text>
          <div className="flex items-center gap-2 mt-4">
            <Image
              src={profile}
              alt="Profile"
              width={24}
              height={24}
              className="cursor-pointer"
            />
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
  );
}
