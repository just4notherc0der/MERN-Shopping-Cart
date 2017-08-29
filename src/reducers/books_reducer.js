import { GET_BOOKS, POST_BOOK, UPDATE_BOOK, DELETE_BOOK } from '../actions/books';

let books = [
  {
    id: 1,
    title: 'Book One',
    description: 'Description of book one',
    price: 99.99
  },
  {
    id: 2,
    title: 'Book Two',
    description: 'Description of book two',
    price: 55.99
  }
]

function booksReducer(state={ books }, action) {
  switch(action.type) {
    case GET_BOOKS:
      return { books: [...state.books, ...action.payload] };
      break;
    case POST_BOOK:
      return { books: [...state.books, ...action.payload] };
      break;
    case UPDATE_BOOK:
      const currentBookToUpdate = [...state.books];
      const updateIndex = currentBookToDelete.findIndex(
        function(book) {
          return book.id === action.payload.id;
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
          return book.id === action.payload.id;
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
