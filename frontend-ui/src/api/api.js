const API_BASE = "https://cinebook-ticket.onrender.com";

export async function apiRequest(path, options = {}) {
  const token = localStorage.getItem("token");

  const res = await fetch(API_BASE + path, {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "API Error");
  }

  return res.json();
}
