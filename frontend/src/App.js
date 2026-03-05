// src/App.js
// Changes vs previous version:
//  • /room/:roomId is now a PUBLIC route — no PrivateRoute wrapper.
//    Guests can paste the URL directly and enter without logging in.
//    Authenticated users (doctor/patient/admin/sales) continue to work as before.

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Login       from "./components/Login";
import AdminHome   from "./components/AdminHome";
import DoctorHome  from "./components/DoctorHome";
import PatientHome from "./components/PatientHome";
import SalesHome   from "./components/SalesHome";
import MeetingRoom from "./components/MeetingRoom";

function RoleRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const role  = localStorage.getItem("role");
  const location = useLocation();

  if (!token) {
    const redirectUrl = location.pathname + location.search;
    localStorage.setItem("redirectAfterLogin", redirectUrl);
    return <Navigate to="/" replace />;
  }
  if (allowedRoles && !allowedRoles.includes(role)) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Login />} />

        {/* Role-locked dashboards */}
        <Route path="/admin"   element={<RoleRoute allowedRoles={["admin"]}  ><AdminHome   /></RoleRoute>} />
        <Route path="/doctor"  element={<RoleRoute allowedRoles={["doctor"]} ><DoctorHome  /></RoleRoute>} />
        <Route path="/patient" element={<RoleRoute allowedRoles={["patient"]}><PatientHome /></RoleRoute>} />
        <Route path="/sales"   element={<RoleRoute allowedRoles={["sales"]}  ><SalesHome   /></RoleRoute>} />

        {/* ── PUBLIC room route ──────────────────────────────────────────────
            No auth required. MeetingRoom handles its own pre-join screen:
            • Authenticated users  → join immediately with their stored name/role
            • Unauthenticated users → shown a name-entry card first, then join as guest
        */}
        <Route path="/room/:roomId" element={<MeetingRoom />} />

        <Route path="*" element={<CatchAllRedirect />} />

      </Routes>
    </Router>
  );
}

function CatchAllRedirect() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    const redirectUrl = location.pathname + location.search;
    if (redirectUrl !== "/" && redirectUrl !== "") {
      localStorage.setItem("redirectAfterLogin", redirectUrl);
    }
  }

  return <Navigate to="/" replace />;
}