import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

import React from 'react'

function ProtectedRoute() {
  let cookie = true
  return(
  cookie != true ? <Navigate to='/login' /> : <Outlet />
  )
}

export default ProtectedRoute