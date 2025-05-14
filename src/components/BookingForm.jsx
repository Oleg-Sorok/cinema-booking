import { useState } from "react";
import { toast } from "react-toastify";

const BookingForm = ({ movieId, selectedSeats, onBooking }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email || selectedSeats.length === 0) {
      toast.error("Будь ласка, заповніть всі поля та виберіть місця.");
      return;
    }
    onBooking({ name, email, selectedSeats });
    toast.success("Бронювання успішне!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border mt-4 w-full md:w-1/2">
      <input
        className="block w-full mb-2 p-2 border"
        placeholder="Ім'я"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        className="block w-full mb-2 p-2 border"
        placeholder="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button className="bg-green-500 text-white py-2 px-4 rounded">Забронювати</button>
    </form>
  );
};

export default BookingForm;
