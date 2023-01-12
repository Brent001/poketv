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
  {
    title: "Favoris",
    link: "/favoris",
  },
];

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="p-4 h-full max-w-[1200px] mx-auto flex flex-col gap-6 justify-between items-center md:flex-row md:gap-0 ">
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
