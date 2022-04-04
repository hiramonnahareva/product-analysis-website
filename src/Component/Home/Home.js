import React from 'react';
import './Home.css' ;
import image1 from '../../images/pexels-zhang-kaiyv.jpg'
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate () ;
    const showAllReviews = () => {      
        navigate ('/reviews')
    }
    return (
        <div className='home-container'>
            <div className="section-one">
            <div className="info">
            <h1>Cat Food Review</h1>
            <p>Find out what customers are saying about the companies you love.</p>
            </div>
            <img src={image1} alt="" />
            </div>
            <div className="section-two">
            <h1>Read & Write Reviews</h1>
            <div className="review-container">
                
                   <div className="reviews">
                   {
                        reviews.slice(0 , 3).map (review => <Review key = {review.id} review = {review}></Review>)
                    }
                   </div>
                    <button onClick={showAllReviews} className='see-all-btn'>See All</button>
            </div>
            </div>
        </div>
    );
};

export default Home;