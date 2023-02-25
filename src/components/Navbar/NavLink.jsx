import { Link } from "react-router-dom";

const NavLink = ({ navLink }) => {
  return (
    <li>
      <Link to={navLink.link}>{navLink.html}</Link>
    </li>
  );
};

export default NavLink;
