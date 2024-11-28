import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const movie = action.payload;
      if (!state.some(fav => fav.id === movie.id)) {
        state.push({
          id: movie.id,
          title: movie.title,
          poster_path: movie.posterPath,
          releaseDate: movie.releaseDate,
          overview: movie.overview,
          vote_average: movie.voteaverage,
          vote_count: movie.votecount
        });
      }
    },
    removeFavorite: (state, action) => {
      return state.filter(fav => fav.id !== action.payload.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
