import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import CinemaHall from '../components/CinemaHall';
import moviesData from '../data/movies';
import { saveBooking, getBookedSeatsByMovieId } from '../services/BookingService';
import '../css/CinemaHall.css';

function Booking() {
  const { id } = useParams();
  const movieId = parseInt(id);
  const movie = moviesData.find(movie => movie.id === movieId);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const seats = getBookedSeatsByMovieId(movieId);
    setBookedSeats(seats);
  }, [movieId]);

  if (!movie) {
    return <div>Фільм не знайдено</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Ім’я обов’язкове і повинно містити мінімум 2 символи';
    }
    if (!formData.phone || !/^\+?\d{10,12}$/.test(formData.phone)) {
      newErrors.phone = 'Введіть коректний номер телефону (10–12 символів, з + опціонільно)';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введіть коректний email';
    }
    if (selectedSeats.length === 0) {
      newErrors.seats = 'Виберіть мінімум одне місце';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      toast.error('Виправте помилки у формі та спробуйте знову', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newBooking = {
        id: Date.now(),
        movieId: movie.id,
        movieTitle: movie.title,
        seats: selectedSeats,
        user: formData,
        timestamp: new Date().toISOString(),
      };
      saveBooking(newBooking);
      setBookedSeats([...bookedSeats, ...selectedSeats]);
      setFormData({ name: '', phone: '', email: '' });
      setSelectedSeats([]);
      toast.success('Бронювання успішне та збережено!', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="booking">
      <h2>Бронювання: {movie.title}</h2>
      <div className="screen">Екран</div>
      <CinemaHall onSeatsChange={setSelectedSeats} bookedSeats={bookedSeats} />
      <form className="booking-form" onSubmit={handleSubmit}>
        <h3>Введіть ваші дані</h3>
        <div className="form-group">
          <label htmlFor="name">Ім’я:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'input-error' : ''}
            placeholder="Введіть ім’я"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Телефон:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={errors.phone ? 'input-error' : ''}
            placeholder="+380112233445"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'input-error' : ''}
            placeholder="example@domain.com"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        {errors.seats && <span className="error">{errors.seats}</span>}
        <button type="submit" className="submit-button">
          Забронювати
        </button>
      </form>
    </div>
  );
}

export default Booking;