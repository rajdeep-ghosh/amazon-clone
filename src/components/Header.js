import Image from "next/image";
import amznLogoREV from "../assets/images/amzn-logo-rev.svg";

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
      </div>
    </header>
  );
}

export default Header;
