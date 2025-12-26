const express = require("express");
const Movie = require("../models/Movie");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/lock", auth, async (req, res) => {
  const { movieId, seats } = req.body;
  const LOCK_TIME = 5 * 60 * 1000;
  const now = new Date();

  const movie = await Movie.findById(movieId);
  if (!movie) return res.status(404).json({ message: "Movie not found" });

  movie.seats.forEach(seat => {
    if (seat.status === "LOCKED" && now - seat.lockedAt > LOCK_TIME) {
      seat.status = "AVAILABLE";
      seat.lockedBy = null;
      seat.lockedAt = null;
    }
  });

  for (let s of seats) {
    const seat = movie.seats.find(x => x.seatNumber === s);
    if (!seat || seat.status !== "AVAILABLE") {
      return res.status(400).json({ message: `Seat ${s} not available` });
    }
  }

  movie.seats.forEach(seat => {
    if (seats.includes(seat.seatNumber)) {
      seat.status = "LOCKED";
      seat.lockedBy = req.user.id;
      seat.lockedAt = now;
    }
  });

  await movie.save();
  res.json({ message: "Seats locked" });
});

module.exports = router;
