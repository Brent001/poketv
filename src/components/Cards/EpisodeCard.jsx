import React from "react";
import { Link } from "react-router-dom";
import epImg from "../../assets/placeholder.webp";

const EpisodeCard = ({ episode, animeId, isDub }) => {
  return (
    <Link
      to={`/watch/${animeId}/${isDub}/${episode.id}`}
      className="card rounded-lg bg-base-300 shadow-lg"
    >
      <figure className="aspect-video w-full overflow-hidden">
        <img
          className="h-full w-full object-cover object-center"
          src={epImg}
          alt={episode.title}
        />
      </figure>
      <div className="p-3">
        <h4 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium">
          {episode.title}
        </h4>
        <p>Episode {episode.number}</p>
      </div>
    </Link>
  );
};

export default EpisodeCard;
