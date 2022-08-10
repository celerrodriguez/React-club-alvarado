import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-secondary">
        
        <div className='container-fluid header-top'>
          <a class="navbar-brand text-light" href="#"><strong>El equipo de la ciudad</strong></a>
          <div classname="collapse navbar-collapse" id="navbarSupportedContent">
            <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
              <li classname="nav-item">
                <a classname="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li classname="nav-item">
                <a classname="nav-link active" aria-current="page" href="#">Medios de pago</a>
              </li>
              <li classname="nav-item">
                <a classname="nav-link" href="#">Acceso usuarios</a>
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='d-flex bg-light'>
        <img src="https://res.cloudinary.com/dcwondno7/image/upload/v1660071953/alvarado/club-atletico-alvarado_gawl1h.png" className='img-logo' alt='Logo Club Atlético Alvarado' />
        <h1 className='title'>Alva Shop</h1>
      </div>
  </div>
  );
}

export default NavBar

