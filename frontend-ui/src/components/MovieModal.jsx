import { useState } from "react";
import { useNavigate } from "react-router-dom";
import movies from "../data/movies";

export default function Home() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div style={{ background: "black", minHeight: "100vh", padding: "30px" }}>
      <h1 style={{ color: "white", marginBottom: "20px" }}>
        Popular on CineBook
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "16px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{
              position: "relative",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoveredId(movie.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => navigate(`/seats/${movie.id}`)}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                borderRadius: "6px",
              }}
            />

            {/* SAFE HOVER OVERLAY */}
            {hoveredId === movie.id && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.85)",
                  color: "white",
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  borderRadius: "6px",
                }}
              >
                <h3 style={{ marginBottom: "6px", fontSize: "14px" }}>
                  {movie.title}
                </h3>
                <p style={{ fontSize: "12px", color: "#ccc" }}>
                  {movie.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
