import { SET_CATEGORY } from '../actions/appActions';
import { SET_PRODUCT } from '../actions/appActions';

export default function appReducer(state = {}, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, selectedCategory: action.payload, activePage: 'category' }
    case SET_PRODUCT:
      return { ...state, selectedProductID: action.payload, activePage: 'product' }
    default:
      return state;
  }
}

// activePage
// selectedProductID
