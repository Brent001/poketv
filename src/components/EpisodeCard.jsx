import React from "react";
import { Link } from "react-router-dom";
import epImg from "../assets/placeholder.webp";

const EpisodeCard = ({ episode, animeId, isDub }) => {
  return (
    <Link
      to={`/watch/${animeId}/${isDub}/${episode.id}`}
      className="bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <img className="w-full" src={epImg} alt={episode.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2 whitespace-nowrap text-ellipsis overflow-hidden">
          {episode.title}
        </div>
        <p className="text-gray-700 text-base">Episode {episode.number}</p>
      </div>
    </Link>
  );
};

export default EpisodeCard;
