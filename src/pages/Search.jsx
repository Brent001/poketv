import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { findAnime } from "../api/animes";
import AnimeCard from "../components/AnimeCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
    <div className="flex-grow">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col gap-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-medium mb-2">Search for and anime</h2>
          <input
            name="query"
            type="text"
            placeholder="Find an anime..."
            className="px-4 py-3 rounded-md outline-none w-full"
          />
        </form>

        {query !== "" && <h2 className="text-xl">Results for "{query}"</h2>}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {data.results ? (
            data.results.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))
          ) : (
            <p>No results</p>
          )}
        </div>

        <div className="flex gap-4 items-center text-red-500">
          {page > 1 && (
            <button
              onClick={handlePrevPage}
              className="p-2 text-2xl rounded-md border-2 border-red-500 text-red-500"
            >
              <FiChevronLeft />
            </button>
          )}
          {data.results && <p>Page {page}</p>}
          {data.hasNextPage && (
            <button
              onClick={handleNextPage}
              className="p-2 text-2xl rounded-md border-2 border-red-500 text-red-500"
            >
              <FiChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
