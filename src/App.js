

import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './components/Home'
import LoginPage from './components/LoginPage'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import ProfilePage from './components/ProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<LoginPage />}/>
      <Route element={<ProtectedRoute />}>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='*' element={<NotFound />}/>
        <Route exact path='/profilepage' element={<ProfilePage />} />

      </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App