import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import moviesData from '../data/movies';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <input
        type="text"
        placeholder="Пошук за назвою фільму..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default Home;