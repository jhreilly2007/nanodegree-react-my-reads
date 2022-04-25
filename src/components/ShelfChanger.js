import React from 'react'
import * as BooksAPI from '../api/BooksAPI'

class ShelfChanger extends React.Component {
  /**Shelf state of the shelf contained to shelfchanging component*/
  state = {
    shelf: this.props.shelf
  }

  shelfChanger = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((library) => {
      this.setState({ library: library })
    })
  }

  /**Handle bookshelf changes*/
  handleChange = e => {
    this.setState({ shelf: e.target.value})
    this.shelfChanger(this.props.book, e.target.value);  
  }

  render() {
    return(
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={this.state.shelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
      )
  }
}

export default ShelfChanger