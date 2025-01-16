import NavLink from "./NavLink";
import NavBarLogo from "./NavBarLogo";
import { IoMenuSharp } from "react-icons/io5";
import NavBarProfile from "./NavBarProfile";

const NavBar = () => {
  return (
    <div className="items-ceter flex min-h-14 justify-around bg-[#303948] text-[12px] text-[#BEC6D3] md:px-28">
      <NavBarLogo />
      <NavLink />
      <NavBarProfile />
      <div className="h-fit w-fit cursor-pointer self-center rounded border p-1 lg:hidden">
        <IoMenuSharp />
      </div>
    </div>
  );
};

export default NavBar;
