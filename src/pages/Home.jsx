import React from "react";
import AnimeCard from "../components/Cards/AnimeCard";
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
    <main>
      <div className="mx-auto max-w-7xl p-4">
        <h2 className="mb-4 text-2xl font-semibold">Trending Animes</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {animes.results.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
