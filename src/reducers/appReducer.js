import { SET_CATEGORY } from '../actions/appActions';

export default function appReducer(state = {}, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return { ...state, selectedCategoryName: action.payload }
    default:
      return state;
  }
}

// activePage
// selectedProductID
