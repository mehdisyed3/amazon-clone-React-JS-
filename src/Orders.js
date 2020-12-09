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
        .collection('users') // accessing users collection << 7.47 vdo par >>
        .doc(userObj?.uid) // getting the specific user that is logged in
        .collection('orders') // accessing the specific users order
        .orderBy('created', 'desc') // ordering bsed on date created in desending order, (most recent one should be on the top)
        .onSnapshot(snapshot => (
          setOrders(snapshot.docs.map(doc => ({ // map through all the orders and shows it 
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
      {/* 
      <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div> */}

    </div>
  )
}

export default Orders
