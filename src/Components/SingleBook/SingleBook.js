import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../APIcall';
import './SingleBook.css';
import openBook from '../../Images/open-book.png';
import heart from '../../Images/heart.png';
import PropTypes from 'prop-types';


class SingleBook extends Component {
    constructor(props) {
        super(props);
        this.state={
            book: null,
            error: '',
        }
    }

    componentDidMount = async () => {
        try { 
        const bookList = await fetchData();
         const bookMatch = await bookList.find(book => book.id === Number(this.props.bookId));
         this.setState({ book: bookMatch, loading: false });
        } catch {
            this.setState({ error: 'Sorry, no books available.'})
        }
    }

    searchBook = (input) => {
        this.setState({ searchedBook: input });
      };

    render() { 
        const book = this.state.book;

        const dividePublications = (book) => {
            if (book.others.length > 0) {
              return book.others
              .slice(0, book.others.length)
              .join(", ")
            } else {
              return "New Author; No Other Publications"
            }
          }

        return(
            this.state.book && <div className='overall-container'>
                <div className='book-details-container'>
                    <img src={book.image} className='single-book-image hidden' alt={`image of ${book.title}`} />
                    <div className='book-content-container'>
                        <h2 className='title'> {book.title}</h2>
                        <h3 className='author'>{`By: ${book.author}`}</h3>
                        <h4 className="book-details">{`For Ages: ${book.age_range}`}</h4>
                        <h4 className="book-details">{`Genre: ${book.genre}`}</h4>
                        <h4 className="book-details">{`Review: ${book.review}`}</h4>
                        <h4 className="book-details">{`Other Publications: ${dividePublications(book)}`}</h4>
                        <div className='single-btn-choices'>
                             <button className='favorites-btn' onClick={() => this.props.addFavoriteBook(book.id)}><img src={heart} className='favorite-icon' alt='heart to favorite' />Add to Favorites!</button>
                            <Link to={'/'}>
                                <button className='books-home-btn'><img src={openBook} className='book-icon' alt='open book' />Go Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default SingleBook;

SingleBook.propTypes = {
    addFavoriteBook: PropTypes.func,
}