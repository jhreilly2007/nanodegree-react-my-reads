import React from 'react'
import App from '../App.js'
import Book from './Book'
import * as BooksAPI from '../api/BooksAPI'
import {Link} from 'react-router-dom'

class Search extends React.Component {

  handleChange(e) {
    this.props.shelfChanger(this.props.book, e.target.value);   
  }

  state = { searchResults: [], searchString: ""}

  updateSearchString = (searchString) => {
    this.setState({
            searchString: searchString
        })
    this.search(searchString)
  }

  search = (searchString) => {
    BooksAPI.getAll().then((searchResults) => {
      this.setState({ 
        searchResults: searchResults, 
        searchString: searchString 
      })
    })
  }

  render(){
    return ( 
      <div className="search-books">  
        <div className="search-books-bar">
          <div className="close-search">
            <Link to="/">
              <button className="close-search" type="button">
                Close
              </button>
            </Link>
          </div>
          <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
            <input type="text" 
              placeholder="Search by title or author"
              value = {this.state.searchString}
              onChange={(e)=>this.updateSearchString(e.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
                {
                  this.state.searchResults
                  .map(
                    book => (
                      <li key = {book.id}>
                        <Book
                          book = {book}
                          shelf = {book.shelf}
                          shelfChanger = {this.props.shelfChanger}
                        />
                      </li>
                    ))
                }
                </ol>
        </div>
      </div>
      )
  }
}
export default Search;