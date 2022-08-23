import React, { createContext, useState } from 'react'



export   const cartContext = createContext();
export   function CartProvider({children}){
    const [cart, setCart] = useState([]);
    let copyCart = [...cart];

function addToCart(item, count){
  
    if (isInCart(item.id)){
      const  findItem = copyCart.find(elemento => elemento.id === item.id);
       //const itemFind = elemento => elemento.id === item.id
      findItem.count += count;
      findItem.stock -= count
      console.log(findItem)
      setCart(copyCart)
      console.log(copyCart)
    }
    else{ 
    copyCart.push({...item, count});
    item.stock -= count
    setCart(copyCart)
    // console.log(copyCart)
    }
}

function isInCart(id){
  return( cart.some(itemInCart => itemInCart.id === id))
}

function removeItem(item) {
  const itemRemove = elemento => elemento.id === item.id
  const indexItem = copyCart.indexOf(itemRemove)
  copyCart.splice(indexItem, 1)
  setCart(copyCart)
  //console.log(copyCart)
}
function removeAll() {
  copyCart = []
  setCart(copyCart)
  //console.log(copyCart)
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


