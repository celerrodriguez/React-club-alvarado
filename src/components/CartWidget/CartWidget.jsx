import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../store/cartContext'


export const CartWidget = () => {
  const { cart, totalProducts } = useContext(cartContext);
    return (
    <div>
       {totalProducts() !== 0 && (
      <>
        <Link to="/cart"> 
          <img src='https://res.cloudinary.com/dcwondno7/image/upload/v1663190194/alvarado/carrito-de-compras_qbdbsv.png'
          style={{width:"32px" }} /> 
        </Link>
        <span className='text-light' >{totalProducts()}</span>
      </>
  )}
    </div>
  )
}

export default CartWidget