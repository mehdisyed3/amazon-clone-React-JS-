import React, { useContext, useState } from 'react'
import './Payment.css'
import { Context } from './Context'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'


function Payment() {
  const { user, cart } = useContext(Context)
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true)

  const items = cart.map((item, i) => <CheckoutProduct key={i} id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} />)

  const stripe = useStripe()
  const element = useElements()

  const handleSubmit = (e) => {
    console.log("Dabba")
  }

  const handleChange = event => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  const total = cart?.length && cart.reduce((acc, cv) => acc + cv.price, 0)

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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment__priceContainer'>
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </div>
            </form>

          </div>


        </div>

      </div>
    </div>
  )
}

export default Payment
