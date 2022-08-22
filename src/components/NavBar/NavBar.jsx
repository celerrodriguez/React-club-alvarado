import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import DropdownNav from '../DropdownNav/DropdownNav';


export const NavBar = ({category}) => {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-secondary">
        
        <div className='container-fluid header-top'>
          <Link className="navbar-brand text-light" to="#" style={{ fontSize:20}}><strong>El equipo de la ciudad </strong></Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">Medios de pago</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Acceso usuarios</Link>
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
      <div className='d-flex text-light bg-secondary'>
        <ul>
        <Link className='link' to={ `/categorias/camisetas`}>Camisetas</Link>
        </ul>
        <ul>
        <Link className='link' to={ `/categorias/chombas`}>Chombas</Link>
        </ul>
        <ul>
        <Link className='link' to={ `/categorias/camperas`}>Camperas</Link>
        </ul>
      </div>
  </div>
  );
}

export default NavBar

