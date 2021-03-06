import React from 'react';
import Banner from '../Banner/Banner';
import BabyProducts from '../Blogs/BabyProducts/BabyProducts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InventoryItems from '../InventoryItems/InventoryItems';
import OfferProdcuts from '../OfferProducts/OfferProdcuts';


const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <BabyProducts></BabyProducts>
            <OfferProdcuts></OfferProdcuts>
            <Footer></Footer>
        </div>
    );
};

export default Home;