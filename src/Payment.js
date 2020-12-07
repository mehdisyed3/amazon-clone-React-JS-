import React, { useContext } from 'react'
import './Payment.css'
import { Context } from './Context'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'


  function Payment() {
    const { user, cart } = useContext(Context)

    const items = cart.map((item, i) => <CheckoutProduct key={i} id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} />)


    return (
      <div className='payment'>
        <div className='payment__container'>
          <h1>
            Checkout (
                        <Link to="/checkout">{cart?.length} items</Link>
                        )
                </h1>
          <div className='payment__section'>
            <div className='payment__title'>
              <h3>Delivery Address</h3>

            </div>
            <div className='payment__address'>
              <p>{user}</p>
              <p>12 Aylesbury Dr</p>
              <p>Brampton, ON</p>
            </div>

          </div>

          <div className='payment__section'>
            <div className='payment__title'>
              <h3>Review items and delivery</h3>
            </div>
            <div className='payment__items'>

              {items}

            </div>
          </div>

          <div className='payment__section'>
            <div className='payment__title'>
              <h3>Payment Method</h3>
            </div>
            <div className='payment__details'>
              {/* Stripe magic */}

            </div>


          </div>

        </div>
      </div>
    )
  }

export default Payment
