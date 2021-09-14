import { Route, Switch } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation/Navigation ";
import HomePage from "./views/HomePage";
import MovieCard from "./views/MovieCard";
import SearchMovie from "./views/SearchMovie";
function App() {
  return (
    <>
      <Navigation />
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/movies">
        <SearchMovie />
      </Route>
      <Route path="/movies/:movieId">
        <MovieCard />
      </Route>
    </>
  );
}

export default App;
