const getKey = movieId => `bookings_${movieId}`;

export const saveBooking = (movieId, bookingData) => {
  const key = getKey(movieId);
  const bookings = JSON.parse(localStorage.getItem(key)) || [];
  const allSeats = bookingData.selectedSeats || [];
  localStorage.setItem(key, JSON.stringify([...bookings, ...allSeats]));
};

export const getBookings = movieId => {
  return JSON.parse(localStorage.getItem(getKey(movieId))) || [];
};
