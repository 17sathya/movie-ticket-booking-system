const express = require("express");
const Ticket = require("../models/Ticket");

const router = express.Router();

router.get("/tickets", async (req, res) => {
  const tickets = await Ticket.find();
  res.json(tickets);
});

router.post("/verify-ticket", async (req, res) => {
  const { ticketId } = req.body;

  const ticket = await Ticket.findById(ticketId);
  if (!ticket) {
    return res.status(400).json({ valid: false });
  }

  res.json({ valid: true, ticket });
});

module.exports = router;
