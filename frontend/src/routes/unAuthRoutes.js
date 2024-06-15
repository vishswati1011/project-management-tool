import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import Signup from "../pages/login/signup";

export default function UnAuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
