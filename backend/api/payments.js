const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, (req, res) => {
  const { mode } = req.body;

  res.json({
    status: "SUCCESS",
    mode,
    transactionId: mode + "_" + Date.now()
  });
});

module.exports = router;
