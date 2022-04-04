import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name , review , img , rating} = props.review ;
    console.log ()
    return (
        <div className='review'>
            <img src= {img} alt="" />
            <h2>{name}</h2>
            <h4>Rating: <span>{rating}</span></h4>
            <p>{review.length > 200 ? review.slice(0 , 150) + '....' :  review}</p>
        </div>
    );
};

export default Review;