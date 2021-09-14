import { Link } from "react-router-dom";
export default function MoviesItem({ movieName, movieId }) {
  return (
    <li>
      <Link to={`/movies/${movieId}`}>{movieName}</Link>
    </li>
  );
}
