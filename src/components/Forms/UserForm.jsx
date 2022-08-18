import React, { useState } from 'react'

const UserForm = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    telefono: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    
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

  function handleReset(e) {
    setUserData({
      name: "",
      email: "",
      telefono: "",
    })
  }
  return (
    <div className='form-container'>
      <form onReset={handleReset} onSubmit={handleSubmit}>
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
          <input name='tel' type='text'/>
        </div>
        <div className='form-item'>
          <label htmlFor="email">Email:</label>
          <input name='email' type='text'/>
        </div>
        <div className='form-item'>
          <textarea>Detalle su consulta...</textarea>
          <input type='text' placeholder='Consulta...'/>
        </div>
        <div>
          <button type='submit'>Enviar</button>
          <button type='reset'>Cancelar</button>
        </div>
      </form>
    </div>
  )
}

export default UserForm