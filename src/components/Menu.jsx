import React from "react";
import { FiX } from "react-icons/fi";
import Logo from "../layouts/Logo";

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <div className="md:hidden w-full h-screen flex flex-col bg-red-500 text-white fixed left-0 top-0 z-50">
      <div className="flex justify-between items-center h-14 p-4">
        <Logo inverse />

        <button
          className="flex p-2 rounded-full hover:bg-white hover:text-red-500"
          onClick={toggleMenu}
        >
          <FiX className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Menu;
