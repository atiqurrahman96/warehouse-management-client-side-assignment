import React, { useEffect, useState } from 'react';
import BabyProduct from '../../BabyProduct/BabyProduct';

const BabyProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='mt-2'>
            <h1>Baby Collection</h1>
            <div className='products-container'>
                {
                    products.slice(6, 9).map(product => <BabyProduct
                        key={product.id}
                        product={product}
                    >

                    </BabyProduct>)
                }
            </div>
        </div>
    );
};

export default BabyProducts;