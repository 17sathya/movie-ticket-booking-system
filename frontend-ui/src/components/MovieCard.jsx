import { motion } from "framer-motion";

export default function MovieCard({ movie }) {
  return (
    <motion.div
      whileHover={{ scale: 1.12 }}
      transition={{ duration: 0.25 }}
      className="relative group cursor-pointer"
    >
      {/* POSTER */}
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full rounded-md"
      />

      {/* HOVER OVERLAY */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition p-3 flex flex-col justify-end rounded-md">
        <h3 className="text-sm font-bold text-white">
          {movie.title}
        </h3>
        <p className="text-xs text-gray-300 line-clamp-3">
          {movie.description}
        </p>
      </div>
    </motion.div>
  );
}
