import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <div className="border rounded p-4 shadow w-60">
    <img src={movie.image} alt={movie.title} className="w-full h-72 object-cover mb-2" />
    <h2 className="text-xl font-bold">{movie.title}</h2>
    <p className="text-sm">{movie.description}</p>
    <p className="italic">{movie.genre}</p>
    <p>Час: {movie.time}</p>
    <Link to={`/booking/${movie.id}`}>
      <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">Забронювати</button>
    </Link>
  </div>
);

export default MovieCard;
