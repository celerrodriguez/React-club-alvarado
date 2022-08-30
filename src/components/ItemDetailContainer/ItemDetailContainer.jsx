import React, { useEffect, useState} from 'react';
import itemsData from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer({ itemid }) {
    const [item, setItem] = useState({});
    const idURL = useParams().id;

function traerProducto() {
    return new Promise((resolve, reject) => {
        
        let itemRequested = itemsData.find( elemento => elemento.id === idURL)
        resolve(itemRequested);
        if(itemRequested === undefined)
            reject('No se encontró el producto')
        else
            resolve(itemRequested);
    })
}

    useEffect(() => {
        traerProducto()
            .then((respuesta) => setItem(respuesta))
            .catch((error) => alert(error));
            
        }, []);

    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer