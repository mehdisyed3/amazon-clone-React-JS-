import React from 'react'
import './App.css';
import Header from './Header'
import Home from './Home'
import { Switch, Route } from 'react-router-dom'
import Checkout from './Checkout';

// t > 143
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


      </Switch>





    </div>

  );
}

export default App;
