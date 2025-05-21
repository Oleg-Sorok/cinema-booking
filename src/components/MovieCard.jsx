import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p className="description">{movie.description}</p>
        <p><strong>Жанр:</strong> {movie.genre}</p>
        <p><strong>Сеанс:</strong> {movie.showtime}</p>
        <Link to={`/booking/${movie.id}`} className="book-button">
          Забронювати
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;