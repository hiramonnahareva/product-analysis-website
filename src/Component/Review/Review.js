import React from 'react';
import './Review.css' ;
import {BsStarFill , BsStarHalf} from 'react-icons/bs';

const Review = (props) => {
    const {name , review , img , rating} = props.review ;
    return (
        <div className='review'>
            <img src= {img} alt="" />
            <h2>{name}</h2>
            <h4 className='rating'>Rating: <span><BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/></span></h4>
            <p>{review.length > 200 ? review.slice(0 , 150) + '....' :  review}</p>
        </div>
    );
};

export default Review;