import { useEffect, useState } from "react";

export default function MyBookings() {
  const [tickets, setTickets] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/ticket/my", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((r) => r.json())
      .then(setTickets);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>My Bookings</h2>

      {tickets.map((t) => (
        <div key={t._id} style={{ marginBottom: 15 }}>
          <p>🎬 {t.movieName}</p>
          <p>⏰ {t.showTime}</p>
          <p>💺 {t.seats.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
