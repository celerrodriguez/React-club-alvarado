import React, { useEffect, useState} from 'react';
import itemsData from '../../data/data';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';


function traerProducto() {
    return new Promise((resolve => {
        setTimeout(() => { 
            resolve(itemsData[0])
        }, 2000);
    }))
}
 
function ItemDetailContainer () { 
    const [item, setItem] = useState([]);

    useEffect(() => {
        traerProducto()
            .then((respuesta) => {
                setItem(respuesta)
            })
        }, []);

    return (
        <div>
            <ItemDetail 
            key={item.id}
            image={item.image}
            title={item.title} 
            description={item.description} 
            price={item.price} 
            stock={item.stock}
            />
        </div>
        )
}

export default ItemDetailContainer