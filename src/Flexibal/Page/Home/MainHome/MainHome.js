import React from 'react';
import Category from '../Category/Category';
import Discount from '../Discount/Discount';
import Hero from '../Hero/Hero';
import Product from '../Product/Product';
import Testimonials from '../Testimonials/Testimonials';

const MainHome = () => {
    return (
        <div>
            <Hero></Hero>
            <Category></Category>
            <Product></Product>
            <Discount></Discount>
            <Testimonials></Testimonials>
        </div>
    );
};

export default MainHome;