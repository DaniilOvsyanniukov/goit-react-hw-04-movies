import { useState, useEffect } from "react";
import { useParams, Link, useRouteMatch, Route } from "react-router-dom";
import moviesApi from "../services";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReview from "../components/MovieReview/MovieReview";

function MovieCard() {
  const [movieInfo, setMovieInfo] = useState({});
  const [error, setError] = useState("");
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  console.log(url);

  useEffect(() => {
    moviesApi
      .fatchMovieInfo(movieId)
      .then((info) => {
        setMovieInfo(info);
      })
      .catch((error) => setError(error));
  }, []);

  const {
    poster_path,
    original_title,
    title,
    vote_average,
    vote_count,
    popularity,
    overview,
  } = movieInfo;
  return (
    <div>
      <Link to="/">Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={`${original_title} poster`}
        ></img>
        <div>
          <h1>{title}</h1>
          <div>
            <p>
              Vote / Votes
              <span> {vote_average}</span>/<span>{vote_count}</span>
            </p>
            <p>
              Popularity
              <span> {popularity}</span>
            </p>
            <p>
              Original Title
              <span> {original_title}</span>
            </p>
            <div>
              <p>Genre</p>
              <p>
                <span></span>
              </p>
            </div>
          </div>
          <p>About</p>
          <p>{overview}</p>
        </div>
        <Link to={`${url}/cast`}>Cast</Link>
        <Link to={`${url}/review`}>Review</Link>
      </div>
      <Route path="/movies/:movieId/cast">
        <MovieCast />
      </Route>
      <Route path={`/movies/:movieId/review`}>
        <MovieReview />
      </Route>
    </div>
  );
}
export default MovieCard;
