import { page, card, button, colors } from "../styles/cinema";

export default function Success() {
  const ticketId = localStorage.getItem("ticketId");

  function downloadTicket() {
    window.open(
      `http://localhost:5000/ticket/download/${ticketId}`,
      "_blank"
    );
  }

  return (
    <div style={{ ...page, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ ...card, maxWidth: 500, textAlign: "center" }}>
        <h1 style={{ color: colors.red }}>🎉 Booking Confirmed</h1>

        <p>Your movie ticket has been successfully booked.</p>

        <button style={button} onClick={downloadTicket}>
          Download Ticket (PDF)
        </button>
      </div>
    </div>
  );
}
