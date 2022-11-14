import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchData } from "./APIcall";
import './App.css';
import Books from "./Components/Books/Books";
import SingleBook from './Components/SingleBook/SingleBook';
import Nav from "./Components/Nav/Nav";
import Search from "./Components/Search/Search";
import Favorites from './Components/Favorites/Favorites';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import loadingBook from '../src/Images/loading_book.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      booksData: [],
      searchedBook: "",
      favBook: [],
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

  addFavoriteBook = (id) => {
    const findFavorites = this.state.booksData.find((book) => book.id === id);
    this.setState({ favBook: [...this.state.favBook, findFavorites] });
  };

  render() {
    return (
      <div className='main'>
        <Nav />
        <div className='loader-container'>
          {this.state.loading && <img src={loadingBook} className='loader' alt='opening book' />} 
        </div>
        {!this.state.booksData.length && (
          <h2 className="error-message">{this.state.error}</h2>
        )}

        <Switch>
          <Route exact path= '/' render={() => (
            <div>
              <h1 className='welcome-message-one'> Learning to love to read starts at an early age and often starts at home.</h1>
              <h1 className='welcome-message-two'>As you visit our site, we hope you are able to find some selelctions which help to nurture your child's love of reading.</h1>
              <Search searchBook={this.searchBook} />
              <Books books={this.state.booksData} searchedBook={this.state.searchedBook}
              />
            </div>
            )} 
           />
          <Route exact path='/favorites' render={() => (<Favorites favBook={this.state.favBook} addFavoriteBook={this.addFavoriteBook} deleteFavoriteBook={this.deleteFavoriteBook}/> )} />
          <Route path='/:id' render={({ match }) => (<SingleBook bookId={match.params.id} addFavoriteBook={this.addFavoriteBook} /> )} />
          <Route path='*' component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
