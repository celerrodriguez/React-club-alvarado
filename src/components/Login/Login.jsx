import React, { useContext } from 'react'

const Login = () => {
    const { username, setUsername } = useContext(userContext)
    
  return (
    <div>
        <h1>Login</h1>

        <label htmlFor="">
            Usuario
            <input type='text'></input>
        </label>
        <label htmlFor="">
            Contraseña
            <input type='password'></input>
        </label>
        <button type='submit'> Acceder</button>
    </div>
  )
}

export default Login