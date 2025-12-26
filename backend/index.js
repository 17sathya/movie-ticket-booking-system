require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const paymentRoutes = require("./routes/payment");
app.use("/payment", paymentRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
