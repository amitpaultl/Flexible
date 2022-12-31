import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainHome from '../Page/Home/MainHome/MainHome';
import ForgetPassword from '../Page/Singin/Forgetpasswoed';
import Login from '../Page/Singin/Login';
import SingUp from '../Page/Singin/Singup';
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