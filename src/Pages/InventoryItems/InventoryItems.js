import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css'
const InventoryItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {

        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1 className='text-primary'>My Inventory:{items.length}</h1>
            <div className='items-container'>
                {
                    items.slice(0, 6).map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    >

                    </InventoryItem>)
                }



            </div>
            <Link className='text-decoration-none text-white bg-primary rounded p-1 w-100 mx-auto ' to='/manageInventories'>Manage Inventories</Link>
        </div>
    );
};

export default InventoryItems;