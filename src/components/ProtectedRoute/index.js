import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import React from 'react'

function ProtectedRoute(props) {
  // const navigate = useNavigate()
  // console.log(props)
  let cookie = Cookies.get('jwt_token')
  console.log(cookie)
  return(
  cookie ? <Outlet /> : <Navigate to='/login' />
  )
}

export default ProtectedRoute