import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeFromCart } from '../actions/cart';

class Cart extends Component {
  onDelete(_id) {
    const currentCart = this.props.cart;
    const index = currentCart.findIndex((cart) => {
      return cart._id === _id;
    });
    let newCart = [
      ...currentCart.slice(0, index),
      ...currentCart.slice(index + 1)
    ];
    this.props.removeFromCart(newCart);
  }

  renderCart() {
    const cartItems = this.props.cart.map((item) => {
      return (
        <div className='cart-item' key={ item._id }>
          <h4>{ item.title }</h4>
          <span>{ item.price } $</span>
          <button onClick={ () => this.onDelete(item._id) }>remove</button>
          <hr />
        </div>
      )
    });

    return (
      <div className='cart'>
        <h2>Cart</h2><hr />
        { cartItems }
      </div>
    )
  }

  renderEmpty() {
    return(<div></div>);
  }

  render() {
    if(this.props.cart.length !== 0) {
      return this.renderCart();
    } else {
      return this.renderEmpty();
    }
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    removeFromCart
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
