import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthProvider } from '../Context/AuthContext';
import Footer from '../Share/Footer';
import Header from '../Share/Header';
import '../Page/Shop/Shop.css'
import { FiLogIn, } from "react-icons/fi";


const DashboardRoot = () => {
        // context
        const { user, logOut } = useContext(AuthProvider)

        // logout
        const singOut = () => {
            logOut()
                .then(() => {
                    // Sign-out successful.
                }).catch((error) => {
                    // An error happened.
                });
        }
    return (
        <div>
            <Header></Header>
            <div className="dashboard">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-2">
                            <div className="menu-dashboard">
                                <li>

                                <Link to={'/dashboard/seller'}>Add Product</Link>
                                </li>
                                <li>

                                <Link to={'/dashboard/showProduct'}>All product</Link>
                                </li>
                                <li>

                                <Link to={'/dashboard/shopProduct'}>Shop product</Link>
                                </li>

                                <li className="mt-5">
                                    <Link onClick={singOut}>Log Out <FiLogIn></FiLogIn></Link>
                                </li>

                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="product-text-dash">

                                <Outlet></Outlet>
                            </div>
                            {/* <h2>Hello</h2> */}
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardRoot;