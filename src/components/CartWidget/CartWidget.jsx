import React, { useContext } from 'react'
import { cartContext } from '../../store/cartContext'

export const CartWidget = () => {
  const { cart } = useContext(cartContext);

  let cartInit = 0;
  cart.map(item => {
    cartInit += item.count;
  })
  return (
    <div>
        <a href="#">🛒</a>
        
    </div>
  )
}

export default CartWidget