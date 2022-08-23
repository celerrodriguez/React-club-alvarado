import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { cartContext } from '../../store/cartContext'

export const CartWidget = () => {
  const { cart } = useContext(cartContext);
  return (
    <div>
        <Link to="/cart">🛒</Link>
    </div>
  )
}

export default CartWidget