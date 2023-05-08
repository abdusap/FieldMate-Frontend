import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHomeLayout from '../layouts/UserHomeLayout'
import Login from '../Pages/User/Login'
import Signup from '../Pages/User/Signup'
import Home from '../Pages/User/Home'
import getAuthToken from '../Authentication/GetAuthToken'
import TurfListing from '../Pages/User/TurfListing'
import TurfDetails from '../Pages/User/TurfDetails'
import SlotDetails from '../Pages/User/SlotDetails'
// import Login from '../Pages/User/Login'
// import User from '../Pages/User/Login/User'
import { Context } from '../Context/SearchContext'
import SlotCheckout from '../Pages/User/SlotCheckout'
import Success from '../Pages/User/Success'
import Profile from '../Pages/User/Profile'
import Booking from '../Pages/User/Booking'
import BookingDetails from '../Pages/User/BookingDetails'





function UserRoute() {
  // console.log("userroute")
  // const[userExist,setUserExist]=useState()
  // console.log(userExist)
  // useEffect(()=>{
  //   const token=getAuthToken()
  //   if(token){
  //     setUserExist(()=>true)
  //   }else{
  //      setUserExist(()=>false)
  //   }

  // },[])
  return (
      <Context>
    <Routes>
        <Route path='/' element={<UserHomeLayout/>}>
        <Route path='' element={<Home/>}></Route>

        <Route path='turf_listing' element={<TurfListing/>}></Route>
        <Route path='turf_details' element={<TurfDetails/>}></Route>
        <Route path='slot_details' element={<SlotDetails/>}></Route>
        <Route path='slot_checkout' element={<SlotCheckout/>}></Route>
        <Route path='success' element={<Success/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='Booking' element={<Booking/>}></Route>
        <Route path='Booking_details' element={<BookingDetails/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/*' element={'Not found'}></Route>
    </Routes>
        </Context>
  )
}

export default UserRoute