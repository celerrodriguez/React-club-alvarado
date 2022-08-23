import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../store/cartContext'

const ItemCart = (item, image, stock, title, price) => {
    const {removeProdcts } = useContext(cartContext)
  return (
    <div>
        <div>
            <img src={item.image} alt={item.title} />
            <p>Producto: {item.title} </p>
            <p>Cantidad: {item.count}</p>
            <p>Precio u.:{item.price}</p> 
            <p>Subtotal: $ {item.count * item.price}</p>
            <button className='btn-danger' onClick={()=> removeProdcts(item.id)} > X </button>
        </div> 
        <div></div>
        
    </div>
  )
}

export default ItemCart