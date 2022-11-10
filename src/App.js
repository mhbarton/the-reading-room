import React, { Component } from "react";
import { fetchData } from "./APIcall";
import './App.css';
import Books from "./Components/Books/Books";
import Nav from "./Components/Nav/Nav";
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
    this.setState({ loading: true });
    try {
      const bookList = await fetchData();
      const data = await bookList.json();
      this.setState({ booksData: data, loading: false }); 
    } catch {
      this.setState({ 
        error: "Sorry, no books are available."
      });
    }
  };

  searchPath = (input) => {
    this.setState({ searchedBook: input });
  };

  render() {
    return (
      <div>
        <Nav />
        <Route exact path= "/" render={() => <Books books={this.state.booksData} />} />
      </div>
    )
  }

}

export default App;
