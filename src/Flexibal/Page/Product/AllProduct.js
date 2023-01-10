import React from 'react';
import { CiHeart } from "react-icons/ci";
import { MdOutlineViewInAr, MdCropRotate } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";
import product1 from '../../Componte/Assarts/Product/75 (1).jfif'
import product2 from '../../Componte/Assarts/Product/75 (2).jfif'
import product3 from '../../Componte/Assarts/Product/75 (3).jfif'
import product4 from '../../Componte/Assarts/Product/75 (4).jfif'
import product5 from '../../Componte/Assarts/Product/75 (5).jfif'
import product6 from '../../Componte/Assarts/Product/75 (6).jfif'
import product7 from '../../Componte/Assarts/Product/75.jfif'
import product8 from '../../Componte/Assarts/Product/751.jfif'
import SectionTitle from '../../Componte/SectionTitle/SectionTitle';
import '../Home/Product/Product.css'
const AllProduct = () => {
    return (
        <div>
            <div className="container">
                <SectionTitle title={'Our Products'} ></SectionTitle>

                <div className="row">
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

                        <div className="product">
                            <div className="thumb">
                                <a href="single-product.html" className="image">
                                    <img src={product1} alt="Product" />
                                    <img className="hover-image" src={product2} alt="Product" />
                                </a>
                                <span className="badges">
                                    <span className="sale">-10%</span>
                                    <span className="new">New</span>
                                </span>
                                <div className="actions">
                                    <a href="wishlist.html" className="action wishlist" title="Wishlist"><CiHeart></CiHeart></a>

                                    <a href="compare.html" className="action compare" title="Compare"><MdOutlineViewInAr></MdOutlineViewInAr></a>
                                    <a href="compare.html" className="action compare" title="Compare"><MdCropRotate></MdCropRotate></a>
                                </div>
                                <button title="Add To Cart" className=" add-to-cart">Add
                                    To Cart</button>
                            </div>
                            <div className="content">
                                <span className="ratings">
                                    <span className="rating-wrap">
                                        <span className="star" >
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                        </span>
                                    </span>
                                    <span className="rating-num">( 4 Review )</span>
                                </span>
                                <h5 className="title"><a href="single-product.html">Ardene Microfiber
                                    Tights</a>
                                </h5>
                                <span className="price">
                                    <span className="new">$38.50</span>
                                    <span className="old">$48.50</span>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

                        <div className="product">
                            <div className="thumb">
                                <a href="single-product.html" className="image">
                                    <img src={product3} alt="Product" />
                                    <img className="hover-image" src={product4} alt="Product" />
                                </a>
                                <span className="badges">
                                    <span className="sale">-10%</span>
                                    <span className="new">New</span>
                                </span>
                                <div className="actions">
                                    <a href="wishlist.html" className="action wishlist" title="Wishlist"><CiHeart></CiHeart></a>

                                    <a href="compare.html" className="action compare" title="Compare"><MdOutlineViewInAr></MdOutlineViewInAr></a>
                                    <a href="compare.html" className="action compare" title="Compare"><MdCropRotate></MdCropRotate></a>
                                </div>
                                <button title="Add To Cart" className=" add-to-cart">Add
                                    To Cart</button>
                            </div>
                            <div className="content">
                                <span className="ratings">
                                    <span className="rating-wrap">
                                        <span className="star" >
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                        </span>
                                    </span>
                                    <span className="rating-num">( 4 Review )</span>
                                </span>
                                <h5 className="title"><a href="single-product.html">Ardene Microfiber
                                    Tights</a>
                                </h5>
                                <span className="price">
                                    <span className="new">$38.50</span>
                                    <span className="old">$48.50</span>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

                        <div className="product">
                            <div className="thumb">
                                <a href="single-product.html" className="image">
                                    <img src={product5} alt="Product" />
                                    <img className="hover-image" src={product6} alt="Product" />
                                </a>
                                <span className="badges">
                                    <span className="sale">-10%</span>
                                    <span className="new">New</span>
                                </span>
                                <div className="actions">
                                    <a href="wishlist.html" className="action wishlist" title="Wishlist"><CiHeart></CiHeart></a>

                                    <a href="compare.html" className="action compare" title="Compare"><MdOutlineViewInAr></MdOutlineViewInAr></a>
                                    <a href="compare.html" className="action compare" title="Compare"><MdCropRotate></MdCropRotate></a>
                                </div>
                                <button title="Add To Cart" className=" add-to-cart">Add
                                    To Cart</button>
                            </div>
                            <div className="content">
                                <span className="ratings">
                                    <span className="rating-wrap">
                                        <span className="star" >
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                        </span>
                                    </span>
                                    <span className="rating-num">( 4 Review )</span>
                                </span>
                                <h5 className="title"><a href="single-product.html">Ardene Microfiber
                                    Tights</a>
                                </h5>
                                <span className="price">
                                    <span className="new">$38.50</span>
                                    <span className="old">$48.50</span>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

                        <div className="product">
                            <div className="thumb">
                                <a href="single-product.html" className="image">
                                    <img src={product7} alt="Product" />
                                    <img className="hover-image" src={product8} alt="Product" />
                                </a>
                                <span className="badges">
                                    <span className="sale">-10%</span>
                                    <span className="new">New</span>
                                </span>
                                <div className="actions">
                                    <a href="wishlist.html" className="action wishlist" title="Wishlist"><CiHeart></CiHeart></a>

                                    <a href="compare.html" className="action compare" title="Compare"><MdOutlineViewInAr></MdOutlineViewInAr></a>
                                    <a href="compare.html" className="action compare" title="Compare"><MdCropRotate></MdCropRotate></a>
                                </div>
                                <button title="Add To Cart" className=" add-to-cart">Add
                                    To Cart</button>
                            </div>
                            <div className="content">
                                <span className="ratings">
                                    <span className="rating-wrap">
                                        <span className="star" >
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                        </span>
                                    </span>
                                    <span className="rating-num">( 4 Review )</span>
                                </span>
                                <h5 className="title"><a href="single-product.html">Ardene Microfiber
                                    Tights</a>
                                </h5>
                                <span className="price">
                                    <span className="new">$38.50</span>
                                    <span className="old">$48.50</span>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

                        <div className="product">
                            <div className="thumb">
                                <a href="single-product.html" className="image">
                                    <img src={product1} alt="Product" />
                                    <img className="hover-image" src={product2} alt="Product" />
                                </a>
                                <span className="badges">
                                    <span className="sale">-10%</span>
                                    <span className="new">New</span>
                                </span>
                                <div className="actions">
                                    <a href="wishlist.html" className="action wishlist" title="Wishlist"><CiHeart></CiHeart></a>

                                    <a href="compare.html" className="action compare" title="Compare"><MdOutlineViewInAr></MdOutlineViewInAr></a>
                                    <a href="compare.html" className="action compare" title="Compare"><MdCropRotate></MdCropRotate></a>
                                </div>
                                <button title="Add To Cart" className=" add-to-cart">Add
                                    To Cart</button>
                            </div>
                            <div className="content">
                                <span className="ratings">
                                    <span className="rating-wrap">
                                        <span className="star" >
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                        </span>
                                    </span>
                                    <span className="rating-num">( 4 Review )</span>
                                </span>
                                <h5 className="title"><a href="single-product.html">Ardene Microfiber
                                    Tights</a>
                                </h5>
                                <span className="price">
                                    <span className="new">$38.50</span>
                                    <span className="old">$48.50</span>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

                        <div className="product">
                            <div className="thumb">
                                <a href="single-product.html" className="image">
                                    <img src={product3} alt="Product" />
                                    <img className="hover-image" src={product4} alt="Product" />
                                </a>
                                <span className="badges">
                                    <span className="sale">-10%</span>
                                    <span className="new">New</span>
                                </span>
                                <div className="actions">
                                    <a href="wishlist.html" className="action wishlist" title="Wishlist"><CiHeart></CiHeart></a>

                                    <a href="compare.html" className="action compare" title="Compare"><MdOutlineViewInAr></MdOutlineViewInAr></a>
                                    <a href="compare.html" className="action compare" title="Compare"><MdCropRotate></MdCropRotate></a>
                                </div>
                                <button title="Add To Cart" className=" add-to-cart">Add
                                    To Cart</button>
                            </div>
                            <div className="content">
                                <span className="ratings">
                                    <span className="rating-wrap">
                                        <span className="star" >
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                        </span>
                                    </span>
                                    <span className="rating-num">( 4 Review )</span>
                                </span>
                                <h5 className="title"><a href="single-product.html">Ardene Microfiber
                                    Tights</a>
                                </h5>
                                <span className="price">
                                    <span className="new">$38.50</span>
                                    <span className="old">$48.50</span>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

                        <div className="product">
                            <div className="thumb">
                                <a href="single-product.html" className="image">
                                    <img src={product5} alt="Product" />
                                    <img className="hover-image" src={product6} alt="Product" />
                                </a>
                                <span className="badges">
                                    <span className="sale">-10%</span>
                                    <span className="new">New</span>
                                </span>
                                <div className="actions">
                                    <a href="wishlist.html" className="action wishlist" title="Wishlist"><CiHeart></CiHeart></a>

                                    <a href="compare.html" className="action compare" title="Compare"><MdOutlineViewInAr></MdOutlineViewInAr></a>
                                    <a href="compare.html" className="action compare" title="Compare"><MdCropRotate></MdCropRotate></a>
                                </div>
                                <button title="Add To Cart" className=" add-to-cart">Add
                                    To Cart</button>
                            </div>
                            <div className="content">
                                <span className="ratings">
                                    <span className="rating-wrap">
                                        <span className="star" >
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                        </span>
                                    </span>
                                    <span className="rating-num">( 4 Review )</span>
                                </span>
                                <h5 className="title"><a href="single-product.html">Ardene Microfiber
                                    Tights</a>
                                </h5>
                                <span className="price">
                                    <span className="new">$38.50</span>
                                    <span className="old">$48.50</span>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

                        <div className="product">
                            <div className="thumb">
                                <a href="single-product.html" className="image">
                                    <img src={product7} alt="Product" />
                                    <img className="hover-image" src={product8} alt="Product" />
                                </a>
                                <span className="badges">
                                    <span className="sale">-10%</span>
                                    <span className="new">New</span>
                                </span>
                                <div className="actions">
                                    <a href="wishlist.html" className="action wishlist" title="Wishlist"><CiHeart></CiHeart></a>

                                    <a href="compare.html" className="action compare" title="Compare"><MdOutlineViewInAr></MdOutlineViewInAr></a>
                                    <a href="compare.html" className="action compare" title="Compare"><MdCropRotate></MdCropRotate></a>
                                </div>
                                <button title="Add To Cart" className=" add-to-cart">Add
                                    To Cart</button>
                            </div>
                            <div className="content">
                                <span className="ratings">
                                    <span className="rating-wrap">
                                        <span className="star" >
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                            <AiTwotoneStar></AiTwotoneStar>
                                        </span>
                                    </span>
                                    <span className="rating-num">( 4 Review )</span>
                                </span>
                                <h5 className="title"><a href="single-product.html">Ardene Microfiber
                                    Tights</a>
                                </h5>
                                <span className="price">
                                    <span className="new">$38.50</span>
                                    <span className="old">$48.50</span>
                                </span>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default AllProduct;