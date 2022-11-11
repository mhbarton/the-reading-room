import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchData } from '../../APIcall';
import './SingleBook.css';

class SingleBook extends Component {
    constructor() {
        super();
        this.state={
            book: {}
        }
    }

    componentDidMount = async () => {
        try { const bookList = await fetchData();
         const data = await bookList.json();
         const bookMatch = await data.find(book => book.id === Number(this.props.bookId));
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
        return(
            <div className='book-details-container'>
                <img src={book.image} className='single-book-image' alt={`image of ${book.title}`} />
                <Link to={'/'}>
                    <button className='books-home-btn'>X Close</button>
                </Link>
                <div className='book-content-contianer'>
                    <h2 className='title'>{book.title}</h2>
                    <h3 className='author'>{book.author}</h3>
                    <h4 className="book-details">{book.age_range}</h4>
                    <h4 className="book-details">{book.genre}</h4>
                    <h4 className="book-details">{book.review}</h4>
                    <h4 className="book-details">{book.others}</h4>
                </div>
            </div>
        );
    }
};

export default SingleBook;