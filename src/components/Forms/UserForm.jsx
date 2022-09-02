import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import firestoreDB from '../../services/firebase';
import { cartContext } from '../../store/cartContext';
import "./UserForm.css";
import { useNavigate } from 'react-router-dom'


const UserForm = (item) => {
  const { cart, removeAll, totalPrice } = useContext(cartContext)

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefono: "",
  });

  let navigate = useNavigate();
  const [orderFirebase, setOrderFirebase] = useState({
    id: '',
    complete: false,
  });

   const ordenDeCompra = {
     buyer: {...userData},
     items: [...cart],
     total:totalPrice(),
     date: new Date(),
   };

async function handleSubmit(e) {
    e.preventDefault();
    
    const collectionRef = collection(firestoreDB, "orders");
    const docRef = await addDoc(collectionRef, ordenDeCompra );
    setOrderFirebase({id: docRef.id, complete: true});
    navigate(`/thankyou/${docRef.id}`);


    setUserData({
      name: "",
      email: "",
      telefono: "",
    })

    
  }

  function inputChangeHandler(e){
    const input = e.target;

    const value = input.value;
    const inputName = input.name;

    let copyUserData = { ...userData };

    copyUserData[inputName] = value;
    setUserData(copyUserData);
  }

  // function handleReset(e) {
  //   setUserData({
  //     name: "",
  //     email: "",
  //     telefono: "",
  //   })
//   }
//  if (orderFirebase.complete === true) {
//     return (
//       <div>
//         <h1>Gracias por tu compra!</h1>
//         <p>El id de seguimiento de tu compra es: {orderFirebase.id}</p>
//       </div>
//     );
//   }

  return (
    <div className='form-container'>
      <p className='text-light text-center' ><strong>¡YA CASI ES TUYO!</strong></p>
      <p className='text-light text-center mt-3' >Completa los datos para crear tu orden de compras:</p>
      <form  onSubmit={handleSubmit} className='d-grid gap-2  justify-content-md-center mt-5'>
        <div className='form-item'>
          <label htmlFor="name">Nombre:</label>
          <input 
            value={userData.name}
            onChange={inputChangeHandler} 
            name='name' 
            type='text'
          />
        </div>
        <div className='form-item'>
          <label htmlFor="tel">Teléfono:</label>
          <input 
            value={userData.tel}
            onChange={inputChangeHandler} 
            name='tel' 
            type='text'
          />
        </div>
        <div className='form-item'>
          <label htmlFor="email">Email:</label>
          <input 
            value={userData.email}
            onChange={inputChangeHandler} 
            name='email' 
            type='text'
          />
        </div>

        <div className='d-grid gap-3 d-md-flex justify-content-md-center mt-3' >
            <button type='submit' className='btn btn-light' style={{ fontWeight:"bold"}} > Finalizar compra</button>
            <button className='btn text-light btn-outline-secondary ' onClick={()=> removeAll(item)}> Vaciar carrito</button>
        </div>
      </form>
    </div>
  )
}

export default UserForm