const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    movieId: String,
    movieName: String,
    screen: String,
    showTime: String,
    seats: [String],
    userId: String,
    paymentId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
