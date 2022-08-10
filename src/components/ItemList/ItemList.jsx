import React from 'react';
import Item from '../Item/Item.jsx';


const ItemList = ({data}) => {
  return (
    <div className='d-flex flex-row '>
        {data.map((singleItem) => { 
            return ( 
                <Item 
                    key={singleItem.id}
                    image={singleItem.image}
                    title={singleItem.title} 
                    //description={singleItem.description} 
                    price={singleItem.price} 
                />
            );
        })}
    </div>
  )
}


export default ItemList