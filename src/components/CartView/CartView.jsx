import React, { useContext } from 'react'
import { cartContext } from '../../store/cartContext.jsx';
import ItemCart from '../ItemCart/ItemCart.jsx';


const CartView = (item) => {
  const { cart, removeAll, totalPrice } = useContext(cartContext)
  //console.log(cart)
  

  return (
    
    <div>
      
      <h2 className='m-5' >🛒 Mi carrito</h2>
      <br /><br />
      <ul className='d-grid gap-2 d-md-flex flex-column justify-content-md-center aling' >
     
        {cart.map((item) => <ItemCart key={item.item.id} item={item} />)}
     
      </ul>
      <p className='d-grid gap-3 d-md-flex justify-content-md-center' ><strong>Total: $ {totalPrice()} </strong> </p>
      <div className='d-grid gap-3 d-md-flex justify-content-md-center m-5' >
     <button className='btn text-light' style={{backgroundColor: "#04042f", fontWeight:"bold"}} > Comprar</button>
     <button className='btn btn-outline-secondary ' onClick={()=> removeAll(item)}> Vaciar carrito</button>
     </div>
     
    </div>
   
  )}


export default CartView