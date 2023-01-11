import React from "react";
import { Link } from "react-router-dom";

const AnimeCard = ({ anime }) => {
  return (
    <Link
      className="p-4 shadow-md bg-white rounded-md"
      to={`/anime/${anime.id}`}
    >
      <h3>{anime.title.english}</h3>
    </Link>
  );
};

export default AnimeCard;
