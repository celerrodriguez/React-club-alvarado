import React, { useContext } from 'react'
import { cartContext } from '../../store/cartContext.jsx';
import UserForm from '../Forms/UserForm.jsx';
import ItemCart from '../ItemCart/ItemCart.jsx';
import './CartView.css';


const CartView = () => {
  const { cart, totalPrice, totalProducts } = useContext(cartContext)

  

  return (
    
    
    <div>
      <div className='d-flex justify-content-center m-5'
           style={{backgroundColor:"#053159" }} >
        <img  src='https://res.cloudinary.com/dcwondno7/image/upload/v1663190194/alvarado/carrito-de-compras_qbdbsv.png'
              className='img-cart-view' 
        /> 
        <h2 className='text-center text-light title-cart-view'> Mi carrito</h2>
      </div>
      {totalProducts() === 0 ? (
        <>
          <p className='text-secondary text-center m-5 p-cart-view'> 
              El carrito está vacío
          </p>
        </>
      ) : (

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <table >              
                {cart.map((item) => <ItemCart key={item.item.id} item={item} />)}              
              </table>
              <p className='d-grid gap-2 d-md-flex justify-content-center' ><strong>Total: $ {totalPrice()} </strong> </p>
            </div>
            <div className="col-lg-5 col-md-12">
              <UserForm/>
            </div>
          </div>
        </div>
        
            )}
    </div>
   
  )}


export default CartView