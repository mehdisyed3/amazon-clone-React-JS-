import React, { useState } from 'react'

const Context = React.createContext()


function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (newItem) =>{
    setCart([...cart,newItem])
  }

  return (
    <Context.Provider value={{ cart, addToCart}} >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
