import React, { useContext } from 'react'
import './CheckoutProduct.css'
import { Context } from './Context'


function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const { removeItem } = useContext(Context)

  // console.log(removeItem)

  return (
    <div className="checkoutProduct">
      <img className='checkoutProduct__image' src={image} />

      <div className='checkoutProduct__info'>
        <p className="checkoutProduct__title"> {title}</p>
        <p className='checkoutProduct__price'><small>$</small><strong>{price}</strong></p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        {
          !hideButton &&
          <button onClick={() => removeItem(id)}>Delete Item</button>
        }

      </div>

    </div>
  )
}

export default CheckoutProduct
