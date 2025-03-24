import { IoClose, IoReorderThreeOutline } from "react-icons/io5";
import { useState } from "react";
import cyberLogo from "../../assets/img/cyber-logo.svg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navLinks = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Contact" },
  ];

  return (
    <>
      {/* Fixed Top Navbar */}
      <div className="px-4 py-6 flex justify-between items-center border-b border-gray-300 bg-white fixed top-0 left-0 w-full z-50">
        <img src={cyberLogo} alt="Cyber Logo" className="h-[23px] w-[65px]" />
        <div onClick={() => setShowMenu(!showMenu)} className="cursor-pointer">
          {showMenu ? (
            <IoClose className="w-10 h-10 transform transition-transform duration-300 ease-in-out rotate-180" />
          ) : (
            <IoReorderThreeOutline className="w-10 h-10 transform transition-transform duration-300 ease-in-out" />
          )}
        </div>
      </div>

      {/* Sliding Navigation Menu */}
      <nav
        className={`bg-black fixed top-[4rem] left-0 w-full h-full z-40 transform transition-transform duration-300 ${
          showMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-4 p-6">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-white text-lg py-2.5 cursor-pointer hover:bg-gray-800 transition"
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
