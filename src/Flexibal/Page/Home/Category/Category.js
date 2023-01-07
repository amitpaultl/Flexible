import { Swiper, SwiperSlide } from 'swiper/react';
import './Category.css';
import '../Hero/Hero.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';
import CategoryImg1 from '../../../Componte/Assarts/Image/75.png'
import CategoryImg2 from '../../../Componte/Assarts/Image/75 (1).png'
import CategoryImg3 from '../../../Componte/Assarts/Image/75 (2).png'
import CategoryImg4 from '../../../Componte/Assarts/Image/75 (3).png'

const Category = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="category-area">
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide >

                                    <div className="single-category">

                                        <Link>
                                            <img src={CategoryImg1} alt="" />
                                            <p>Bedroom</p>
                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="single-category">

                                        <Link>
                                            <img src={CategoryImg2} alt="" />
                                            <p>Bedroom</p>
                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="single-category">

                                        <Link>
                                            <img src={CategoryImg3} alt="" />
                                            <p>Bedroom</p>
                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="single-category">

                                        <Link>
                                            <img src={CategoryImg4} alt="" />
                                            <p>Bedroom</p>
                                        </Link>
                                    </div>



                                </SwiperSlide>
                                <SwiperSlide >

                                    <div className="single-category">

                                        <Link>
                                            <img src={CategoryImg4} alt="" />
                                            <p>Bedroom</p>
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

export default Category;