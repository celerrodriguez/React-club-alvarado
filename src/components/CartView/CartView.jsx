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
      
      <p>Carrito vacío</p>
    
      </>
    )
  }

  return (
    
    <div>
      
      <h2 className='m-5' >🛒 Mi carrito</h2>
      <br /><br />

     {
      cart.map((item) => <ItemCart key={item.id} item={item} />)
     }
     <button className='btn btn-danger m-5 p-2 position-absolute top-75 start-50' onClick={()=> removeAll(item.id)}> Vaciar carrito</button>
     
    </div>
   
  )
}

export default CartView