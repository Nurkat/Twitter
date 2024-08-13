import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home, Profile } from "../../pages/Dashboard";
import Navbar from "../../components/Navbar";
import {Tweets,TweetsReplies,Media,Likes} from '../../pages/Dashboard/ProfileItems/'


const DashboardPage = () => {
  return (
    <div className='container px-5 mx-auto flex justify-between'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/profile' element={<Profile />} />
    <Route path='tweets' index element={<Tweets/>}/>
    <Route path='tweetsreplies' element={<TweetsReplies/>}/>
    <Route path='media' element={<Media/>}/>
    <Route path='likes' element={<Likes/>}/>
  </Routes>
    </div>
  )
}

export default DashboardPage
