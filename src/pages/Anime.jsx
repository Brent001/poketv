import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getAnimeDetails } from "../api/animes";
import Loading from "../components/Loading";
import Error from "../components/Error";
import AnimeCard from "../components/AnimeCard";
import DetailsCard from "../components/DetailsCard";

const Anime = () => {
  const { animeId } = useParams();
  const [isDub, setIsDub] = useState(false);
  const toggleDub = () => setIsDub((prev) => !prev);
  const descElement = useRef(null);

  const { data: anime, status } = useQuery({
    queryKey: ["animes", parseInt(animeId), isDub],
    queryFn: () => getAnimeDetails(animeId, isDub),
  });

  useEffect(() => {
    if (anime && descElement.current)
      descElement.current.innerHTML = anime.description;
  }, [anime]);

  if (status === "loading") return <Loading />;
  if (status === "error") return <Error />;

  return (
    <>
      <div
        className="flex-grow flex"
        style={{
          background: `url(${anime.cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full flex flex-grow backdrop-blur-md bg-[rgba(0,0,0,.4)]">
          <div className="max-w-[1200px] w-full justify-center mx-auto flex flex-col gap-4 p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 w-[200px] mx-auto md:mx-0">
                <img
                  src={anime.image}
                  alt={
                    anime.title.english
                      ? anime.title.english
                      : anime.title.native
                  }
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <DetailsCard anime={anime} isDub={isDub} toggleDub={toggleDub} />
            </div>

            <div className="p-4 rounded-md backdrop-blur-lg bg-[rgba(255,255,255,.5)]">
              <h4 className="font-bold text-2xl mb-2">Description</h4>
              <p ref={descElement} className="text-sm"></p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] p-4 mx-auto">
        <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {anime.recommendations.slice(0, 6).map((item) => (
            <AnimeCard key={item.id} anime={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Anime;
