import Loading from "../components/Loading";
import MovieList from "../components/MovieList";
import NotFound from "../components/NotFound";
import { selectLoading, selectMoviesFavorite } from "../slices/movies";
import { useAppSelector } from "../hooks";

export default function Favorites() {
  const loading = useAppSelector(selectLoading);
  const moviesFavorite = useAppSelector(selectMoviesFavorite);

  return (
    <>
      {loading && <Loading />}
      {
        moviesFavorite.length
          ? <MovieList list={moviesFavorite} />
          : <NotFound>Здесь пока ни чего нет</NotFound>
      }
    </>
  );
}
