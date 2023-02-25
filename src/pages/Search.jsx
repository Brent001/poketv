import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { findAnime } from "../api/animes";
import AnimeCard from "../components/Cards/AnimeCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { BackwardIcon, ForwardIcon } from "@heroicons/react/24/solid";

const Search = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data, status } = useQuery({
    queryKey: ["animes", query, page],
    queryFn: () => findAnime(query, page),
  });

  const handleSubmit = (e) => {
    setQuery(e.target["query"].value);
    setPage(1);
    e.preventDefault();
  };
  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => prev - 1);

  if (status === "loading") return <Loading />;
  if (status === "error") return <Error />;

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 p-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium">Find an anime</h2>
            <input
              name="query"
              type="text"
              placeholder="Type here..."
              className="input-primary input w-full"
            />
            <button className="btn btn-primary w-full">Search</button>
          </form>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {data.results &&
              data.results.map((anime) => (
                <AnimeCard key={anime.id} anime={anime} />
              ))}
          </div>

          {data.results?.length > 0 && (
            <div className="btn-group self-center">
              <button
                disabled={page === 1}
                onClick={handlePrevPage}
                className="btn"
              >
                <BackwardIcon width={24} />
              </button>
              <button className="btn">Page {page}</button>
              <button
                disabled={!data.hasNextPage}
                onClick={handleNextPage}
                className="btn"
              >
                <ForwardIcon width={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
