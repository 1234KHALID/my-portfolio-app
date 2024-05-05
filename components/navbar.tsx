import Image from "next/image";
import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import codeLogo from "../public/images/code-logo.png";

interface NavbarProps {
  onOpen: () => void;
}

const Navbar = ({ onOpen }: NavbarProps) => {
  return (
    <div className="w-full z-50 bg-gray-800">
      <div className="flex items-center  justify-between w-[80%] mx-auto h-20">
        <div className="font-logo text-white text-18">
          <Image src={codeLogo} width={100} height={100} alt="" />
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Project
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <FaBarsStaggered
          onClick={onOpen}
          className="md:hidden w-6 h-6 text-white"
        />
      </div>
    </div>
  );
};

export default Navbar;
