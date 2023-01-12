import React from "react";
import { Link } from "react-router-dom";

const DetailsCard = ({ anime }) => {
  console.log(anime);
  return (
    <div className="backdrop-blur-lg bg-[rgba(255,255,255,.5)] shadow-md p-4 rounded-md flex flex-col gap-2 w-full">
      <p className="text-2xl font-medium">
        {anime.title.english ? anime.title.english : anime.title.native}
      </p>

      <p className="uppercase flex items-center gap-2 font-bold text-xs">
        <span className="px-2 py-1 rounded-md border-2 border-white text-white">
          {anime.subOrDub}
        </span>

        <span className="px-2 py-1 rounded-md border-2 border-white text-white">
          {anime.type}
        </span>

        <span className="lowercase px-2 py-1 rounded-md border-2 border-white text-white">
          {anime.duration}m
        </span>
      </p>

      <p>Genre(s): {anime.genres.join(", ")}</p>
      <p>Status: {anime.status}</p>
      <p>
        Start Date: {anime.startDate.month}/{anime.startDate.day}/
        {anime.startDate.year}
      </p>

      {anime.episodes.length > 0 && (
        <Link
          to={`/watch/${anime.id}/${anime.episodes[0].id}`}
          className="btn self-start"
        >
          Watch Now
        </Link>
      )}
    </div>
  );
};

export default DetailsCard;
