import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../store/cartContext'


export const CartWidget = () => {
  const { cart, totalProducts } = useContext(cartContext);
    return (
    <div>
       {totalProducts() > 0 ? (
      <>
        <Link to="/cart">🛒</Link>
        <span className='text-light' >{totalProducts()}</span>
      </>
  ) : (
  <>
  </>  ) }
    </div>
  )
}

export default CartWidget