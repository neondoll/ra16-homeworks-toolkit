import Favorites from "./routes/Favorites.tsx";
import Layout from "./Layout";
import Movie from "./routes/Movie.tsx";
import Paths from "./paths";
import Root from "./routes/Root";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path={Paths.HOME} element={<Layout />}>
        <Route index element={<Root />} />
        <Route path={Paths.FAVORITES} element={<Favorites />} />
        <Route path={Paths.MOVIE(":imdbID")} element={<Movie />} />
      </Route>
    </Routes>
  );
}
