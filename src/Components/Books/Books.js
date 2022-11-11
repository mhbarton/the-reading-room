import React from "react";
import "./Books.css";
import Card from "../Card/Card";

const Books = ({ books, searchedBook }) => {
    console.log(books)
    let bookCards;
    if (!searchedBook) {
        bookCards = books.filter((book) => console.log('book', book)
        // book.genre.toLowerCase().includes(searchedBook)
        );
    } else {
        bookCards = books;
    };
    console.log('1', bookCards)

    const bookData = books.map((book) => {
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