import Paths from "../paths";
import { fetchMoviesBySearch } from "../slices/movies";
import { useAppDispatch } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type SearchFormProps = { by: "id" | "title" };

export default function SearchForm({ by }: SearchFormProps) {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    switch (by) {
      case "id":
        navigate(Paths.MOVIE(value));
        break;
      case "title":
        dispatch(fetchMoviesBySearch(value));
        setValue("");
        break;
    }
  };

  return (
    <form action="" className="flex mb-6 text-white opacity-60" name={`form-search-by-${by}`} onSubmit={handleSubmit}>
      <input
        className="text-xl border-2 p-2 rounded-md w-full text-black focus:opacity-100"
        id={by}
        name={by}
        placeholder={`Поиск фильма по ${by === "id" ? "идентификатору" : (by === "title" ? "названию" : "UNDEFINED")}`}
        required
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button className="p-3.5 ml-3 border-2 rounded-md">Поиск</button>
    </form>
  );
};
