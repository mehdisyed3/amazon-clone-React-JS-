import React, { useContext, useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login'
import { auth } from './firebase'
import {Context} from './Context.js'
import Payment from './Payment'



// t > 5.17
function App() {
  const {setUser, user} = useContext(Context)

  console.log('USER>>>', user)

  useEffect(() => {

    auth.onAuthStateChanged(user => {
      user ? setUser(user.email) 
           : setUser(null)
    })

  }, [])

  return (
    <div className="app">

      <Header />
      <Switch>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/checkout'>
          <Checkout />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/payment' >
          <Payment />
        </Route>


      </Switch>





    </div>

  );
}

export default App;
