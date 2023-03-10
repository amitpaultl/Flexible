import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import '../Hero/Hero.css'
import "swiper/css";
import './Sponsor.css'
import { Autoplay } from "swiper";

import sponsor from '../../../Componte/Assarts/Image/sopnor1.png'

const Sponsor = () => {
    return (
        <div className='sponsor'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sponsor-area">
                            <Swiper
                                breakpoints={{
                                    // when window width is >= 640px
                                    640: {

                                        slidesPerView: 1,
                                    },
                                    // when window width is >= 768px
                                    768: {

                                        slidesPerView: 2,
                                    },
                                    1024: {

                                        slidesPerView: 3,
                                    },
                                    1440: {

                                        slidesPerView: 4,
                                    },
                                }}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >
                                <SwiperSlide >

                                    <div className="sponsor-single">

                                        <Link>
                                            <img src={sponsor} alt="" />

                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="sponsor-single">

                                        <Link>
                                            <img src={sponsor} alt="" />

                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="sponsor-single">

                                        <Link>
                                            <img src={sponsor} alt="" />

                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="sponsor-single">

                                        <Link>
                                            <img src={sponsor} alt="" />

                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="sponsor-single">

                                        <Link>
                                            <img src={sponsor} alt="" />

                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="sponsor-single">

                                        <Link>
                                            <img src={sponsor} alt="" />

                                        </Link>
                                    </div>



                                </SwiperSlide>


                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsor;