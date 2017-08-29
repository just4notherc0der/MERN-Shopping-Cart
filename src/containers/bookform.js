import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postBook } from '../actions/books';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const book = {
      id: this.refs.id.value,
      title: this.refs.title.value,
      description: this.refs.description.value,
      price: this.refs.price.value
    };
    this.props.postBook(book);
  }

  render() {
    return(
      <form className='add-book-form' onSubmit={ this.onSubmit }>
        <input
          type='text'
          placeholder='ID'
          ref='id'/>
        <input
          type='text'
          placeholder='Title'
          ref='title'/>
        <input
          type='text'
          placeholder='Description'
          ref='description'/>
        <input
          type='text'
          placeholder='Price'
          ref='price'/>
        <button type='submit'>Add</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    postBook
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(BookForm);
