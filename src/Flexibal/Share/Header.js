import React, { useContext } from 'react';
import logo from '../Componte/Assarts/Image/logo.png'
import { FiLogIn, FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Share.css'
import { AuthProvider } from '../Context/AuthContext';

const Header = () => {
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

            <div className="menu-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="logo">
                                <Link to={'/'}>
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="menu-icon">
                                {
                                    user?.email ? <div className="icon">
                                        {
                                            user?.photoURL ? <img className='user-image' src={user.photoURL} alt="" /> : <Link><FiUser></FiUser></Link>
                                        }


                                    </div> : <div className="icon">
                                        <Link><FiLogIn></FiLogIn></Link>
                                    </div>
                                }

                                <div className="icon">
                                    <Link onClick={singOut}><FiLogIn></FiLogIn></Link>
                                </div>
                                <div className="icon">
                                    <Link><FiShoppingCart></FiShoppingCart></Link>
                                </div>
                                <div className="icon">
                                    <Link><FiSearch></FiSearch></Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="menu-area">

                <div className="container">
                    <Navbar expand="lg">
                        <Container className='justify-content-center'>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />

                            <Navbar.Collapse className='center' id="basic-navbar-nav">

                                <Nav className="m-auto text-center menu-color">
                                    <NavLink to={'/'}>Home</NavLink>
                                    <NavLink to={'/about'}>About</NavLink>
                                    <NavLink to={'/product'}>Product</NavLink>
                                    <NavLink to={'/singleProduct'}>Single Product</NavLink>
                                    <NavLink to={'/advanceProduct'}>Advance Product</NavLink>
                                    <NavLink to={'/shop'}>Shop</NavLink>
                                    <NavLink to={'/checkout'}>Checkout</NavLink>
                                    <NavLink to={'/contact'}>Contact</NavLink>
                                    <NavLink to={'/blog'}>Blog</NavLink>
                                    <NavLink to={'/AddProduct'}>AddProduct</NavLink>

                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>

        </div>
    );
};

export default Header;