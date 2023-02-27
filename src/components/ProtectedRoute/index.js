import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

import React from 'react'

function ProtectedRoute() {
  let cookie = Cookies.get('jwt_token')
  return(
  cookie != true ? <Navigate to='/login' /> : <Outlet />
  )
}

export default ProtectedRoute