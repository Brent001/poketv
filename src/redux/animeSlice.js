import { createSlice } from "@reduxjs/toolkit";

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    favoris: [],
  },
  reducers: {
    getFavoris: (state) => {
      const fav = JSON.parse(localStorage.getItem("favoris"));
      state.favoris = fav ? fav : [];
    },
    addFavoris: (state, action) => {
      const newFav = action.payload;
      const alreadyExist = state.favoris.find((item) => item.id === newFav.id);

      if (alreadyExist) return console.log("Already in favorites");

      state.favoris.push(newFav);
      localStorage.setItem("favoris", JSON.stringify(state.favoris));
    },
    removeFavoris: (state, action) => {
      const newFav = action.payload;
      const filtered = state.favoris.filter((item) => item.id !== newFav.id);
      state.favoris = filtered;
      localStorage.setItem("favoris", JSON.stringify(state.favoris));
    },
  },
});

export const { getFavoris, addFavoris, removeFavoris } = animeSlice.actions;
export default animeSlice;
