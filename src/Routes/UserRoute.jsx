import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHomeLayout from '../layouts/UserHomeLayout'
import Login from '../Pages/User/Login'
import Signup from '../Pages/User/Signup'
import Home from '../Pages/User/Home'
import getAuthToken from '../Authentication/GetAuthToken'
import TurfListing from '../Pages/User/TurfListing'
import TurfDetails from '../Pages/User/TurfDetails'
// import Login from '../Pages/User/Login'
// import User from '../Pages/User/Login/User'





function UserRoute() {
  console.log("userroute")
  const[userExist,setUserExist]=useState()
  console.log(userExist)
  useEffect(()=>{
    const token=getAuthToken()
    if(token){
      setUserExist(()=>true)
    }else{
       setUserExist(()=>false)
    }

  },[])
  return (
    <Routes>
        <Route path='/' element={<UserHomeLayout/>}>
    

          <Route path='' element={<Home/>}></Route>

        <Route path='turf_listing' element={<TurfListing/>}></Route>
        <Route path='turf_details' element={<TurfDetails/>}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/*' element={'Not found'}></Route>
    </Routes>
  )
}

export default UserRoute