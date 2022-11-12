import React from 'react';
import Banner from '../Banner/Banner';
import Companies from '../Companies/Companies';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Companies/>
        </div>
    );
};

export default Home;