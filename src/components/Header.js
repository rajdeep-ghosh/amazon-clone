import Image from "next/image";
import amznLogoREV from "../assets/images/amzn-logo-rev.svg";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex flex-grow items-center bg-amzn_blue p-1 py-2">
        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src={amznLogoREV}
            width={140}
            height={30}
            alt="Amazon logo"
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex flex-grow items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input className="px-4 py-2 h-full w-6 flex-1 rounded-l-md focus:outline-none" type="text" placeholder="Search" />
          <SearchIcon className="h-8 p-2" />
        </div>
      </div>
    </header>
  );
}

export default Header;
