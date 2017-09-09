import { GET_BOOKS, POST_BOOK, UPDATE_BOOK, DELETE_BOOK, GET_BOOKS_REJECTED, POST_BOOK_REJECTED, DELETE_BOOK_REJECTED } from '../actions/books';


function booksReducer(state={ books: [] }, action) {
  switch(action.type) {
    case GET_BOOKS:
      return { ...state, books: [...action.payload] };
      break;
    case POST_BOOK:
      console.log(action.payload);
      return { books: [...state.books, action.payload] };
      break;
    case POST_BOOK_REJECTED:
      return action.payload;
    case UPDATE_BOOK:
      const currentBookToUpdate = [...state.books];
      const updateIndex = currentBookToDelete.findIndex(
        function(book) {
          return book._id === action.payload._id;
        }
      );
      const newBookToUpdate = {
        ...currentBookToUpdate[updateIndex],
        title: action.payload.title
      };
      return {
        books: [
          ...currentBookToUpdate.slice(0, updateIndex),
          newBookToUpdate,
          ...currentBookToUpdate.slice(updateIndex + 1)
        ]
      };
      break;
    case DELETE_BOOK:
      const currentBookToDelete = [...state.books];
      const deleteIndex = currentBookToDelete.findIndex(
        function(book) {
          return book._id === action.payload._id;
        }
      );
      return {
        books: [
          ...currentBookToDelete.slice(0, deleteIndex),
          ...currentBookToDelete.slice(deleteIndex + 1)
        ]
      };
      break;
    default:
      return state
  }
}

export default booksReducer;
