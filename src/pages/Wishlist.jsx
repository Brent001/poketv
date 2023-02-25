import React from "react";
import { useSelector } from "react-redux";
import AnimeCard from "../components/AnimeCard";

const Wishlist = () => {
  const { favoris } = useSelector((state) => state.anime);

  return (
    <div>
      <div className="mx-auto max-w-7xl p-4">
        <h2 className="mb-4 text-2xl font-bold">Favorite Animes</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {favoris.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
