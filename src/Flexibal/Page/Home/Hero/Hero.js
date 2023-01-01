import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const Hero = () => {
    return (
        <div  className="container">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div >

                    <SwiperSlide>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="img-area">
                                    <img src="https://images.velog.io/images/ehdtn6288/post/e2e9c0e3-abb2-4bb2-b92c-b1000c865dc7/IMG_6744.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="hero-text">
                                    <h5>Bangladesh</h5>
                                    <p>Hello</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="img-area">
                                    <img src="https://images.velog.io/images/ehdtn6288/post/e2e9c0e3-abb2-4bb2-b92c-b1000c865dc7/IMG_6744.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="hero-text">
                                    <h5>Bangladesh</h5>
                                    <p>Hello</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="img-area">
                                    <img src="https://images.velog.io/images/ehdtn6288/post/e2e9c0e3-abb2-4bb2-b92c-b1000c865dc7/IMG_6744.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="hero-text">
                                    <h5>Bangladesh</h5>
                                    <p>Hello</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </div>
                

            </Swiper>
        </div>
    );
};

export default Hero;