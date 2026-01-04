import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovies } from "../api/moviesApi";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovies().then((movies) =>
      setMovie(movies.find((m) => m.id === Number(id)))
    );
  }, [id]);

  if (!movie) return null;

  return (
    <div className="min-h-screen bg-black text-white px-10 py-20">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-pink-500"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* IMAGE */}
        <img
          src={movie.image}
          alt={movie.title}
          className="rounded-xl shadow-xl"
        />

        {/* DETAILS */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {movie.title}
          </h1>

          <p className="text-gray-300 leading-relaxed mb-6">
            {movie.description}
          </p>

          <button className="px-8 py-3 bg-pink-600 rounded-md font-semibold hover:bg-pink-700">
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
