import React, { useContext, useEffect, useState } from 'react'
import './Orders.css'
import { db } from './firebase'
import { Context } from './Context'

function Orders() {
  const [orders, setOrders] = useState([])
  const { userObj, cart } = useContext(Context)

  useEffect(() => {
    if (userObj) {
      db
        .collection('users')
        .doc(userObj?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
          setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })))
        ))
    } else {
      setOrders([])
    }

  }, [userObj])
  return (
    <div className='orders'>
      <h1>Your Orders</h1>

      {/* <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div> */}

    </div>
  )
}

export default Orders
