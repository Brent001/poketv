import axios from "axios";

export const getAnimes = async () => {
  const res = await axios.get(
    "https://api.consumet.org/meta/anilist/trending?perPage=60"
  );
  return res.data;
};
