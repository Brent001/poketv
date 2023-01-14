import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-14 bg-white sticky top-0 shadow-sm">
      <div className="p-4 h-full max-w-[1200px] mx-auto flex gap-4 items-center">
        <span className="text-xs uppercase font-bold">PokeTv</span>
        <span className="w-2 h-2 bg-red-500 rotate-45"></span>
        <span className="text-xs uppercase font-bold">Made by Lamine</span>
        <span className="w-2 h-2 bg-red-500 rotate-45"></span>
        <a
          href="https://buymeacoffee.com/nemila"
          target="_blank"
          className="text-red-500 text-xs uppercase font-bold hover:underline"
          rel="noreferrer"
        >
          Buy me a coffee
        </a>
      </div>
    </div>
  );
};

export default Footer;
