import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import siteName from '../../Images/siteName.png';
import groupBooks from '../../Images/book.png';

const Nav = () => {
    return (
       <div className='nav-container'>
        <img className='site-design' src={groupBooks} alt='book design' />
        <img className='site-title' src={siteName} alt='app name and design' />
        <img className='site-design' src={groupBooks} alt='book design' />
        <Link to={'/favorites'}> 
            <button className='all-favorites-btn'>View Favorites</button>
        </Link> 
       </div> 
    )
}

export default Nav;