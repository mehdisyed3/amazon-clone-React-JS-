import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleChange = (e) => {

   if(e.target.name === 'email') setEmail(e.target.value) 
   if(e.target.name === 'password') setPassword(e.target.value) 

  }

  const handleSubmit = (e) => {
    

    console.log("HORAHAI")
  }

  // console.log("THIS IS EMAIL",email)
  // console.log("THIS IS PWD", password)

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className="login__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' name='email' value={email} onChange={handleChange} />

          <h5>Password</h5>
          <input type='password' name='password' value={password} onChange={handleChange} />

          <button className='login__signInButton' type='submit' onSubmit={(e)=> e.preventDefault(), console.log(email)} >Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Noties
          and our Interest-Based AdsNotice
      </p>
        <button className='login__registerButton'>Create your Amazon Account</button>
      </div>

    </div>
  )
}

export default Login
