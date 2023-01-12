import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAnimeDetails, getStreamingLinks } from "../api/animes";
import Player from "../components/Player";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Stream = () => {
  const { animeId, episodeId } = useParams();
  const navigate = useNavigate();

  const { data: stream, status } = useQuery({
    queryKey: ["animes", episodeId],
    queryFn: () => getStreamingLinks(episodeId),
  });

  const { data: anime, status: animeStatus } = useQuery({
    enabled: stream != null,
    queryKey: ["animes", animeId],
    queryFn: () => getAnimeDetails(animeId),
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

  const handleSelect = (e) => navigate(`/watch/${animeId}/${e.target.value}`);

  return (
    <div
      className="flex-grow flex"
      style={{
        background: `url(${anime.cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex flex-grow backdrop-blur-md bg-[rgba(0,0,0,.4)]">
        <div className="max-w-[1200px] bg-slate-200 w-full mx-auto p-4">
          <div className="mb-4 flex gap-2">
            <select
              onChange={handleSelect}
              name="episodes"
              className="p-2 outline-none rounded-md border-2 border-red-500 text-red-500 bg-transparent flex-grow"
              defaultValue={episodeId}
            >
              {anime.episodes.map((episode) => (
                <option key={episode.id} value={episode.id}>
                  Episode {episode.number}
                </option>
              ))}
            </select>

            <div className="flex gap-2">
              {prevEpId && (
                <Link
                  to={`/watch/${animeId}/${prevEpId}`}
                  className="p-2 text-2xl rounded-md border-2 border-red-500 text-red-500"
                >
                  <FiChevronLeft />
                </Link>
              )}
              {nextEpId && (
                <Link
                  to={`/watch/${animeId}/${nextEpId}`}
                  className="p-2 text-2xl rounded-md border-2 border-red-500 text-red-500"
                >
                  <FiChevronRight />
                </Link>
              )}
            </div>
          </div>

          <Player sources={stream.sources} />

          <div className="mt-4">
            <p>
              <span className="font-medium">
                Episode {currentEpisode.number}:
              </span>{" "}
              {currentEpisode.title}
            </p>
            <p className="font-medium mt-2">About the episode: </p>
            <p>{currentEpisode.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stream;
