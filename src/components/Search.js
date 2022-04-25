import React from 'react'
import Book from './Book'
import * as BooksAPI from '../api/BooksAPI'
import {Link} from 'react-router-dom'

class Search extends React.Component {
  /**search state is only needed in this component*/
  state = { searchResults: [], searchString: "", currentShelf: "none"}

  /**if statement to avoid app crashing when calling map() 
   * if no results returned*/
  handleSearch = e => { 
    if (e.target.value.length > 0){
      BooksAPI.search(e.target.value).then((searchResults) => {
        this.setState({ 
          searchResults: searchResults
        })
      })
    }else{
      this.setState({searchResults: []}) 
    }
    this.setState ({ searchString: e.target.value});
  }

  render(){
    //var updateShelf = "none"//needs to be moved to map function
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
              onChange={this.handleSearch}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            this.state.searchResults.length ?
            (this.state.searchResults.map (book => {
              /**searched books have no shelf details
               * assume shelf none to start*/
              var updateShelf = 'none'
              
              /**Check if books returned in search are part
               * of our app library, if so update the shelf to 
               * same else set to none*/
              this.props.library.forEach(libraryBook => {
                (libraryBook.id === book.id) ?
                  updateShelf = libraryBook.shelf :
                /** this causes a maximum update depth error*/
                  //this.setState({currentShelf:libraryBook.shelf}):
                  book.shelf = "none"
              })
              return(
                <li key = {book.id}>
                  <Book
                    book = {book}
                    shelf = {updateShelf}
                    library = {this.props.library}
                  />
                </li>
                )
            })):
            (<div>
              <h1>No results Found: {this.state.searchString}</h1>
            </div>)
          }
          </ol>
        </div>
      </div>
      )
  }
}

export default Search