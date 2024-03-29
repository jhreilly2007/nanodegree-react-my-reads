import React from 'react'
import ShelfChanger from './ShelfChanger.js'

class Book extends React.Component {
  
  render() {
    /**deal books with out a thumbnail as per spec*/
    var thumbnail = (this.props.book.imageLinks) ? this.props.book.imageLinks.thumbnail : '';
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={
            { width: 128, 
              height: 193, 
              backgroundImage: `url("${thumbnail}")` 
            }
          }>
          </div>
          <ShelfChanger
              library = {this.props.library}
              book = {this.props.book}
              shelf = {this.props.shelf}
          ></ShelfChanger>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
      )
  }
}
export default Book