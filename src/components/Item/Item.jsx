
import React from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';

const Item = ({image, title, description, price}) => {
  return (
    <div className='p-3'>
    <div className='card' style={{width: "18rem", height: "100%"}}>
        <img src= {image} className='card-img-top' alt="..."/>
        <div className='card-body text-center'>
                <h5 className='card-title'>{title}</h5>
                <p className='card-text'>{description}</p>
                <h5 className='card-title'>${price}</h5>
                <a className='pt-2' href="#" style={{color: "#04042f", textDecorationLine:"revert"}}><strong>Ver más</strong> </a>
                <br/>
                <br/>

                <ItemCount initial={1} stock={10} />
                
              </div>
    </div>
    </div>
  )
}

export default Item