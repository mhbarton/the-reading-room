import React, { Component } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';


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
                <button onClick={() => { this.props.searchBook('board') }} > Board</button>
                <button onClick={() => { this.props.searchBook('picture') }} > Picture</button>
                <Link to={'/'} onClick={() => { this.props.searchBook("") }}>
                    <button>Clear</button>
                </Link>
            </div>
        )
    }
}

export default Search;