import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

function DropdownNav() {
  const [dropdown, setDropdown]=useState(false);

const abrirCerrarDropdown = () => {
  setDropdown(!dropdown);
}

  return (
    <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} >
      <DropdownToggle caret style={{backgroundColor:'#04042f', border:'0'}}><strong>Categorias</strong></DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Temporada 2022</DropdownItem>
        <DropdownItem>Temporadas anteriores</DropdownItem>
        <DropdownItem>Camisetas</DropdownItem>
        <DropdownItem>Remeras</DropdownItem>
        <DropdownItem>Camperas</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default DropdownNav
