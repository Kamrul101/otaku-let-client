import React from 'react';
import Banner from './Banner/Banner';
import Gallery from '../Pages/Shared/Gallery/Gallery';
import ShopByCategory from '../Pages/Shared/ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;