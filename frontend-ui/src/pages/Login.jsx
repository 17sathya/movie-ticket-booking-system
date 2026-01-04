import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { page, card, button, input, colors } from "../styles/cinema";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      await login(email, password);
      navigate("/");
    } catch {
      alert("Invalid credentials");
    }
  }

  return (
    <div style={{ ...page, display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ ...card, width: 380 }}>
        <h1 style={{ textAlign: "center", color: colors.red }}>🎬 CineBook</h1>
        <h2 style={{ textAlign: "center" }}>Sign In</h2>

        <input style={input} placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input style={input} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

        <button style={button} onClick={handleLogin}>Login</button>

        <p style={{ textAlign: "center", marginTop: 16 }}>
          New here? <Link to="/register" style={{ color: colors.red }}>Register</Link>
        </p>
      </div>
    </div>
  );
}


