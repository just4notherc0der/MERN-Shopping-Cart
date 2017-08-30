import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../actions/cart'

class Book extends Component {
  constructor(props) {
    super(props);
    this.book = this.props.book;
  }

  addMeToCart() {
    const book = [
      ...this.props.cart,
      {
        _id: this.book._id,
        title: this.book.title,
        description: this.book.description,
        price: this.book.price
      }
    ];
    this.props.addToCart(book);
  }

  render() {
    return (
      <div className='book'>
        <h2>{ this.book.title }</h2>
        <p>{ this.book.description }</p>
        <p>{ this.book.price }$</p>
        <button onClick={ this.addMeToCart.bind(this) }>Add</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { cart: state.cart.cart }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);
