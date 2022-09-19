import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
import Login from '../Login/Login';



export const NavBar = ({category}) => {
  return (
    <div>
      <div className="navbar navbar-expand-lg navbar-light bg-secondary ">
        <div className='container-fluid header-top'>
          <Link className="navbar-brand text-light navbar-text-left " to="/">El equipo de la ciudad </Link>
          
          <div>
            <ul className="navbar-nav  mb-2 mb-lg-0 navbar_links">
              <li className="nav-item">
                <Link className="nav-link active text-light mt-1 text-center " aria-current="page" to="/"> Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light mt-1 text-center " aria-current="page" to="#">Medios de pago</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light text-center  " to="#"><Login/></Link>
                
              </li>
              <li>
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='d-flex bg-light nav-resp'>
        <Link to='/'>
          <img  src="https://res.cloudinary.com/dcwondno7/image/upload/v1660071953/alvarado/club-atletico-alvarado_gawl1h.png" 
                className='img-logo' 
                alt='Logo Club Atlético Alvarado' 
          />
        </Link>
        <h1 className='title'>Alva Shop</h1>
      </div>
      <div className='d-flex justify-content-md-end  bg-secondary p-3 pb-0 mt-1 links-category'>
        <ul>
        <Link className='links' to={ `/categorias/camisetas`} > 
          Camisetas
        </Link>
        </ul>
        <ul>
        <Link className='links' to={ `/categorias/chombas`}>
          Chombas
        </Link>
        </ul>
        <ul>
        <Link className='links' to={ `/categorias/camperas`}>
          Camperas
        </Link>
        </ul>
      </div>
  </div>
  );
}

export default NavBar

