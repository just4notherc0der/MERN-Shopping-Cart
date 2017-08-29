import React, { Component } from 'react';

import BookList from '../containers/booklist';
import BookForm from '../containers/bookform';

export default class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-4'>
            <BookForm />
          </div>
          <div className='col-md-8'>
            <BookList />
          </div>
        </div>
      </div>
    );
  }
}
