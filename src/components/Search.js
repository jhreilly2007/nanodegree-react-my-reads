import React from 'react'
import Book from './Book'
import * as BooksAPI from '../api/BooksAPI'
import {Link} from 'react-router-dom'

class Search extends React.Component {

  state = { searchResults: [], searchString: ""}

  handleChange = e => {
    this.setState ({ searchString: e.target.value}); 
    console.log(this.state.searchString.length)
    if (this.state.searchString.length > 0){
      BooksAPI.search(this.state.searchString).then((searchResults) => {
        this.setState({ 
          searchResults: searchResults
        })
      })
    }else
      this.setState({searchResults: []}) 
  }

  render(){
    var defaultShelf = 'none'
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
              onChange={this.handleChange}
              />
          </div>
        </div>
        <div className="search-books-results">
                <ol className="books-grid">
                {
                  this.state.searchResults.length ? 
                      this.state.searchResults
                      .map(
                        book => (
                          <li key = {book.id}>
                            <Book
                              book = {book}
                              shelf = {book.shelf === undefined ? defaultShelf : book.shelf}
                              library = {this.props.library}
                            />
                          </li>
                        )) : 
                      <div><h1>No results Found:  {this.state.searchString}</h1></div>
                }
                </ol>
        </div>
      </div>
      )
  }
}
export default Search;