import React from 'react';
import './Contact.css'
import web1 from './../../Componte/Assarts/Image/4.webp'
import web2 from './../../Componte/Assarts/Image/5.webp'
import web3 from './../../Componte/Assarts/Image/6.webp'
const Contact = () => {
    return (
        <div>
            <div className="contact-area">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="contact-info">
                                    <div className="single-contact">
                                        <div className="icon-box">
                                            <img src={web1} alt="" />
                                        </div>
                                        <div className="info-box">
                                            <h5 className="title">Phone:</h5>
                                            <p>012 345 67 89</p>
                                        </div>
                                    </div>
                                    <div className="single-contact">
                                        <div className="icon-box">
                                            <img src={web2} alt="" />
                                        </div>
                                        <div className="info-box">
                                            <h5 className="title">Email:</h5>
                                            <p>demo@example.com</p>
                                        </div>
                                    </div>
                                    <div className="single-contact">
                                        <div className="icon-box">
                                            <img src={web3} alt="" />
                                        </div>
                                        <div className="info-box">
                                            <h5 className="title">Address:</h5>
                                            <p>Your address goes here</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="contact-form">
                                    <div className="contact-title mb-30">
                                        <h2 className="title" data-aos="fade-up" data-aos-delay="200">Leave a Message</h2>
                                        <p>There are many variations of passages of Lorem Ipsum available but the
                                            suffered alteration in some form.</p>
                                    </div>
                                    <form className="contact-form-style" id="contact-form" action="https://htmlmail.hasthemes.com/nazmul/jesco/mail.php" method="post">
                                        <div className="row">
                                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                                <input name="name" placeholder="Name*" type="text" />
                                            </div>
                                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                                <input name="email" placeholder="Email*" type="email" />
                                            </div>
                                            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                                                <textarea name="message" placeholder="Your Message*"></textarea>
                                                <button className="btn-btn-primary" data-aos="fade-up" data-aos-delay="200" type="submit">Post Comment <i className="fa fa-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* map area */}
            <div className="contact-map">
                <div id="mapid">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                        

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d262561.2162787065!2d89.17904192621225!3d22.88510636773606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff73d602120427%3A0x4ebc0662266c0c9a!2sPanjia%20Secondary%20School!5e0!3m2!1sen!2sbd!4v1673711106314!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                            <a href="https://sites.google.com/view/maps-api-v2/mapv2"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;