import React, { useContext } from 'react'
import { cartContext } from '../../store/cartContext.jsx';
import UserForm from '../Forms/UserForm.jsx';
import ItemCart from '../ItemCart/ItemCart.jsx';


const CartView = () => {
  const { cart, totalPrice, totalProducts } = useContext(cartContext)

  

  return (
    
    
    <div>
      <h2 className='m-5 text-center' >🛒 Mi carrito</h2>
      {totalProducts() === 0 ? (
        <>
          <p className='text-secondary text-center m-5' > Carrito vacío</p>
        </>
      ) : (

        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <ul className='d-grid gap-2 d-md-flex flex-column justify-content-md-center' >              
                {cart.map((item) => <ItemCart key={item.item.id} item={item} />)}              
              </ul>
              <p className='d-grid gap-3 d-md-flex justify-content-md-center' ><strong>Total: $ {totalPrice()} </strong> </p>
            </div>
            <div className="col">
              <UserForm/>
            </div>
          </div>
        </div>
        
            )}
    </div>
   
  )}


export default CartView