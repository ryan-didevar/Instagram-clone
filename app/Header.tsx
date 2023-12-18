import Image from "next/image";
import { HiSearch } from "react-icons/hi";

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
        <h4>Right</h4>
      </div>
    </div>
  );
};

export default Header;
