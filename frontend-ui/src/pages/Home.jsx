import { useNavigate } from "react-router-dom";
import movies from "../data/movies";
import { page, colors } from "../styles/cinema";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={page}>
      <h1>Popular on CineBook</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: 30,
      }}>
        {movies.map(movie => (
          <div
            key={movie.id}
            onClick={() => navigate(`/seats/${movie.id}`)}
            style={{
              cursor: "pointer",
              position: "relative",
              transition: "transform .3s",
            }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              style={{ width: "100%", borderRadius: 8 }}
            />

            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,.9), transparent)",
              opacity: 0,
              transition: ".3s",
              padding: 16,
              display: "flex",
              alignItems: "flex-end",
            }}
            className="hover">
              <div>
                <h3>{movie.title}</h3>
                <p style={{ color: colors.muted, fontSize: 13 }}>{movie.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
