import React from 'react';
import logo from '../Componte/Assarts/Image/logo.png'
import { FiLogIn, FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Share.css'

const Header = () => {
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
                                <div className="icon">
                                    <Link><FiLogIn></FiLogIn></Link>
                                </div>
                                <div className="icon">
                                    <Link><FiUser></FiUser></Link>
                                    
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
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>

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