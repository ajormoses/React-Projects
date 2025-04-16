import { IoClose, IoReorderThreeOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import cyberLogo from "../../assets/img/cyber-logo.svg";
import avatar from "../../assets/img/avatar/photo.svg";
import UiSearch from "../Ui/Search";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (showSearch && showSearch.trim().length > 0) {
      const timer = setTimeout(() => {
        navigate(`/filters?search=${showSearch}`);
      }, 1500);

      return () => clearTimeout(timer); // Clear previous timer if input changes
    }
  }, [showSearch, navigate]);

  const navLinks: {
    name: string;
    links?: string;
  }[] = [
    { name: "Home", links: "/" },
    { name: "About" },
    { name: "Contact Us" },
    { name: "Blog" },
  ];

  return (
    <>
      {/* Fixed Top Navbar */}
      <div className=" bg-white fixed top-0 left-0 right-0 w-full z-50 border-b border-[#B5B5B5]">
        <div className="py-6 lg:py-4 flex justify-between items-center container">
          <div className="flex lg:gap-8 lg:items-center xl:gap-10">
            <img
              onClick={() => navigate("/")}
              src={cyberLogo}
              alt="Cyber Logo"
              className="h-[23px] w-[65px] cursor-pointer"
            />
            <UiSearch
              value={showSearch}
              placeholder="Search"
              outerclass="!w-[372px] hidden lg:block"
              onChange={(e) => setShowSearch(e.target.value)}
            />
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-7 xl:gap-16 items-center">
              {navLinks.map((link, index) => (
                <span
                  key={index}
                  className="text-priGray cursor-pointer hover:text-black transition"
                  onClick={() => {
                    if (link.links) {
                      navigate(link.links);
                    }
                  }}
                >
                  {link.name}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <GrFavorite className="text-xl cursor-pointer" />
              <IoCartOutline
                onClick={() => navigate("/shopping-carts")}
                className="text-xl cursor-pointer"
              />
              <img
                src={avatar}
                alt="Avatar"
                className="w-6 h-6 rounded-full cursor-pointer"
              />
            </div>
          </div>

          <div
            onClick={() => setShowMenu(!showMenu)}
            className="cursor-pointer lg:hidden"
          >
            {showMenu ? (
              <IoClose className="w-10 h-10 transform transition-transform duration-300 ease-in-out rotate-180" />
            ) : (
              <IoReorderThreeOutline className="w-10 h-10 transform transition-transform duration-300 ease-in-out" />
            )}
          </div>
        </div>
      </div>

      {/* Sliding Navigation Menu */}
      <nav
        className={`bg-black fixed top-[4rem] left-0 w-full h-full z-40 transform transition-transform duration-300 ${
          showMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col gap-4  pt-10 container">
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
