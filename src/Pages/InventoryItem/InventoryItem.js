
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './InventoryItem.css'

const InventoryItem = ({ item }) => {
    const { _id, image, name, supplier, price, quantity, description } = item;
    const navigate = useNavigate();
    const navigateToUpdateItems = id => {
        navigate(`/inventory/${id}`);
    }
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
            <Button id='btn' onClick={() => navigateToUpdateItems(_id)}>Update</Button>
        </div>
    );
};

export default InventoryItem;