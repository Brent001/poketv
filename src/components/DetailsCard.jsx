import React from "react";
import { Link } from "react-router-dom";

const DetailsCard = ({ anime }) => {
  return (
    <div className="backdrop-blur-lg bg-[rgba(255,255,255,.5)] shadow-md p-4 rounded-md flex flex-col gap-2 w-full">
      <p className="text-4xl font-medium">
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

      <p>
        <span className="font-bold">Genre(s):</span> {anime.genres.join(", ")}
      </p>
      <p>
        <span className="font-bold">Status:</span> {anime.status}
      </p>
      <p>
        <span className="font-bold">Start Date:</span> {anime.startDate.month}/
        {anime.startDate.day}/{anime.startDate.year}
      </p>
      <p>
        <span className="font-bold">Langage:</span> {anime.subOrDub}
      </p>
      <p>
        <span className="font-bold">Type:</span> {anime.type}
      </p>

      <div className="flex gap-2">
        <Link
          to={`/watch/${anime.id}/${anime.episodes[0].id}`}
          className="px-4 py-2 rounded-md bg-red-500 text-white font-medium"
        >
          Watch Now
        </Link>
      </div>

      {/* <p className="text-sm" ref={descElement}></p> */}
      {/* {anime.trailer.site === "youtube" && (
              <YouTube
                videoId={anime.trailer.id}
                opts={{ width: 400, height: 250 }}
              />
            )} */}
    </div>
  );
};

export default DetailsCard;
