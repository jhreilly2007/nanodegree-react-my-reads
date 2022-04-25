import React from 'react'
import Book from '../components/Book'
import { Link } from 'react-router-dom'

class BookShelf extends React.Component {

  render() { 
    /**keep track of my 3 bookshelves*/
    var currentlyReading = this.props.library.filter(book => book.shelf === 'currentlyReading');
    var wantToRead = this.props.library.filter(book => book.shelf === 'wantToRead');
    var read = this.props.library.filter(book => book.shelf === 'read'); 

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-bookscurren">
                <ol className="books-grid">
                {
                  currentlyReading
                  .map(
                    book => (
                      <li key = {book.id}>
                        <Book
                          book = {book}
                          shelf = {book.shelf}
                          library = {this.props.library}
                        />
                      </li>
                    ))
                }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  wantToRead
                  .map(
                    book => (
                      <li key = {book.id}>
                        <Book
                          book = {book}
                          shelf = {book.shelf}
                          library = {this.props.library}                        />
                      </li>
                    ))
                }
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {
                  read
                  .map(
                    book => (
                      <li key = {book.id}>
                        <Book
                          book = {book}
                          shelf = {book.shelf}
                          library = {this.props.library}
                        />
                      </li>
                    ))
                }
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        <div className="open-search">
          <Link to="/search">
            <button type="button">
              Add a book
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
export default BookShelf