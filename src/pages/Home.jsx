import movies from "../data/movies";
import MovieList from "../components/MovieList";

export default function Home() {
  return (
    <div>
      <h1>Список фільмів</h1>
      <MovieList movies={movies} />
    </div>
  );
}
