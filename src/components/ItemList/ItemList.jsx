import React from 'react';
import Item from '../Item/Item.jsx';


const ItemList = ({data}) => {
  return (
    <div className='container'>
      <div className='d-flex flex-row flex-wrap justify-content-center mt-5'>
        {data.map((singleItem) => { 
            return ( 
                <Item 
                    key={singleItem.id}
                    id={singleItem.id}
                    image={singleItem.image}
                    title={singleItem.title} 
                    price={singleItem.price} 
                />
            );
        })}
    </div>
    </div>
  )
}


export default ItemList