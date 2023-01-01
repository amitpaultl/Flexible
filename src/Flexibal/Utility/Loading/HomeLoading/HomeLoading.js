import React from 'react';
import HomeLoad from '../../../Componte/Assarts/Image/Homeloading.gif'
import '../Loading.css'
const HomeLoading = () => {
    return (
        <div className='loading-home'>
            <img src={HomeLoad} alt="" />
        </div>
    );
};

export default HomeLoading;