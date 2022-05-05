import React, { useEffect, useState } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('products.json')
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
        </div>
    );
};

export default ManageInventories;