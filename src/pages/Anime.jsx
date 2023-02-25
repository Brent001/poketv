import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { getAnimeDetails } from "../api/animes";
import AnimeDetails from "../components/AnimeDetails/AnimeDetails";
import AnimeCard from "../components/Cards/AnimeCard";
import EpisodeCard from "../components/Cards/EpisodeCard";
import Error from "../components/Error";
import Loading from "../components/Loading";

const Anime = () => {
  const { animeId } = useParams();
  const [isDub, setIsDub] = useState(false);
  const toggleDub = () => setIsDub((prev) => !prev);

  const { data: anime, status } = useQuery({
    queryKey: ["animes", parseInt(animeId), isDub],
    queryFn: () => getAnimeDetails(animeId, isDub),
  });

  if (status === "loading") return <Loading />;
  if (status === "error") return <Error />;

  return (
    <main>
      <section
        className="flex flex-grow bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: `url(${anime.cover})`,
        }}
      >
        <div className="flex w-full flex-grow">
          <div className="mx-auto flex w-full max-w-7xl flex-col justify-center gap-4 p-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <figure className="mx-auto w-[200px] flex-shrink-0 md:mx-0">
                <img
                  src={anime.image}
                  title={anime.title?.english || anime.title.native}
                  alt={anime.title?.english || anime.title.native}
                  className="h-full w-full object-cover object-center"
                />
              </figure>

              <AnimeDetails anime={anime} isDub={isDub} toggleDub={toggleDub} />
            </div>

            <div className="rounded-md bg-base-300 bg-opacity-80 p-4 backdrop-blur-lg">
              <h4 className="mb-2 text-2xl font-bold">Description</h4>
              <p
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: anime.description }}
              ></p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl p-4">
        <h2 className="mb-4 text-2xl font-bold">Episodes</h2>

        <div className="grid max-h-[400px] grid-cols-2 gap-4 overflow-y-auto md:grid-cols-3 lg:grid-cols-5">
          {anime.episodes.length > 0 &&
            anime.episodes.map((item) => (
              <EpisodeCard episode={item} animeId={animeId} isDub={isDub} />
            ))}
        </div>

        <h2 className="my-4 text-2xl font-bold">Recommendations</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {anime.recommendations.slice(0, 6).map((item) => (
            <AnimeCard key={item.id} anime={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Anime;
