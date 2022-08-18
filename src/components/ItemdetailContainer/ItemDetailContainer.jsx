import React, { useEffect, useState} from 'react';
import itemsData from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';
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
        <ItemDetail 
            key={item.id}
            image={item.image}
            title={item.title} 
            description={item.description} 
            price={item.price} 
            stock={item.stock}
        />
    )
}

export default ItemDetailContainer