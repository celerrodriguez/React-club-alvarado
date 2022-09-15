import React, { useContext } from 'react'
import { cartContext } from '../../store/cartContext.jsx';
import UserForm from '../Forms/UserForm.jsx';
import ItemCart from '../ItemCart/ItemCart.jsx';


const CartView = () => {
  const { cart, totalPrice, totalProducts } = useContext(cartContext)

  

  return (
    
    
    <div>
      <div className='d-flex justify-content-center m-5'
           style={{backgroundColor:"#053159" }} >
        <img src='https://res.cloudinary.com/dcwondno7/image/upload/v1663190194/alvarado/carrito-de-compras_qbdbsv.png'
            style={{width:"62px", height:"60px", margin:10 }} /> 
        <h2 className='text-center text-light'
            style={{fontSize:"60px" }} > 
              Mi carrito</h2>
      </div>
      {totalProducts() === 0 ? (
        <>
          <p className='text-secondary text-center m-5'
             style={{fontSize:"30px" }}> 
              El carrito está vacío
          </p>
        </>
      ) : (

        <div className="container-fluid">
          <div className="row">
            <div className="col-8">
              <ul className='d-grid gap-2 d-flex flex-column justify-content-start' >              
                {cart.map((item) => <ItemCart key={item.item.id} item={item} />)}              
              </ul>
              <p className='d-grid gap-2 d-md-flex justify-content-md-center' ><strong>Total: $ {totalPrice()} </strong> </p>
            </div>
            <div className="col-4">
              <UserForm/>
            </div>
          </div>
        </div>
        
            )}
    </div>
   
  )}


export default CartView