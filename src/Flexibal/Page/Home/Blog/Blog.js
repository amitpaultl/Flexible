import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../Componte/SectionTitle/SectionTitle';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog-area'>
            <div className="container">
                <SectionTitle title={'Lester News'} ditties={'Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore'}></SectionTitle>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <div className="single-news">
                            <img src="https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Farticles%2F3.jpg%3Fv%3D1631613070&w=1920&q=75" alt="" />
                            <div className="blog-text">
                                <h3>Spatialize with that the furns</h3>
                                <div className="flex blog-author">
                                    <p>By <Link>Raju HT</Link></p>
                                    <p>14 September, 2021</p>
                                </div>
                                <p className='blog'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ducimus iusto iste accusantium veritatis corporis repellat, nulla iure aliquid nihil deserunt ex voluptate optio, eos minus! Quia perferendis dolorem reprehenderit!</p>
                                <Link className='btu-read'>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 ">
                        <div className="single-news">
                            <img src="https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Farticles%2F3.jpg%3Fv%3D1631613070&w=1920&q=75" alt="" />
                            <div className="blog-text">
                                <h3>Spatialize with that the furns</h3>
                                <div className="flex blog-author">
                                    <p>By <Link>Raju HT</Link></p>
                                    <p>14 September, 2021</p>
                                </div>
                                <p className='blog'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ducimus iusto iste accusantium veritatis corporis repellat, nulla iure aliquid nihil deserunt ex voluptate optio, eos minus! Quia perferendis dolorem reprehenderit!</p>
                                <Link className='btu-read'>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="single-news">
                            <img src="https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0597%2F8970%2F5392%2Farticles%2F3.jpg%3Fv%3D1631613070&w=1920&q=75" alt="" />
                            <div className="blog-text">
                                <h3>Spatialize with that the furns</h3>
                                <div className="flex blog-author">
                                    <p>By <Link>Raju HT</Link></p>
                                    <p>14 September, 2021</p>
                                </div>
                                <p className='blog'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ducimus iusto iste accusantium veritatis corporis repellat, nulla iure aliquid nihil deserunt ex voluptate optio, eos minus! Quia perferendis dolorem reprehenderit!</p>
                                <Link className='btu-read'>Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;