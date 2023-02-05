import React from 'react';
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './Shop.css'

const Shop = () => {
    return (
        <div>
            <div className="cart-main-area">
                <div className="container">
                    <h3 className="cart-page-title">Your cart items</h3>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <form action="#">
                                <div className="table-content table-responsive cart-table-content">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Name</th>
                                                <th>Until Price</th>
                                                <th>Qty</th>
                                                <th>Subtotal</th>
                                                <th>Action</th>
                                                <th>Pay</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <img className="img-responsive ml-15px" src="https://htmldemo.net/jesco/jesco/assets/images/product-image/1.jpg" alt="" />
                                                </td>
                                                <td className="product-name"><a href="#">Product Name</a></td>
                                                <td className="product-price-cart"><span className="amount">$60.00</span></td>
                                                <td className="product-quantity">
                                                    <div className="cart-plus-minus"><div className="dec qtybutton">-</div>
                                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="1" />
                                                        <div className="inc qtybutton">+</div></div>
                                                </td>
                                                <td className="product-subtotal">$70.00</td>
                                                <td className="product-remove">
                                                    <a href="#" className='edit'><AiTwotoneEdit></AiTwotoneEdit></a>
                                                    <a href="#" className='delete'><AiTwotoneDelete></AiTwotoneDelete></a>
                                                </td>
                                                <td className="product-subtotal">
                                                    <Link>
                                                    
                                                        <span className='payment'>Pay</span>
                                                    </Link>
                                                </td>

                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <img className="img-responsive ml-15px" src="https://htmldemo.net/jesco/jesco/assets/images/product-image/1.jpg" alt="" />
                                                </td>
                                                <td className="product-name"><a href="#">Product Name</a></td>
                                                <td className="product-price-cart"><span className="amount">$60.00</span></td>
                                                <td className="product-quantity">
                                                    <div className="cart-plus-minus"><div className="dec qtybutton">-</div>
                                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="1" />
                                                        <div className="inc qtybutton">+</div></div>
                                                </td>
                                                <td className="product-subtotal">$70.00</td>
                                                <td className="product-remove">
                                                    <a href="#" className='edit'><AiTwotoneEdit></AiTwotoneEdit></a>
                                                    <a href="#" className='delete'><AiTwotoneDelete></AiTwotoneDelete></a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-thumbnail">
                                                    <img className="img-responsive ml-15px" src="https://htmldemo.net/jesco/jesco/assets/images/product-image/1.jpg" alt="" />
                                                </td>
                                                <td className="product-name"><a href="#">Product Name</a></td>
                                                <td className="product-price-cart"><span className="amount">$60.00</span></td>
                                                <td className="product-quantity">
                                                    <div className="cart-plus-minus"><div className="dec qtybutton">-</div>
                                                        <input className="cart-plus-minus-box" type="text" name="qtybutton" defaultValue="1" />
                                                        <div className="inc qtybutton">+</div></div>
                                                </td>
                                                <td className="product-subtotal">$70.00</td>
                                                <td className="product-remove">
                                                    <a href="#" className='edit'><AiTwotoneEdit></AiTwotoneEdit></a>
                                                    <a href="#" className='delete'><AiTwotoneDelete></AiTwotoneDelete></a>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </form>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-lm-30px">
                                    <div className="title-wrap1">

                                        <Link>Update Shopping Cart</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-lm-30px">
                                    <div className="title-wrap1">

                                        <Link className='clear-card'>Clear Shopping Cart</Link>

                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="col-lg-6 col-md-6 mb-lm-30px">


                                    <div className="discount-code-wrapper">
                                        <div className="title-wrap">
                                            <h4 className="cart-bottom-title section-bg-gray">Use Coupon Code</h4>
                                        </div>
                                        <div className="discount-code">
                                            <p>Enter your coupon code if you have one.</p>
                                            <form>
                                                <input type="text" required="" name="name" />
                                                <button className="cart-btn-2" type="submit">Apply Coupon</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 mt-md-30px">

                                    <div className="grand-totall">
                                        <div className="title-wrap">

                                            <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                                        </div>
                                        <h5>Total products <span>$260.00</span></h5>
                                        <div className="total-shipping">
                                            <h5>Total shipping</h5>
                                            <ul>
                                                <li><input type="checkbox" /> Standard <span>$20.00</span></li>
                                                <li><input type="checkbox" /> Express <span>$30.00</span></li>
                                            </ul>
                                        </div>
                                        <h4 className="grand-totall-title">Grand Total <span>$260.00</span></h4>
                                        <a href="checkout.html">Proceed to Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
