import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <div className='four-oh-four-page'>
            <Link to='/'><button>Home</button></Link>
            </div>
        </div>
    )
};

export default PageNotFound;