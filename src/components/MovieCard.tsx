import Paths from "../paths";
import { addToFavorites, removeFromFavorites, selectMoviesFavorite } from "../slices/movies";
import { useAppDispatch, useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";
import type { MovieFullInfo } from "../slices/movies";

type MovieCardProps = { info: MovieFullInfo };

export default function MovieCard({ info }: MovieCardProps) {
  const dispatch = useAppDispatch();
  const moviesFavorite = useAppSelector(selectMoviesFavorite);
  const navigate = useNavigate();

  const isFavorites = moviesFavorite.some(movie => movie.imdbID === info.imdbID);

  const handleClick = () => {
    if (!isFavorites) {
      dispatch(addToFavorites({
        Title: info.Title,
        Year: info.Year,
        imdbID: info.imdbID,
        Type: info.Type,
        Poster: info.Poster,
      }));
      navigate(Paths.FAVORITES);
    }
    else {
      if (info.imdbID) {
        dispatch(removeFromFavorites(info.imdbID));
        navigate(Paths.HOME);
      }
    }
  };

  return (
    <article className="flex p-3 text-white bg-[#361f36]/60">
      <div className="img">
        <img alt={`${info.Title} Poster`} src={info.Poster} />
      </div>
      <div className="flex-1 flex flex-col ml-4">
        <div className="flex p-2">
          <div className="flex-1 pr-1.5">Название:</div>
          <h3 className="text-xl">{info.Title}</h3>
        </div>
        <div className="flex p-2">
          <div className="flex-1 pr-1.5">Год:</div>
          <h3 className="text-xl">{info.Year}</h3>
        </div>
        <div className="flex p-2">
          <div className="flex-1 pr-1.5">Страна:</div>
          <h3 className="text-xl">{info.Country}</h3>
        </div>
        <div className="flex p-2">
          <div className="flex-1 pr-1.5">Жанр:</div>
          <h3 className="text-xl">{info.Genre}</h3>
        </div>
        <div className="flex p-2">
          <div className="flex-1 pr-1.5">Продолжительность:</div>
          <h3 className="text-xl">{info.Runtime}</h3>
        </div>
        <div className="flex p-2">
          <div className="flex-1 pr-1.5">Режисёр:</div>
          <h3 className="text-xl">{info.Director}</h3>
        </div>
        <div className="flex p-2">
          <div className="flex-1 pr-1.5">Актёры:</div>
          <h3 className="text-xl ml-auto">{info.Actors}</h3>
        </div>
        <div className="flex p-2">
          <div className="flex-1 pr-1.5">imdb Рейтинг:</div>
          <h3 className="text-xl">{info.imdbRating}</h3>
        </div>
        <div className="flex items-center mt-auto ml-auto">
          <button className="p-2 border-2" onClick={handleClick}>
            {!isFavorites ? "Добавить в избранное" : "Удалить из избранного"}
          </button>
        </div>
      </div>
    </article>
  );
}
