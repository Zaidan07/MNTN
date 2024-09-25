import ig from "@/assets/icon/instagram.svg";
import tw from "@/assets/icon/twitter.svg";
import Image from "next/image";
import Text from "../Common/Text/Text";


export default function FollowUs() {
    return (
        <div className="relative left-0 top-1/3 flex flex-col items-center space-y-4">
            <Text size="p" variant="default" className="font-poppins rotate-[90deg]">Follow us</Text>
            <Image src={ig} alt="" />
            <Image src={tw} alt="" />
        </div>
    );
};