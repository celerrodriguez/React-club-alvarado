
import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({image, title, description, price, id}) => {
  return (
    <div className='p-3'>
      <div className='card' style={{width: "18rem", height: "100%"}}>
          <img src= {image} className='card-img-top img-fluid rounded mx-auto d-block' alt={title}/>
          <div className='card-body text-center'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <h5 className='card-title'>$ {price}</h5> 
            <Link className='pt-2' to={ `/detalle/${id}`} style={{color: "#04042f", textDecorationLine:"revert"}}><strong>Ver más</strong> </Link>
          </div>
      </div>
    </div>
  )
}

export default Item