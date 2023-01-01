import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle, } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import './SingUp.css'
import { AuthProvider } from '../../Context/AuthContext';
import HomeLoading from '../../Utility/Loading/HomeLoading/HomeLoading';
import { toast } from 'react-hot-toast';
import { MdVisibility,MdVisibilityOff } from "react-icons/md";

const SingUp = () => {
    // context 
    const { signInWithGoogle, emailSignUp, loading, setLoading, userProfileUpdate } = useContext(AuthProvider)

    // password Visibility
    const [Visible, setVisible] = useState(false);
    const passWordVisible =()=>{
        setVisible(current => !current);
    }

    // user manage
    const [user, setUser] = useState(true);
    const userHandle = () => {
        setUser(current => !current);
    }
    
    // loading
    if (loading) {
        return <HomeLoading></HomeLoading>
    }

    // email sign up
    const handelSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        const userInfo = {
            name, email
        }

        emailSignUp(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                userProfileUpdate(name)
                    .then(() => {
                        // Profile updated!
                        toast.success('Successfully Sign up!')
                        setLoading(false)
                    }).catch((error) => {
                        // An error occurred
                       
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                const mainMassageEmail = errorMessage.includes('email-already-in-use')
                const mainMassagepassword = errorMessage.includes('Password should be at least 6 characters')
                // error handel massage
                if(mainMassageEmail){
                    toast.error('Your email is already use')
                }
                // error handel massage
                if(mainMassagepassword){
                    toast.error('Your Password should be at least 6 characters')
                }
                setLoading(false)
                // ..
            });

    }

    //1 google signUp
    const googleHandel = () => {
        signInWithGoogle()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                setLoading(false)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setLoading(false)
            });
    }



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
                                        <Link onClick={googleHandel}><FcGoogle></FcGoogle></Link>
                                        <Link><GrFacebook></GrFacebook></Link>
                                    </div>
                                </div>
                                <Link onClick={userHandle} className='accountType'> {user ? 'Seller' : "Customer"}</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 form-section">
                            <div className="login-inner-form">
                                <div className="details">

                                    <h3>Create An Cccount <strong>{user ? "Customer" : 'Seller'}</strong> </h3>
                                    <div >
                                        
                                    </div>
                                    <form onSubmit={handelSubmit}>
                                        <div className="form-group form-box">
                                            <input required type="text" name="name" className="form-control" placeholder="Full Name" aria-label="Full Name" />
                                        </div>
                                        <div className="form-group form-box">
                                            <input required type="email" name="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                                        </div>
                                        <div className="form-group form-box visible-position">
                                            <input required  type={Visible ? 'text' : 'password'} name="password" className="form-control" autoComplete="off" placeholder="Password" aria-label="Password" />
                                            <div onClick={passWordVisible} className="visible-password">
                                                {
                                                    Visible ? <MdVisibility></MdVisibility> :
                                                    <MdVisibilityOff></MdVisibilityOff> 
                                                }
                                            </div>
                                        </div>
                                        <div className="form-group form-box checkbox ">
                                            <input required className="form-check-input" type="checkbox" value="" id="termsOfService" />
                                            <label className="form-check-label" htmlFor="termsOfService">
                                                I agree to the<a href="/" className="terms">terms of service</a>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn-md btn-theme w-100">Submit</button>
                                        </div>
                                        <p>Already a member?<Link to={'/login'}> Login here</Link></p>
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

export default SingUp;