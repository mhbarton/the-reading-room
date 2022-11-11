import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchData } from "./APIcall";
import './App.css';
import Books from "./Components/Books/Books";
import SingleBook from './Components/SingleBook/SingleBook';
import Nav from "./Components/Nav/Nav";
import Search from "./Components/Search/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      booksData: [],
      searchedBook: ""
    };
  }

  componentDidMount = async () => {
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
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path= '/' render={() => (
            <div>
              <Search searchBook={this.searchBook} />
              <Books books={this.state.booksData} searchedBook={this.state.searchedBook}
              />
            </div>
            )} 
           />
          <Route path='/:id' render={({ match }) => <SingleBook bookId={match.params.id} /> } />
        </Switch>
      </div>
    )
  }
}

export default App;
