import React from "react";
import "./Books.css";
import Card from "../Card/Card";
import PropTypes from 'prop-types';

const Books = ({ books, searchedBook }) => {
    let bookCards;
    if (searchedBook !== "") {
        bookCards = books.filter((book) => book.genre.toLowerCase().includes(searchedBook)
        );
    } else {
        bookCards = books;
    };

    const bookData = bookCards.map((book) => {
        return (
            <Card 
                image={book.image}
                title={book.title}
                author={book.author}
                type={book.genre}
                id={book.id}
                key={book.id}
            />
        )
    })
    return <div className="books-container">{bookData}</div>
}

export default Books;

Card.propTypes = {
    books: PropTypes.array,
    searchedBook: PropTypes.array,
};