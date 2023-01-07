import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from '../../../Componte/Assarts/Image/slider-1.png'
import slider2 from '../../../Componte/Assarts/Image/slider-2.png'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

import './Hero.css'
// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="slider-part">

            <div className="container">
                <Swiper

                    navigation={true}
                    pagination={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper"


                >
                    <div >

                        <SwiperSlide>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="hero-text">
                                        <div className="sc-jifHHV enBukJ slide-content"><h4 className="sc-gHfsNP ckkyHR">New Products</h4><h2 className="sc-dkAqVg hMBHNl">Flexible Chair</h2><p>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna</p><Link color="white" className="sc-eFuaqX cBTZnj mt-4 mt-md-5" to={'/'}>Shop Now</Link></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-area">
                                        <img src={slider1} alt="" className='sliderImg' />
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row align-items-center">

                                <div className="col-md-6">
                                    <div className="hero-text">
                                        <div className="sc-jifHHV enBukJ slide-content"><h4 className="sc-gHfsNP ckkyHR">New Products</h4><h2 className="sc-dkAqVg hMBHNl">Creative Sofa</h2><p>Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna</p><Link color="white" className="sc-eFuaqX cBTZnj mt-4 mt-md-5" to={'/'}>Shop Now</Link></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-area">
                                        <img src={slider2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </div>


                </Swiper>
            </div>
        </div>

    );
};

export default Hero;