import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import Login from '../Login/Login';



export const NavBar = ({category}) => {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className='container-fluid header-top'>
          <Link className="navbar-brand text-light" to="#" style={{ fontSize:20, fontWeight:"bold"}}>El equipo de la ciudad </Link>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active text-light mt-1" aria-current="page" to="/"> Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light mt-1 " aria-current="page" to="/">Medios de pago</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light " to="#"><Login/></Link>
                
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='d-flex bg-light'>
        <img  src="https://res.cloudinary.com/dcwondno7/image/upload/v1660071953/alvarado/club-atletico-alvarado_gawl1h.png" 
              className='img-logo' 
              alt='Logo Club Atlético Alvarado' 
        />
        <h1 className='title'>Alva Shop</h1>
      </div>
      <div className='d-flex justify-content-end  bg-secondary p-3 pb-0 mt-1'>
        <ul>
        <Link className='links' to={ `/categorias/camisetas`} style={{backgroundColor: "#053159"}}> 
          Camisetas
        </Link>
        </ul>
        <ul>
        <Link className='links' to={ `/categorias/chombas`} style={{backgroundColor: "#053159"}}>
          Chombas
        </Link>
        </ul>
        <ul>
        <Link className='links' to={ `/categorias/camperas`} style={{backgroundColor: "#053159"}}>
          Camperas
        </Link>
        </ul>
      </div>
  </div>
  );
}

export default NavBar

