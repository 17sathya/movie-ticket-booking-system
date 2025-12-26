const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  movieId: String,
  seatNumber: String,
  status: {
    type: String,
    enum: ["AVAILABLE", "LOCKED", "BOOKED"],
    default: "AVAILABLE",
  },
  lockedAt: Date,
});

module.exports = mongoose.model("Seat", seatSchema);
