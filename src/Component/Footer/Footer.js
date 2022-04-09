import React from 'react';
import {BsFacebook , BsTwitter , BsInstagram , BsTelephoneFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Footer.css' ;
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-info">
            <div>
                <h1 className='title'> CatFoodDB </h1>
                <h3>Home|About|Blogs|Contact</h3>
                <span>&copy; 2022 CatFoodDB</span>
            </div>
            <div className='contact'>
                <h4><BsFacebook/> https://www.facebook.com</h4>
                <h4><BsTelephoneFill/> +01799882200</h4>
                <h4><BsInstagram/> https://www.instagram.com</h4>
                <h4><BsTwitter/> https://www.twitter.com</h4>
            </div>
            <div>
               <h3> About The Company</h3>
               <p>Infinity Group are one of  the leading IT Support Companies<br/> in the UK. Award Winning IT Support Company in the UK. </p>
            </div>
            </div>
            <hr />
            <div className='icon'>
            <span ><a href='https://www.facebook.com'><BsFacebook/></a></span> <span><a href='/'><BsTelephoneFill/></a> </span> <span><a href='https://www.instagram.com'>  <BsInstagram/></a> </span> <span><a href='https://www.twitter.com'> <BsTwitter/></a></span>
            </div>
        </div>
    );
};

export default Footer;