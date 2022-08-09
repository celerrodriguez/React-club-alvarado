import React, { useEffect, useState } from 'react';
import itemsData from '../../data/data.js';
import ItemList from '../ItemList/ItemList.jsx';


function getProducts(){
  return new Promise((resolve) => {
    setTimeout(() => resolve(itemsData), 2000)
  })
}

function ItemListContainer() {

  const [data, setData] = useState([]);


  useEffect(() => {
      getProducts().then((respuesta)=> {
        setData(respuesta);
  });
    },[]);

  return (
    <div>
      <h1 className='text-center pt-4 text-light' style={{fontSize: "60px", height: "10rem", backgroundColor:"#04042f" }} >Temporada 2022</h1>
      <div className='d-flex flex-row '>
        <ItemList data = {data}/>
      </div> 
      
    </div>
  )
}

export default ItemListContainer