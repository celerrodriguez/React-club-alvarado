import React, { useContext } from 'react'
import { cartContext } from '../../store/cartContext.jsx';
import ItemCart from '../ItemCart/ItemCart.jsx';


const CartView = (item) => {
  const { cart, removeAll } = useContext(cartContext)
  //console.log(cart)
  

  return (
    
    <div>
      
      <h2 className='m-5' >🛒 Mi carrito</h2>
      <br /><br />
      <ul className='d-flex flex-column' >
     
        {cart.map((item) => <ItemCart key={item.item.id} item={item} />)}
     
      </ul>
      <p className='position-absolute start-50' ><strong>Total: $ </strong> </p>
     <button className='btn btn-danger m-5 p-2 position-absolute top-75 start-50' onClick={()=> removeAll(item)}> Vaciar carrito</button>
     <button className='btn btn-primary m-5 p-2 position-absolute top-75 start-25' > Comprar</button>
     
    </div>
   
  )}


export default CartView