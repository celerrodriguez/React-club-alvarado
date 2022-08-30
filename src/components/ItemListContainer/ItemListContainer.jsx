import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../../data/data.js';
import firestoreDB from '../../services/firebase.js';
import ItemList from '../ItemList/ItemList.jsx';
import { getDocs, collection, query, where } from 'firebase/firestore'

function getProducts(){
  return new Promise((resolve) => {
  const alvashopCollection = collection(firestoreDB, 'alvashop');

  getDocs(alvashopCollection).then(snapshot => {
    const docsData = snapshot.docs.map(doc => { 
      return {...doc.data(), id: doc.id}
      })
    resolve(docsData);
  })
})
};


  const getItemsFromDBStatus = (categoryParam) => {
    return new Promise((resolve) => {
      const alvashopCollectionRef = collection(firestoreDB, 'alvashop');
      const q = query(alvashopCollectionRef, where('category', '==', categoryParam));

      getDocs(q).then(snapshot => {
        const docsData = snapshot.docs.map(doc => { 
          return {...doc.data(), id: doc.id}
          });
        resolve(docsData);
    });
  })
};
    
    // setTimeout(() => { 
    //   resolve(itemsData)
    // }, 1500)
    //})


function ItemListContainer() {

  const [data, setData] = useState([]);
  const idCategory = useParams().idCategory;

  const statusFromParams = useParams().idCategory;

  useEffect(() => {
    if (statusFromParams === undefined)
      getProducts().then((respuesta)=> {
        // let itemsFilter = itemsData.filter((elemento) => elemento.category === idCategory)
        // if (idCategory === undefined) {
          setData(respuesta);
        });
        else { 
          getItemsFromDBStatus(statusFromParams)
          //setData(itemsFilter)
        }
  

    },[idCategory]);

  return (
    <div>
      <h1 className='text-center pt-4 text-light' style={{fontSize: "60px", height: "10rem", backgroundColor:"#04042f" }} >Nuestros productos</h1>
      <div className='d-flex flex-row '>
        <ItemList data = {data}/>
      </div>
      
    </div>
  )
}

export default ItemListContainer