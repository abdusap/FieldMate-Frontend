import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserHomeLayout from '../layouts/UserHomeLayout'
import Login from '../Pages/User/Login'
import Signup from '../Pages/User/Signup'
import Home from '../Pages/User/Home'
// import Login from '../Pages/User/Login'
// import User from '../Pages/User/Login/User'





function UserRoute() {
  return (
    <Routes>
        <Route path='/' element={<UserHomeLayout/>}>
        <Route path='' element={<Home/>}></Route>
        <Route path='profile' element={'hah'}></Route>
        </Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/*' element={'Not found'}></Route>
    </Routes>
  )
}

export default UserRoute