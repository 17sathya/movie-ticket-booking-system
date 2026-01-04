import SeatGrid from "../components/SeatGrid";

export default function Seats() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-6">Select Seats</h1>
      <SeatGrid />
    </div>
  );
}
