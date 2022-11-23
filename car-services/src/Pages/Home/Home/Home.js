import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Companies from '../Companies/Companies';
import Games from '../Games/Games';

const Home = () => {
    return (
        <>
        <PageTitle title="Home"/>
            <Banner/>
            <Games/>
            <Companies/>
        </>
    );
};

export default Home;