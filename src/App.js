import React, { useContext, useEffect } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login'
import { auth } from './firebase'
import { Context } from './Context.js'
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'


const promise  = loadStripe('pk_test_51HvtWZDBgrMbvem70dLJ4lbMCSg9gWJcQJnOZZzfD6hV6HNFsMYoZ7Fv3lwJ60Ilm3uVqugOy1BbdzcPfpt6qe9i005SF4Sy4U')
// t > 6.04
function App() {
  const {setUserObj, setUser, user } = useContext(Context)

  // console.log('USER', user)

  useEffect(() => {

    auth.onAuthStateChanged(user => { // USER
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
          <Elements stripe={promise}>
          <Payment />
          </Elements>
        </Route>


      </Switch>





    </div>

  );
}

export default App;
