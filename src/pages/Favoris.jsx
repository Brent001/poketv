import React from "react";
import { useSelector } from "react-redux";
import AnimeCard from "../components/AnimeCard";

const Favoris = () => {
  const { favoris } = useSelector((state) => state.anime);

  return (
    <div className="flex-grow">
      <div className="p-4 max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold mb-4">Favorite Animes</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {favoris.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favoris;
