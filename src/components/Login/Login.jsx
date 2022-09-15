import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

const Login = () => {

      const [dropdown, setDropdown]=useState(false);
    
    const abrirCerrarDropdown = () => {
      setDropdown(!dropdown);
    }
    
      return (
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} >
          <DropdownToggle caret style={{fontWeight:'bold', backgroundColor:'#053159', border:0 }}>
              Acceso Usuarios
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
            <label htmlFor="" style={{  paddingRight:40 }}>
              Usuario:   
              <input type='text' className='m-2'></input>
            </label>
            <label htmlFor="" style={{marginRight:"1rem" }}>
                Contraseña: 
                <input type='password' className='m-2'></input>
            </label>
            <button type='submit'
                    style={{fontWeight:'bold', backgroundColor:'#053159', color:'#ffff', borderRadius:"5px" }}> 
                      Acceder
            </button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )
    }


export default Login