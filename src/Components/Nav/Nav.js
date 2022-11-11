import React from 'react';
import './Nav.css';
import siteName from '../../Images/siteName.png';

const Nav = () => {
    return (
       <div className='nav-container'>
        <img className='site-title' src={siteName} alt='app name and design' />
       </div> 
    )
}

export default Nav;