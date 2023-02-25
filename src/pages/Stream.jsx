import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAnimeDetails, getStreamingLinks } from "../api/animes";
import Player from "../components/Player";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { BackwardIcon, ForwardIcon } from "@heroicons/react/24/solid";

const Stream = () => {
  const { animeId, episodeId, lang } = useParams();
  const baseUlr = `/watch/${animeId}/${lang}`;

  const navigate = useNavigate();

  const { data: stream, status } = useQuery({
    queryKey: ["animes", episodeId],
    queryFn: () => getStreamingLinks(episodeId),
  });

  const { data: anime, status: animeStatus } = useQuery({
    enabled: stream != null,
    queryKey: ["animes", animeId, lang],
    queryFn: () => getAnimeDetails(animeId, lang),
  });

  if (status === "loading" || animeStatus === "loading") return <Loading />;
  if (status === "error" || animeStatus === "error") return <Error />;

  const currentEpisode = anime.episodes.find((item) => item.id === episodeId);
  const nextEpIndex = anime.episodes.indexOf(currentEpisode) + 1;
  const prevEpIndex = anime.episodes.indexOf(currentEpisode) - 1;

  const nextEpId =
    anime.episodes[nextEpIndex] && anime.episodes[nextEpIndex].id;
  const prevEpId =
    anime.episodes[prevEpIndex] && anime.episodes[prevEpIndex].id;

  const handleSelect = (e) => navigate(`${baseUlr}/${e.target.value}`);

  return (
    <main>
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        <Player sources={stream.sources} />

        <div className="flex flex-col gap-8 p-4">
          <div className="flex flex-wrap gap-2">
            <select
              name="episodes"
              onChange={handleSelect}
              defaultValue={episodeId}
              className="select-primary select w-full max-w-md"
            >
              {anime.episodes.map((episode) => (
                <option key={episode.id} value={episode.id}>
                  Episode {episode.number}
                </option>
              ))}
            </select>

            <Link
              disabled={!prevEpId}
              to={`${baseUlr}/${prevEpId}`}
              className="btn btn-primary btn-square"
            >
              <BackwardIcon width={24} />
            </Link>

            <Link
              disabled={!nextEpId}
              to={`${baseUlr}/${nextEpId}`}
              className="btn btn-primary btn-square"
            >
              <ForwardIcon width={24} />
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">{currentEpisode.title}</h2>
            <p>{currentEpisode.description}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stream;
