
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { getlocalsdata } from '../../Utils/utils'

const PrivateRoute = ({children}) => {
const navigat=useNavigate()
const token=getlocalsdata("token")
if(token){
  return children
}

  return <Navigate to="/"/>
}

export default PrivateRoute