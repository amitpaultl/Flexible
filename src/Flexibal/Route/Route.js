import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../Page/About/About';
import MainHome from '../Page/Home/MainHome/MainHome';
import AllProduct from '../Page/Product/AllProduct';
import ForgetPassword from '../Page/Singin/Forgetpasswoed';
import Login from '../Page/Singin/Login';
import SingUp from '../Page/Singin/Singup';
import SingleProduct from '../Page/SingleProduct/SingleProduct';
import Root from '../Root/Root';

const Route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
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
                path:'/product',
                element:<AllProduct></AllProduct>
            },
            {
                path:'/singleProduct',
                element:<SingleProduct></SingleProduct>
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
        ]
    }
]);

export default Route;