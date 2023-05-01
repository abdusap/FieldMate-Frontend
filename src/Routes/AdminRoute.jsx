import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from '../layouts/AdminLayout'
import Dashboard from '../Pages/Admin/Dashboard'
// import LocationAndSports from '../Pages/Admin/LocationAndSports'
import Login from '../Pages/Admin/Login'
import TurfVerify from '../Pages/Admin/TurfVerify'
import LocationAndSportsPage from '../Pages/Admin/LocationAndSports'
import ProtectedRoute from '../Helpers/ProtectedRoute'
import UserManage from '../Pages/Admin/UserManage'
import TurfManage from '../Pages/Admin/TurfManage'



function AdminRoute() {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Login/>}/>    
        <Route element={<ProtectedRoute type={'admin'} redirect={'/admin/login'} />}>
        <Route path='/' element={<AdminLayout/>}>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='user-manage' element={<UserManage/>}/>
          <Route path='turf-manage' element={<TurfManage/>}/>
          <Route path='turf-verify' element={<TurfVerify/>}/>
          <Route path='location-and-sports' element={<LocationAndSportsPage/>}/>
            {/* <Route path='location' element={<LocationAndSports/>}/> */}
        </Route>
        </Route>
    </Routes>
    </>
  )
}

export default AdminRoute