import React, { useState } from 'react';



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


  return (
    <div className='count-area'>
      <h3 className='text-center mb-2' >Unidades</h3>

      <div className='d-flex justify-content-center ' >
        <img  onClick={handleDecrement} 
                  src="https://res.cloudinary.com/dcwondno7/image/upload/v1663271554/alvarado/menos_1_n94upd.png" 
                  alt="Añadir" 
                  style={{width:"34px", height:'32px', marginTop:'5px' }}
        />
        <div className='border border-secondary col-1 text-center p-1 m-1' style={{borderRadius:'5px' }} > {count} </div>
        
        <img  onClick={handleIncrement} 
              src="https://res.cloudinary.com/dcwondno7/image/upload/v1663271555/alvarado/anadir_1_mfobmf.png" 
              alt="Añadir" 
              style={{width:"34px", height:'32px', marginTop:'5px' }}
        />
        
      </div>
      
      <div className='d-grid gap-2 col-4 col-md-7 mt-3 mx-auto' >
        <button onClick={ () => props.onAdd(count) } className="btn btn-secondary mt-3" >{props.text}</button>
      </div>
    </div>
  );
}

export default ItemCount