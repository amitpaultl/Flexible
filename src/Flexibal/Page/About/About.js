import React from 'react';
import image from '../../Componte/Assarts/Product/AboutMe.png'
import './About.css'
import srtore from '../../Componte/Assarts/Image/75 (8).jfif'
import srtore2 from '../../Componte/Assarts/Image/75.jfif'
import SectionTitle from '../../Componte/SectionTitle/SectionTitle';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, IconName } from "react-icons/fa";
import image2 from '../../Componte/Assarts/Image/1.webp'

import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="about-me">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="about-me-text">
                                <h3>ABOUT US</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius modjior tem incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamyl quinol exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisau irure dolor in reprehenderit in voluptate velit esse cillum dolore euhti fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-me-img">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="store-house">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="store-img">
                                <img src={srtore} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="store-img">
                                <img src={srtore2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="store-text">
                                <h2>OUR STORES</h2>
                                <p>conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="store-text">
                                <h2>OUR MISSION</h2>
                                <p>conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="our-team">
                <div className="container">
                    <SectionTitle title={'Our Team'}></SectionTitle>
                    <div className="row">
                        <div class="col-md-3">
                      
                            <div class="team-wrapper">
                                <div class="team-image overflow-hidden">
                                    <img src={image2} alt=""/>
                                </div>
                                <div class="team-content">
                                    <h6 class="title">Craig Chaney</h6>
                                    <span class="sub-title">Our Team</span>
                                </div>
                                <ul class="team-social d-flex">
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
                        <div class="col-md-3">
                      
                            <div class="team-wrapper">
                                <div class="team-image overflow-hidden">
                                    <img src={image2} alt=""/>
                                </div>
                                <div class="team-content">
                                    <h6 class="title">Craig Chaney</h6>
                                    <span class="sub-title">Our Team</span>
                                </div>
                                <ul class="team-social d-flex">
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
                        <div class="col-md-3">
                      
                            <div class="team-wrapper">
                                <div class="team-image overflow-hidden">
                                    <img src={image2} alt=""/>
                                </div>
                                <div class="team-content">
                                    <h6 class="title">Craig Chaney</h6>
                                    <span class="sub-title">Our Team</span>
                                </div>
                                <ul class="team-social d-flex">
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
                        <div class="col-md-3">
                      
                            <div class="team-wrapper">
                                <div class="team-image overflow-hidden">
                                    <img src={image2} alt=""/>
                                </div>
                                <div class="team-content">
                                    <h6 class="title">Craig Chaney</h6>
                                    <span class="sub-title">Our Team</span>
                                </div>
                                <ul class="team-social d-flex">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;