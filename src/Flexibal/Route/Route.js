import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddProduct from '../DashBorad/Seller/AddProduct/AddProduct';
import About from '../Page/About/About';
import AdvanceProduct from '../Page/AdvanceProduct/AdvanceProduct';
import Blog from '../Page/Bloge/Blog';
import Checkout from '../Page/Chackout/Checkout';
import Contact from '../Page/Contact/Contact';
import Error from '../Page/Error/Error';
import MainHome from '../Page/Home/MainHome/MainHome';
import AllProduct from '../Page/Product/AllProduct';
import Shop from '../Page/Shop/Shop';
import ForgetPassword from '../Page/Singin/Forgetpasswoed';
import Login from '../Page/Singin/Login';
import SingUp from '../Page/Singin/Singup';
import SingleProduct from '../Page/SingleProduct/SingleProduct';
import Root from '../Root/Root';

const Route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<MainHome></MainHome>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/shop',
                element:<Shop></Shop>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/product',
                element:<AllProduct></AllProduct>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/advanceProduct',
                element:<AdvanceProduct></AdvanceProduct>
            },
            {
                path:'/singleProduct',
                element:<SingleProduct></SingleProduct>
            },
            {
                path:'/checkout',
                element:<Checkout></Checkout>
            },
            {
                path:'/signup',
                element:<SingUp></SingUp>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/forget',
                element:<ForgetPassword></ForgetPassword>
            },
            {
                path:'/AddProduct',
                element:<AddProduct></AddProduct>
            },
        ]
    }
]);

export default Route;