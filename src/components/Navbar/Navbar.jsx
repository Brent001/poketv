import Logo from "../../layouts/Logo";
import Menu from "./Menu";
import NavLink from "./NavLink";

const nav = [
  {
    link: "/",
    html: "Home",
  },
  {
    link: "/search",
    html: "Search",
  },
];

const Navbar = () => {
  return (
    <nav className="sticky left-0 top-0 z-50 w-full bg-base-300 bg-opacity-95 backdrop-blur-lg">
      <div className="mx-auto max-w-7xl">
        <div className="navbar">
          <Logo />

          <Menu nav={nav} />

          <div className="hidden flex-none md:flex">
            <ul className="menu menu-horizontal gap-2 px-1">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
