import { POST_BOOK, DELETE_BOOK, UPDATE_BOOK } from '../actions/index';

function booksReducer(state={ books: [] }, action) {
  switch(action.type) {
    case POST_BOOK:
      return { books: [...state.books, ...action.payload] };
      break;
    case DELETE_BOOK:
      // create a copy of current array of books
      const currentBookToDelete = [...state.books];
      // determine the index of the book that is going to be deleted
      const deleteIndex = currentBookToDelete.findIndex(
        function(book) {
          return book.id === action.payload.id;
        }
      );
      // use slice to remove the book
      return {
        books: [
          ...currentBookToDelete.slice(0, deleteIndex),
          ...currentBookToDelete.slice(deleteIndex + 1)
        ]
      };
      break;
    case UPDATE_BOOK:
      // create a copy of current array of books
      const currentBookToUpdate = [...state.books];
      // determine the index of the book that is going to be deleted
      const updateIndex = currentBookToDelete.findIndex(
        function(book) {
          return book.id === action.payload.id;
        }
      );
      // create a new book object with the new values and with the same array
      // index of the item we want to replace. Use spread or concat
      const newBookToUpdate = {
        ...currentBookToUpdate[updateIndex],
        title: action.payload.title
      }
      // use slice to remove book at the specified index, replace with the new
      // object and concatenate with the rest of items in the array
      return {
        books: [
          ...currentBookToUpdate.slice(0, updateIndex),
          newBookToUpdate,
          ...currentBookToUpdate.slice(updateIndex + 1)
        ]
      };
      break;
    default:
      return state
  }
}

export default booksReducer;
