import React from 'react'
import {Route, Routes} from "react-router-dom";
import './stylesheets/App.css'
import * as BooksAPI from './api/BooksAPI.js'
import BookShelf from "./components/BookShelf";
import Book from "./components/Book";
import Search from "./components/Search";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    /**Using an array to keep track of all books in the library. The state 
     * should be managed by App.js as it it used throughout the application.
     * This way state can be passed down from parent to child nodes
     * 
     * Removed the 'showSearchPage' flag: using react navigation to keep
     * track of pages*/
     library: [],
  }

  /**get most recent library and set state as soon as the component is 
   * mounted ensuing correct state*/
  componentDidMount() {
    BooksAPI.getAll().then((library) => {
      this.setState({ library: library })
    })
  }

  /** using Route component to render UI when path
   * matches the current URL '/search' or '/'*/
  render() {  
    return (
      <div className="app">
      {console.log(this.state.library)}
      <Routes>
        <Route path="/" 
          element={
            <BookShelf 
              library = {this.state.library}
            />
          }
        />

        <Route path="/search"
          element={
            <Search 
              library = {this.state.library}
            />
          }
        />
      </Routes>
      </div>
      )
  }
}


export default BooksApp