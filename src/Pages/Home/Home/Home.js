import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ChooseUs from '../ChooseUs/ChooseUs';
import Contact from '../Contact/Contact';
import Customer from '../Customers/Customer';
import PopularProducts from '../PopularProducts/PopularProducts';
import Services from '../Services/Services';
import Teams from '../Teams/Teams';

const Home = () => {
    return (
        <div className='my-4'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contact></Contact>
            <PopularProducts></PopularProducts>
            <Teams></Teams>
            <ChooseUs></ChooseUs>
            <Customer></Customer>
        </div>
    );
};

export default Home;