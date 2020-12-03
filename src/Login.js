import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()
  // console.log("@@@",history)
  // console.log('DB', db)
  // console.log('AuTH', auth)


  const handleChange = (e) => {

    if (e.target.name === 'email') setEmail(e.target.value)
    if (e.target.name === 'password') setPassword(e.target.value)
    // console.log("CHANGINg")

  }

  const signIn = (e) => {

    e.preventDefault();

    auth 
        .signInWithEmailAndPassword(email,password)
        .then(user => {
          history.push('/')
          console.log("SIGN IN")
        })
        .catch(err => alert(err.message))


  }

  const register = (e) => {

    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth => {
        // this is where it successfully creates user and awaits further instructions. After registering, user should be sent to home page
        //  to do that , useHistory  is to direct us to the desired page

        auth && history.push('/')

      }))

      .catch(err => alert(err.message)
      )

  }

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

          <button className='login__signInButton' type='submit' onClick={signIn} >Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Noties
          and our Interest-Based AdsNotice
      </p>
        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
      </div>

    </div>
  )
}

export default Login
