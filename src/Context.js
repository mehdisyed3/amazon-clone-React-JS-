import React, { useState } from 'react'

const Context = React.createContext()


function ContextProvider({ children }) {
  const [basket, setBasket] = useState([]);

  return (
    <Context.Provider value={basket} >
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }
