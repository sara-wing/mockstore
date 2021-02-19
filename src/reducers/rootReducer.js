import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import appReducer from './appReducer';

// export default combineReducers({ 
//   products: productsReducer
// });

const rootReducer = combineReducers({
  products: productsReducer
});

export default rootReducer
