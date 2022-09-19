import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount.jsx';
import { Link } from 'react-router-dom';
import { cartContext } from '../../store/cartContext.jsx';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import './ItemDetail.css'


const ItemDetail = ({item}) => {
const { addToCart } = useContext(cartContext);
const [countCart, setCountCart] = useState(0);

function handleAdd(count){
  
  addToCart(item, count);
  
  setCountCart(count)
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: `${count} ${item.title} agregados al carrito`,
    showConfirmButton: false,
    timer: 1500
  })
  
  
}


  return (
    <div className='m-5'>
      <div className='card pt-5' style={{margin: 'auto', maxWidth: "80%"}}>
        <div className='row g-0'>
          <div className='col-md-4' > 
            <img  src= {item.image} className='img-fluid rounded mx-auto d-block img-detail' alt={item.title}/>
          </div>
          <div className='col-md-12'>
            <div className='card-body'>
                <h5 className='card-title text-center'><strong>{item.title}</strong></h5>
                <p className='card-text text-center'>{item.description}</p>
                <h5 className='card-title text-center'><strong>$ {item.price}</strong></h5>
                  <br/>
                <div>
                  {countCart === 0 ? ( 
                  <ItemCount 
                    initial={1} 
                    stock={item.stock} 
                    onAdd={handleAdd}
                    text={'Agregar al carrito'}
                  />) : ( 
                  <div className='d-grid gap-2 col-4 mx-auto'>   
                    <Link to='/cart' className='btn text-light  mt-3' style={{backgroundColor: "#04042f", fontWeight:"bold"}}> 
                      Ir al carrito
                    </Link>
                    <Link to='/' className='btn  mt-3 btn-outline-secondary' style={{color: "#04042f"}}
                    > 
                      Seguir comprando
                    </Link>
                  </div>)
                  }
                  <Link className='pt-2 mt-3' to='/' style={{color: "#04042f", textDecorationLine:"underline", fontWeight:"bold"}}
                  >
                    ⇽ Volver
                  </Link>
                  
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ItemDetail