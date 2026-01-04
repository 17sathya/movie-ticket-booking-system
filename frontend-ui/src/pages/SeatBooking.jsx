import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { page, colors, button } from "../styles/cinema";

export default function SeatBooking() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  const rows = ["A","B","C","D","E","F","G","H"];
  const seatsPerSide = 8;

  function toggle(seat) {
    setSelected(s =>
      s.includes(seat) ? s.filter(x => x !== seat) : [...s, seat]
    );
  }

  return (
    <div style={page}>
      <h2>Select Seats</h2>

      {/* SCREEN */}
      <div style={{
        margin: "30px auto",
        width: "70%",
        background: colors.screen,
        color: "#000",
        padding: 16,
        textAlign: "center",
        borderRadius: 6,
        letterSpacing: 2,
      }}>
        SCREEN
      </div>

      {/* SEATS */}
      {rows.map(row => (
        <div key={row} style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
          <span style={{ width: 30 }}>{row}</span>

          {[...Array(seatsPerSide)].map((_, i) => seat(row + (i + 1)))}

          <div style={{ width: 50 }} />

          {[...Array(seatsPerSide)].map((_, i) => seat(row + (i + seatsPerSide + 1)))}
        </div>
      ))}

      <div style={{ marginTop: 30 }}>
        <p>Selected: {selected.join(", ") || "None"}</p>
        <button
          style={{ ...button, opacity: selected.length ? 1 : 0.5 }}
          disabled={!selected.length}
          onClick={() => navigate("/payment", { state: { seats: selected } })}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );

  function seat(id) {
    return (
      <div
        key={id}
        onClick={() => toggle(id)}
        style={{
          width: 42,
          height: 42,
          margin: "0 6px",
          borderRadius: 6,
          background: selected.includes(id) ? colors.seatSelected : colors.seat,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontSize: 12,
        }}
      >
        {id.slice(1)}
      </div>
    );
  }
}
