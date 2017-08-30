export const GET_BOOKS = 'GET_BOOKS';
export const POST_BOOK = 'POST_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

export function getBooks() {
    return {
      type: GET_BOOKS
    }
}

export function postBook(book) {
    return {
      type: POST_BOOK,
      payload: book
    }
}

export function updateBook(book) {
    return {
      type: UPDATE_BOOK,
      payload: book
    }
}

export function deleteBook(id) {
    return {
      type: DELETE_BOOK,
      payload:id
    }
}
