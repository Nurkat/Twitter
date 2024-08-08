import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home, Profile } from "../../pages/Dashboard";
import Navbar from "../../components/Navbar";


const DashboardPage = () => {
  return (
    <div className='container px-5 mx-auto flex justify-between'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path="/profile" element={<Profile />} />
  </Routes>
    </div>
  )
}

export default DashboardPage
