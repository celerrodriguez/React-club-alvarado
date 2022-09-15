import React from 'react'
import { useContext } from 'react'
import { cartContext } from '../../store/cartContext'

const ItemCart = ({item}) => {
    const {removeItem } = useContext(cartContext)
  return (
    <div>
        <div className='d-flex m-3 '>
            <img src={item.item.image} 
                 alt={item.item.title}
                 style={{maxWidth:"20%"} }  
            />
            <p className='m-4' >{item.item.title} </p>
            <br/>
            <p className='m-4' >{item.quantity}</p>
            <p className='m-4' >$ {item.item.price}</p> 
            <p className='m-4' > $ {item.quantity * item.item.price}</p>
            <button type='button' 
                    className='btn btn-danger text-center btn-xsm mt-3' 
                    style={{ height: '35px' }} 
                    onClick={()=> removeItem(item)} 
            ><strong>
                X
              </strong> 
            </button>
        </div> 
        
    </div>
  )
}

export default ItemCart