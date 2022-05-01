import React, { useEffect, useState } from 'react';
import OfferProduct from '../OfferProduct/OfferProduct';

const OfferProdcuts = () => {
    const [offerProducts, setOfferProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setOfferProducts(data))
    }, [])
    return (
        <div>
            <h2>Special Offer Products </h2>
            <marquee behavior="" direction="">Following products are 50% OFF</marquee>
            <div className='offer-products-container'>
                {
                    offerProducts.slice(4, 7).map(offerProduct => <OfferProduct
                        key={offerProduct.id}
                        offerProduct={offerProduct}

                    >

                    </OfferProduct>)
                }
            </div>
        </div>
    );
};

export default OfferProdcuts;