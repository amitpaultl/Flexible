import React from 'react';
import { Link } from 'react-router-dom';
import './AddProduct.css'

const AddProduct = () => {
    return (
        <div>
            <div className="checkout-area ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="billing-info-wrap">
                                <h3>Product Details</h3>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-4">
                                            <label>Product Name</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-4">
                                            <label>Weight</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-4">
                                            <label>Company Name</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-4">
                                            <label>Dimensions</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-select mb-4">
                                            <label>Materials</label>
                                            <select>
                                                <option>Select Materials</option>
                                                <option>S</option>
                                                <option>Z</option>
                                                <option>Y</option>
                                                <option>L</option>
                                                <option>AX</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-select mb-4">
                                            <label>Size</label>
                                            <select>
                                                <option>Select a Size</option>
                                                <option>S</option>
                                                <option>Z</option>
                                                <option>Y</option>
                                                <option>L</option>
                                                <option>AX</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-4">
                                            <label>New Price</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-4">
                                            <label>Old Price</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-info mb-4">
                                            <label>Discount</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6">
                                        <div className="billing-select mb-4">
                                            <label>Categories</label>
                                            <select>
                                                <option>Select a Categories</option>
                                                <option>BadRoom</option>
                                                <option>Living</option>
                                                <option>Dining</option>
                                                <option>Lounge</option>
                                                <option>Office Chair</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-4">
                                            <label>Description</label>
                                            <textarea name="" className=' w-100' id="" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>
                                    
                                </div>

                                
                            </div>
                        </div>
                        <div className="col-lg-5 mt-md-30px mt-lm-30px ">
                            <div className="your-order-area">
                                <h3>Product image </h3>
                                <div className="your-order-wrap gray-bg-4 d-flex">
                                    <div className="your-order-product-info">
                                        <input type="file" />
                                    </div>
                                    <div className="product-add-img">
                                        <h4>ADD</h4>
                                    </div>

                                </div>
                                <div className="Place-order mt-25">
                                    <Link className="btn-hover">Submit Product</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;