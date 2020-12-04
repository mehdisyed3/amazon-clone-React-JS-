import React, { useContext } from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Login from './Login'
import { Link } from 'react-router-dom'
import { Context } from './Context'

import {auth} from './firebase'

function Header() {
  const { cart, user } = useContext(Context)

  const signOut = () => {
    if(user){
      auth.signOut()
    }
  }

  return (
    <div className="header">
      <Link to='/' >
        <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="header__logo" alt="" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className="header__nav">
        <Link to={!user ? '/login' : '/'} >
          <div className="header__option" onClick={signOut}>
            <span className="header__optionLineOne">Hello {user ? `${user}` : 'Guest'}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to='/checkout' >
          <div className="header__optionBasket">

            <ShoppingCartIcon />


            <span className="header__optionLineTwo header__basketCount">
              {cart?.length}
            </span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Header
