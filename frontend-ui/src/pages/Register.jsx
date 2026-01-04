import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  return (
    <div style={bg}>
      <div style={card}>
        <h1 style={logo}>🎬 CineBook</h1>
        <h2>Create Account</h2>

        <input
          style={input}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          style={primaryBtn}
          onClick={async () => {
            await register(email, password);
            navigate("/");
          }}
        >
          Register
        </button>

        <p style={text}>
          Already have an account?{" "}
          <Link to="/login" style={link}>Login</Link>
        </p>
      </div>
    </div>
  );
}

// same styles as Login.jsx
const bg = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top, #1a1a1a, #000)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  background: "#111",
  padding: "40px",
  width: "350px",
  color: "white",
  borderRadius: "8px",
  boxShadow: "0 0 40px rgba(229,9,20,0.3)",
};

const logo = {
  textAlign: "center",
  marginBottom: "10px",
  color: "#e50914",
};

const input = {
  width: "100%",
  padding: "12px",
  marginTop: "12px",
  background: "#222",
  border: "1px solid #333",
  color: "white",
};

const primaryBtn = {
  width: "100%",
  marginTop: "20px",
  padding: "12px",
  background: "#e50914",
  border: "none",
  color: "white",
  cursor: "pointer",
};

const text = {
  marginTop: "15px",
  fontSize: "13px",
};

const link = {
  color: "#e50914",
  textDecoration: "none",
};
