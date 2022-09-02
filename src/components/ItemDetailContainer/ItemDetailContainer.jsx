import React, { useEffect, useState} from 'react';
import itemsData from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, getDoc, doc } from 'firebase/firestore';
import firestoreDB from '../../services/firebase';

function ItemDetailContainer({ itemid }) {
    const [item, setItem] = useState({});
    const idURL = useParams().id;

function traerProducto() {
    return new Promise((resolve) => {
        const alvacollection = collection(firestoreDB, 'alvashop');
        const docRef = doc(alvacollection, idURL);

        getDoc(docRef).then( snapshot => {
            resolve(
                { ...snapshot.data(), id: snapshot.id}
            )
        });
    })
}

    useEffect(() => {
        if(idURL) {
            traerProducto()
            .then((respuesta) => { setItem(respuesta)
            });
        }
    }, [idURL])


    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer