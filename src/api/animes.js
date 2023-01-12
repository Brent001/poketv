import axios from "axios";

export const getAnimes = async () => {
  const res = await axios.get(
    "https://api.consumet.org/meta/anilist/trending?perPage=60"
  );
  return res.data;
};

export const getAnimeDetails = async (id, dub) => {
  const res = await axios.get(
    `https://api.consumet.org/meta/anilist/info/${id}?dub=${dub}`
  );
  return res.data;
};

export const getStreamingLinks = async (id) => {
  const res = await axios.get(
    `https://api.consumet.org/meta/anilist/watch/${id}`
  );
  return res.data;
};

export const findAnime = async (query, page) => {
  const res = await axios.get(
    `https://api.consumet.org/meta/anilist/${query}?page=${page}`
  );
  return res.data;
};
