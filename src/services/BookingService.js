const saveBooking = (booking) => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const updatedBookings = [...bookings, booking];
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
  };
  
  const getBookedSeatsByMovieId = (movieId) => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const movieBookings = bookings.filter(booking => booking.movieId === movieId);
    const bookedSeats = movieBookings.flatMap(booking => booking.seats);
    return bookedSeats;
  };
  
  export { saveBooking, getBookedSeatsByMovieId };