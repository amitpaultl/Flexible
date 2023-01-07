import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import '../Hero/Hero.css'
import "swiper/css";
import './Sponsor.css'
import { Autoplay } from "swiper";

import sponsor from '../../../Componte/Assarts/Image/sopnor1.png'
import sponsor2 from '../../../Componte/Assarts/Image/sponsor.png'

const Sponsor = () => {
    return (
        <div className='sponsor'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sponsor-area">
                            <Swiper
                                slidesPerView={4}
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
                                            <img src={sponsor2} alt="" />
                                           
                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="sponsor-single">

                                        <Link>
                                            <img src={sponsor2} alt="" />
                                            
                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="sponsor-single">

                                        <Link>
                                            <img src={sponsor2} alt="" />
                                            
                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="sponsor-single">

                                        <Link>
                                            <img src={sponsor2} alt="" />
                                         
                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="sponsor-single">

                                        <Link>
                                            <img src={sponsor2} alt="" />
                                           
                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="sponsor-single">

                                        <Link>
                                            <img src={sponsor2} alt="" />
                                            
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