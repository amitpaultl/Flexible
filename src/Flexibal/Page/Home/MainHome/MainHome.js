import React from 'react';
import Blog from '../Blog/Blog';
import Category from '../Category/Category';
import Discount from '../Discount/Discount';
import Hero from '../Hero/Hero';
import Product from '../Product/Product';
import Sponsor from '../sponsor/Sponsor';
import Testimonials from '../Testimonials/Testimonials';

const MainHome = () => {
    return (
        <div>
            <Hero></Hero>
            <Category></Category>
            <Product></Product>
            <Discount></Discount>
            <Testimonials></Testimonials>
            <Sponsor></Sponsor>
            <Blog></Blog>
        </div>
    );
};

export default MainHome;