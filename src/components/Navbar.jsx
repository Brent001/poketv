import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";

const Navbar = () => {
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
  return (
    <div className="w-full h-14">
      <div className="p-4 h-full max-w-[1200px] mx-auto flex justify-between items-center">
        <div>
          <h2 className="uppercase text-lg font-bold flex items-center gap-2">
            <MdCatchingPokemon className="text-2xl text-red-500" />
            <span>
              Poke<span className="text-red-500">TV</span>
            </span>
          </h2>
        </div>

        <ul className="hidden md:flex gap-2">
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

        <div className="hidden md:flex gap-2">
          {socialLinks.map((link) => (
            <a
              href="https://"
              className="rounded-full p-2 hover:bg-gray-800 hover:text-white text-xl"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
