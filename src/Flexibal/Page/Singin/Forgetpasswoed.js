import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle, } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import './SingUp.css'
import { AuthProvider } from '../../Context/AuthContext';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
import HomeLoading from '../../Utility/Loading/HomeLoading/HomeLoading';
const ForgetPassword = () => {
    const {resetPassword,loading, setLoading,} = useContext(AuthProvider)

        // loading
        if (loading) {
            return <HomeLoading></HomeLoading>
        }

    // reset password 
    const handelSubmit = (e)=>{
        e.preventDefault()
        const email = e.target.email.value
         resetPassword(email)
         .then(() => {
            // Password reset email sent!
            // ..
            setLoading(false)
            
            Swal.fire({
                title: "Success",
                text: "Please check your email",
                icon: "success",
                confirmButtonText: "OK",
              });
          })
          .catch((error) => {
            setLoading(false)
            toast.error('This email is not used')
            // ..
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
                                        <Link><FcGoogle></FcGoogle></Link>
                                        <Link><GrFacebook></GrFacebook></Link>
                                    </div>
                                </div>
                                    
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 form-section">
                            <div className="login-inner-form">
                                <div className="details">
                                    
                                    <h3>Recover Your Password</h3>
                                    <form onSubmit={handelSubmit}>
                                        
                                        <div className="form-group form-box">
                                            <input type="email" name="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                                        </div>
                                        
                                        
                                        <div className="form-group">
                                            <button type="submit" className="btn-md btn-theme w-100">Submit</button>
                                        </div>
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

export default ForgetPassword;