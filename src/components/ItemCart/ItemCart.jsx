import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../store/cartContext'
import "./ItemCart.css"

const ItemCart = ({item}) => {
    const {removeItem } = useContext(cartContext)
  return (
    <tr className='table-cart-row'>
        <td className='img-column'>
            <img src={item.item.image} alt={item.item.title}/>
        </td>
        <td className='title-column' >{item.item.title} </td>
        <td className='qty-item' >{item.quantity}</td>
        <td className='qty-item' >$ {item.item.price}</td> 
        <td className='qty-item' > $ {item.quantity * item.item.price}</td>
        <td>
            <button type='button' 
                    className='btn btn-danger btn-xsm btn-x' 
                    onClick={()=> removeItem(item)} 
            ><strong>
                X
              </strong> 
            </button>
        </td> 
        
    </tr>
  )
}

export default ItemCart