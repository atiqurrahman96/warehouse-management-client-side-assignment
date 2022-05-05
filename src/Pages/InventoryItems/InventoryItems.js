import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import './InventoryItems.css'
const InventoryItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h1>My Inventory:{items.length}</h1>
            <div className='items-container'>
                {
                    items.slice(0, 6).map(item => <InventoryItem
                        key={item.id}
                        item={item}
                    >

                    </InventoryItem>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;