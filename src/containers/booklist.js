import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from '../actions/books';

class BookList extends Component {
  componentDidMound() {
    this.props.getBooks();
  }

  render() {
    const bookList = this.props.books.map((book) => {
      return (
        <div key={ book.id } className='book'>
          <h2>{ book.title }</h2>
          <p>{ book.description }</p>
          <p>{ book.price }$</p>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getBooks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
