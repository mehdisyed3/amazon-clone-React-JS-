import React, { useContext } from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login'
// import {Context} from './Context.js'


// t > 3:47
function App() {

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


      </Switch>





    </div>

  );
}

export default App;
