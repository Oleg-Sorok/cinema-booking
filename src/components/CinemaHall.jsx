const CinemaHall = ({ selected, setSelected, bookedSeats }) => {
  const totalSeats = 50;

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    if (selected.includes(seat)) {
      setSelected(selected.filter((s) => s !== seat));
    } else {
      setSelected([...selected, seat]);
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold text-center mt-4">Зал кінотеатру</h2>

      <div className="hall">
        {[...Array(totalSeats)].map((_, i) => {
          const seat = i + 1;
          let seatClass = "seat";

          if (bookedSeats.includes(seat)) seatClass += " booked";
          else if (selected.includes(seat)) seatClass += " selected";
          else seatClass += " available";

          return (
            <div
              key={seat}
              className={seatClass}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CinemaHall;
