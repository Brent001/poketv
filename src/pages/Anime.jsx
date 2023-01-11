import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import DetailsCard from "../components/DetailsCard";

const Anime = () => {
  const { animeId } = useParams();
  const descElement = useRef(null);
  const [anime, setAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.consumet.org/meta/anilist/info/${animeId}`
        );
        setError(null);
        setIsLoading(false);
        setAnime(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [animeId]);

  useEffect(() => {
    if (anime === null) return;
    if (descElement.current === null) return;

    descElement.current.innerHTML = anime.description;
  }, [anime]);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

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
        <div className="max-w-[1200px] w-full justify-center mx-auto flex flex-col gap-4 p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-shrink-0 w-[200px] mx-auto md:mx-0">
              <img
                src={anime.image}
                alt={
                  anime.title.english ? anime.title.english : anime.title.native
                }
                className="w-full h-full object-cover object-center"
              />
            </div>

            <DetailsCard anime={anime} />
          </div>

          <div className="p-4 rounded-md backdrop-blur-lg bg-[rgba(255,255,255,.5)]">
            <h4 className="font-bold text-2xl mb-2">Description</h4>
            <p ref={descElement} className="text-sm"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anime;
