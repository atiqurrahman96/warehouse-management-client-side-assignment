import React from 'react';

const ItemDetail = ({ item }) => {
    const { description } = item;
    return (
        <div>
            <p>{description}</p>
        </div>
    );
};

export default ItemDetail;