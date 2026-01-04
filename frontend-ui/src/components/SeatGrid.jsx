export default function SeatGrid() {
  return (
    <div className="grid grid-cols-8 gap-3">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="w-8 h-8 bg-green-500 rounded hover:bg-red-500 cursor-pointer"
        />
      ))}
    </div>
  );
}
