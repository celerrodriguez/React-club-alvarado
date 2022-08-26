import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../store/cartContext'

const ItemCart = ({item}) => {
    const {removeItem } = useContext(cartContext)
  return (
    <div>
        <div className='d-flex m-3 '>
            <img style={{maxWidth:"10%"} } src={item.item.image} alt={item.title} />
            <p className='m-4' >{item.item.title} </p>
            <br/>
            <p className='m-4' >{item.quantity}</p>
            <p className='m-4' >$ {item.item.price}</p> 
            <p className='m-4' > $ {item.quantity * item.item.price}</p>
            <button className='btn btn-danger p-2' style={{width:"30px", height: "40px", fontWeight:"bold", marginTop:"1rem"} } onClick={()=> removeItem(item)} > X </button>
        </div> 
        <div></div>
        
    </div>
  )
}

export default ItemCart