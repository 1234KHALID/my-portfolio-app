import React from "react";
import { IoMdClose } from "react-icons/io";

interface MobileNavbarProps {
  showNav: boolean;
  onClose: () => void;
}

const MobileNavbar = ({ showNav, onClose }: MobileNavbarProps) => {
  const navOpenStyle = showNav ? "translate-x-0" : "-translate-x-full";

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black opacity-70 z-40 transition-opacity duration-300 ${
          showNav ? "block" : "hidden"
        }`}
        onClick={onClose}
      ></div>
      <ul
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 overflow-y-auto transform transition-transform duration-300 ${navOpenStyle}`}
      >
        <li>
          <a href="#" className="block py-4 px-6 text-gray-800">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block py-4 px-6 text-gray-800">
            Project
          </a>
        </li>
        <li>
          <a href="#" className="block py-4 px-6 text-gray-800">
            About
          </a>
        </li>
        <li>
          <a href="#" className="block py-4 px-6 text-gray-800">
            Contact
          </a>
        </li>
        <IoMdClose
          onClick={onClose}
          className="absolute top-4 right-4 w-6 h-6 text-gray-800 cursor-pointer"
        />
      </ul>
    </div>
  );
};

export default MobileNavbar;
