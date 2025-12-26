const express = require("express");
const path = require("path");
const fs = require("fs");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/download/:id", auth, (req, res) => {
  const filePath = path.join(
    __dirname,
    "../tickets",
    `ticket_${req.params.id}.pdf`
  );

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "Ticket not found" });
  }

  res.download(filePath);
});

module.exports = router;
