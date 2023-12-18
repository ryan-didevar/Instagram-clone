import Image from "next/image";
import { HiSearch } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { FaPlusCircle } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://repository-images.githubusercontent.com/378944031/69abff2e-898b-4819-96e9-bc7b01664da0"
            alt="Instagram Logo"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            alt="Instagram Logo"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <HiSearch className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>
        <div className="flex space-x-4 items-center">
          <AiFillHome className="hidden md:inline-flex  h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out" />
          <>
            <FaPlusCircle className="h-6 cursor-pointer hover:scale-125 transition-tranform duration-200 ease-out" />
            <Image
              src="https://media.licdn.com/dms/image/D4E35AQEP6ONKbJUGZw/profile-framedphoto-shrink_400_400/0/1681760309205?e=1703494800&v=beta&t=zl-Kt6BZZXI0e7PaE1avrm7d20jXVvArDxdyYwRlsx0"
              alt="user-image"
              width={50}
              height={50}
              className="rounded-full cursor-pointer"
            />
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;
