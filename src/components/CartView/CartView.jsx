import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../store/cartContext.jsx';
import ItemCart from '../ItemCart/ItemCart.jsx';


const CartView = (item) => {
  const { cart, totalPrice, removeAll } = useContext(cartContext)
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
      cart.map(item => <ItemCart key={item.title} item={item} />)
     }
     <button className='btn btn-danger m-5 p-2' onClick={()=> removeAll(item.id)}> Vaciar carrito</button>
     
    </div>
   
  )
}

export default CartView