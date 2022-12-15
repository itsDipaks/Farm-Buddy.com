import React from 'react'
import {Routes,Route} from 'react-router-dom'
import AdminSign from "../Admin/AdminSign"
import Home from '../HomePage/Home'
import AdminLogin from "../Admin/AdminLogin"
import Dashboard from '../../Pages/AdminPages/Dashboard'
import UserProfilePage from '../../Pages/AdminPages/UserProfilePage'
import AdminProfile from '../../Pages/AdminPages/AdminProfile'
import SingleProductpage from "../../Pages/AdminPages/SingleProductPage"

const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home/>}></Route> */}
      {/* <Route path="/" element={<Home/>}></Route>   */}
      <Route path="/adminsign" element={<AdminSign/>}></Route>
      <Route path="/adminlogin" element={<AdminLogin/>}></Route>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/userprofile" element={<UserProfilePage/>}></Route>
      <Route path="/adminprofile" element={<AdminProfile/>}></Route>
      <Route path="/adminsingleP" element={<SingleProductpage/>}></Route>
    </Routes>
  )
}

export default AllRoutes