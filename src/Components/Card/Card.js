import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ image, title, author, type, id }) => {
    return (
        <Link to={`/${id}`} className= 'card' aria-label={title}>
            <div className='cover-image-container'>
                <img className='image' src={image} alt={`image of ${title}`} />
            </div>
            <div className='card-details'>
                <h1 className='card-title'>{title}</h1>
                <h2 className='card-author'>{author}</h2>
                <h3 className='card-type'>{type}</h3>
            </div>
        </Link>
    )
}

export default Card;