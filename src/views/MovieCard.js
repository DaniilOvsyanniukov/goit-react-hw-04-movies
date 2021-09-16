import { useState, useEffect } from "react";
import {
  useParams,
  Link,
  useRouteMatch,
  Route,
  useHistory,
} from "react-router-dom";
import moviesApi from "../services";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReview from "../components/MovieReview/MovieReview";
import s from "./MovieCard.module.css";
function MovieCard() {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const prevlink = useHistory();

  useEffect(() => {
    moviesApi.fatchMovieInfo(movieId).then((info) => {
      setMovieInfo(info);
    });
  }, [movieId]);

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
      <button onClick={prevlink.goBack} className={s.link}>
        GOBACK
      </button>
      <div className={s.cardContainer}>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={`${original_title} poster`}
            className={s.poster}
          ></img>
        ) : null}

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
      </div>
      <Link to={`${url}/cast`} className={s.link}>
        Cast
      </Link>
      <Link to={`${url}/review`} className={s.link}>
        Review
      </Link>
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
