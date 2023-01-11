import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Anime = () => {
  const { animeId } = useParams();
  const [anime, setAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.consumet.org/meta/anilist/info/${animeId}`
      );
      console.log(res.data);
      setAnime(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, [animeId]);

  if (isLoading) {
    return <div className="flex-grow">Loading</div>;
  }

  return (
    <div className="flex-grow">
      <img src={anime?.cover} alt={anime.title} />
      <img src={anime?.image} alt={anime.title} />
      <h1>{anime && anime.title.english}</h1>
      <p>{anime && anime.description}</p>
    </div>
  );
};

export default Anime;
