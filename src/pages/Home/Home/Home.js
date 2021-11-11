import React from 'react';
import Products from '../../Products/Products';
import Banner from '../Banner/Banner';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import ShowReviews from '../ShowReviews/ShowReviews';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner></Banner>
            <Products></Products>
            <ShowReviews></ShowReviews>
            <Footer />
        </div>
    );
};

export default Home;