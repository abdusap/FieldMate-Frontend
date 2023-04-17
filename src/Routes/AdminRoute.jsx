import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import Dashboard from '../Pages/Admin/Dashboard'
// import LocationAndSports from '../Pages/Admin/LocationAndSports'
import Login from '../Pages/Admin/Login'
import TurfVerify from '../Pages/Admin/TurfVerify'
import LocationAndSportsPage from '../Pages/Admin/LocationAndSports'



function AdminRoute() {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<AdminLayout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='turf-verify' element={<TurfVerify/>}/>
          <Route path='location-and-sports' element={<LocationAndSportsPage/>}/>
            {/* <Route path='location' element={<LocationAndSports/>}/> */}
        </Route>
    </Routes>
    </>
  )
}

export default AdminRoute