import React, {useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import '../Home/Hero/Hero.css'

import { FreeMode, Navigation, Thumbs } from "swiper";


const SingleProduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
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
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                    </SwiperSlide>
                                </Swiper>
                                {/* <Swiper
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper"
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
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                                    </SwiperSlide>
                                </Swiper> */}
                            
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
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
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
                                    <a href="wishlist.html"><i className="pe-7s-like"></i></a>
                                </div>
                                <div className="pro-details-compare-wishlist pro-details-compare">
                                    <a href="compare.html"><i className="pe-7s-refresh-2"></i></a>
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
                            <div className="pro-details-categories-info pro-details-same-style d-flex">
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
                                <ul className="d-flex">
                                    <li>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-google"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-youtube"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;