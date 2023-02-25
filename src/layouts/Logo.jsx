import { TvIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="flex-1">
      <Link
        to="/"
        className="group btn-ghost btn gap-2 text-xl font-bold text-primary"
      >
        <TvIcon width={32} />
        <h3 className="bg-gradient-to-r from-primary to-secondary bg-clip-text normal-case text-transparent transition-all group-hover:bg-gradient-to-l">
          PokeTV
        </h3>
      </Link>
    </div>
  );
};

export default Logo;
