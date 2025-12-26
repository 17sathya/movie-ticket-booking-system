const express = require("express");
const Movie = require("../models/Movie");
const Booking = require("../models/Booking");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { movieId, seats, paymentMode } = req.body;

  const movie = await Movie.findById(movieId);
  for (let s of seats) {
    const seat = movie.seats.find(x => x.seatNumber === s);
    if (!seat || seat.status !== "LOCKED" || seat.lockedBy.toString() !== req.user.id) {
      return res.status(400).json({ message: "Seat not locked by you" });
    }
  }

  movie.seats.forEach(seat => {
    if (seats.includes(seat.seatNumber)) {
      seat.status = "BOOKED";
      seat.lockedBy = null;
      seat.lockedAt = null;
    }
  });

  await movie.save();

  const booking = await Booking.create({
    userId: req.user.id,
    movieId,
    seats,
    amount: seats.length * movie.price,
    paymentMode,
    status: "CONFIRMED"
  });

  res.json({ message: "Booking confirmed", booking });
});

module.exports = router;
