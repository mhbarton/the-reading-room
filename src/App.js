import React, { Component } from "react";
import { fetchData } from "./APIcall";
import './App.css';
import Books from "./Components/Books/Books";
import SingleBook from './Components/SingleBook/SingleBook';
// import Nav from "./Components/Nav/Nav";
import { Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      booksData: [],
      searchedBook: ""
    }
  }

  componentDidMount = async () => {
    console.log('hi')
    this.setState({ loading: true });
    try {
      const bookList = await fetchData();
      this.setState({ booksData: bookList, loading: false }); 
    } catch {
      this.setState({ 
        error: "Sorry, no books are available."
      });
    }
  };

  searchBook = (input) => {
    this.setState({ searchedBook: input });
  };

  render() {
    console.log('try', this.state.booksData)
    return (
      <div>
        <Route exact path= '/' render={() => <Books books={this.state.booksData} />} />
        <Route path='/:id' render={({ match }) => <SingleBook bookId={match.params.id} /> } />
      </div>
    )
  }

}

export default App;
