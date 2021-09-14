import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moviesApi from "../../services";

function MovieCast() {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState("");
  const { movieId } = useParams();

  useEffect(() => {
    moviesApi
      .fatchMovieCast(movieId)
      .then((info) => {
        setCast(info.cast);
      })
      .catch((error) => setError(error));
  }, []);

  console.log(error);
  return (
    <ul>
      {cast.map((actor) => {
        return (
          <li>
            <img
              src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
              alt={actor.character}
            ></img>
            <p>{`Name: ${actor.name}`}</p>
            <p>{`Character: ${actor.character}`}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default MovieCast;
