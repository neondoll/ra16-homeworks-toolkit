import Loading from "../components/Loading";
import MovieList from "../components/MovieList";
import NotFound from "../components/NotFound";
import SearchForm from "../components/SearchForm";
import { selectLoading, selectMoviesBySearch } from "../slices/movies";
import { useAppSelector } from "../hooks";

export default function Root() {
  const loading = useAppSelector(selectLoading);
  const moviesBySearch = useAppSelector(selectMoviesBySearch);

  return (
    <>
      <SearchForm by="id" />
      <SearchForm by="title" />
      {loading && <Loading />}
      {moviesBySearch.Response === "False" && <NotFound>Фильмы не найдены</NotFound>}
      {moviesBySearch.Response === "True" && <MovieList list={moviesBySearch.Search} />}
    </>
  );
};
