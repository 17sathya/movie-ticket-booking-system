require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

/* =====================
   PUBLIC ROUTES (NO JWT)
===================== */
app.use("/payment", require("./routes/payment"));
app.use("/auth", require("./routes/auth")); // login/register
app.get("/test", (req, res) => res.send("OK"));

/* =====================
   PROTECTED ROUTES (JWT)
===================== */
const authMiddleware = require("./middleware/auth");
app.use(authMiddleware);


app.use("/ticket", authMiddleware, require("./routes/ticket"));
app.use("/admin", authMiddleware, require("./routes/admin"));

const PORT = 5000;
app.listen(PORT, () =>
  console.log("SERVER RUNNING ON PORT", PORT)
);
