import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ManageInventories = () => {
    const navigate = useNavigate();
    const addNewItem = () => {
        navigate('/addNewItem');
    }
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [])
    const deleteItem = id => {
        const proceed = window.confirm('Are You permit to Delete')
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log('successfully', data);
                    const restProducts = inventories.filter(inventory => inventory._id !== id);
                    setInventories(restProducts)
                })
        }
    }
    return (
        <div>
            <h1>Manage inventories: {inventories.length}</h1>
            <div className='manage-inventories-items-container'>
                {
                    inventories.map(inventory => <div key={inventory._id}>
                        <div className='manage-inventory-container'>
                            <div className='manage-inventory-img-container'>
                                <img src={inventory.image} alt="" />
                            </div>
                            <div className='manage-inventory-detail-container'>
                                <h3>Product:{inventory.name}</h3>
                                <h4>Supplier:{inventory.supplier}</h4>
                                <p>price:${inventory.price}</p>
                                <p>Quantity:{inventory.quantity}</p>
                                <p>Description:{inventory.description}</p>

                            </div>
                            <Button onClick={() => deleteItem(inventory._id)}>Delete</Button>
                        </div>
                    </div>)
                }

            </div>
            <Button className='mb-2' onClick={addNewItem}>Add New Product</Button>
        </div>
    );
};

export default ManageInventories;