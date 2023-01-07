import React from 'react';
import women from '../../../Componte/Assarts/Image/woman.webp'
import './Discount.css'
const Discount = () => {
    return (
        <div className='deal-margin'>
            <div className="container ">
                    <div className="deal-bg">
                        
                        <div className="row  align-items-center">
                            <div className="col-md-6">
                                <div className="deal-inner  text-center"  >
                                    <div className="deal-wrapper">
                                        <span className="category">Discount Product SHOP</span>
                                        <h3 className="title">Deal Of The Day</h3>
                                        <div className="deal-timing">
                                            <div data-countdown="2023/12/31" className='count-down'><span className="cdown day"><span className="cdown-1">360</span><p>Days</p></span> <span className="cdown hour"><span className="cdown-1">12</span><p>Hours</p></span> <span className="cdown minutes"><span className="cdown-1">14</span> <p>Mins</p></span> <span className="cdown second"><span className="cdown-1"> 10</span> <p>Sec</p></span></div>
                                        </div>
                                        <a href="single-product-variable.html" className=" btn-hover-dark m-auto"> Shop
                                            Now <i className="fa fa-shopping-basket ml-15px" aria-hidden="true"></i></a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="deal-image">
                                    <img className="img-fluid" src={women} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Discount;