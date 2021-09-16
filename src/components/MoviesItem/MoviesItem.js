import { Link } from "react-router-dom";
import s from "./MoviesItem.module.css";

export default function MoviesItem({ movieName, movieId }) {
  return (
    <li>
      <Link to={`/movies/${movieId}`} className={s.link}>
        {movieName}
      </Link>
    </li>
  );
}
