import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavoris, removeFavoris } from "../redux/animeSlice";
import { BsCheck, BsCheckLg, BsPlayFill, BsStarFill } from "react-icons/bs";

const DetailsCard = ({ anime, isDub, toggleDub }) => {
  const { favoris } = useSelector((state) => state.anime);
  const [isFavoris, setIsFavoris] = useState(false);
  const dispatch = useDispatch();

  console.log(anime);

  useEffect(() => {
    const alreadyFavoris = favoris.find((item) => item.id === anime.id);

    if (alreadyFavoris) {
      setIsFavoris(true);
    } else {
      setIsFavoris(false);
    }
  }, [anime.id, favoris]);

  const handleFavoris = () => {
    if (isFavoris) {
      dispatch(removeFavoris(anime));
    } else {
      dispatch(addFavoris(anime));
    }
  };

  return (
    <div className="backdrop-blur-lg bg-[rgba(255,255,255,.5)] shadow-md p-4 rounded-md flex flex-col gap-2 w-full">
      <p className="text-2xl font-medium">
        {anime.title.english ? anime.title.english : anime.title.native}
      </p>

      <p className="uppercase flex items-center gap-2 font-bold text-xs mb-2">
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

      <div className="flex gap-4 mt-4">
        <button
          className="btn bg-black flex gap-2 items-center justify-center text-white
          "
          onClick={() => handleFavoris()}
        >
          {isFavoris ? (
            <>
              Added
              <BsCheckLg />
            </>
          ) : (
            <>
              Favoris
              <BsStarFill />
            </>
          )}
        </button>

        {anime.episodes.length > 0 && (
          <Link
            to={`/watch/${anime.id}/${isDub}/${anime.episodes[0].id}`}
            className="btn flex gap-2 bg-black items-center justify-center text-white"
          >
            Watch
            <BsPlayFill className="text-2xl" />
          </Link>
        )}

        {isDub && (
          <button
            className="btn bg-black text-white"
            onClick={() => toggleDub()}
          >
            Switch To Sub
          </button>
        )}

        {!isDub && (
          <button
            className="btn bg-black text-white"
            onClick={() => toggleDub()}
          >
            Switch To Dub
          </button>
        )}
      </div>
    </div>
  );
};

export default DetailsCard;
