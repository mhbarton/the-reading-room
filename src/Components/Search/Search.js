import React, { Component } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import bookshelf from '../../Images/bookshelf.jpeg';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state= {
            searchedBooks: [],
            board: null
        };
    }

    render() {
        return(
            <div className='search-btn-container'>
                <img className='bookshelf-img' src={bookshelf} alt='books by search' />
                <button onClick={() => { this.props.searchBook('board') }} > Board</button>
                <button onClick={() => { this.props.searchBook('picture') }} > Picture</button>
                <Link to={'/'} onClick={() => { this.props.searchBook("") }}>
                    <button>Clear</button>
                </Link>
                <img className='bookshelf-img' src={bookshelf} alt='books by search' />
            </div>
        )
    }
}

export default Search;

Search.propTypes = {
    searchBook: PropTypes.func,
}