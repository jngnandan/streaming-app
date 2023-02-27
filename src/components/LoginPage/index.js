
import React from 'react'
import './index.css'

import { Redirect, Navigate, useNavigate } from 'react-router-dom'

export default function LoginPage() {

    let navigate = useNavigate()

  

  return (
    <div className='boxscreen'>
      <div className='boxing'>
      <h1 className='heading'>Login</h1>
        <label id='username'>
          <p className='text'>USERNAME</p>
          <input type='text' id='username' className='input'/>
        </label>
        <label id='password'>
          <p className='text'>PASSWORD</p>
          <input type='password' id='password' className='input'/>
        </label>
      <button className='buttonStyle' onClick={()=> navigate('/', {replace:true})}>Login</button>
      </div>
      
    </div>
  )
}
