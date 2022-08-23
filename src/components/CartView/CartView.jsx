import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../store/cartContext.jsx';
import ItemCart from '../ItemCart/ItemCart.jsx';


const CartView = () => {
  const { cart, totalPrice } = useContext(cartContext)
  console.log(cart)
  if(cart.lenght === 0){
    return (
      <>
      <h2>🛒 Mi carrito</h2>
      <p>Carrito vacío</p>
    
      </>
    )
  }

  return (
    <div>
     {
      cart.map(item => <ItemCart key={item.id} item={item}/>)
     }
     
    </div>
   
  )
}

export default CartView