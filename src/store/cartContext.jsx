import React, { createContext, useState } from 'react'


export   const cartContext = createContext();
export   function CartProvider({children}){
    const [cart, setCart] = useState([]);

function addToCart(item, count){


    let copyCart = [...cart]
    copyCart.push({...item, quantity: count})
    setCart(copyCart)
}


  return (
    <cartContext.Provide value={ {cart}}>
        {children}
    </cartContext.Provide>
  )
}


