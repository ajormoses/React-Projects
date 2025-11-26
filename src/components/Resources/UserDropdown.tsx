import { useState, useRef, useEffect } from "react";
import { doSignOut } from "../../config/auth";
import { useAuth } from "../../contexts/authContext";
import { VscSignOut } from "react-icons/vsc";
import avatar from "../../../public/img/avatar.svg";

const UserDropdown = () => {
  const { currentUser } = useAuth() || { currentUser: null };
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen((prev) => !prev);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      const activeTab = localStorage.getItem("activeTab");
      const profileDetails = localStorage.getItem("profileData");

      await doSignOut();
      setOpen(false);

      if (activeTab) {
        localStorage.removeItem("activeTab");
      }
      if (profileDetails) {
        localStorage.removeItem("profileData");
      }
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Icon */}
      <span
        className="mdi mdi-dots-vertical text-2xl text-primary cursor-pointer"
        onClick={toggleDropdown}
      ></span>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg border border-gray-100 z-50">
          <div className="flex items-center gap-3 px-4 py-3 border-b">
            <img
              src={currentUser?.photoURL || avatar}
              alt="User avatar"
              className="w-10 h-10 rounded-full"
            />
            <div className="text-sm">
              {currentUser?.displayName && (
                <p className="font-medium text-gray-800">
                  {currentUser?.displayName}
                </p>
              )}
              {currentUser?.email && (
                <p className="text-gray-500 text-xs truncate">
                  {currentUser?.email}
                </p>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleSignOut}
            className="w-full flex gap-2 items-center p-4 text-red-600 hover:bg-gray-100"
          >
            <VscSignOut /> <span className="text-sm">Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
