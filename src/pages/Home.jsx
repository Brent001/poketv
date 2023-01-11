import React from "react";
import AnimeCard from "../components/AnimeCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useQuery } from "@tanstack/react-query";
import { getAnimes } from "../api/animes";

const Home = () => {
  const { data: animes, status } = useQuery({
    queryKey: ["animes"],
    queryFn: getAnimes,
  });

  if (status === "loading") return <Loading />;
  if (status === "error") return <Error />;

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
