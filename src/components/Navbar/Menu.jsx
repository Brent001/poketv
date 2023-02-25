import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import React from "react";
import NavLink from "./NavLink";

const Menu = ({ nav }) => {
  return (
    <div className="dropdown dropdown-end ml-auto flex-none md:hidden">
      <label tabIndex={0} className="btn-ghost btn-square btn">
        <EllipsisHorizontalIcon width={28} />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-200 p-2 shadow"
      >
        {nav.map((navLink) => (
          <NavLink key={navLink.link} navLink={navLink} />
        ))}

        <li>
          <a
            href="https://buymeacoffee.com/nemila"
            target="_blank"
            rel="noreferrer"
          >
            Donate
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
