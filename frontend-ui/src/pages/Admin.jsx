import { useEffect, useState } from "react";

export default function Admin() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/admin/tickets")
      .then((r) => r.json())
      .then(setTickets);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>🎛 Admin Dashboard</h1>

      {tickets.map((t) => (
        <div key={t._id}>
          <p>
            🎟 {t.movieName} | Seats: {t.seats.join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}
