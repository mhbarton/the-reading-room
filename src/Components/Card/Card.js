import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ image, title, author, id }) => {
    return (
        <Link to={`/${id}`} className= 'card' aria-label={title}>
            <div className='cover-image-container'>
                <img className='image' src={image} alt={`image of ${title}`} />
            </div>
            <div className='card-details'>
                <h1 className='card-title'>{title}</h1>
                <h2 className='card-author'>By: {author}</h2>
            </div>
        </Link>
    )
}

export default Card;

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};