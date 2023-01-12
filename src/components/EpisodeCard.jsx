import React from "react";
import { Link } from "react-router-dom";

const EpisodeCard = ({ episode }) => {
  return (
    <Link className="overflow-hidden shadow-md bg-white rounded-md" to="/">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={episode.image}
          alt={episode.title}
          className="object-cover object-center w-full h-full transition-all hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          {episode.title}
        </h3>

        <p className="text-sm">Episodes {episode.number}</p>
      </div>
    </Link>
  );
};

export default EpisodeCard;
