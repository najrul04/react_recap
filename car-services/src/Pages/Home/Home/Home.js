import React from 'react';
import Banner from '../Banner/Banner';
import Companies from '../Companies/Companies';
import Games from '../Games/Games';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Games/>
            <Companies/>
        </div>
    );
};

export default Home;