import { useLocation, useNavigate } from "react-router-dom";
import { page, card, button, colors } from "../styles/cinema";

export default function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const seats = state?.seats || [];
  const pricePerSeat = 200;
  const total = seats.length * pricePerSeat;

  async function payNow() {
    try {
      // 1️⃣ Create order
      const orderRes = await fetch("http://localhost:5000/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total }),
      });

      const order = await orderRes.json();

      // 2️⃣ Razorpay checkout
      const options = {
        key: "rzp_test_Rv6VWeHKFHDhVp", // test key
        amount: order.amount,
        currency: "INR",
        name: "CineBook",
        description: "Movie Ticket Booking",
        order_id: order.id,

        handler: async function (response) {
  console.log("RAZORPAY RESPONSE:", response);

  // 🔴 HARD STOP if signature missing
  if (!response.razorpay_signature) {
    alert("Razorpay signature missing");
    return;
  }

  const res = await fetch("http://localhost:5000/payment/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      razorpay_order_id: response.razorpay_order_id,
      razorpay_payment_id: response.razorpay_payment_id,
      razorpay_signature: response.razorpay_signature,
      amount: total,
      seats,
      userId: "demo-user",
    }),
  });

  const data = await res.json();
  console.log("VERIFY RESPONSE:", data);

  if (data.success) {
    localStorage.setItem("ticketId", data.ticketId);
    window.location.href = "/success";
  } else {
    alert("Payment verification failed");
  }
},

        theme: { color: colors.red },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  }

  return (
    <div style={page}>
      <div style={{ ...card, maxWidth: 500, margin: "auto" }}>
        <h2>Confirm Payment</h2>

        <p style={{ color: colors.muted }}>
          Seats: <strong>{seats.join(", ")}</strong>
        </p>

        <p>
          Total: <strong>₹{total}</strong>
        </p>

        <button style={button} onClick={payNow}>
          Pay with Razorpay
        </button>
      </div>
    </div>
  );
}
