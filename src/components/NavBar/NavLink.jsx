import { PiCastleTurretBold } from "react-icons/pi";
import { RiHome7Line } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbChartLine } from "react-icons/tb";
import { BsStars } from "react-icons/bs";

const NavLink = () => {
  return (
    <ul className="hidden flex-1 justify-around lg:flex [&>li]:flex [&>li]:cursor-pointer [&>li]:items-center [&>li]:gap-2">
      <li>
        <RiHome7Line />
        DashBoard
      </li>
      <li>
        <BsStars /> FirstGuru
      </li>
      <li>
        <PiCastleTurretBold /> TownHall
      </li>
      <li>
        <AiOutlineThunderbolt />
        AiEvaluation
      </li>
      <li>
        <TbChartLine /> Performance
      </li>
      <li className="text-teal-400">
        <CgNotes /> Mock Test
      </li>
    </ul>
  );
};

export default NavLink;
