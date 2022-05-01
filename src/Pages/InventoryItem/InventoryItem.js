import React from 'react';
import './InventoryItem.css'

const InventoryItem = ({ item }) => {
    const { image, name, supplier, price, quantity, description } = item;
    return (
        <div className='item-container'>
            <div className='img-container'>
                <img src={image} alt="" />
            </div>
            <div className='detail-container'>
                <h3>Product:{name}</h3>
                <h4>Supplier:{supplier}</h4>
                <p>price:${price}</p>
                <p>Quantity:{quantity}</p>
                <p>Description:{description}</p>
            </div>
        </div>
    );
};

export default InventoryItem;