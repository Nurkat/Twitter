import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Profile } from "../../pages/Dashboard";

const DashboardPage = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  )
}

export default DashboardPage
