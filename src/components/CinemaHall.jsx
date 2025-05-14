const CinemaHall = ({ selected, setSelected, bookedSeats }) => {
  const totalSeats = 50;

  const toggleSeat = seat => {
    if (bookedSeats.includes(seat)) return;

    if (selected.includes(seat)) {
      setSelected(selected.filter(s => s !== seat));
    } else {
      setSelected([...selected, seat]);
    }
  };

  return (
    <div className="grid grid-cols-10 gap-2 p-4">
      {[...Array(totalSeats)].map((_, i) => {
        const seat = i + 1;
        let className = "w-8 h-8 rounded cursor-pointer text-center leading-8 ";

        if (bookedSeats.includes(seat)) className += "bg-red-500 text-white";
        else if (selected.includes(seat)) className += "bg-blue-500 text-white";
        else className += "bg-green-300";

        return (
          <div
            key={seat}
            className={className}
            onClick={() => toggleSeat(seat)}
          >
            {seat}
          </div>
        );
      })}
    </div>
  );
};

export default CinemaHall;
