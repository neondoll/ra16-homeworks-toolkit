import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import NotFound from "../components/NotFound";
import { fetchMovieById, selectLoading, selectMovieById } from "../slices/movies";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Movie() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const movieById = useAppSelector(selectMovieById);
  const { imdbID } = useParams();

  useEffect(() => {
    if (imdbID) {
      dispatch(fetchMovieById(imdbID));
    }
  }, [imdbID, dispatch]);

  return (
    <>
      {loading && <Loading />}
      {movieById.Response === "False" && <NotFound>Фильм не найден</NotFound>}
      {movieById.Response === "True" && <MovieCard info={movieById} />}
    </>
  );
};
