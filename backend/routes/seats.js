const express = require("express");
const Seat = require("../models/Seat");

const router = express.Router();

router.post("/lock", async (req, res) => {
  const { movieId, seats } = req.body;

  const unavailable = await Seat.find({
    movieId,
    seatNumber: { $in: seats },
    status: { $ne: "AVAILABLE" },
  });

  if (unavailable.length > 0) {
    return res.status(400).json({ message: "Seats unavailable" });
  }

  await Seat.updateMany(
    { movieId, seatNumber: { $in: seats } },
    { status: "LOCKED", lockedAt: new Date() }
  );

  res.json({ success: true });
});

module.exports = router;
