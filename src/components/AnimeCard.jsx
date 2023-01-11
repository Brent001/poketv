import React from "react";
import { Link } from "react-router-dom";

const AnimeCard = ({ anime }) => {
  const animeTitle = anime.title.english
    ? anime.title.english
    : anime.title.native;

  return (
    <Link
      className="overflow-hidden shadow-md bg-white rounded-md"
      to={`/anime/${anime.id}`}
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={anime.image}
          alt={animeTitle}
          className=" object-cover object-center w-full h-full transition-all hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          {animeTitle}
        </h3>

        <p className="text-sm">Episodes {anime.totalEpisodes}</p>
      </div>
    </Link>
  );
};

export default AnimeCard;
