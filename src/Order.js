import React from 'react'
import './Order.css'
import moment from 'moment'

function Order({ order }) {
  
  console.log(order)
  return (
    <div className='order'>
      <h2>Order</h2>
      {/* <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p> */}
      <p className='order__id'>
        <small></small>
      </p>
    </div>
  )
}

export default Order
