
import React from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx';

const Card = ({image, title, description, price}) => {
  return (
    <div className='p-3'>
    <div className='card' style={{width: "18rem", height: "100%"}}>
        <img src= {image} className='card-img-top' alt="..."/>
        <div className='card-body'>
                <h5 className='card-title text-center'>{title}</h5>
                <p className='card-text text-justify'>{description}</p>
                <h5 className='card-title text-center'>${price}</h5>
                <ItemCount initial={1} stock={10} />
                
              </div>
    </div>
    </div>
  )
}

export default Card