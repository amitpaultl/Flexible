import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, IconName } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../Componte/Assarts/Image/logo.png'
import './Share.css'
const Footer = () => {

    const handale =(e)=>{
        e.preventDefault()
        const res = e.target.range.value;
        console.log(res);
    }
    return (
        <div className='footer-area'>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-md-30px mb-lm-30px">
                            <div className="single-wedge">
                                <div className="footer-logo">
                                    
                                    <Link href="index.html"><img className='footer-logo' src={logo} alt=""/></Link>
                                </div>
                                <p className="about-text">Lorem ipsum dolor sit amet consectet adipisicing elit, sed do
                                    eiusmod templ incididunt ut labore et dolore magnaol aliqua Ut enim ad minim.
                                </p>
                                <ul className="link-follow">
                                    <Link>
                                    <FaTwitter/>
                                    
                                    </Link>
                                    <Link>
                                    <FaFacebookF/>
                                    
                                    </Link>
                                    <Link>
                                    <FaInstagram/>

                                    </Link>
                                    <Link>
                                    <FaLinkedin/>
                                    
                                    </Link>
                                   
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-lg-2 mb-md-30px mb-lm-30px pl-lg-50px">
                            <div className="single-wedge">
                                <h4 className="footer-herading">Quick Links</h4>
                                <div className="footer-links">
                                    <div className="footer-row">
                                        <ul className="align-items-center">
                                            <li className="li"><Link className="single-link" href="#">Helpline</Link></li>
                                            <li className="li"><Link className="single-link" href="#">Courses</Link></li>
                                            <li className="li"><Link className="single-link" href="about.html">About</Link></li>
                                            <li className="li"><Link className="single-link" href="#">Event</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 col-sm-6 mb-lm-30px pl-lg-50px">
                            <div className="single-wedge">
                                <h4 className="footer-herading">Other Page</h4>
                                <div className="footer-links">
                                    <div className="footer-row">
                                        <ul className="align-items-center">
                                            <li className="li"><Link className="single-link" href="about.html"> About </Link>
                                            </li>
                                            <li className="li"><Link className="single-link" href="blog-grid.html">Blog</Link></li>
                                            <li className="li"><Link className="single-link" href="#">Speakers</Link></li>
                                            <li className="li"><Link className="single-link" href="contact.html">Contact</Link></li>
                                            <li className="li"><Link className="single-link" href="#">Tricket</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-2 col-sm-6 mb-lm-30px pl-lg-50px">
                            <div className="single-wedge">
                                <h4 className="footer-herading">Company</h4>
                                <div className="footer-links">
                                    <div className="footer-row">
                                        <ul className="align-items-center">
                                            <li className="li"><Link className="single-link" href="index.html">Jesco</Link>
                                            </li>
                                            <li className="li"><Link className="single-link" href="shop-left-sidebar.html">Shop</Link></li>
                                            <li className="li"><Link className="single-link" href="contact.html">Contact us</Link></li>
                                            <li className="li"><Link className="single-link" href="login.html">Log in</Link></li>
                                            <li className="li"><Link className="single-link" href="#">Help</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3 col-sm-6">
                            <div className="single-wedge">

                                <h4 className="footer-herading">Store Information.</h4>
                                <div className="footer-links">
                                    <p className="address">2005 Your Address Goes Here. <br/>
                                        896, Address 10010, HGJ</p>
                                    <p className="phone">Phone/Fax:<Link href="tel:0123456789">0123456789</Link></p>
                                    <p className="phone">Email:<Link href="mailto:demo@example.com">demo@example.com</Link></p>
                                    <img src="assets/images/icons/payment.png" alt="" className="payment-img img-fulid"/>

                                      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="copy-text"> © 2023 <strong>Jesco</strong> Made With <i className="fa fa-heart" aria-hidden="true"></i> By <Link className="company-name" href="https://hasthemes.com/">
                                    <strong> HasThemes</strong></Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;