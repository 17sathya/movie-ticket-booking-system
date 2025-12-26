const Seat = require("../models/Seat");

setInterval(async () => {
  const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

  await Seat.updateMany(
    {
      status: "LOCKED",
      lockedAt: { $lt: tenMinutesAgo },
    },
    { status: "AVAILABLE", lockedAt: null }
  );
}, 60000);
