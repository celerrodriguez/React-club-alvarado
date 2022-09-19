import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firestoreDB from '../../services/firebase.js';
import ItemList from '../ItemList/ItemList.jsx';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { Ripples } from '@uiball/loaders'



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


  const getItemsFromDBStatus = (idCategory) => {
    return new Promise((resolve) => {
      const alvashopCollectionRef = collection(firestoreDB, 'alvashop');
      const q = query(alvashopCollectionRef, where('category', '==', idCategory));

      getDocs(q).then(snapshot => {
        const docsData = snapshot.docs.map(doc => { 
          return {...doc.data(), id: doc.id}
          });
        resolve(docsData);
    });
  })
};


function ItemListContainer() {

  const [data, setData] = useState([]);
  const idCategory = useParams().idCategory;

  useEffect(() => {
    if (idCategory) {
      getItemsFromDBStatus(idCategory).then((resolve) => {
        setData(resolve)
      });
    } else { 
      getProducts().then((resolve)=> {
        setData(resolve)
      });
    }
  }, [idCategory])
   
  

  return (
    <div>
      <h1 className='text-center pt-4 text-light' 
          style={{fontSize: "60px", height: "10rem", backgroundColor:"#053159" }} 
      >
        Nuestros productos
      </h1>
      { data.length > 0?

      <div className='d-flex flex-row '>
        <ItemList data = {data}/>
      </div>
      :  
      <div style={{margin:"10% 50%"}} >
        <Ripples 
          size={55}
          speed={2} 
          color="#053159" 
        />
      </div>
      }
    </div>
  )
}

export default ItemListContainer