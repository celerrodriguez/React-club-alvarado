import React, { useContext } from 'react'
import { cartContext } from '../../store/cartContext.jsx';
import ItemCart from '../ItemCart/ItemCart.jsx';


const CartView = (item) => {
  const { cart, removeAll } = useContext(cartContext)
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
<ul className='d-flex flex-column' >
     {
      cart.map((item) => <ItemCart key={item.title} item={item} />)
     }
     </ul>
     <button className='btn btn-danger m-5 p-2 position-absolute top-75 start-50' onClick={()=> removeAll(item)}> Vaciar carrito</button>
     
    </div>
   
  )
}

export default CartView