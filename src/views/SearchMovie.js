import { useState, useEffect } from "react";
import { useHistory, useLocation, Route, useRouteMatch } from "react-router";
import MovieList from "../components/MovieList/MovieList";
import moviesApi from "../services";

export default function Searcbar() {
  const [searchbar, setSearchbar] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);
  const [error, setError] = useState("");
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();

  const inputChange = (e) => {
    const { value } = e.currentTarget;
    setSearchbar(value);
  };

  console.log(history);

  const formsubmit = (e) => {
    e.preventDefault();
    history.push({ ...location, search: `query/${searchbar}` });
    moviesApi
      .fatchMovieSearch(searchbar)
      .then((movie) => {
        setSearchedMovie(movie.results);
      })
      .catch((error) => setError(error));
    reset();
  };
  const reset = () => {
    setSearchbar("");
  };

  return (
    <>
      <form onSubmit={formsubmit}>
        <input
          type="text"
          name="searchbar"
          value={searchbar}
          onChange={inputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>
      <Route path="movies?query/:moviesName">
        <MovieList array={searchedMovie} />
      </Route>
    </>
  );
}
