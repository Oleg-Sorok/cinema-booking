import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { movies } from "../data/movies";
import CinemaHall from "../components/CinemaHall";
import BookingForm from "../components/BookingForm";
import { getBookings, saveBooking } from "../services/BookingService";

const Booking = () => {
  const { id } = useParams();
  const movieId = parseInt(id);
  const movie = movies.find(m => m.id === movieId);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    setBookedSeats(getBookings(movieId));
  }, [movieId]);

  const handleBooking = (data) => {
    saveBooking(movieId, data);
    setBookedSeats([...bookedSeats, ...data.selectedSeats]);
    setSelectedSeats([]);
  };

  if (!movie) return <div>Фільм не знайдено</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Бронювання: {movie.title}</h1>
      <CinemaHall selected={selectedSeats} setSelected={setSelectedSeats} bookedSeats={bookedSeats} />
      <BookingForm movieId={movieId} selectedSeats={selectedSeats} onBooking={handleBooking} />
    </div>
  );
};

export default Booking;
