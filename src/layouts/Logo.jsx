import React from "react";
import { MdCatchingPokemon } from "react-icons/md";
import { Link } from "react-router-dom";

const Logo = ({ inverse }) => {
  return (
    <Link
      to="/"
      className={`uppercase text-lg font-bold flex items-center gap-2 ${
        inverse ? "text-white" : "text-red-500"
      } group`}
    >
      <MdCatchingPokemon className="text-2xl transition-all group-hover:rotate-45" />
      <p>
        <span className={inverse ? "text-white" : "text-black"}>Poke</span>
        <span>TV</span>
      </p>
    </Link>
  );
};

export default Logo;
