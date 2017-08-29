import React from 'react';

const Book = (props) => {
  return (
    <div className='book'>
      <h2>{ props.book.title }</h2>
      <p>{ props.book.description }</p>
      <p>{ props.book.price }$</p>
    </div>
  )
}

export default Book;
