import React from "react";
import { Link } from "react-router-dom";
import Logo from "../layouts/Logo";

const nav = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Search",
    link: "/search",
  },
];

const Navbar = () => {
  return (
    <div className="w-full bg-white sticky top-0 shadow-sm z-10">
      <div className="p-4 h-full max-w-[1200px] mx-auto flex justify-between items-center">
        <Logo />

        <ul className="flex gap-2">
          {nav.map((navLink) => (
            <li key={navLink.link}>
              <Link to={navLink.link} className="btn-ghost">
                {navLink.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
