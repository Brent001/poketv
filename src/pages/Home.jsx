import axios from "axios";
import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";

const Home = () => {
  const [animes, setAnimes] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://api.consumet.org/meta/anilist/trending"
      );
      console.log(res.data);
      setAnimes(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex-grow">
      <div className="grid grid-cols-4 gap-4">
        {animes?.results.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default Home;
