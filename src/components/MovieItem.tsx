import Paths from "../paths";
import { Link } from "react-router-dom";
import type { MovieShortInfo } from "../slices/movies";

type MovieItemProps = { info: MovieShortInfo };

export default function MovieItem({ info }: MovieItemProps) {
  return (
    <article
      className="
      relative z-0 flex flex-col justify-between h-full p-3 text-white bg-[#361f36] rounded-xl border border-transparent
      pointer-events-none hover:border-inherit
      "
    >
      <div className="img">
        <img alt={`${info.Title} Poster`} src={info.Poster} />
      </div>
      <div className="mt-3">
        <h3 className="font-semibold">
          <Link
            className="pointer-events-auto before:absolute before:inset-0 before:-z-[1]"
            to={Paths.MOVIE(info.imdbID)}
          >
            {info.Title}
          </Link>
        </h3>
        <time className="mt-2 opacity-60" dateTime={info.Year}>{`${info.Year} г`}</time>
      </div>
    </article>
  );
}
