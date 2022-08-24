import React, { createContext, useState } from 'react'



export   const cartContext = createContext();
export   function CartProvider({children}){
    const [cart, setCart] = useState([]);
    

function addToCart(item, quantity){
  if (isInCart(item.id)) {
    setCart(cart.map(product => {
      return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
    }));
  } else { 
      setCart([ ...cart, { ...item, quantity: quantity}]);
      
    }
  }


function isInCart(id){
  return( cart.some(itemInCart => itemInCart.id === id))
}

function removeItem(itemRemove) {
  setCart(cart.filter(product => product.id !== itemRemove.id));
  
}
function removeAll() {
  setCart([])
}
function totalPrice() {
  return cart.reduce((count, item) => count + item.count * item.price, 0)
}
function totalProducts() {
  return cart.reduce((count, items) => count + items.count, 0 )
}
  return (
    <cartContext.Provider value={ {cart, addToCart, removeAll, removeItem, isInCart, totalPrice, totalProducts}}>
        {children}
    </cartContext.Provider>
  )
}


