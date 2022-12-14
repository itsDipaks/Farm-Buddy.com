import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AdminSign from "../Admin/AdminSign"
import AdminLogin from "../Admin/AdminLogin"
import Dashboard from '../../Pages/AdminPages/Dashboard'
import UserProfilePage from '../../Pages/AdminPages/UserProfilePage'

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home/>}></Route> */}
      <Route path="/adminsign" element={<AdminSign/>}></Route>
      <Route path="/adminlogin" element={<AdminLogin/>}></Route>
      <Route path="/userprofile" element={<UserProfilePage/>}></Route>
      <Route path="/" element={<Dashboard/>}></Route>
    </Routes>
  )
}

export default AllRoutes