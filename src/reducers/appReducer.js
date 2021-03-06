import { SET_CATEGORY } from '../actions/appActions';
import { SET_PRODUCT } from '../actions/appActions';
import { NAVIGATE_HOME } from '../actions/appActions';
import { SET_SEARCH } from '../actions/appActions';

export default function appReducer(state = { activePage: 'home', searchValue: ''}, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, selectedCategory: action.payload, activePage: 'category' }
    case SET_PRODUCT:
      return { ...state, selectedProductID: action.payload, activePage: 'product' }
    case NAVIGATE_HOME:
      return { ...state, activePage: 'home' }
    case SET_SEARCH:
      return { ...state, searchValue: action.payload }
    default:
      return state;
  }
}
