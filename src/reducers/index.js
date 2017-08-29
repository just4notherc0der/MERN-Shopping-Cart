import { combineReducers } from 'redux';
import booksReducer from './books_reducer';
import cartReducer from './cart_reducer';

const reducers = combineReducers({
  books: booksReducer,
  cart: cartReducer
});

export default reducers;
