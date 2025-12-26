const PDFDocument = require("pdfkit");
const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");

module.exports = async function generateTicket(ticket) {
  const qrData = `TICKET:${ticket._id}`;
  const qrImage = await QRCode.toDataURL(qrData);

  const filePath = path.join(
    __dirname,
    `../tickets/ticket_${ticket._id}.pdf`
  );

  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(22).text("🎬 CineBook Ticket", { align: "center" });
  doc.moveDown();

  doc.fontSize(14).text(`Movie: ${ticket.movieName}`);
  doc.text(`Seats: ${ticket.seats.join(", ")}`);
  doc.text(`Show Time: ${ticket.showTime}`);
  doc.text(`Ticket ID: ${ticket._id}`);

  doc.moveDown();
  doc.image(qrImage, { fit: [150, 150], align: "center" });

  doc.end();

  return filePath;
};
