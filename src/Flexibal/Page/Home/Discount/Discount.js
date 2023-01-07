import React from 'react';
import women from '../../../Componte/Assarts/Image/woman.webp'
import './Discount.css'
const Discount = () => {
    return (
        <div className='deal-margin'>
            <div class="container ">
                    <div className="deal-bg">
                        
                        <div class="row  align-items-center">
                            <div class="col-md-6">
                                <div class="deal-inner  text-center"  >
                                    <div class="deal-wrapper">
                                        <span class="category">Discount Product SHOP</span>
                                        <h3 class="title">Deal Of The Day</h3>
                                        <div class="deal-timing">
                                            <div data-countdown="2023/12/31" className='count-down'><span class="cdown day"><span class="cdown-1">360</span><p>Days</p></span> <span class="cdown hour"><span class="cdown-1">12</span><p>Hours</p></span> <span class="cdown minutes"><span class="cdown-1">14</span> <p>Mins</p></span> <span class="cdown second"><span class="cdown-1"> 10</span> <p>Sec</p></span></div>
                                        </div>
                                        <a href="single-product-variable.html" class=" btn-hover-dark m-auto"> Shop
                                            Now <i class="fa fa-shopping-basket ml-15px" aria-hidden="true"></i></a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="deal-image">
                                    <img class="img-fluid" src={women} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Discount;