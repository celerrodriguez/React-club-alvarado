import React, { useState } from 'react'
import Swal from 'sweetalert2'


function ItemCount(props) {

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    count >= props.initial && count < props.stock
      ? setCount(count +1) : setCount(count +0);
  };

  const handleDecrement = () => {
    count > props.initial ? setCount(count -1) : setCount(- 0);
  };

  const onAdd = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      })
  };

  return (
    <>
      <h3>Unidades</h3>
      <button onClick={handleDecrement}>➖</button>
      <button onClick={handleIncrement}>➕</button>
      
      <div className='d-grid gap-2 col-8 mx-auto' >
      <button onClick={onAdd} className="btn btn-secondary mt-3" >Añadir al carrito</button>
      </div>
    </>
  );
}

export default ItemCount