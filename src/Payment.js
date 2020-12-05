import React, { useContext } from 'react'
import './Payment.css'
import {Context} from './Context'


function Payment() {
  const {user}= useContext()
  return (
    <div className='payment'>
      <div className='payment__container'>
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>

          </div>
          <div className='payment__address'>
            <p></p>
          </div>

        </div>

        <div className='payment__section'>
          
        </div>

        <div className='payment__section'>
          
        </div>

      </div>
    </div>
  )
}

export default Payment
