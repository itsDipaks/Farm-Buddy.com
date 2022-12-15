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
import Cartpage from '../../Pages/Cartpage/Cartpage'
import Paymentpage from '../../Pages/Paymentpage/Paymentpage'
import Lab from '../../Pages/LabTest/Lab'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/adminsign" element={<AdminSign/>}></Route>
      <Route path="/adminlogin" element={<AdminLogin/>}></Route>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/userprofile" element={<UserProfilePage/>}></Route>
      <Route path="/adminprofile" element={<AdminProfile/>}></Route>
      <Route path="/adminsingleP" element={<SingleProductpage/>}></Route>
      <Route path="/cartpage" element={<Cartpage/>}></Route>
      <Route path="/payment" element={<Paymentpage/>}></Route>
      <Route path="/labtest" element={<Lab/>}></Route>
    </Routes>
  )
  
}

export default AllRoutes