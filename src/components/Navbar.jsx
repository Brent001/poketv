import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import Logo from "../layouts/Logo";

const socialLinks = [<FaFacebook />, <FaInstagram />, <FaTwitter />];
const nav = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Search",
    link: "/search",
  },
  {
    title: "Favoris",
    link: "/favoris",
  },
];

const Navbar = ({ isOpen, toggleMenu }) => {
  return (
    <div className="w-full bg-white sticky top-0 shadow-sm z-10">
      <div className="p-4 h-full max-w-[1200px] mx-auto flex justify-between items-center">
        <Logo />

        <ul className="hidden md:flex gap-2">
          {nav.map((navLink) => (
            <li key={navLink.link}>
              <Link
                to={navLink.link}
                className="px-4 py-[10px] rounded-md text-sm font-medium hover:bg-red-500 hover:text-white"
              >
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href="https://"
              className="rounded-full p-2 text-xl hover:bg-red-500 hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <button
          className="block p-2 rounded-full hover:bg-red-500 hover:text-white md:hidden"
          onClick={toggleMenu}
        >
          <CgMenuRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
