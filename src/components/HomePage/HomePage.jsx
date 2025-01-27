import React from 'react';
import Banner from './banner/Banner';
import AboutUs from './aboutUs/AboutUs';
import Services from './services/Services';

const HomePage = () => {
    return (
        <div className='space-y-16'>
            <Banner/>
            <AboutUs/>
            <Services/>
        </div>
    );
};

export default HomePage;