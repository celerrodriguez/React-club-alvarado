import React, { createContext, useState } from 'react'



export   const cartContext = createContext();
export   function CartProvider({children}){
    const [cart, setCart] = useState([]);
    

function addToCart(item, count){

  if(cart.some(elemento => elemento.item.id === item.id)){
  
    let repeatProduct = cart.find(elemento => elemento.item.id === item.id);
    repeatProduct.quantity += count
    let filterProduct = cart.filter(elemento => elemento.item.id !== item.id);
    
    setCart([...filterProduct, repeatProduct])

    
  }else {
    setCart([...cart,  { item: item, quantity: count}])
  }
}
 

function removeItem(itemRemove) {
  setCart(cart.filter(cartItem => cartItem.item.id !== itemRemove.item.id));
  
}
function removeAll() {
  setCart([])
}
function totalPrice() {
  return cart.reduce((count, item) => count + item.quantity * item.item.price, 0)
}
 function totalProducts() {
   return cart.reduce((count, items) => count + items.quantity, 0 )
 }


  return (
    <cartContext.Provider value={ {cart, setCart, addToCart, removeAll, removeItem,  totalPrice, totalProducts }}>
        {children}
    </cartContext.Provider>
  )
}


