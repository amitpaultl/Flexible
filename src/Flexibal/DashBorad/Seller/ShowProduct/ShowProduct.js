import React from 'react';
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai";
import '../../../Page/Shop/Shop.css'
const ShowProduct = () => {
    return (
        <div className='cart-main-area'>
            <form action="#">
                <div className="table-content table-responsive cart-table-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Payment</th>
                                <th>Publish</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="product-thumbnail">
                                    <img className="img-responsive ml-15px" src="https://htmldemo.net/jesco/jesco/assets/images/product-image/1.jpg" alt="" />
                                </td>
                                <td className="product-name"><a href="#">Product Name</a></td>
                                <td className="product-price-cart"><span className='No-sell'>No Sell</span></td>
                                <td className="product-quantity">
                                    <span className='publish-btu'>Publish</span>
                                </td>
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
                                <td className="product-remove">
                                    <a href="#" className='edit'><AiTwotoneEdit></AiTwotoneEdit></a>
                                    <a href="#" className='delete'><AiTwotoneDelete></AiTwotoneDelete></a>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>

            </form>
        </div>
    );
};

export default ShowProduct;