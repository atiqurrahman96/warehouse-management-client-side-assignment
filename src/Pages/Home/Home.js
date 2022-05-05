import React from 'react';
import BabyProducts from '../Blogs/BabyProducts/BabyProducts';
import Header from '../Header/Header';
import InventoryItems from '../InventoryItems/InventoryItems';
import OfferProdcuts from '../OfferProducts/OfferProdcuts';


const Home = () => {
    return (
        <div id='home'>
            <InventoryItems></InventoryItems>
            <BabyProducts></BabyProducts>
            <OfferProdcuts></OfferProdcuts>
        </div>
    );
};

export default Home;