import React, { useContext } from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'

import { Context } from './Context'

function Checkout() {
  const { cart } = useContext(Context)

  const cartItems = cart.length && cart.map((item,i )=> <CheckoutProduct key={i} id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} />)

  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <div className='checkout__ad'>
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <div>

            <h2 className="checkout__title">Your shopping Basket</h2>
            {cartItems?.length && cartItems}
          </div>
        </div>

      </div>
      <div className="checkout__right">

        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
