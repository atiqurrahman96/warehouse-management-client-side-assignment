import React from 'react';

const OfferProduct = ({ offerProduct }) => {
    const { image, name, supplier, price, quantity, description } = offerProduct;
    return (
        <div className='offer-product-container'>
            <div className='offer-product-img-container'>
                <img src={image} alt="" />
            </div>
            <div className='offer-product-product-detail-container'>
                <h3>Product:{name}</h3>
                <h4>Supplier:{supplier}</h4>
                <p>price:${price}</p>
                <p>Quantity:{quantity}</p>
                <p>Description:{description}</p>
            </div>
        </div>
    );
};

export default OfferProduct;