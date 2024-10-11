import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../store";
import type { PayloadAction, SerializedError } from "@reduxjs/toolkit";

type MoviesBySearch =
  | { Response: "Undefined" }
  | { Response: "False"; Error: string }
  | { Response: "True"; Search: MovieShortInfo[]; totalResults: string };

interface MoviesState {
  error: SerializedError | null;
  loading: boolean;
  movieById: MovieFullInfo | null;
  moviesBySearch: MoviesBySearch;
  moviesFavorite: MovieShortInfo[];
}

export interface MovieFullInfo extends MovieShortInfo {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface MovieShortInfo {
  Title: string;
  Year: string;
  imdbID: string;
  Type: "movie";
  Poster: string;
}

const initialState: MoviesState = {
  error: null,
  loading: false,
  movieById: null,
  moviesBySearch: { Response: "Undefined" },
  moviesFavorite: [],
};
const url = `${import.meta.env.VITE_BASE_URL}?apikey=${import.meta.env.VITE_API_KEY_1}&type=movie`;

export const fetchMovieById = createAsyncThunk("movies/fetchMovieById", async (imdbID: string) => {
  const url = `${import.meta.env.VITE_BASE_URL}?apikey=${import.meta.env.VITE_API_KEY_1}&type=movie&i=${imdbID}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();

  return data as MovieFullInfo;
});
export const fetchMoviesBySearch = createAsyncThunk("movies/fetchMoviesBySearch", async (title: string) => {
  const response = await fetch(`${url}&s=${title}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data as MoviesBySearch;
});

export const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<MovieShortInfo>) => {
      state.moviesFavorite = [...state.moviesFavorite, action.payload];
    },
    removeFromFavorites: (state, action: PayloadAction<MovieShortInfo["imdbID"]>) => {
      state.moviesFavorite = state.moviesFavorite.filter(movie => movie.imdbID !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieById.pending, (state) => {
        state.error = null;
        state.loading = true;
        state.movieById = null;
        state.moviesBySearch = { Response: "Undefined" };
      })
      .addCase(fetchMovieById.fulfilled, (state, action: PayloadAction<MovieFullInfo>) => {
        state.loading = false;
        state.movieById = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
    builder
      .addCase(fetchMoviesBySearch.pending, (state) => {
        state.error = null;
        state.loading = true;
        state.movieById = null;
        state.moviesBySearch = { Response: "Undefined" };
      })
      .addCase(fetchMoviesBySearch.fulfilled, (state, action: PayloadAction<MoviesBySearch>) => {
        state.loading = false;
        state.moviesBySearch = action.payload;
      })
      .addCase(fetchMoviesBySearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const selectError = (state: AppState) => state.movies.error;
export const selectLoading = (state: AppState) => state.movies.loading;
export const selectMovieById = (state: AppState) => state.movies.movieById;
export const selectMoviesBySearch = (state: AppState) => state.movies.moviesBySearch;
export const selectMoviesFavorite = (state: AppState) => state.movies.moviesFavorite;
export const { addToFavorites, removeFromFavorites } = movies.actions;
export default movies.reducer;
