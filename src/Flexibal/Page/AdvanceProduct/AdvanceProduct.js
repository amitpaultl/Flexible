import React from 'react';
import { CiHeart } from "react-icons/ci";
import { MdOutlineViewInAr, MdCropRotate } from "react-icons/md";
import { AiTwotoneStar } from "react-icons/ai";
import { BsFillGrid3X3GapFill, BsListUl, BsSearch, IconName } from "react-icons/bs";
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
import './AdvanceProduct.css'

const AdvanceProduct = () => {
    return (
        <div>
            <div className="container">
                <SectionTitle title={'Our Products'} ></SectionTitle>

                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="shop-sidebar-wrap">
                            <div className="sidebar-widget-search">
                                <form id="widgets-searchbox" action="#">
                                    <input className="input-field" type="text" placeholder="Search" />
                                    <button className="widgets-searchbox-btn" type="submit">
                                        <BsSearch></BsSearch>
                                    </button>
                                </form>
                            </div>

                            <div className="sidebar-widget">
                                <h4 className="sidebar-title">Category</h4>
                                <div className="sidebar-widget-category">
                                    <ul>
                                        <li><a href="#" className="">Accesasories <span>(6)</span> </a></li>
                                        <li><a href="#" className="">Computer <span>(4)</span> </a></li>
                                        <li><a href="#" className="">Covid-19 <span>(2)</span> </a></li>
                                        <li><a href="#" className="">Electronics <span>(6)</span> </a></li>
                                        <li><a href="#" className="">Frame Sunglasses <span>(12)</span> </a></li>
                                        <li><a href="#" className="">Furniture <span>(7)</span> </a></li>
                                        <li><a href="#" className="">Genuine Leather <span>(9)</span> </a></li>
                                    </ul>
                                </div>
                            </div>
                           
                            <div className="sidebar-widget">
                                <h4 className="sidebar-title">Size</h4>
                                <div className="sidebar-widget-list size">
                                    <ul>
                                        <li><a className="active-2 gray" href="#">S</a></li>
                                        <li><a className="gray" href="#">M</a></li>
                                        <li><a className="gray" href="#">L</a></li>
                                        <li><a className="gray" href="#">X</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget tag">
                                <h4 className="sidebar-title">Price Level</h4>
                                <div className="shop-select">
                                    <select className="shop-sort">
                                        <option data-display="Relevance">Relevance</option>
                                        <option value="1"> Low to high</option>
                                        <option value="2"> High to low</option>
                                    </select>

                                </div>
                            </div>
                            <div className="sidebar-widget-image">
                                <div className="single-banner">
                                    <div className="item-disc">
                                        <h2 className="title">Bestsellers</h2>
                                        <a href="single-product-variable.html" className="shop-link">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="shop-top-bar ">
                                    <p><span>12</span> Product Found of <span>30</span></p>
                                    <div className="shop-tab nav" role="tablist">
                                        <a className="active" href="#shop-grid">
                                            <BsFillGrid3X3GapFill></BsFillGrid3X3GapFill>
                                        </a>
                                        <a href="#shop-list" >
                                            <BsListUl></BsListUl>
                                        </a>
                                    </div>
                                    <div className="select-shoing-wrap d-flex align-items-center">
                                        <div className="shot-product">
                                            <p>Sort By:</p>
                                        </div>
                                        <div className="shop-select">
                                            <select className="shop-sort">
                                                <option data-display="Relevance">Relevance</option>
                                                <option value="1"> Name, A to Z</option>
                                                <option value="2"> Name, Z to A</option>
                                                <option value="3"> Price, low to high</option>
                                                <option value="4"> Price, high to low</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

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
                            <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

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
                            <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

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
                            <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

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
                            <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

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
                            <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

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
                            <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

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
                            <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="400">

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


            </div>
        </div>
    );
};

export default AdvanceProduct;