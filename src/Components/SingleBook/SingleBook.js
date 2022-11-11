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
        // const dividePublications = (book) => {
        //     if (book.others.length > 0) {
        //       return book.others
        //       .slice(0, book.others.length)
        //       .join(", ")
        //     } else {
        //       return "New Author; No Other Publications"
        //     }
        //   }
        return(
            <div className='book-details-container'>
                <img src={book.image} className='single-book-image' alt={`image of ${book.title}`} />
                <div className='book-content-container'>
                    <Link to={'/'}>
                        <button className='books-home-btn'>X Close</button>
                    </Link>
                    <h2 className='title'> {book.title}</h2>
                    <h3 className='author'>{`By: ${book.author}`}</h3>
                    <h4 className="book-details">{`For Ages: ${book.age_range}`}</h4>
                    <h4 className="book-details">{`Genre: ${book.genre}`}</h4>
                    <h4 className="book-details">{`Review: ${book.review}`}</h4>
                    <h4 className="book-details">{`Other Publications: ${book.others}`}</h4>
                </div>
            </div>
        );
    }
};

export default SingleBook;