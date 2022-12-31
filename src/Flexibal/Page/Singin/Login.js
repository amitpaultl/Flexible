import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle, } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import './SingUp.css'
const Login = () => {
    return (
        <div>
            <div className="login-3 tab-box">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 bg-img">
                            <div className="informeson">
                                <div className="typing">
                                    <h1>Welcome To Logdy</h1>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                                <div className="social-list">
                                    <div className="buttons">
                                        <Link><FcGoogle></FcGoogle></Link>
                                        <Link><GrFacebook></GrFacebook></Link>
                                    </div>
                                </div>
                                    
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 form-section">
                            <div className="login-inner-form">
                                <div className="details">
                                    
                                    <h3>Sign Into Your Account</h3>
                                    <form action="#" method="GET">
                                        
                                        <div className="form-group form-box">
                                            <input type="email" name="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                                        </div>
                                        <div className="form-group form-box">
                                            <input type="password" name="password" className="form-control" autoComplete="off" placeholder="Password" aria-label="Password" />
                                        </div>
                                        <div className="form-group form-box checkbox ">
                                            <label className="form-check-label" htmlFor="termsOfService">
                                                <Link to={'/forget'}  className="terms">Forget Your Password</Link>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn-md btn-theme w-100">Submit</button>
                                        </div>
                                        <p>Don't have an account?<Link to={'/signup'}> Register here</Link></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;