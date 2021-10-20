import React from 'react';
import Banner from '../Banner/Banner'
import Main from '../Main/Main';
import ServiceForHome from './ServiceForHome/ServiceForHome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Main></Main>
            <ServiceForHome></ServiceForHome>
        </div>
    );
};

export default Home;
