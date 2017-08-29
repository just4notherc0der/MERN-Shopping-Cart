import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  render() {
    const bookList = this.props.books.map((book) => {
      return (
        <div key={ book.id } class='book'>
          <h2>{ book.title }</h2>
        </div>
      );
    })

    return (
      <div>{ bookList }</div>
    )
  }
}

function mapStateToProps(state) {
  return { books: state.books.books }
}

export default connect(mapStateToProps)(BookList);
