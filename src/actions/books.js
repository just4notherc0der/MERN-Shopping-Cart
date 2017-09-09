import axios from 'axios';

export const GET_BOOKS = 'GET_BOOKS';
export const POST_BOOK = 'POST_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const GET_BOOKS_REJECTED = 'GET_BOOKS_REJECTED';
export const POST_BOOK_REJECTED = 'POST_BOOK_REJECTED';
export const DELETE_BOOK_REJECTED = 'DELETE_BOOK_REJECTED';

export function getBooks() {
    return function(dispatch) {
      axios.get('/api/books')
        .then(function(res) {
          console.log('GETTING BOOKSS!');
          console.log(res.data);
          dispatch({
            type: GET_BOOKS,
            payload: res.data
          });
        })
        .catch(function(err) {
          dispatch({
            type: GET_BOOKS_REJECTED,
            payload: err
          });
        })
    }
}

export function postBook(book) {
    return function(dispatch) {
      axios.post('/api/books', book)
        .then(function(res) {
          dispatch({ type: POST_BOOK, payload: res.data });
        })
        .catch(function(err) {
          dispatch({
            type: POST_BOOK_REJECTED,
            payload: 'There was an error while posting the book'
          });
        });
    }
}

export function updateBook(book) {
    return {
      type: UPDATE_BOOK,
      payload: book
    }
}

export function deleteBook(id) {
    return function(dispatch) {
      axios.delete('/api/books/'+id)
        .then(function(res) {
          dispatch({
            type: DELETE_BOOK,
            payload: id
          })
        })
        .catch(function(err) {
          dispatch({
            type: DELETE_BOOK_REJECTED,
            payload: err
          })
        })
    }
}
