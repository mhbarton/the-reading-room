import React from "react";
import "./Books.css";
import Card from "../Card/Card";

const Books = ({ books, searchedBook }) => {
    let bookCards;
    if (searchedBook !== "") {
        bookCards = books.filter((book) => book.type.toLowerCase().includes(searchedBook)
        );
    } else {
        bookCards = books;
    };

    const bookData = bookCards.map((book) => {
        return (
            <Card 
                img={book.image}
                title={book.title}
                author={book.author}
                type={book.type}
                id={book.id}
                key={book.id}
            />
        )
    })
    return <div className="books-container">{bookData}</div>
}

export default Books;