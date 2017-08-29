import React, { Component } from 'react';

import BookList from './pages/booklist';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BookList />
      </div>
    );
  }
}
