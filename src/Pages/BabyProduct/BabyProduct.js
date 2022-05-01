import React from 'react';

const BabyProduct = ({ product }) => {
    const { image, name, supplier, price, quantity, description } = product;
    return (
        <div className='product-container'>
            <div className='baby-img-container'>
                <img src={image} alt="" />
            </div>
            <div className='baby-product-detail-container '>
                <h3 className='mt-2'>Product:{name}</h3>
                <h4>Supplier:{supplier}</h4>
                <p>price:${price}</p>
                <p>Quantity:{quantity}</p>
                <p>Description:{description}</p>
            </div>
        </div>
    );
};

export default BabyProduct;