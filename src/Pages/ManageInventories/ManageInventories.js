import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ManageInventory from '../ManageInventory/ManageInventory';

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
    return (
        <div>
            <h1>Manage inventories: {inventories.length}</h1>
            <div className='manage-inventories-items-container'>
                {
                    inventories.map(inventory => <ManageInventory
                        inventory={inventory}
                    ></ManageInventory>)
                }

            </div>
            <Button onClick={addNewItem}>Add New Product</Button>
        </div>
    );
};

export default ManageInventories;