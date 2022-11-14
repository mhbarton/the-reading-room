import React from 'react';
import { Link } from 'react-router-dom';
import Card from "../Card/Card";
import './Favorites.css';
import bookshelf from '../../Images/bookshelf.jpeg';
import openBook from '../../Images/open-book.png';
import PropTypes from 'prop-types';


const Favorites = ({ favBook, addFavoriteBook }) => {
    let favChoices;
    let noFavChoices
    if (!favBook.length) {
        noFavChoices = <h1 className="no-favorite"> You don't have any favorites yet!</h1>;
    } else {
        favChoices = favBook.map((book) => {
            return (
                <Card
                image={book.image}
                title={book.title}
                author={book.author}
                type={book.genre}
                id={book.id}
                key={book.id}
                addFavorite={addFavoriteBook}
            />
            )
        })
    }
    return (
        <div>
            <div className='favorites-header-container'>
                <img className='bookshelf-img' src={bookshelf} alt='books by search' />
                <h1 className='favorites-title'>Favorites</h1>
                <Link to={'/'}>
                    <button className='books-home-btn'><img src={openBook} className='book-icon' alt='open book' />Go Home</button>
                </Link>
            </div>
            <div className='favorites-container'>
                <div className='fav-container'>{favChoices}</div>
                <div>{noFavChoices}</div>
            </div>
        </div>
    );
};

export default Favorites;


Favorites.propTypes = {
    favBook: PropTypes.array,
    addFavoriteBook: PropTypes.func,

}
