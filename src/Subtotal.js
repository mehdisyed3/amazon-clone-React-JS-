import React, { useContext } from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { Context } from './Context'
import { useHistory } from 'react-router-dom'


function Subtotal() {
  const { cart } = useContext(Context)
  const history = useHistory()

  // console.log(cart)

  const total = cart?.length && cart.reduce((acc, cv) => acc + cv.price, 0)
  // console.log(total)

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={() => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
