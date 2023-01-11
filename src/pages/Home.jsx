import axios from "axios";
import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

const Home = () => {
  const [animes, setAnimes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.consumet.org/meta/anilist/trending?perPage=60"
        );
        setError(null);
        setIsLoading(false);
        setAnimes(res.data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="flex-grow">
      <div className="p-4 max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold mb-4">Trending Animes</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {animes.results.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
