
import React from 'react'
import './index.css'
import { Link } from "react-router-dom";


import { useNavigate,} from 'react-router-dom'
import { useState } from 'react'

import Cookies from 'js-cookie'

export default function LoginPage() {
    const [username, setUsername] = useState('rahul')
    const [password, setPassword] = useState('rahul@2021')
    const [error, setError] = useState('')

    let navigate = useNavigate()


    const onSubmitSuccess = jwtToken => {

      Cookies.set('jwt_token', jwtToken, {
        expires: 30,
        path: '/profilepage',
      })

      navigate('/profilepage')
      
      // const {username, password} = this.state
      localStorage.setItem('username', username)
      localStorage.setItem('password', password)
    }

    const onSubmitForm = async e => {
      e.preventDefault()
      const userDetails = {username, password}
      const url = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails)
      }
      const response = await fetch(url, options)

      const data = await response.json()

      
      if (response.ok === true){
          // console.log(data.jwt_token)
          onSubmitSuccess(data.jwt_token)
      }
    }

    


  
  
    // const onSubmitForm = async event => {
    //   event.preventDefault()
    //   const userDetails = {username, password}
    //   const url = 'https://apis.ccbp.in/login'
    //   const options = {
    //     method: 'POST',
    //     body: JSON.stringify(userDetails),
    //   }
    //   const response = await fetch(url, options)
    //   const data = await response.json()
    //   if (response.ok === true) {
    //     this.onSubmitSuccess(data.jwt_token)
    //     console.log(data.jwt_token)
    //   } else {
    //     this.onSubmitFailure(data.error_msg)
    //   }
    // }

      // const onSubmitSuccess = jwtToken => {
    //   const {history} = this.props
  
    //   Cookies.set('jwt_token', jwtToken, {
    //     expires: 30,
    //     path: '/',
    //   })
    //   history.replace('/profilepage')
    //   const {username, password} = this.state
    //   localStorage.setItem('username', username)
    //   localStorage.setItem('password', password)
    // }
  
    // const onSubmitFailure = errorMsg => {
    //   this.setState({showError: true, errorMsg})
    // }


    // const jwtToken = Cookies.get('jwt_token')

    // if (jwtToken !== undefined) {
    //   return <Navigate to='/' />
    // }
  

  return (
    <div className='boxscreen'>
      <form onSubmit={onSubmitForm} className='boxing'>
          <Link to='/'>
            <img src='../assets/images/movies.png'/>
            </Link>
      <h1 className='heading'>Login</h1>
        <label id='username'>
          <p className='text'>USERNAME</p>
          <input onChange={(e) => setUsername(e.target.value)} value={username} type='text' htmlFor='username' className='input'/>
        </label>
        <label id='password'>
          <p className='text'>PASSWORD</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' htmlFor='password' className='input'/>
        </label>
      <button className='buttonStyle' onClick={()=> console.log(username)}>Login</button>
      </form>
      
    </div>
  )
}
