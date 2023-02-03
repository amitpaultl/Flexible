import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiTwotoneStar } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, IconName } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import '../Home/Hero/Hero.css'
import './SingleProduct.css'

import { FreeMode, Navigation, Thumbs } from "swiper";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import SectionTitle from "../../Componte/SectionTitle/SectionTitle";
import ReletatProduct from "../../Componte/ReletatProduct/ReletatProduct";





const SingleProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="single-product">
            <div className="container">
                <div className="row">

                    <div className="col-lg-5">
                        <div className="product-slider">

                                <Swiper
                                    style={{
                                        "--swiper-navigation-color": "#fff",
                                        "--swiper-pagination-color": "#fff",
                                    }}
                                    loop={true}
                                    spaceBetween={10}
                                    navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                                    </SwiperSlide>
                                    
                                    
                                </Swiper>
                                

                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="product-details-content quickview-content">
                            <h2>Ardene Microfiber Tights</h2>
                            <div className="pricing-meta">
                                <ul>
                                    <li className="old-price not-cut">$18.90</li>
                                </ul>
                            </div>
                            <div className="pro-details-rating-wrap">
                                <div className="rating-product">
                                    <AiTwotoneStar></AiTwotoneStar>
                                    <AiTwotoneStar></AiTwotoneStar>
                                    <AiTwotoneStar></AiTwotoneStar>
                                    <AiTwotoneStar></AiTwotoneStar>
                                </div>
                                <span className="read-review"><a className="reviews" href="#">( 5 Customer Review )</a></span>
                            </div>
                            <p className="mt-30px mb-0">Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod tempor incidi ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi
                                ut aliquip ex ea commodo </p>
                            <div className="pro-details-quality">
                                <div className="cart-plus-minus"><div className="dec qtybutton">-</div>
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="1" />
                                    <div className="inc qtybutton">+</div></div>
                                <div className="pro-details-cart">
                                    <button className="add-cart" href="#"> Add To
                                        Cart</button>
                                </div>
                                <div className="pro-details-compare-wishlist pro-details-wishlist ">
                                    <a href="wishlist.html"><CiHeart></CiHeart></a>
                                </div>

                            </div>
                            <div className="pro-details-sku-info pro-details-same-style  d-flex">
                                <span>SKU: </span>
                                <ul className="d-flex">
                                    <li>
                                        <a href="#">Ch-256xl</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="pro-details-sku-info pro-details-same-style d-flex">
                                <span>Categories: </span>
                                <ul className="d-flex">
                                    <li>
                                        <a href="#">Fashion.</a>
                                    </li>
                                    <li>
                                        <a href="#">eCommerce</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="pro-details-social-info pro-details-same-style d-flex">
                                <span>Share: </span>
                                <ul className="link-follow">
                                    <Link>
                                        <FaTwitter />

                                    </Link>
                                    <Link>
                                        <FaFacebookF />

                                    </Link>
                                    <Link>
                                        <FaInstagram />

                                    </Link>
                                    <Link>
                                        <FaLinkedin />

                                    </Link>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="review-comment">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="review">
                                <Tabs
                                    defaultActiveKey="profile"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="Information" title="Information">
                                        <div className="product-anotherinfo-wrapper text-start">
                                            <ul>
                                                <li><span>Weight</span> 400 g</li>
                                                <li><span>Dimensions</span>10 x 10 x 15 cm</li>
                                                <li><span>Materials</span> 60% cotton, 40% polyester</li>
                                                <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
                                            </ul>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Description" title="Description">
                                        <p className="text-profile">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repudiandae aliquam doloremque ipsam at ipsum numquam? Voluptates illum magnam modi soluta blanditiis id quasi natus. Ex autem nobis soluta, amet maiores explicabo odio, quod accusantium dolore aliquam labore inventore a veritatis, similique quae earum? In voluptatibus eius perspiciatis distinctio enim?</p>
                                    </Tab>
                                    <Tab eventKey="Reviews (02)" title="Reviews (02)" >
                                        <div className="tab-content description-review-bottom">
                                            <div id="des-details2" className="tab-pane" role="tabpanel">
                                                <div className="product-anotherinfo-wrapper text-start">
                                                    <ul>
                                                        <li><span>Weight</span> 400 g</li>
                                                        <li><span>Dimensions</span>10 x 10 x 15 cm</li>
                                                        <li><span>Materials</span> 60% cotton, 40% polyester</li>
                                                        <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div id="des-details1" className="tab-pane" role="tabpanel">
                                                <div className="product-description-wrapper">
                                                    <p>

                                                        Lorem ipsum dolor sit amet, consectetur adipisi elit, incididunt ut labore et. Ut enim
                                                        ad minim veniam, quis nostrud exercita ullamco laboris nisi ut aliquip ex ea commol
                                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                                        qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                                                        natus error sit voluptatem accusantiulo doloremque laudantium, totam rem aperiam, eaque
                                                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                                        explicabo. Nemo enim ipsam voluptat quia voluptas sit aspernatur aut odit aut fugit, sed
                                                        quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                                        quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                                                        quia non numquam eius modi tempora incidunt ut labore

                                                    </p>
                                                </div>
                                            </div>
                                            <div id="des-details3" className="tab-pane active show" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-lg-7">
                                                        <div className="review-wrapper">
                                                            <div className="single-review">
                                                                <div className="review-img">
                                                                    <img src="https://htmldemo.net/jesco/jesco/assets/images/review-image/1.png" alt="" />
                                                                </div>
                                                                <div className="review-content">
                                                                    <div className="review-top-wrap">
                                                                        <div className="review-left">
                                                                            <div className="review-name">
                                                                                <h4>White Lewis</h4>
                                                                            </div>
                                                                            <div className="rating-product">
                                                                                <AiTwotoneStar></AiTwotoneStar>
                                                                                <AiTwotoneStar></AiTwotoneStar>
                                                                                <AiTwotoneStar></AiTwotoneStar>
                                                                                <AiTwotoneStar></AiTwotoneStar>
                                                                            </div>
                                                                        </div>
                                                                        <div className="review-left">
                                                                            <a href="#">Reply</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="review-bottom">
                                                                        <p>
                                                                            Vestibulum ante ipsum primis aucibus orci luctustrices posuere
                                                                            cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper
                                                                            euismod vehicula. Phasellus quam nisi, congue id nulla.
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-review child-review">
                                                                <div className="review-img">
                                                                    <img src="https://htmldemo.net/jesco/jesco/assets/images/review-image/1.png" alt="" />
                                                                </div>
                                                                <div className="review-content">
                                                                    <div className="review-top-wrap">
                                                                        <div className="review-left">
                                                                            <div className="review-name">
                                                                                <h4>White Lewis</h4>
                                                                            </div>
                                                                            <div className="rating-product">
                                                                                <AiTwotoneStar></AiTwotoneStar>
                                                                                <AiTwotoneStar></AiTwotoneStar>
                                                                                <AiTwotoneStar></AiTwotoneStar>
                                                                                <AiTwotoneStar></AiTwotoneStar>
                                                                            </div>
                                                                        </div>
                                                                        <div className="review-left">
                                                                            <a href="#">Reply</a>
                                                                        </div>
                                                                    </div>
                                                                    <div className="review-bottom">
                                                                        <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere
                                                                            cubilia Curae Sus pen disse viverra ed viverra. Mauris ullarper
                                                                            euismod vehicula.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-5">
                                                        <div className="ratting-form-wrapper pl-50">
                                                            <h3>Add a Review</h3>
                                                            <div className="ratting-form">
                                                                <form action="#">
                                                                    <div className="star-box">
                                                                        <span>Your rating:</span>
                                                                        <div className="rating-input">
                                                                            <AiTwotoneStar></AiTwotoneStar>
                                                                            <AiTwotoneStar></AiTwotoneStar>
                                                                            <AiTwotoneStar></AiTwotoneStar>
                                                                            <AiTwotoneStar></AiTwotoneStar>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-md-6">
                                                                            <div className="rating-form-style">
                                                                                <input placeholder="Name" type="text" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="rating-form-style">
                                                                                <input placeholder="Email" type="email" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-12">
                                                                            <div className="rating-form-style form-submit">
                                                                                <textarea name="Your Review" placeholder="Message"></textarea>
                                                                                <button className="btn btn-primary btn-hover-color-primary " type="submit" value="Submit">Submit</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="related-product">
                <div className="container">
                    <SectionTitle title={'Related Products'} ></SectionTitle>
                    <div className="row">
                        <ReletatProduct></ReletatProduct>
                    </div>
                </div>
            </div>
        </div>
       
    );
};

export default SingleProduct;