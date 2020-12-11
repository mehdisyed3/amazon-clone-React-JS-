import React, { useContext } from 'react'
import './Product.css'
import { Context } from './Context'
import CheckIcon from '@material-ui/icons/Check';


function Product({ id, key, title, price, rating, image }) {
  const { addToCart, cart } = useContext(Context)


  const inCart = cart.some(item => id === item.id)
  // console.log(inCart)

  return (
    <div className='product'>
      <div className='product__inCart'>

      </div>
      <div className="product__info" >
        <p>{title}</p>

        <p className='product__price'>
          <small>$</small> <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating).fill().map((_, i) => <p key={Math.random()} >&#11088;</p>)}
        </div>
      </div>
      <img src={image} alt='' />
      {inCart ? <div className='product__icon'> <CheckIcon /> <small>Item added to cart </small> </div> : <small></small>}
      <button onClick={() => addToCart({ index: cart.length + 1, id, title, price, image, rating })}> Add to Cart </button>
    </div>
  )
}

export default Product
