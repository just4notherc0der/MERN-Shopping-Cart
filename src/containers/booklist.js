import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../actions/books';
import Book from '../components/book';

class BookList extends Component {
  componentDidMound() {
    this.props.getBooks();
  }

  render() {
    const bookList = this.props.books.map((book) => {
      return (
        <Book key={ book.id } book={ book } />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBooks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
