import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css' ;
import { FaBars } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='header-container'>
           <nav>
           <CustomLink to={'/home'}>HOME</CustomLink>
            <CustomLink to={'/reviews'}>REVIEWS</CustomLink>
            <CustomLink to={'/dashbord'}>DASHBORD</CustomLink>
            <CustomLink to={'/blogs'}>BLOGS</CustomLink>
            <CustomLink to={'/about'}>ABOUT</CustomLink>
           </nav>
        </div>
    );
};

export default Header;