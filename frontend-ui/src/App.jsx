import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SeatBooking from "./pages/SeatBooking";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Admin from "./pages/Admin";
import MyBookings from "./pages/MyBookings";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* =====================
          PUBLIC ROUTES
      ====================== */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* =====================
          PROTECTED ROUTES
      ====================== */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/seats/:id"
        element={
          <ProtectedRoute>
            <SeatBooking />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payment"
        element={
          <ProtectedRoute>
            <Payment />
          </ProtectedRoute>
        }
      />

      <Route
        path="/success"
        element={
          <ProtectedRoute>
            <Success />
          </ProtectedRoute>
        }
      />

      <Route
        path="/bookings"
        element={
          <ProtectedRoute>
            <MyBookings />
          </ProtectedRoute>
        }
      />

      {/* =====================
          ADMIN (OPTIONAL)
      ====================== */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
