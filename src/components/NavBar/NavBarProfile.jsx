import { BiChevronDown } from "react-icons/bi";

import { TbBell } from "react-icons/tb";
const NavBarProfile = () => {
  return (
    <div className="flex items-center gap-2 [&>*]:cursor-pointer">
      <TbBell className="text-lg" />
      <div className="flex items-center rounded bg-[#1D2733] p-1 md:gap-2">
        <p className="grid h-5 w-5 place-content-center rounded bg-[#F7C5BA] text-center text-xl text-black">
          P
        </p>
        <p className="hidden md:block">Profile</p>
        <BiChevronDown className="text-lg" />
      </div>
    </div>
  );
};

export default NavBarProfile;
