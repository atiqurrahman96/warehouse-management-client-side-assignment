import React from 'react';
import { Button } from 'react-bootstrap';

const ManageInventory = ({ inventory }) => {
    const { id, image, name, quantity, supplier, price, description } = inventory;
    return (
        <div className='manage-inventory-container'>
            <div className='manage-inventory-img-container'>
                <img src={image} alt="" />
            </div>
            <div className='manage-inventory-detail-container'>
                <h3>Product:{name}</h3>
                <h4>Supplier:{supplier}</h4>
                <p>price:${price}</p>
                <p>Quantity:{quantity}</p>
                <p>Description:{description}</p>
            </div>
            <Button>Delete</Button>
        </div>
    );
};

export default ManageInventory;