import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from '../../../Componte/SectionTitle/SectionTitle';
import './Testimonials.css'
import '../Hero/Hero.css'
import "swiper/css";
import "swiper/css/navigation";
import { AiFillStar } from "react-icons/ai";
// import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { Navigation } from "swiper";
const Testimonials = () => {
    return (
        <div>
            <div className="container">
                <SectionTitle title={"Testimonials"} ditties={"Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore"}></SectionTitle>
                <div className="row">
                    <div className="col-md-12">
                        <div className="testimonials">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                navigation={true}
                                modules={[Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="testi-inner">
                                        <div className="reating-wrap">
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            
                                        </div>
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-img">
                                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Daisy Morgan</h4>
                                                <span className="title">Happy Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testi-inner">
                                        <div className="reating-wrap">
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            
                                        </div>
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-img">
                                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Daisy Morgan</h4>
                                                <span className="title">Happy Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testi-inner">
                                        <div className="reating-wrap">
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            
                                        </div>
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-img">
                                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Daisy Morgan</h4>
                                                <span className="title">Happy Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testi-inner">
                                        <div className="reating-wrap">
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            
                                        </div>
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-img">
                                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Daisy Morgan</h4>
                                                <span className="title">Happy Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testi-inner">
                                        <div className="reating-wrap">
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            
                                        </div>
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-img">
                                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Daisy Morgan</h4>
                                                <span className="title">Happy Customer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testi-inner">
                                        <div className="reating-wrap">
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            <AiFillStar/>
                                            
                                        </div>
                                        <div className="testi-content">
                                            <p>Lorem ipsum dolor sit amet, consect adipisici elit, sed do eiusmod tempol incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniamfhq nostrud exercitation.
                                            </p>
                                        </div>
                                        <div className="testi-author">
                                            <div className="author-img">
                                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="name">Daisy Morgan</h4>
                                                <span className="title">Happy Customer</span>
                                            </div>
                                        </div>
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

export default Testimonials;