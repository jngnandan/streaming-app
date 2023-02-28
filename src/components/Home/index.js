import React from 'react'
import { Redirect, Navigate, useNavigate } from 'react-router-dom'

export default function Home() {

  let navigate = useNavigate();


  return (
    <div>
      <p>Home</p>

      <button onClick={() => navigate('/login', {replace: true})}>Login</button>
      <br/>
      <button onClick={() => navigate('/profilepage', {replace: true})}>Profile Page</button>

    </div>
  )
}
