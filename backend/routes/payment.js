const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const Payment = require("../models/Payment");
const Ticket = require("../models/Ticket");

const router = express.Router();




const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

/* ======================
   CREATE ORDER
====================== */

router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const order = await razorpay.orders.create({
    amount: amount * 100,
    currency: "INR",
  });

  res.json(order); // ✅ MUST RETURN FULL ORDER
});


router.post("/verify", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount,
      seats,
      userId,
    } = req.body;

    // 🔴 BLOCK IF ANY FIELD MISSING
    if (
      !razorpay_order_id ||
      !razorpay_payment_id ||
      !razorpay_signature
    ) {
      return res.status(400).json({ success: false });
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false });
    }

    // ✅ SAVE PAYMENT
    const payment = await Payment.create({
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      amount,
      seats,
      userId,
      status: "SUCCESS",
    });

    // ✅ CREATE TICKET
    const ticket = await Ticket.create({
      paymentId: razorpay_payment_id,
      movieName: "Interstellar",
      seats,
      showTime: "7:30 PM",
      userId,
    });

    res.json({
      success: true,
      ticketId: ticket._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

module.exports = router;