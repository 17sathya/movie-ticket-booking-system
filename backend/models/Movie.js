const mongoose = require("mongoose");

const SeatSchema = new mongoose.Schema({
  seatNumber: String,
  status: {
    type: String,
    enum: ["AVAILABLE", "LOCKED", "BOOKED"],
    default: "AVAILABLE"
  },
  lockedBy: mongoose.Schema.Types.ObjectId,
  lockedAt: Date
});

const MovieSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  seats: [SeatSchema]
});

module.exports = mongoose.model("Movie", MovieSchema);
