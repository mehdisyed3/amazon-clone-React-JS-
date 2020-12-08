import React, { useContext, useState, useEffect } from 'react'
import './Payment.css'
import { Context } from './Context'
import CheckoutProduct from './CheckoutProduct'
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import axios from './axios';



function Payment() {
  const { user, cart, setCart } = useContext(Context)
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true)


  const history = useHistory()

  const stripe = useStripe()
  const elements = useElements()

  const items = cart.map((item, i) => <CheckoutProduct key={i} id={item.id} image={item.image} title={item.title} price={item.price} rating={item.rating} />)
  const total = cart?.length && cart.reduce((acc, cv) => acc + cv.price, 0)

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            // Stripe expects the total in a currencies subunits
            url: `/payments/create?total=${total * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
}, [cart])

    console.log("CLIENT SECRET IS >>>>>>",clientSecret)

  

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
      .then(({ paymentIntent }) => { //destructured
        // paymentIntent = payment confirmation

        // db
        //   .collection('users')
        //   .doc(user?.uid)
        //   .collection('orders')
        //   .doc(paymentIntent.id)
        //   .set({
        //     basket: cart,
        //     amount: paymentIntent.amount,
        //     created: paymentIntent.created
        //   })

        setSucceeded(true);
        setError(null)
        setProcessing(false)

        setCart([])

        history.replace('/orders') // replace because , dont want user to come back to the payment page if pressd BACK 
      })

  }

  const handleChange = event => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }


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
                <button disabled={!cart.length || processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}

            </form>

          </div>


        </div>

      </div>
    </div>
  )
}

export default Payment
