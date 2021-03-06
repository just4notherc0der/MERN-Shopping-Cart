import React, { Component } from 'react';

import Navbar from './navbar';
import BookList from '../containers/booklist';
import BookForm from '../containers/bookform';
import Cart from '../containers/cart';

export default class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Navbar />
        <div className='row'>
          <div className='col-md-4'>
            <BookForm />
            <Cart />
          </div>
          <div className='col-md-8'>
            <BookList />
          </div>
        </div>
      </div>
    );
  }
}
