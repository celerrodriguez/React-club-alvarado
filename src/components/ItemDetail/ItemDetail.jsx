import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Link } from 'react-router-dom';
import { cartContext } from '../../store/cartContext.jsx';
import { useContext } from 'react';


const ItemDetail = ({image, stock, title, description, price}) => {
const { addToCart } = useContext(cartContext);
const [countCart, setCountCart] = useState(0);

function handleAdd(count){
  const itemToCart = {image, stock, title, description, price};
  addToCart(itemToCart, count);
  //console.log(itemToCart)
  setCountCart(count)
  //console.log(count)
  
  
}


  return (
    <div className='m-5'>
      <div className='card pt-5' style={{margin: 'auto', maxWidth: "80%"}}>
        <div className='row g-0'>
          <div className='col-md-4' > 
            <img src= {image} className='img-fluid rounded-start' alt="..." style={{maxWidth: 450, margin:"auto" }}/>
          </div>
          <div className='col-md-8'>
            <div className='card-body'>
                <h5 className='card-title text-center'><strong>{title}</strong></h5>
                <p className='card-text text-center'>{description}</p>
                <h5 className='card-title text-center'><strong>$ {price}</strong></h5>
                  <br/>
                <div>
                  {countCart === 0 ? ( 
                  <ItemCount 
                    initial={1} 
                    stock={stock} 
                    onAdd={handleAdd}
                    text={'Agregar al carrito'}
                  />) : ( 
                  <div className='d-grid gap-2 col-4 mx-auto'>   
                    <Link to='/cart' className='btn text-light  mt-3' style={{backgroundColor: "#04042f", fontWeight:"bold"}}> Ir al carrito</Link>
                    <Link to='/' className='btn  mt-3 btn-outline-secondary' style={{color: "#04042f"}}> Seguir comprando</Link>
                  </div>)
                  }
                  <Link className='pt-2 mt-3' to='/' style={{color: "#04042f", textDecorationLine:"underline"}}><strong>⇽ Volver</strong> </Link>
                  
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ItemDetail