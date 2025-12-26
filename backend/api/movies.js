const express = require("express");
const Movie = require("../models/Movie");

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, description, price } = req.body;

  const seats = [];
  ["A", "B", "C", "D"].forEach(r => {
    for (let i = 1; i <= 10; i++) {
      seats.push({ seatNumber: r + i });
    }
  });

  const movie = new Movie({ title, description, price, seats });
  await movie.save();
  res.json(movie);
});

router.get("/", async (req, res) => {
  res.json(await Movie.find());
});

module.exports = router;
