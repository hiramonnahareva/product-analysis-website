import React from 'react';
import './Home.css' ;
import image1 from '../../images/img_hd_features_00we.webp'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="info">
            <h1>Read & Write Reviews</h1>
            <p>Find out what customers are saying about the companies you love.</p>
            </div>
            <img src={image1} alt="" />
        </div>
    );
};

export default Home;