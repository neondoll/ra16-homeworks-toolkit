import MovieItem from "./MovieItem";
import type { MovieShortInfo } from "../slices/movies";

type MovieListProps = { list: MovieShortInfo[] };

export default function MovieList({ list }: MovieListProps) {
  return (
    <div className="grid sm:grid-cols-4 gap-[15px]">
      {list.map(item => <MovieItem info={item} key={item.imdbID} />)}
    </div>
  );
}
