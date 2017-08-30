import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';

function cartReducer(state={ cart: [] }, action) {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        cart: [...state, ...action.payload]
      };
      break;
    case REMOVE_FROM_CART:
      return {
        cart: [...state, ...action.payload]
      };
      break;
    default:
      return state;
  }
}

export default cartReducer;
