import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
  return (
    <div className="h-[60] w-full p-4 flex justify-between">
      <div>
        <h2>PokeTV</h2>
      </div>
      <ul className="flex gap-2">
        {nav.map((navLink) => (
          <li>
            <Link
              to={navLink.link}
              className="px-4 py-3 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white"
            >
              {navLink.title}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <a href="https://">
        </a>
      </div>
    </div>
  );
};

export default Navbar;
