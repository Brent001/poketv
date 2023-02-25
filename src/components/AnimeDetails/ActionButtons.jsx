import { LanguageIcon, PlayIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const ActionButtons = ({ anime, isDub, toggleDub }) => {
  return (
    <div className="flex gap-4">
      {anime.episodes.length > 0 && (
        <Link
          to={`/watch/${anime.id}/${isDub}/${anime.episodes[0].id}`}
          className="btn btn-primary gap-2"
        >
          <PlayIcon width={24} />
          Watch
        </Link>
      )}

      <button className="btn btn-secondary gap-2" onClick={() => toggleDub()}>
        <LanguageIcon width={24} />
        <span>{isDub ? "Sub" : "Dub"}</span>
      </button>
    </div>
  );
};

export default ActionButtons;
