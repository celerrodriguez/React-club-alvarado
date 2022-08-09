import React, { useState } from 'react';
import Swal from 'sweetalert2';


function ItemCount(props) {

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    if (count >= props.initial && count < props.stock) {
        setCount(count +1)};
  };

  const handleDecrement = () => {
    if (count > props.initial){
        setCount(count -1)
    };
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
      <h3 className='text-center mb-2' >Unidades</h3>

      <div className='d-flex justify-content-center ' >
        <button onClick={handleDecrement}>➖</button>
        <div className='border border-secondary col-2 text-center' > {count} </div>
        <button onClick={handleIncrement}>➕</button>
      </div>
      
      <div className='d-grid gap-2 col-8 mx-auto' >
        <button onClick={onAdd} className="btn btn-secondary mt-3" >Añadir al carrito</button>
      </div>
    </>
  );
}

export default ItemCount