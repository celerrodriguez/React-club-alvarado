import React, { createContext, useState } from 'react'



export   const cartContext = createContext();
export   function CartProvider({children}){
    const [cart, setCart] = useState([]);
    

function addToCart(item, count){
  console.log(item, count)
  if(cart.some(elemento => elemento.id === item.id)){
   // cart.forEach(cartItem => cartItem.id === item.id && (cartItem.count = cartItem.count + 1))
   
     let index = cart.findIndex(elemento => elemento.id === item.id);
     console.log(`el elemento ${item.title} esta en  el cart`);
     console.log(index);
     let product = cart[index];
       product.count = product.count + count;
     console.log(product)

     const copyCart = [ ...cart];
     copyCart.splice(index, 1, product )

     setCart([...copyCart])
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
  return cart.reduce((count, item) => count + item.count * item.price, 0)
}
function totalProducts() {
  return cart.reduce((count, items) => count + items.count, 0 )
}
  return (
    <cartContext.Provider value={ {cart, setCart, addToCart, removeAll, removeItem,  totalPrice, totalProducts}}>
        {children}
    </cartContext.Provider>
  )
}


