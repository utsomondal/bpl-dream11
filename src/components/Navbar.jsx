import logo from "../assets/LOGO.png";
import { TbCoinTakaFilled } from "react-icons/tb";

const Navbar = ({credit}) => {
  
  return (
    <div className="flex justify-between items-center">
      <img src={logo} alt="logo" className="w-16" />
      <div>
        <ul className="flex items-center gap-10 text-gray-700">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>Fixture</li>
          </a>
          <a href="#">
            <li>Teams</li>
          </a>
          <a href="#">
            <li>Schedules</li>
          </a>
          <div className="border border-gray-300 px-3 py-1.5 rounded-sm flex items-center gap-1">
            <span className="font-semibold">{credit} Coin</span>
            <TbCoinTakaFilled className="text-[#E9AD03] text-xl"></TbCoinTakaFilled>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
