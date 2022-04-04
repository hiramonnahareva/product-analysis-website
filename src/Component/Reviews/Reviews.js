import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReviews ()
    return (
        <div>
            <h2>Read Reviews</h2>
            <div>
            <div className="review-container">
                
                <div className="reviews">
                {
                     reviews.map (review => <Review key = {review.id} review = {review}></Review>)
                 }
                </div>
         </div>
            </div>

        </div>
    );
};

export default Reviews;