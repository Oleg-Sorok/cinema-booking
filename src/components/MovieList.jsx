import { useState } from "react";
import { movies } from "../data/movies";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [search, setSearch] = useState("");

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Пошук фільму..."
        className="mb-4 p-2 border"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="flex flex-wrap gap-4">
        {filtered.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
